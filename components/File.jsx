import Link from "next/link";


export default function File(props){
  
  return (
    <div>
      <Link href="/" className="py-2 px-4 text-lg rounded">
        <a className="py-2 px-4 text-lg rounded">
          {props.name}
        </a>
      </Link>
    </div>
  )
}
