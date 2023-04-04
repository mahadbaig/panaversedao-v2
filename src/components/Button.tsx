import Link from "next/link";

const Button = (props:any) => {
    const text:string = props.text;
    const link:string = props.link;
    const target = props.target

  return (
    <button className="
    flex
    flex-row
    justify-center

    px-4
    py-2

    lg:px-8
    lg:py-4
    md:px-8
    md:py-4

    bg-red-600
    text-white
    rounded-3xl
    ">
       <Link
       href={link}
       target={target}
       >
        {text}
       </Link> 
    </button>
  )
}

export default Button