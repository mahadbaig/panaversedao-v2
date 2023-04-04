import Core from "./Core";

const Specialization = (props: any) => {

  return (
    <div
      className="
    flex
    flex-col
    items-start
    gap-2
    w-full
    my-2
    "
    >
      <div
        className="
      py-5
      "
      >
        <p
          className="
        text-xl
        mb-2
        "
        >
          {props.spno}
        </p>

        <h1
          className="
        lg:text-5xl
        md:text-5xl
        text-3xl
        "
        >
          {props.sptitle}
        </h1>
      </div>

      <div
        className="
      flex
      flex-col
      lg:flex-row
      md:flex-row
      justify-between
      items-start
      w-full
      my-3
      "
      >
        <Core
          qno="Quarter 4"
          qdesc={props.qdesc}
          pt1={props.pt1}
          pt2={props.pt2}
          pt3={props.pt3}
          pt4={props.pt4}
          border = "border-red-600"
          width="w-2/5"
        />

        <Core
          qno="Quarter 5"
          qdesc={props.q2desc}
          pt1={props.q2pt1}
          pt2={props.q2pt2}
          pt3={props.q2pt3}
          pt4={props.q2pt4}
          border = "border-red-600"
          width="w-2/5"
        />
      </div>
    </div>
  );
};

export default Specialization;
