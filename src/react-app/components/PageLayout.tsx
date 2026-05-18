import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type PageLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
};

const PageLayout = ({ children, mainClassName = "flex-grow" }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
