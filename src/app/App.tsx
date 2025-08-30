import { PricingCard } from '../entities/PricingCard';
import { CalculatorAndDetails } from '../widgets/CalculatorNDetail';
import { ExpertBlock } from '../widgets/ExpertBlock';
import { Faq } from '../widgets/Faq';
import { LikeMedicine } from '../widgets/LikeMedicine';
import { OurTreatment } from '../widgets/OurTreatment';
import { Statictic } from '../widgets/Statictic';
import { DebtWarningBlock } from '../widgets/WarningBlock';
import { WorkSteps } from '../widgets/WorkSteps';
import {
  featuresAnalyze,
  featuresAnalyzeMobile,
  featuresCompare,
  featuresCompareMobile,
  featuresComplexMobile,
  featuresResult,
  featuresWhyNot,
  featuresWhyNotMobile,
} from '../shared/mocks/featuresData';
import BiographyArkadi from '../widgets/BiographyArkadi';

import FeaturesSection from '../widgets/FeaturesSection';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { Hero } from '../widgets/Hero';
import IncludedInDiagnostics from '../widgets/IncludedInDiagnostics';
import SolvedCases from '../widgets/SolvedCases';
import { featuresSolvedCases } from '../widgets/SolvedCases/SolvedCasesData';
import './App.css';

const plans = [
  { id: "1", price: "1999₽", description: "До 1 млн долгов" },
  { id: "2", price: "2999₽", description: "До 3 млн долгов" },
  { id: "3", price: "3999₽", description: "Свыше 3 млн" },
];

const plans2 = [
  { id: "1", price: "1999₽", description: "Если сумма долгов до 1 млн ₽" },
  { id: "2", price: "2999₽", description: "Если сумма долгов до 3 млн ₽" },
  { id: "3", price: "3999₽", description: "Если сумма долгов свыше 3 млн ₽" },
];

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex-1 px-[20px] lg:px-0">       
          <Hero/>
          <div className="bg-[#FAFAFA]">
            {/* desktop */}
            <FeaturesSection
              className="hidden lg:flex"
              title="Что анализируем?"
              card={featuresAnalyze}
            />
          </div>
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="Что получаете?"
            card={featuresResult}
          />
          <PricingCard
            title="ПРОЗРАЧНОЕ ЦЕНООБРАЗОВАНИЕ"
            titleM="ПРОЗРАЧНЫЕ ЦЕНЫ:"
            plans={plans}
            ctaLabel="ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН"

            onCtaClick={() => console.log("cta clicked")}
          />;
          <LikeMedicine/>
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="ПОЧЕМУ ДРУГИЕ РЕШЕНИЯ НЕ РАБОТАЮТ?"
            card={featuresWhyNot}
          />
          <OurTreatment/>
          {/* desktop */}
          {/* <FeaturesSection
            className="hidden lg:flex"
            title="СРАВНИТЕ С АЛЬТЕРНАТИВАМИ:"
            card={featuresCompare}
          /> */}

          {/* mobile  КОМПЛЕКСНОЕ РЕШЕНИЕ:*/}
          <FeaturesSection
            className="flex lg:hidden"
            title="КОМПЛЕКСНОЕ РЕШЕНИЕ:"
            card={featuresComplexMobile}
          />
          {/* mobile  ПОЧЕМУ ДРУГИЕ НЕ ПОМОГАЮТ:*/}
          <FeaturesSection
            className="flex lg:hidden"
            title="ПОЧЕМУ ДРУГИЕ НЕ ПОМОГАЮТ:"
            card={featuresWhyNotMobile}
          />
          {/* mobile ЧТО АНАЛИЗИРУЕМ:*/}
          <FeaturesSection
            className="flex lg:hidden"
            title="ЧТО АНАЛИЗИРУЕМ:"
            card={featuresAnalyzeMobile}
          />
          {/* mobile  СРАВНИТЕ */}
          <FeaturesSection
            className="flex lg:hidden"
            title="СРАВНИТЕ:"
            card={featuresCompareMobile}
          />

          <SolvedCases card={featuresSolvedCases} />
          <Statictic/>
          <WorkSteps/>
          <Faq/>
          <CalculatorAndDetails/>
          <DebtWarningBlock/>
          <ExpertBlock/>
          <BiographyArkadi />
          <PricingCard 
            title="ЧЕСТНОЕ ЦЕНООБРАЗОВАНИЕ БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ:"
            titleM='НИКАКИХ СКРЫТЫХ ПЛАТЕЖЕЙ:'
            plans={plans2}
            ctaLabel="ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН"
            onCtaClick={() => console.log("cta clicked")}/>
          <IncludedInDiagnostics />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
