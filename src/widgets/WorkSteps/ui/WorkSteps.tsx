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
          <h2 className="text-[60px] text-[#181d27] font-[600] leading-[120%] text-center max-lg:hidden">
            ЭТАПЫ РАБОТЫ: <br /> ПРОЗРАЧНО И ПОНЯТНО
          </h2>
          <h2 className="text-[30px] text-[#181d27] font-[600] leading-[120%] lg:hidden text-left">
            ЭТАПЫ РАБОТЫ:
          </h2>
          

          {/* Сетка карточек */}
          <div className="mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[1280px] mx-auto max-lg:items-center max-lg:justify-center">
            <div className='max-w-[592px] max-lg:max-w-[343px] w-full h-[726px] max-lg:h-[368px] flex flex-col gap-[16px]  max-lg:m-auto'>
                <img src="/assets/images/step1.png" className='max-w-[592px] w-full h-[394px] rounded-[16px] max-lg:max-w-[343px] max-lg:h-[228px]' alt="" />
                <h6 className='text-[#181d27] font-[600] text-[18px] leading-[156%] text-left max-lg:hidden'>ЭТАП 1: ПОДАЧА ЗАЯВКИ И СБОР ИНФОРМАЦИИ</h6>
                <h6 className='text-[#181d27] font-[600] text-[18px] leading-[156%] text-left lg:hidden'>1. ЗАЯВКА + АНКЕТА</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                    <li>1. Отправляете заявку через любой удобный мессенджер</li>
                    <li>2. Оплачиваете диагностику (1999-3999₽ в зависимости от суммы </li>
                    <li>3. Отвечаете на вопросы Финансового Терапевта</li>
                </ul>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                    <li>Пишете → оплачиваете → отвечаете на вопросы</li>
                </ul>
                <h6 className='text-[#181d27] font-[500] text-left underline text-[18px] leading-[156%] max-lg:hidden'>Что нужно будет предоставить:</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] list-disc max-lg:hidden'>
                    <li>Информацию о всех долговых обязательствах</li>
                    <li>Данные о доходах, расходах, семейном положении</li>
                    <li>Сведения о кредитной истории и имуществе</li>
                    <li>Ваши приоритеты и опасения</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] max-lg:hidden'>Время этапа: до 2 часов при оперативных ответах </p>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>До 2 часов при быстрых ответах</p>
            </div>
            <div className='max-w-[592px] max-lg:max-w-[343px] w-full h-[582px] max-lg:h-[368px] my-auto flex flex-col gap-[16px] max-lg:m-auto'>
                <img src="/assets/images/step2.png" className='max-w-[592px] w-full h-[394px] rounded-[16px] max-lg:max-w-[343px] max-lg:h-[228px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] max-lg:hidden'>ЭТАП 2: АНАЛИЗ И РАЗРАБОТКА СТРАТЕГИИ</h6>
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] lg:hidden'>2. АНАЛИЗ СИТУАЦИИ + ПЛАН </h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                    <li>1. Эксперт комплексно анализирует вашу ситуацию</li>
                    <li>2. Рассматриваем все возможные варианты решения</li>
                    <li>3. Выбираем наиболее подходящую стратегию</li>
                    <li>4. Готовим персональный план с конкретными шагами</li>
                </ul>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                    <li>Анализируем информацию → разрабатываем план действий</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] max-lg:hidden'>Время этапа: до 2 часов</p>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg-hidden'>До 2 часов работы</p>
            </div>
            <div className='max-w-[592px] max-lg:max-w-[343px] w-full h-[582px] max-lg:h-[368px] my-auto flex flex-col gap-[16px] max-lg:m-auto'>
                <img src="/assets/images/step3.png" className='max-w-[592px] w-full h-[394px] rounded-[16px] max-lg:max-w-[343px] max-lg:h-[228px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] max-lg:hidden'>ЭТАП 3: ПРЕЗЕНТАЦИЯ ПЛАНА И КОНСУЛЬТАЦИЯ</h6>
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] lg:hidden'>3. КОНСУЛЬТАЦИЯ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                    <li>1. Предоставляем детальный план в письменном виде</li>
                    <li>2. Проводим консультацию по телефону или в мессенджере</li>
                    <li>3. Отвечаем на все ваши вопросы</li>
                    <li>4. Объясняем каждый шаг простым языком</li>
                </ul>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                    <li>Получаете стратегию → разбираем вопросы</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>Отвечаем на все ваши вопросы</p>
                
            </div>
            <div className='max-w-[592px] max-lg:max-w-[343px] w-full h-[582px] max-lg:h-[368px] my-auto flex flex-col gap-[16px] max-lg:m-auto'>
                <img src="/assets/images/step4.png" className='max-w-[592px] w-full h-[394px] rounded-[16px] max-lg:max-w-[343px] max-lg:h-[228px]' alt="" />
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] max-lg:hidden'>ЭТАП 4: ПОДБОР СПЕЦИАЛИСТА И СОПРОВОЖДЕНИЕ</h6>
                <h6 className='text-[#181d27] text-left font-[600] text-[18px] leading-[156%] lg:hidden'>4. СПЕЦИАЛИСТ</h6>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                    <li>1. Находим проверенного эксперта для реализации плана</li>
                    <li>2. Координируем первую встречу и передаем детали вашего дела</li>
                    <li>3. Остаемся на связи для контроля процесса</li>
                    <li>4. Помогаем довести дело до результата</li>
                </ul>
                <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                    <li>Подбираем → направляем → сопровождаем</li>
                </ul>
                <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>Только проверенные профильные специалисты</p>
            </div>
          </div>

          {/* Кнопка */}
          <button className="max-lg:hidden mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition mx-auto block">
            НАЧАТЬ РЕШЕНИЕ ПРОБЛЕМЫ
          </button>
        </div>
      </ContainerWrapper>
    </section>
  )
}

export default WorkSteps
