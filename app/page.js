import Image from "next/image";
import ViewArticles from "./components/ViewArticles/ViewArticles";

export default function Home() {
  return (
    <>
      <div className="bg-white p-6">
        <ViewArticles isLandingPage={true} />
      </div>
    </>
  );
}
