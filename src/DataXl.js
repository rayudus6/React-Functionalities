import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExcelTableViewer() {
  const [fileData, setFileData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [editedRowData, setEditedRowData] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileData(file);
    setTableData(null); // Reset tableData when a new file is uploaded
  };

  const handleFileSubmit = () => {
    if (fileData) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        setTableData(excelData);
      };

      reader.readAsBinaryString(fileData);
    } else {
      console.log("Please upload an Excel file.");
    }
  };

  const handleEdit = (index) => {
    setEditRowIndex(index);
    setEditedRowData(tableData[index]);
  };

  const handleSave = (index) => {
    const updatedData = [...tableData];
    updatedData[index] = editedRowData;
    setTableData(updatedData);
    setEditRowIndex(-1);
  };

  const handleCancel = () => {
    setEditRowIndex(-1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRowData({ ...editedRowData, [name]: value });
  };

  const handleExportTable = () => {
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    const buffer = new ArrayBuffer(wbout.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < wbout.length; i++) {
      view[i] = wbout.charCodeAt(i) & 0xff;
    }
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "exported_data.xlsx");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileSubmit}>Submit</button>
      {tableData && (
        <div>
          <button onClick={handleExportTable}>Export Table</button>
          <table>
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  {Object.keys(row).map((key) => (
                    <td key={key}>
                      {editRowIndex === index ? (
                        <input
                          type="text"
                          name={key}
                          value={editedRowData[key]}
                          onChange={handleInputChange}
                        />
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                  <td>
                    {editRowIndex === index ? (
                      <>
                        <button onClick={() => handleSave(index)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ExcelTableViewer;
