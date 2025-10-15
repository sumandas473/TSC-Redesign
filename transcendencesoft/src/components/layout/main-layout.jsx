"use client";
import { NavbarDemo } from "@/components/ui/navbar-demo";
import { Footer } from "./footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Fixed Navbar with Demo */}
      <NavbarDemo/>

      {/* Main Content Area - Auto renders children with top padding for fixed navbar */}
      <main className="flex-1 pt-20 overflow-x-hidden">
        {children}
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};
