import React from 'react';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import Check from '../../../shared/assets/icons/Check';

const IncludedInDiagnostics = () => {
  return (
    <>
      <ContainerWrapper>
        <div className="border-1 border-[#E9EAEB] rounded-[16px]">
          <div className="border-1 border-b-[#E9EAEB] pt-[32px] pb-[24px] px-[32px] text-start">
            <h2 className="text-[#181D27] hidden md:block text-[20px] font-semibold">
              ЧТО ВКЛЮЧЕНО В СТОИМОСТЬ ДИАГНОСТИКИ:
            </h2>
            <h2 className="text-[#181D27] block md:hidden text-[20px] font-semibold">
              ВЫ ПОЛУЧАЕТЕ:
            </h2>
          </div>
          <div className="border-1 border-b-[#E9EAEB] p-[32px]">
            <ul className="grid gap-[32px] justify-items-start grid-cols-1 md:grid-cols-3 text-start">
              <li className="flex  gap-[12px] max-w-[362px] w-full">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  До 40 часов работы опытного эксперта
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">
                  До 40 часов работы эксперта
                </span>
              </li>
              <li className="flex gap-[12px] max-w-[362px]">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  Детальная консультация по всем вопросам
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">
                  Комплексный анализ
                </span>
              </li>
              <li className="flex gap-[12px] max-w-[362px]">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  Сопровождение процесса до получения результата
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">
                  Персональный план
                </span>
              </li>
              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              <li className="flex gap-[12px] max-w-[362px] w-full">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  Комплексный анализ финансового состояния
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">Консультацию</span>
              </li>
              <li className="flex gap-[12px] max-w-[362px]">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  Подбор профильного специалиста
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">
                  Подбор специалиста
                </span>
              </li>
              <li className="flex gap-[12px] max-w-[362px]">
                <Check />
                <span className=" text-[#181D27] hidden md:block text-[16px]">
                  Персональный план действий
                </span>
                <span className=" text-[#181D27] block md:hidden text-[16px]">
                  Сопровождение до результата
                </span>
              </li>
            </ul>
          </div>

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
    </>
  );
};

export default IncludedInDiagnostics;
