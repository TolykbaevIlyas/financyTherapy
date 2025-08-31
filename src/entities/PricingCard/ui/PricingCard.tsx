import type { IPricingPlan } from "../model/types";

interface PricingProps {
  title?: string;
  titleM?: string;
  plans: IPricingPlan[];
  ctaLabel: string;
  onCtaClick?: () => void;
}

const PricingCard = ({ title,titleM, plans, ctaLabel, onCtaClick }: PricingProps) => {
  return (
    <section className="text-center py-12">
        <h2 className="text-[36px] font-[600] leading-[122%] mb-8 text-[#181d27] max-lg:hidden">{title}</h2>
        <h2 className="text-[30px] font-[600] leading-[122%] mb-8 text-[#181d27] lg:hidden max-w-[295px] w-full m-auto">{titleM}</h2>
        <div className="max-w-[1216px] max-lg:m-auto w-full h-[240px] grid mt-[64px] max-lg:justify-center max-lg:text-center max-lg:grid-cols-1 grid-cols-3 items-center text-center bg-[#fafafa] gap-6 mx-auto mb-8 max-lg:h-[552px] max-lg:max-w-[375px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col items-center max-w-[341px] w-full h-[112px] max-lg:w-full max-lg:justify-center"
            >
              <p className="text-[60px] font-[600] text-[#1570ef] mb-2">{plan.price}</p>
              <p className="text-[#181d27] text-[18px] font-[600] leading-[156%]">{plan.description}</p>
            </div>
          ))}
        </div>

      <button
        onClick={onCtaClick}
        className="max-lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[48px] mt-[160px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {ctaLabel}
      </button>
      <button
        onClick={onCtaClick}
        className="lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[48px] mt-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        ПОЛУЧИТЬ ПЛАН
      </button>
      <div className="mt-[48px] flex justify-center gap-[32px]">
        <img className="cursor-pointer" src="/assets/images/WPlogo.svg" alt="" />
        <img className="cursor-pointer" src="/assets/images/tgLogo.svg" alt="" />
        <img className="cursor-pointer" src="/assets/images/vkLogo.svg" alt="" />
        <img className="cursor-pointer" src="/assets/images/maxLogo.svg" alt="" />
      </div>
    </section>
  )
}

export default PricingCard