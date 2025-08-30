import React from 'react'
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { Checklist } from '../../../entities/checklist';

const Hero = () => {
  const symptoms = [
  { id: "1", text: "Платежи съедают больше 50% дохода?" },
  { id: "2", text: "Берете новые кредиты для оплаты старых?" },
  { id: "3", text: "Живете на микрозаймы?" },
  { id: "4", text: "Получаете звонки от коллекторов?" },
  { id: "5", text: "Скрываете финансовые проблемы от близких?" },
  { id: "6", text: "Думаете о банкротстве, но не уверены, что это выход?" },
];

  return (
    <section className="text-black mt-[96px] w-full">
        <ContainerWrapper>
            <div className='flex flex-col gap-[64px]'>
                <div className='flex flex-col gap-[24px] max-w-[1024px] w-full m-auto'>
                    <h1 className='text-[60px] font-semibold'>СНИЗЬ ЕЖЕМЕСЯЧНЫЕ ПЛАТЕЖИ НА 40-80%</h1>
                    <p className=' max-w-[850px] w-full m-auto text-[20px] font-[400] text-[#535862]'>Комплексная диагностика финансового состояния и персональный план действий. Как врач-терапевт ставит диагноз — так мы анализируем ваши финансы.</p>
                </div>
                <div className='flex gap-[96px] m-auto'>
                    <div className='flex flex-col gap-[20px] max-w-[438px] w-full'>
                        <img className='max-w-[48px] w-full h-[49px]' src='/assets/images/Logo.svg' alt="Logo" />
                        <h3 className='text-[30px] leading-[127%] text-[#181d27] text-left font-[600]'>СИМПТОМЫ, С КОТОРЫМИ ПОМОГАЕТ ФИНАНСОВЫЙ ТЕРАПЕВТ:</h3>
                        <div className='mt-[32px]'>
                            <Checklist items={symptoms}/>
                        </div>
                    </div>
                    <img className='max-w-[528px] w-full h-[512px]' src='/assets/images/Hero.svg'/>
                </div>
            </div>
        </ContainerWrapper>

    </section>
  );
}

export default Hero