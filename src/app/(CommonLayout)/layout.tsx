import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen container">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
