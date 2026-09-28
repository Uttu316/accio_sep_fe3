import { useState } from "react";
import SaleBanner from "./saleBanner";

const Controller = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>This is controller</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Banner
      </button>
      {show && <SaleBanner />}
    </div>
  );
};

export default Controller;
