import Button from "./Button";
import Img from "./Img";

const About = (props:any) => {
  return (
    <div
      className="
    flex
    lg:flex-row
    md:flex-row
    flex-col
    justify-between
    items-start
    px-5
    gap-3
    my-10
    "
    >
      <div
        className="
        flex
        flex-col
        items-start
        mt-auto
        mb-auto
        w-full
        lg:w-1/2
        md:w-1/2
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            gap-6
            "
        >
          <h1
            className="
            lg:text-6xl
            md:text-3xl
            text-3xl
            font-bold
          "
          >
            {props.title}
          </h1>

          <p
            className="
            lg:text-xl
            md:text-xl
            text-sm
            "
          >
            {props.text}
          </p>

          <Button text={props.btntext} link={props.btnlink} target =  {props.target} />
        </div>
      </div>

      <div
        className="
      lg:w-1/2
      md:w-1/2
      w-full
      h-fit"
      >
       <Img alt="About Image" src={props.pic}/>
      </div>
    </div>
  );
};

export default About;
