import React from "react";

const AccordionItem = ({
  data,
  onHandleClick,
  showData,
  multiSelectionHandle,
  enableMultiSelection,
  multiple
}) => {
  return (
    <>
      <div>
        <div
          className="flex justify-between p-3 bg-transparent text-white cursor-pointer border-b-2 border-white"
          onClick={
            enableMultiSelection
              ? () => multiSelectionHandle(data.id)
              : () => onHandleClick(data.id)
          }
        >
          <h4 className="text-2xl font-medium py-2">{data.title}</h4>
          <span className="text-2xl">+</span>
        </div>
          {
            enableMultiSelection? multiple.indexOf(data.id)!== -1 && (
                <p className={`p-3 text-white py-5`}>{data.description} </p>
            )
        : showData===data.id && (
            <p className={`p-3 text-white py-5`}>{data.description} </p>
        )
          }
      </div>
    </>
  );
};

export default AccordionItem;
