import { useEffect } from "react";
import Footer from "../footer";
import Header from "../header";

const PageWrapper = ({ children, className, title }) => {
  return (
    <div className={className}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};
export default PageWrapper;
