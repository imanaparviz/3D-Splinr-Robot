import { SimpleSplineScene } from "@/components/simple-spline-scene";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <SimpleSplineScene />
      <Footer />
    </main>
  );
}