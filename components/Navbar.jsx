import SubmitForm from "./Forms/Submit";
import NavigateInput from "./NavigateInput";
import OpenModal from "./OpenModal";

export default function Navbar(props){

  return(
    <nav className="flex flex-row gap-3 items-center justify-between dark:bg-stone-500">
      <NavigateInput />
      <OpenModal 
        buttonStyle="" 
        buttonName="Submit"
      >
        <SubmitForm />
      </OpenModal>
      <button>
        <img
          src={props.imgUsr}
          className="w-16 py-2 rounded-full"
        />
      </button>
    </nav>
  )
}
