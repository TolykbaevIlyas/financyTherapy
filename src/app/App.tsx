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

import FeaturesSection from '../widgets/FeaturesSection';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import { Hero } from '../widgets/Hero';

import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex-1 px-[20px] lg:px-0">

          <div className="bg-[#FAFAFA]">
            {/* desktop */}
            <FeaturesSection
              className="hidden lg:flex"
              title="Что анализируем?"
              card={featuresAnalyze}
            />
          </div>

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
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="Что получаете?"
            card={featuresResult}
          />
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="ПОЧЕМУ ДРУГИЕ РЕШЕНИЯ НЕ РАБОТАЮТ?"
            card={featuresWhyNot}
          />
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="СРАВНИТЕ С АЛЬТЕРНАТИВАМИ:"
            card={featuresCompare}
          />

          <Hero/>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
