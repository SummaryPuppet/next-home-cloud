import SubmitForm from "./Forms/Submit";
import NavigateInput from "./NavigateInput";
import OpenModal from "./OpenModal";

export default function Navbar({imgUsr, openDashboard}){
  return(
    <nav className="flex sm:flex-col xl:flex-row gap-3 items-center justify-between dark:bg-stone-500">
      <NavigateInput />
      <OpenModal 
        buttonStyle="" 
        buttonName="Submit"
      >
        <SubmitForm />
      </OpenModal>
      <button onClick={openDashboard}>
        <img
          src={imgUsr}
          className="w-16 py-2 rounded-full"
        />
      </button>
    </nav>
  )
}
