import React from 'react'
import ContainerWrapper from '../../../shared/ui/ContainerWrapper'

const steps = [
  {
    id: 1,
    image: 'assets/images/step1.png',
    title: 'ЭТАП 1: ПОДАЧА ЗАЯВКИ И СБОР ИНФОРМАЦИИ',
    list: [
      'Отправляете заявку через любой удобный мессенджер',
      'Оплачиваете диагностику (1999–3999₽ в зависимости от суммы долга)',
      'Отвечаете на вопросы финансового Терапевта',
    ],
    subTitle: 'Что нужно будет предоставить:',
    subList: [
      'Информацию о всех долговых обязательствах',
      'Данные о доходах, расходах, семейном положении',
      'Сведения о кредитной истории и имуществе',
      'Ваши приоритеты и опасения',
    ],
    time: 'Время этапа: до 2 часов при оперативных ответах',
  },
  {
    id: 2,
    image: 'assets/images/step2.png',
    title: 'ЭТАП 2: АНАЛИЗ И РАЗРАБОТКА СТРАТЕГИИ',
    list: [
      'Эксперт комплексно анализирует вашу ситуацию',
      'Рассматриваем все возможные варианты решения',
      'Выбираем наиболее подходящую стратегию',
      'Готовим персональный план с конкретными шагами',
    ],
    time: 'Время этапа: до 2 часов',
  },
  {
    id: 3,
    image: 'assets/images/step3.png',
    title: 'ЭТАП 3: ПРЕЗЕНТАЦИЯ ПЛАНА И КОНСУЛЬТАЦИЯ',
    list: [
      'Предоставляем детальный план в письменном виде',
      'Проводим консультацию по телефону или в мессенджере',
      'Отвечаем на все ваши вопросы',
      'Объясняем каждый шаг простым языком',
    ],
  },
  {
    id: 4,
    image: 'assets/images/step4.png',
    title: 'ЭТАП 4: ПОДБОР СПЕЦИАЛИСТА И СОПРОВОЖДЕНИЕ',
    list: [
      'Находим проверенного эксперта для реализации плана',
      'Координируем первую встречу и передачу деталей вашего дела',
      'Остаемся на связи для контроля процесса',
      'Помогаем довести дело до результата',
    ],
  },
]

const WorkSteps = () => {
  return (
    <section className="mt-[70px]">
      <ContainerWrapper>
        <div>
          <h2 className="text-[60px] text-[#181d27] font-[600] leading-[120%] text-center">
            ЭТАПЫ РАБОТЫ: <br /> ПРОЗРАЧНО И ПОНЯТНО
          </h2>

          {/* Сетка карточек */}
          <div className="mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[1280px] mx-auto">
            <div className='max-w-[592px] w-full h-[726px] flex flex-col gap-[16px]'>
                <img src="/assets/images/step1.png" className='max-w-[592px] w-full h-[394px] rounded-[16px]' alt="" />
                <h6 className='text-[#181d27] font-[600] text-[18px] leading-[156%] text-left '>ЭТАП 1: ПОДАЧА ЗАЯВКИ И СБОР ИНФОРМАЦИИ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%]'>
                    <li>1. Отправляете заявку через любой удобный мессенджер</li>
                    <li>2. Оплачиваете диагностику (1999-3999₽ в зависимости от суммы </li>
                    <li>3. Отвечаете на вопросы Финансового Терапевта</li>
                </ul>
                <h6 className='text-[#181d27] font-[500] text-left underline text-[18px] leading-[156%]'>Что нужно будет предоставить:</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] list-disc'>
                    <li>Информацию о всех долговых обязательствах</li>
                    <li>Данные о доходах, расходах, семейном положении</li>
                    <li>Сведения о кредитной истории и имуществе</li>
                    <li>Ваши приоритеты и опасения</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%]'>Время этапа: до 2 часов при оперативных ответах </p>
            </div>
            <div className='max-w-[592px] w-full h-[582px] my-auto flex flex-col gap-[16px]'>
                <img src="/assets/images/step2.png" className='max-w-[592px] w-full h-[394px] rounded-[16px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%]'>ЭТАП 2: АНАЛИЗ И РАЗРАБОТКА СТРАТЕГИИ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%]'>
                    <li>1. Эксперт комплексно анализирует вашу ситуацию</li>
                    <li>2. Рассматриваем все возможные варианты решения</li>
                    <li>3. Выбираем наиболее подходящую стратегию</li>
                    <li>4. Готовим персональный план с конкретными шагами</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%]'>Время этапа: до 2 часов</p>
            </div>
            <div className='max-w-[592px] w-full h-[582px] my-auto flex flex-col gap-[16px]'>
                <img src="/assets/images/step3.png" className='max-w-[592px] w-full h-[394px] rounded-[16px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%]'>ЭТАП 3: ПРЕЗЕНТАЦИЯ ПЛАНА И КОНСУЛЬТАЦИЯ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%]'>
                    <li>1. Предоставляем детальный план в письменном виде</li>
                    <li>2. Проводим консультацию по телефону или в мессенджере</li>
                    <li>3. Отвечаем на все ваши вопросы</li>
                    <li>4. Объясняем каждый шаг простым языком</li>
                </ul>
            </div>
            <div className='max-w-[592px] w-full h-[582px] my-auto flex flex-col gap-[16px]'>
                <img src="/assets/images/step4.png" className='max-w-[592px] w-full h-[394px] rounded-[16px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%]'>ЭТАП 4: ПОДБОР СПЕЦИАЛИСТА И СОПРОВОЖДЕНИЕ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%]'>
                    <li>1. Находим проверенного эксперта для реализации плана</li>
                    <li>2. Координируем первую встречу и передаем детали вашего дела</li>
                    <li>3. Остаемся на связи для контроля процесса</li>
                    <li>4. Помогаем довести дело до результата</li>
                </ul>
            </div>
          </div>

          {/* Кнопка */}
          <button className="mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition mx-auto block">
            НАЧАТЬ РЕШЕНИЕ ПРОБЛЕМЫ
          </button>
        </div>
      </ContainerWrapper>
    </section>
  )
}

export default WorkSteps
