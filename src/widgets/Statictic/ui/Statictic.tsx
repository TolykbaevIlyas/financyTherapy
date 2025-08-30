import React from 'react'

const Statictic = () => {
  return (
    <section className='mt-[96px]'>
        <h4 className='text-[36px] leading-[122%] font-[600] text-[#181d27]'>СТАТИСТИКА ПО НАШИМ КЛИЕНТАМ:</h4>
        <div className="mt-[64px] grid grid-cols-2 gap-4 w-full max-w-[1280px] mx-auto">
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px]">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>1500+</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>человек <br/>получили персональные планы</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px]">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>50%</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>нашли <br/>альтернативу банкротству</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px]">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>от 40% до 80%</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>типичная экономия <br/>ежемесячных платежей</p>
            </div>
            <div className="text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px]">
                <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>от 10 до 90 дней</h2>
                <p className='text-[18px] font-[600] leading-[156%]'>обычное время решения <br/>в зависимости от сложности</p>
            </div>
        </div>
        <button className=" mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            ПОЛУЧИТЬ ПЛАН ДЛЯ МОЕЙ СИТУАЦИИ
        </button>
    </section>
  )
}

export default Statictic