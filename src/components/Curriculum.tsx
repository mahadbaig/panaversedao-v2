import Core from "./Core";
import Specialization from "./Specialization";

const Curriculum = () => {
  return (
    <div id="curriculum"
      className="
    flex
    flex-col
    items-start
    px-5
    gap-4
    w-full
    my-5
    "
    >
      <div
        className="
        gap-1.5
        lg:mb-10
        md:mb-10
        "
      >
        <h1
          className="
            lg:text-6xl
            md:text-4xl
            text-3xl
            font-bold
            lg:w-5/6
            "
        >
          State Of The Art Curriculum Designed By The Best In Business
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
        gap-2
        w-full
        "
      >
        <div
          className="
            py-6
            w-full
            lg:w-1/5
            md:w-1/5
            lg:h-80
            md:h-80
            mb-5
            "
        >
          <h1
            className="
                font-thin
                text-4xl
                text-red-600
                "
          >
            Core <br /> Courses
          </h1>
          <p className="py-2">
            These courses are mandatory for every student. <br />
            <br /> The goal is to help students develop planet-scale Web2.0
            applications.
          </p>
        </div>

        <Core
          qno="Quarter 1"
          qdesc="OOP with Typescript"
          pt1="Web3 & metaverse theory"
          pt2="Fundamentals of Typescript"
          pt3="OOP with Typescript"
          pt4="Typescript for React"
          border="border-red-400"
          width="w-1/5"
        />

        <Core
          qno="Quarter 2"
          qdesc="Jamstack"
          pt1="Fundamentals of Next.JS 13"
          pt2="Tailwind CSS and Chakra UI"
          pt3="UI/UX with Figma"
          pt4="Introduction to APIs"
          pt5="GrpahQL API development"
          border="border-red-400"
          width="w-1/5"
        />

        <Core
          qno="Quarter 3"
          qdesc="Dollar Bootcamp"
          pt1="Next.JS 13 template development"
          pt2="API development"
          border="border-red-400"
          width="w-1/5"
        />
      </div>

      <Specialization
        spno="Specialization 1"
        sptitle="Web3 & Metaverse"
        qdesc="Smart Contracts & dApps"
        pt1="Blockchain & metaverse theory"
        pt2="Smart contracts in Solidity"
        pt3="dApps with Ether.JS"
        pt4="Understanding tokenomics"
        q2desc="Metaverse Development"
        q2pt1="Open metaverse development"
        q2pt2="Blender for asset creation"
        q2pt3="Deploying the metaverse"
      />

      <Specialization
        spno="Specialization 2"
        sptitle="AI & Deep Learning"
        qdesc="Intelligent APIs"
        pt1="Python crash course"
        pt2="Machine learning, data science and AI"
        pt3="Using OpenAI's API"
        q2desc="Deep Learining and MLOps"
        q2pt1="Deep learning with Tensorflow"
        q2pt2="MLOps using Terraform for CDK"
      />

      <Specialization
        spno="Specialization 3"
        sptitle="Cloud Native Computing"
        qdesc="Introduction to Kubernetes"
        pt1="Intro to Kubernetes"
        pt2="CDK for Kubernetes"
        q2desc="Developing Multi-cloud Apps"
        q2pt1="Advance Kubernetes concepts"
        q2pt2="CDK for Terraform"
      />

      <Specialization
        spno="Specialization 4"
        sptitle="Ambient Computing & IOT"
        qdesc="Ambient Computing"
        pt1="Alexa skill development"
        pt2="Alexa matter protocol"
        q2desc="Embedded Programming"
        q2pt1="Intro to IOT & embedded systems"
        q2pt2="C programming fundamentals"
        q2pt3="Embedded programming with Rust"
      />

      <Specialization
        spno="Specialization 5"
        sptitle="Genomics & Bioinformatics"
        qdesc="Python Programming"
        q2desc="Bioinformatics with Python"
      />

      <Specialization
        spno="Specialization 6"
        sptitle="Network Programmability & Automation"
        qdesc="CCNA 200-301"
        q2desc="Network Programmability"
      />

    </div>
  );
};

export default Curriculum;
