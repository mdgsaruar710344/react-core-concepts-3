import Brother from "./Brother";
import Myself from "./Myself";


const Dad = () => {
  return (
    <div >
      Dad:
      <div className="context">
        <Myself></Myself>
        <Brother></Brother>
      </div>
    </div>
  );
};

export default Dad;