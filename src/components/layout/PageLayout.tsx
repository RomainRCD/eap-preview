import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";

interface PageLayoutProps {
  children: ReactNode;
  showMobileCTA?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const PageLayout = ({ 
  children, 
  showMobileCTA = true,
  hideHeader = false,
  hideFooter = false,
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
      {showMobileCTA && <MobileCTA />}
    </div>
  );
};

export default PageLayout;
