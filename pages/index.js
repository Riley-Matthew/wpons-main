import Image from "next/image";
import Layout from "./layout";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "./home";
  }, []);

  return (
    <div>
      <h1 className="text-red-800 text-3xl font-bold">Pons</h1>
    </div>
  );
}
