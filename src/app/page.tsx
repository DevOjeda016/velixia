import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-500 font-sans">Hello World</h1>
      <Button variant="custom" >Click me</Button>
    </div>
  )
}

export default Home;
