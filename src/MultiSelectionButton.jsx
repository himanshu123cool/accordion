import React from 'react'

const MultiSelectionButton = ({buttonHandle, multiSelectionText}) => {
  return (
    <>
      <button className='bg-transparent border w-54 mx-auto text-white px-4 py-3 font-medium mb-5 text-xl' onClick={buttonHandle}>{multiSelectionText}</button>
    </>
  )
}

export default MultiSelectionButton
