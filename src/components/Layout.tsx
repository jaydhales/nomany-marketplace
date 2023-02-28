import Header from "./Header";
import Footer from "./Footer";
import CategoryNav from "./CategoryNav";
import { FC } from "react";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className=" min-h-screen">
      <Header />
      <CategoryNav />
      <div className="p-5 min-h-[calc(100vh-460px)] screen">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
