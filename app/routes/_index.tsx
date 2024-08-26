import type { MetaFunction } from "@remix-run/node";
import Check from "./PetHomePage";
import Footer from "./footer";  
import Menu from "./menu";
import about from "./about"


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
 
  return (
    
    <div>
    <Check />
    <Footer/>
    <Menu/>
    <img src="https://image.dogilike.com/shareimg/contentimg/2012/meaw/Training1/10.jpg" alt="รูปน้องสุข" className="mx-auto mb-4 w-32 h-32 rounded-full" />
    <img src="https://th.bing.com/th/id/OIP.9w-Y_VjmXy0IejhatyL2vwHaEK?rs=1&pid=ImgDetMain" alt="รูปน้องสุข" className="float-left mb-4 w-32 h-32 rounded-full" />
    <img src="https://th.bing.com/th/id/R.048bb013ff770564f7a28f1591946f2e?rik=GGc74Fhxd4swDw&pid=ImgRaw&r=0" alt="รูปน้องสุข" className="float-right mb-4 w-32 h-32 rounded-full" />
   </div>
     
  );
}
