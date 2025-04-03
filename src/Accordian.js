import React, { useState } from "react";

const accordianData = [
  {
    id: 1,
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
    toggle: false,
  },
  {
    id: 2,
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    toggle: false,
  },
  {
    id: 3,
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
    toggle: false,
  },
];

const Accordian = (props) => {
  const [accData, setAccData] = useState(accordianData);
  const handleChange = (id) => {
    const result = accData.map((item) => {
      if (item.id === id) {
        item.toggle = !item.toggle;
      }
      return item;
    });
    // console.log(result);
    setAccData(result);
  };
  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      {accData.map((data, index) => {
        return (
          <div className="accordion" key={index}>
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => {
                  handleChange(data.id);
                }}
              >
                <div>{data.title}</div>
                <div>{data.toggle ? "-" : "+"}</div>
              </div>
              {data.toggle && (
                <div className="accordion-content">{data.content}</div>
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Accordian;
