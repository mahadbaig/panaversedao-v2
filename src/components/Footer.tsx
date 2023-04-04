import Link from "next/link"

const Footer = () => {
  return (
    <div className="
    flex
    flex-row
    justify-between
    items-center
    p-2
    gap-3
    px-5
    lg:h-40
    md:h-40
    h-20
    ">
        <Link
        href={"https://www.linkedin.com/"}
        target="_blank"
        className="
        text-xs
        lg:text-xl
        md:text-xl
        "
        >
            Linkedin
        </Link>

        <Link
        href={"https://www.instagram.com/"}
        target="_blank"
        className="
        text-xs
        lg:text-xl
        md:text-xl
        "
        >
            Instagram
        </Link>

        <Link
        href={"https://www.twitter.com/"}
        target="_blank"
        className="
        text-xs
        lg:text-xl
        md:text-xl
        "
        >
            Twitter
        </Link>

        <Link
        href={"https://www.facebook.com/"}
        target="_blank"
        className="
        text-xs
        lg:text-xl
        md:text-xl
        "
        >
            Facebook
        </Link>

    </div>
  )
}

export default Footer