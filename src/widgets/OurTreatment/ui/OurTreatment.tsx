import React from 'react'
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { Checklist } from '../../../entities/checklist';

const OurTreatment = () => {
    const symptoms = [
  { id: "1", text: "Полная непредвзятость — не продаем кредиты и банкротство" },
  { id: "2", text: "10 способов снижения долгов — выбираем лучший для ВАС" },
  { id: "3", text: "AI + 4.5 года опыта + 1500 успешных кейсов" },
  { id: "4", text: "Вместо продажи ненужных услуг — помогаем решить проблему" },
];
  return (
    <section className="text-black mt-[96px] w-full mb-[127px]">
        <ContainerWrapper>
            <div className='flex flex-col gap-[64px]'>
                <div className='flex gap-[96px] m-auto max-lg:flex-col-reverse'>
                    <img className='max-w-[528px] w-full h-[512px]' src='/assets/images/Treatment.png'/>
                    <div className='flex flex-col gap-[20px] max-w-[480px] w-full'>
                        <img className='max-w-[48px] w-full h-[49px]' src='/assets/images/Logo.svg' alt="Logo" />
                        <h3 className='text-[30px] leading-[127%] text-[#181d27] text-left font-[600]'>НАШ ПОДХОД:</h3>
                        <div className='mt-[32px]'>
                            <Checklist items={symptoms}/>
                        </div>
                    </div>
                    
                </div>
                <button className="cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    УЗНАТЬ ОПТИМАЛЬНЫЙ СПОСОБ ДЛЯ МЕНЯ
                </button>
            </div>
        </ContainerWrapper>

    </section>
  )
}

export default OurTreatment