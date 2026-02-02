import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";

interface PageLayoutProps {
  children: ReactNode;
  showMobileCTA?: boolean;
}

const PageLayout = ({ children, showMobileCTA = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      {showMobileCTA && <MobileCTA />}
    </div>
  );
};

export default PageLayout;
