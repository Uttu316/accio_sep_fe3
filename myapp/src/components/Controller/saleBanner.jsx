import { useEffect, useState } from "react";

const SaleBanner = () => {
  const [discount, setDiscount] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Timer runing");
      setTime((curr) => curr + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    //setup function
    console.log("Sale Banner Mounted");
    return () => {
      //cleanup function
      console.log("Sale banner unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Discount changed");
    return () => {
      console.log("Discount last value removed");
    };
  }, [discount]);

  return (
    <div>
      <h2>Sale is Live</h2>
      <button onClick={() => setDiscount(discount + 5)}>{discount}%off</button>
      <p>It is live since {time}sec</p>
    </div>
  );
};
export default SaleBanner;
