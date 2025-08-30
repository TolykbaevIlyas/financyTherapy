import type { IPricingPlan } from "../model/types";

interface PricingProps {
  title?: string;
  plans: IPricingPlan[];
  ctaLabel: string;
  onCtaClick?: () => void;
}

const PricingCard = ({ title, plans, ctaLabel, onCtaClick }: PricingProps) => {
  return (
    <section className="text-center py-12">
       <h2 className="text-[36px] font-[600] leading-[122%] mb-8 text-[#181d27]">{title}</h2>
        <div className="max-w-[1216px] w-full h-[240px] grid mt-[64px] grid-cols-1 md:grid-cols-3 items-center bg-[#fafafa] gap-6 mx-auto mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col items-center max-w-[341px] w-full h-[112px]"
          >
            <p className="text-[60px] font-[600] text-[#1570ef] mb-2">{plan.price}</p>
            <p className="text-[#181d27] text-[18px] font-[600] leading-[156%]">{plan.description}</p>
          </div>
        ))}
        </div>

      <button
        onClick={onCtaClick}
        className="cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[48px] mt-[160px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {ctaLabel}
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