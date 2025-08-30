import React from 'react'

const Statictic = () => {
  return (
    <section className='mt-[96px]'>
        <h4 className='text-[36px] leading-[122%] font-[600] text-[#181d27] max-lg:hidden'>СТАТИСТИКА ПО НАШИМ КЛИЕНТАМ:</h4>
        <h4 className='text-[30px] leading-[122%] font-[600] text-[#181d27] lg:hidden'>НАША ПРАКТИКА:</h4>
        
        <div className="mt-[64px] grid grid-cols-2 gap-4 w-full max-w-[1280px] mx-auto max-lg:grid-cols-1 max-lg:m-auto">
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] max-lg:m-auto">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>1500+</h2>
                <p className='text-[18px] font-[600] leading-[156%] max-lg:hidden'>человек <br/>получили персональные планы</p>
                <p className='text-[18px] font-[600] leading-[156%] lg:hidden'>персональных планов</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] max-lg:m-auto">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>50%</h2>
                <p className='text-[18px] font-[600] leading-[156%] max-lg:hidden'>нашли <br/>альтернативу банкротству</p>
                <p className='text-[18px] font-[600] leading-[156%] lg:hidden'>избежали банкротства</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] max-lg:hidden">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>от 40% до 80%</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>типичная экономия <br/>ежемесячных платежей</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] max-lg:hidden">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>от 10 до 90 дней</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>обычное время решения <br/>в зависимости от сложности</p>
            </div>

            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] lg:hidden max-lg:m-auto">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>40% - 80%</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>типичная экономия</p>
            </div>
        </div>
        <button className=" mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition max-lg:hidden">
            ПОЛУЧИТЬ ПЛАН ДЛЯ МОЕЙ СИТУАЦИИ
        </button>
        <button className=" mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition lg:hidden"> 
            ПОЛУЧИТЬ РЕЗУЛЬТАТ
        </button>

    </section>
  )
}

export default Statictic