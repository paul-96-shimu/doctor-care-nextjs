// import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import dbConnect from "@/lib/dbConnect";

export default async function Home() {
  const serviceCollection = await dbConnect("services")
  const data =  serviceCollection.find({}).toArray();

  return (
    <ServicesSection data={data}></ServicesSection>



  );
}
