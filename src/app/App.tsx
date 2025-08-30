import { PricingCard } from '../entities/PricingCard';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { Hero } from '../widgets/Hero';

import './App.css';

const plans = [
  { id: "1", price: "1999₽", description: "До 1 млн долгов" },
  { id: "2", price: "2999₽", description: "До 3 млн долгов" },
  { id: "3", price: "3999₽", description: "Свыше 3 млн" },
];

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex-1 px-[20px] lg:px-0">
          <Hero/>
          <PricingCard
            title="ПРОЗРАЧНОЕ ЦЕНООБРАЗОВАНИЕ"
            plans={plans}
            ctaLabel="ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН"
            onCtaClick={() => console.log("cta clicked")}
          />;
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
