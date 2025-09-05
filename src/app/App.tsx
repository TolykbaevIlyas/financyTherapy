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
import { motion } from 'framer-motion';

const plans = [
  { id: '1', price: '1999₽', description: 'До 1 млн долгов' },
  { id: '2', price: '2999₽', description: 'До 3 млн долгов' },
  { id: '3', price: '3999₽', description: 'Свыше 3 млн' },
];

const plans2 = [
  { id: '1', price: '1999₽', description: 'Если сумма долгов до 1 млн ₽' },
  { id: '2', price: '2999₽', description: 'Если сумма долгов до 3 млн ₽' },
  { id: '3', price: '3999₽', description: 'Если сумма долгов свыше 3 млн ₽' },
];

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex-1 px-[16px] lg:px-0">
          <Hero />
          {/* mobile  КОМПЛЕКСНОЕ РЕШЕНИЕ:*/}
          {/* <FeaturesSection
            className="flex lg:hidden"
            title="КОМПЛЕКСНОЕ РЕШЕНИЕ:"
            card={featuresComplexMobile}
          />
           */}
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
            plansM={plans}
            ctaLabel="ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН"
            onCtaClick={() => console.log('cta clicked')}
          />
          ;
          <LikeMedicine />
          {/* desktop */}
          <FeaturesSection
            className="hidden lg:flex"
            title="ПОЧЕМУ ДРУГИЕ РЕШЕНИЯ НЕ РАБОТАЮТ?"
            card={featuresWhyNot}
          />
          {/* mobile  ПОЧЕМУ ДРУГИЕ НЕ ПОМОГАЮТ:*/}
          <FeaturesSection
            className="flex lg:hidden"
            title="ПОЧЕМУ ДРУГИЕ НЕ ПОМОГАЮТ:"
            card={featuresWhyNotMobile}
          />
          <OurTreatment />
          <SolvedCases card={featuresSolvedCases} />
          <Statictic />
          <WorkSteps />
          {/* mobile ЧТО АНАЛИЗИРУЕМ:*/}
          <FeaturesSection
            className="flex lg:hidden"
            title="ЧТО АНАЛИЗИРУЕМ:"
            card={featuresAnalyzeMobile}
          />
          <Faq />
          <CalculatorAndDetails />
          <DebtWarningBlock />
          <ExpertBlock />
          <BiographyArkadi />
          <div className='pt-[96px] pb-[64px] text-[36px] font-[600] leading-[122%] text-[#181d27] mt-[96px] max-lg:hidden'>ИНВЕСТИЦИЯ В РЕШЕНИЕ ПРОБЛЕМЫ</div>
          <div className='pt-[96px] pb-[32px] text-[36px] font-[600] leading-[122%] text-[#181d27] mt-[96px] lg:hidden'>ИНВЕСТИЦИЯ В РЕШЕНИЕ</div>
          <PricingCard
            title="ЧЕСТНОЕ ЦЕНООБРАЗОВАНИЕ БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ:"
            titleM="НИКАКИХ СКРЫТЫХ ПЛАТЕЖЕЙ:"
            plans={plans2}
            plansM={plans}
            ctaLabel="ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН"
            onCtaClick={() => console.log('cta clicked')}
            buttons={false}
          />
          <IncludedInDiagnostics />
          
          <div>
            {/* desktop */}
            <FeaturesSection
              className="hidden lg:flex"
              title="СРАВНИТЕ С АЛЬТЕРНАТИВАМИ:"
              card={featuresCompare}
            />
            {/* mobile  СРАВНИТЕ */}
            <FeaturesSection
              className="flex lg:hidden"
              title="СРАВНИТЕ:"
              card={featuresCompareMobile}
            />
            <a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              
              className="max-lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[64px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              ПОЛУЧИТЬ ПЕРСОНАЛЬНЫЙ ПЛАН РЕШЕНИЯ
            </motion.button>
              </a>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() =>
                window.open(
                  'https://wa.me/79535906427',
                  '_blank'
                )
              }
              className="lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[64px] mt-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              ПОЛУЧИТЬ ПЛАН СЕЙЧАС
            </motion.button>
              
            

            {/* Иконки соцсетей */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-[48px] flex justify-center gap-[32px] mb-[64px]"
            >
              <a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" className="cursor-pointer" src="/assets/images/WPlogo.svg" alt="wp" />
              </a>

              <a
                href="https://t.me/arkadyshevchenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" className="cursor-pointer" src="/assets/images/tgLogo.svg" alt="tg" />
              </a>

              <a
                href="https://vk.me/arkadiy.shevchenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" className="cursor-pointer" src="/assets/images/vkLogo.svg" alt="vk" />
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOKQfH2_R_J3u2qI8k7Jer4mC5R1QlyvEP9Lp-m2848MFDqDmN4"
                target="_blank"
                rel="noopener noreferrer"
                className='flex'
              >
                <img loading="lazy" className="cursor-pointer " src="/assets/images/maxLogo.svg" alt="max"/>
              </a>
            </motion.div>
            <motion.div className='text-[#181d27] mt-[64px] mb-[96px] text-[18px] font-[400] leading-[156%] max-lg:hidden'>
              <strong>Помните:</strong> Каждый день бездействия увеличивает размер и тяжесть проблемы. Начните решение сегодня.
            </motion.div>
            <motion.div className='max-w-[343px] w-full m-auto text-[#181d27] mt-[64px] mb-[96px] text-[18px] font-[400] leading-[156%] lg:hidden'>
                Каждый день бездействия увеличивает тяжесть проблемы.
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
