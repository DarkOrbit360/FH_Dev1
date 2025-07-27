import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <>
      <h1 className="m-10 text-8xl text-blue-300 font-bold">
        This is ReactJS + TailwindCSS + ShadCN  <span className="text-6xl text-blue-500">Template App</span>
      </h1>
      <div className="m-10 text-4xl text-gray-400">
        <p>Ready with all installed and setup for Vite ReactJS</p>
        <p className="font-bold">Input and button installed</p>
      </div>

      <div className="flex gap-4 m-10">
        <h2 className="mr-12 text-4xl text-gray-800 font-bold">
          Happy CODING ...
        </h2>
        <Input type="text" placeholder="Sample Input" className="w-1/2" />
        <Button variant='secondary'>
          Sample Button
        </Button>
      </div>
    </>
  );
};

export default App;
