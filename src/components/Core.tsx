
const Core = (props:any) => {
  return (
    <div className={`
    lg:h-80
    md:h-80
    lg:${props.width}
    md:${props.width}
    w-full
    border-l-2
    ${props.border}
    px-5
    py-4
    gap-3
    mb-2
    `}>
      <div
      >
        <h1 className="
        lg:text-4xl
        md:text-4xl
        text-3xl
        font-medium
        ">
          {props.qno}
        </h1>

        <p className="
        lg:text-2xl
        md:text-2xl
        text-xl
        ">
          {props.qdesc}
        </p>

      </div>

      <div className="
      p-2
      mt-5
      ">
        <ol className="
        list-none
        pl-7
        ">
          <li className="py-1">
            {props.pt1}
          </li>
          <li className="py-1">
            {props.pt2}
          </li>
          <li className="py-1">
            {props.pt3}
          </li>
          <li className="py-1">
            {props.pt4}
          </li>
          <li className="py-1">
            {props.pt5}
          </li>
        </ol>

      </div>

    </div>
  )
}

export default Core