import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NextJS boilerplate",
};

export default function ExemploPageHome() {
  return (
    <div className="p-3">
      <h1 className="font-bold uppercase">Exemple Home Page</h1>
      <p className="text-sm">
        This is the home page of the application. You can navigate to other
        pages using the links in the navigation bar.
      </p>
    </div>
  );
}
