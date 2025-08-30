import React from 'react'
import ContainerWrapper from '../../../shared/ui/ContainerWrapper'

const LikeMedicine = () => {
  return (
    <div>
        <ContainerWrapper>
            <div className='flex flex-col gap-[64px]'>
                <div className='flex flex-col gap-[24px]'>
                    <h3 className='max-w-[1024px] w-full m-auto text-[60px] leading-[120%] text-[#181d27] font-[600] max-lg:hidden'>КАК В МЕДИЦИНЕ — СНАЧАЛА К ТЕРАПЕВТУ, ПОТОМ К СПЕЦИАЛИСТУ</h3>
                    <p className='text-[20px] leading-[150%] font-[400] text-[#535862] max-lg:hidden'>ИСПОЛЬЗУЕМ МЕДИЦИНСКИЙ ПОДХОД К ФИНАНСОВОМУ ОЗДОРОВЛЕНИЮ</p>
                    <h3 className='max-w-[343px] text-[36px] w-full m-auto leading-[120%] text-[#181d27] font-[600] lg:hidden'>КАК ВРАЧ, НО ДЛЯ ФИНАНСОВ</h3>
                    <p className='max-w-[343px] m-auto w-full text-[18px] leading-[150%] font-[400] text-[#535862] lg:hidden'>ИСПОЛЬЗУЕМ МЕДИЦИНСКИЙ ПОДХОД К ФИНАНСОВОМУ ОЗДОРОВЛЕНИЮ</p>
                </div>
                <div className='flex justify-center max-lg:flex-col max-lg:m-auto max-lg:gap-[32px]'>
                    <div className=' flex flex-col gap-[24px] max-w-[568px] w-full'>
                        <h6 className='text-[30px] leading-[127%] text-[#000] font-[500]'>ВРАЧ-ТЕРАПЕВТ</h6>
                        <ul className='flex flex-col gap-[12px] max-w-[355px] w-full m-auto text-[#414651] text-[18px] font-[400] leading-[156%] text-left'>
                            <li>1. Диагностика физического состояния</li>
                            <li>2. Персональный план лечения</li>
                            <li>3. Направление к нужному врачу</li>
                            <li>4. Контроль хода лечения</li>
                        </ul>
                    </div>
                    <div className='h-[211px] border-[1px] border-[#e9eaeb] max-lg:hidden'></div>
                    <div className='border-[1px] border-[#e9eaeb] max-w-[343px] w-full lg:hidden'></div>
                    <div className=' flex flex-col gap-[24px] max-w-[568px] w-full'>
                        <h6 className='text-[30px] leading-[127%] text-[#000] font-[500]'>ФИНАНСОВЫЙ ТЕРАПЕВТ</h6>
                        <ul className='flex flex-col gap-[12px] max-w-[405px] w-full m-auto text-[#414651] text-[18px] font-[400] leading-[156%] text-left'>
                            <li>1. Диагностика финансового состояния</li>
                            <li>2. Персональный план снижения платежей</li>
                            <li>3. Направление к профильному специалисту</li>
                            <li>4. Сопровождение до результата</li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    </div>
  )
}

export default LikeMedicine