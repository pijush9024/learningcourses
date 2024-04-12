import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;

  let category = props.category;

  let setCategory = props.setCategory;


  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div>
      <div className= "w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-ceneter">
        {
          filterData.map((data) => {
           return <button 
            className= {`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-capacity-50 border-2 tarnsition-all duration-300
           ${category === data.title ? 
            "bg-opacity-60 border-white" : 
            "bg-opacity-40 border-transparent"}
          `} 
           key={data.id} onClick={() =>filterHandler(data.title)}>
          {data.title}
        </button>
          })            
  
        }
      </div>
    </div>
  )
}

export default Filter
