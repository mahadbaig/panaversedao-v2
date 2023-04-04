import Image from "next/image";


const Img = (props:any) => {
  return (
    <div>
      <Image
        className="
        rounded-img
        "
        src={props.src}
        alt={props.alt}
        
      />
    </div>
  );
};

export default Img;
