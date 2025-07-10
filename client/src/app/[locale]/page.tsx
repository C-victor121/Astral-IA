import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import Help from '@/components/landing/Help';
import Readings from '@/components/landing/Readings';
import Membership from '@/components/landing/Membership';
import Signs from '@/components/landing/Signs';
import Testimonials from '@/components/landing/Testimonials';
import Subscribe from '@/components/landing/Subscribe';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Help />

        <Readings />
         <Membership />
         <Signs />
         <Testimonials />
         <Subscribe />
      </main>
    </div>
  );
}