import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import PracticalInfo from '@/components/PracticalInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Features />
      <Gallery />
      <About />
      <PracticalInfo />
      <Footer />
    </main>
  );
}