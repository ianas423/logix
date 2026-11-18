import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ImageRevealSection from "@/components/home/ImageRevealSection";
import ParallaxSection from "@/components/home/ParallaxSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Full Screen Text Animation */}
        <HeroSection />

        {/* Trusted By Marquee */}
        <TrustedBySection />

        {/* 2. Image Reveal Animation */}
        <ImageRevealSection />

        {/* 3. 3D Parallax Scrolling */}
        <ParallaxSection />

        {/* 4. Product Showcase */}
        <ProductShowcase />

        {/* Call To Action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
