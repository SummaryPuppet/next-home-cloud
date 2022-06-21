import {useState} from "react"


const OpenModal = (props)=>{
  const [open, setOpen] = useState(false)

  const handleClick = ()=>{
    if (!open){
      setOpen(true)
    } else {
      setOpen(false)
    }

  }

  return (
    <div>
      <button
        className={props.buttonStyle}
        onClick={handleClick} 
      >
        {props.buttonName}
      </button>
      <dialog 
        className="fixed top-5 mb-4 pt-14 pb-8 px-15 bg-gray-100 border-2 rounded-md dark:bg-stone-400" 
        id="modal"
        open={open}
      >
        <button 
          className="absolute top-2 right-2 px-4 py-2 text-white bg-red-500 rounded-md" 
          onClick={handleClick}
        >
          X
        </button>
        {props.children}
      </dialog>
    </div>
  )
}

export default OpenModal
