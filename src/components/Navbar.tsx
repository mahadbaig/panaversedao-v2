import Link from "next/link"

const Navbar = () => {
  return (
    <div
    className="
    text-xl
    font-bold
    flex
    justify-center
    p-5
    w-full
    fixed
    mb-10
    backdrop-blur-xl
    "
    >
        <Link
        href={"/"}
        >
            PANAVERSE
        </Link>
    </div>
  )
}

export default Navbar