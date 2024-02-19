import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { mydata } from "./data";
import AccorfionHeading from "./AccorfionHeading";
import MultiSelectionButton from "./MultiSelectionButton";


function App() {

  const [showData, setshowData] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelectionText, setMultiSelectionText] = useState('Enable MultiSelection');
  const [multiple, setMultiple] = useState([]);

    const onHandleClick = (selectedItem)=>{
        setshowData(selectedItem===showData ? null : selectedItem);
    }

    const buttonHandle = ()=>{
        setEnableMultiSelection(!enableMultiSelection);
        multiSelectionText==='Enable MultiSelection' ? setMultiSelectionText('Disable MultiSelection') : setMultiSelectionText('Enable MultiSelection')
    }

  const multiSelectionHandle = (selectedItem)=>{
      let cpyMultiple = [...multiple];
      const findIndexofSelectedItem = cpyMultiple.indexOf(selectedItem);
      if(findIndexofSelectedItem===-1){
        cpyMultiple.push(selectedItem);
      }
      else{
        cpyMultiple.splice(findIndexofSelectedItem, 1);
      }

      setMultiple(cpyMultiple)
      console.log(multiple);
  }

  return (
    <>

      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="flex justify-center flex-col w-4/5">
          <AccorfionHeading/>
          <MultiSelectionButton buttonHandle={buttonHandle} multiSelectionText={multiSelectionText}/>
          {mydata.map((item)=>{
            return (
              <AccordionItem data={item} key={item.id} onHandleClick={onHandleClick} showData={showData} multiSelectionHandle={multiSelectionHandle} enableMultiSelection={enableMultiSelection} multiple={multiple}/>
            )
          })}
          
        </div>
      </div>
    </>
  );
}

export default App;
