"use client"; // если Next.js 13+
import { motion } from "framer-motion";
import type { IPricingPlan } from "../model/types";

interface PricingProps {
  title?: string;
  titleM?: string;
  plans: IPricingPlan[];
  ctaLabel: string;
  onCtaClick?: () => void;
  buttons?: boolean;
}

const PricingCard = ({ title, titleM, plans, ctaLabel, onCtaClick, buttons = true }: PricingProps) => {
  return (
    <section className={`text-center py-12  ${titleM === 'ПРОЗРАЧНЫЕ ЦЕНЫ:' ? 'pt-[10px]' : 'pt-[96px]  '} `}>

      {/* Заголовки */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${ title == 'ЧЕСТНОЕ ЦЕНООБРАЗОВАНИЕ БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ:' ? 'text-[30px]' : 'text-[36px] '} font-[600] leading-[127%] mb-8 text-[#181d27] max-lg:hidden`}
      >
        {title}
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[30px] font-[600] leading-[122%] mb-8 text-[#181d27] lg:hidden max-w-[325px] w-full m-auto"
      >
        {titleM}
      </motion.h2>

      {/* Сетка с тарифами */}
      <div className="max-w-[1216px] rounded-[16px] max-lg:m-auto w-full h-[240px] grid mt-[64px] max-lg:justify-center max-lg:text-center max-lg:grid-cols-1 grid-cols-3 items-center text-center bg-[#fafafa] gap-6 mx-auto mb-8 max-lg:h-[552px] max-lg:max-w-[375px]">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center max-w-[341px] w-full h-[112px] max-lg:w-full max-lg:justify-center"
          >
            <p className="text-[60px] font-[600] text-[#1570ef] mb-2">{plan.price}</p>
            <p className="text-[#181d27] text-[18px] font-[600] leading-[156%]">{plan.description}</p>
          </motion.div>
        ))}
      </div>
        {buttons ? <>
        <a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              ><motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        onClick={onCtaClick}
        style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}
        className="max-lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[48px] mt-[80px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {ctaLabel}
      </motion.button></a>
<a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              ><motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        onClick={onCtaClick}
        style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}
        className="lg:hidden cursor-pointer bg-[#1570ef] max-w-[1216px] w-full h-[48px] mt-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        ПОЛУЧИТЬ ПЛАН
      </motion.button></a>
      

      {/* Иконки соцсетей */}
      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  viewport={{ once: true }}
  className={`mt-[48px] flex justify-center gap-[32px]   ${titleM === 'ПРОЗРАЧНЫЕ ЦЕНЫ:' ? 'mb-[50px]' : 'mb-[264px]'}`}
>
  <a
    href="https://wa.me/79535906427"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="cursor-pointer" src="/assets/images/WPlogo.svg" alt="wp" />
  </a>

  <a
    href="https://t.me/arkadyshevchenko"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="cursor-pointer" src="/assets/images/tgLogo.svg" alt="tg" />
  </a>

  <a
    href="https://vk.com/?u=2&to=L3dyaXRlODMwMzYyOTUz"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="cursor-pointer" src="/assets/images/vkLogo.svg" alt="vk" />
  </a>

  <a
    href="https://max.ru/u/f9LHodD0cOKQfH2_R_J3u2qI8k7Jer4mC5R1QlyvEP9Lp-m2848MFDqDmN4"
    target="_blank"
    rel="noopener noreferrer"
    className="flex"
  >
    <img className="cursor-pointer" src="/assets/images/maxLogo.svg" alt="max" />
  </a>
</motion.div>
</>
      :  
      ''
      }
      {/* CTA кнопки */}
      
    </section>
  );
};

export default PricingCard;
