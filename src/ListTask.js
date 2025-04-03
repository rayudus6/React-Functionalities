import { useState } from "react";

const ListTask = (props) => {
  const list = ["Apple", "Banana", "Mango"];

  const [data, setData] = useState(list);
  const [check, setCheck] = useState([]);

  const handleDelete = (itemIndex) => {
    const filteredArray = data.filter((item, i) => {
      return i !== itemIndex;
    });
    setData(filteredArray);
  };
  const handleCheckBox = (e) => {
    let updateList = [...check];
    if (e.target.checked) {
      updateList = [...check, e.target.value];
    } else {
      updateList.splice(check.indexOf(e.target.value), 1);
    }
    setCheck(updateList);
  };

  return (
    <ul>
      {data.map((item, i) => {
        return (
          <li key={i}>
            <input type="checkbox" value={item} onChange={handleCheckBox} />
            {item}
            {check.includes(item) && (
              <button
                onClick={() => {
                  handleDelete(i);
                }}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ListTask;
