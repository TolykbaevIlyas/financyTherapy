"use client";
import ContainerWrapper from "../../../shared/ui/ContainerWrapper";
import Check from "../../../shared/assets/icons/Check";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const IncludedInDiagnostics = () => {
  const items = [
    {
      desktop: "До 40 часов работы опытного эксперта",
      mobile: "До 40 часов работы эксперта",
    },
    {
      desktop: "Детальная консультация по всем вопросам",
      mobile: "Комплексный анализ",
    },
    {
      desktop: "Сопровождение процесса до получения результата",
      mobile: "Персональный план",
    },
    {
      desktop: "Комплексный анализ финансового состояния",
      mobile: "Консультацию",
    },
    {
      desktop: "Подбор профильного специалиста",
      mobile: "Подбор специалиста",
    },
    {
      desktop: "Персональный план действий",
      mobile: "Сопровождение до результата",
    },
  ];

  return (
    <ContainerWrapper>
      <div className="border max-lg:mt-[40px] border-[#E9EAEB] rounded-[16px] overflow-hidden bg-white shadow-[0_2px_2px_-1px_rgba(10,13,18,0.04),0_4px_6px_-2px_rgba(10,13,18,0.03),0_12px_16px_-4px_rgba(10,13,18,0.08)]">
        {/* Заголовок */}
        <div className="border-b border-[#E9EAEB] pt-[32px] pb-[24px] px-[32px] text-start">
          <h2 className="text-[#181D27] hidden md:block text-[20px] font-semibold">
            ЧТО ВКЛЮЧЕНО В СТОИМОСТЬ ДИАГНОСТИКИ:
          </h2>
          <h2 className="text-[#181D27] block md:hidden text-[20px] font-semibold">
            ВЫ ПОЛУЧАЕТЕ:
          </h2>
        </div>

        {/* Список */}
        <div className="border-b border-[#E9EAEB] p-[32px]">
          <ul className="grid gap-[32px] justify-items-start grid-cols-1 md:grid-cols-3 text-start">
            {items.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-[12px] max-w-[362px] w-full items-start group cursor-default"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={listVariants}
              >
                <Check className="text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-[#181D27] hidden md:block text-[16px] leading-[150%]">
                  {item.desktop}
                </span>
                <span className="text-[#181D27] block md:hidden text-[16px] leading-[150%]">
                  {item.mobile}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Гарантия */}
        <div className="flex flex-col gap-[20px] text-[18px] text-[#181D27] font-semibold text-start p-[32px]">
          <h2 className="">ГАРАНТИЯ КАЧЕСТВА:</h2>
          <p className="hidden md:block">
            Если по результатам диагностики вы не получите четкий план действий для решения вашей
            финансовой ситуации — вернем оплату полностью.
          </p>
          <p className="block md:hidden">Нет четкого плана = возврат денег</p>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default IncludedInDiagnostics;
