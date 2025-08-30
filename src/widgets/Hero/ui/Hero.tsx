import React from 'react'
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { Checklist } from '../../../entities/checklist';
import CardFeaturesSect from '../../../entities/CardFeaturesSect';
import Bank from '../../../shared/assets/icons/Bank';
import MFO from '../../../shared/assets/icons/MFO';
import Laywers from '../../../shared/assets/icons/Laywers';

const Hero = () => {
  const symptoms = [
  { id: "1", text: "Платежи съедают больше 50% дохода?" },
  { id: "2", text: "Берете новые кредиты для оплаты старых?" },
  { id: "3", text: "Живете на микрозаймы?" },
  { id: "4", text: "Получаете звонки от коллекторов?" },
  { id: "5", text: "Скрываете финансовые проблемы от близких?" },
  { id: "6", text: "Думаете о банкротстве, но не уверены, что это выход?" },
];

const featuresWhyNotMobile = [
  {
    icon: <Bank />,
    title: 'Анализ ситуации',
    description: '',
  },
  {
    icon: <MFO />,
    title: 'Персональный план',
    description: '',
  },
  {
    icon: <Laywers />,
    title: 'Профильный специалист',
    description: '',
  },
];

  return (
    <section className="text-black mt-[96px] w-full">
        <ContainerWrapper>
            <div className='flex flex-col gap-[64px] max-lg:gap-[48px]'>
                <div className='flex flex-col gap-[24px] max-w-[1024px] w-full m-auto'>
                    <h1 className='text-[60px] font-semibold max-lg:text-[30px] max-lg:text-center max-lg:max-w-[323px] max-lg:m-auto'>СНИЗЬ ЕЖЕМЕСЯЧНЫЕ ПЛАТЕЖИ НА 40-80%</h1>
                    <p className=' max-w-[850px] w-full m-auto text-[20px] font-[400] text-[#535862] max-lg:hidden'>Комплексная диагностика финансового состояния и персональный план действий. Как врач-терапевт ставит диагноз — так мы анализируем ваши финансы.</p>
                </div>
                <div className='flex gap-[96px] m-auto max-lg:flex-col'>
                    <div className='flex flex-col gap-[20px] max-w-[438px] w-full max-lg:m-auto'>
                        <img className='max-w-[48px] w-full h-[49px]' src='/assets/images/Logo.svg' alt="Logo" />
                        <h3 className='text-[30px] leading-[127%] text-[#181d27] text-left font-[600] max-lg:hidden'>СИМПТОМЫ, С КОТОРЫМИ ПОМОГАЕТ ФИНАНСОВЫЙ ТЕРАПЕВТ:</h3>
                        <h3 className='text-[24px] leading-[133%] text-[#181d27] text-left font-[600] lg:hidden'>Ваши симптомы:</h3>
                        <div className='mt-[32px]'>
                            <Checklist items={symptoms}/>
                        </div>
                        <>
                        <div className={`text-[#000] m-auto flex-col py-[64px] lg:pt-[96px] lg:pb-[160px] items-center gap-[48px] lg:gap-[96px] w-full lg:hidden`}>
                            <h2 className="text-4xl font-semibold text-[#181D27]">КОМПЛЕКСНОЕ РЕШЕНИЕ:</h2>
                            <div className="flex flex-col lg:flex-row gap-[48px] mt-[48px]">
                                {featuresWhyNotMobile.map((item, index) => (
                                <CardFeaturesSect
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    maxWidth={item.maxWidth}
                                />
                                ))}
                            </div>
                        </div>
                        </>
                    </div>
                    <img className='max-w-[528px] w-full h-[512px]' src='/assets/images/Hero.png'/>
                </div>
                <div className='m-auto max-w-[768px] w-full mb-[64px]'>
                    <h3 className='text-[36px] font-[600] leading-[122%] max-lg:hidden'>КОМПЛЕКСНОЕ РЕШЕНИЕ: <br/> ДИАГНОСТИКА + ПЕРСОНАЛЬНЫЙ ПЛАН</h3>
                </div>
            </div>
        </ContainerWrapper>

    </section>
  );
}

export default Hero