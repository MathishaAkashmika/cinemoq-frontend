import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Navbar from "../components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gradient-to-b from-purple-800 via-black to-black text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
