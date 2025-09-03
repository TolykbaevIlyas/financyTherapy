"use client"; // если Next.js 13+
import { motion } from "framer-motion";
import ContainerWrapper from '../../../shared/ui/ContainerWrapper'

const WorkSteps = () => {
  return (
    <section className="mt-[70px]">
      <ContainerWrapper>
        <div>
          {/* Заголовки */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[60px] text-[#181d27] font-[600] leading-[120%] text-center max-lg:hidden"
          >
            ЭТАПЫ РАБОТЫ: <br /> ПРОЗРАЧНО И ПОНЯТНО
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[30px] text-[#181d27] font-[600] leading-[120%] lg:hidden text-left"
          >
            ЭТАПЫ РАБОТЫ:
          </motion.h2>

          {/* Сетка карточек */}
          <div className="mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[1280px] mx-auto max-lg:items-center max-lg:justify-center">
            
            {[
              {
                img: "/assets/images/step1.png",
                desktopTitle: "ЭТАП 1: ПОДАЧА ЗАЯВКИ И СБОР ИНФОРМАЦИИ",
                mobileTitle: "1. ЗАЯВКА + АНКЕТА",
                content: (
                  <>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                      <li>1. Отправляете заявку через любой удобный мессенджер</li>
                      <li>2. Оплачиваете диагностику (1999-3999₽ в зависимости от суммы)</li>
                      <li>3. Отвечаете на вопросы Финансового Терапевта</li>
                    </ul>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                      <li>Пишете → оплачиваете → отвечаете на вопросы</li>
                    </ul>
                    <h6 className='text-[#181d27] font-[500] text-left underline text-[18px] leading-[156%] max-lg:hidden'>
                      Что нужно будет предоставить:
                    </h6>
                    <ul className='text-[#535862] ml-[20px] text-[16px] font-[400] text-left leading-[150%] list-disc max-lg:hidden'>
                      <li>Информацию о всех долговых обязательствах</li>
                      <li>Данные о доходах, расходах, семейном положении</li>
                      <li>Сведения о кредитной истории и имуществе</li>
                      <li>Ваши приоритеты и опасения</li>
                    </ul>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] max-lg:hidden'>
                      Время этапа: до 2 часов при оперативных ответах 
                    </p>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>
                      До 2 часов при быстрых ответах
                    </p>
                  </>
                )
              },
              {
                img: "/assets/images/step2.png",
                desktopTitle: "ЭТАП 2: АНАЛИЗ И РАЗРАБОТКА СТРАТЕГИИ",
                mobileTitle: "2. АНАЛИЗ СИТУАЦИИ + ПЛАН",
                content: (
                  <>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                      <li>1. Эксперт комплексно анализирует вашу ситуацию</li>
                      <li>2. Рассматриваем все возможные варианты решения</li>
                      <li>3. Выбираем наиболее подходящую стратегию</li>
                      <li>4. Готовим персональный план с конкретными шагами</li>
                    </ul>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                      <li>Анализируем информацию → разрабатываем план действий</li>
                    </ul>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] max-lg:hidden'>
                      Время этапа: до 2 часов
                    </p>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>
                      До 2 часов работы
                    </p>
                  </>
                )
              },
              {
                img: "/assets/images/step3.png",
                desktopTitle: "ЭТАП 3: ПРЕЗЕНТАЦИЯ ПЛАНА И КОНСУЛЬТАЦИЯ",
                mobileTitle: "3. КОНСУЛЬТАЦИЯ",
                content: (
                  <>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                      <li>1. Предоставляем детальный план в письменном виде</li>
                      <li>2. Проводим консультацию по телефону или в мессенджере</li>
                      <li>3. Отвечаем на все ваши вопросы</li>
                      <li>4. Объясняем каждый шаг простым языком</li>
                    </ul>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                      <li>Получаете стратегию → разбираем вопросы</li>
                    </ul>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>
                      Отвечаем на все ваши вопросы
                    </p>
                  </>
                )
              },
              {
                img: "/assets/images/step4.png",
                desktopTitle: "ЭТАП 4: ПОДБОР СПЕЦИАЛИСТА И СОПРОВОЖДЕНИЕ",
                mobileTitle: "4. СПЕЦИАЛИСТ",
                content: (
                  <>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] max-lg:hidden'>
                      <li>1. Находим проверенного эксперта для реализации плана</li>
                      <li>2. Координируем первую встречу и передаем детали вашего дела</li>
                      <li>3. Остаемся на связи для контроля процесса</li>
                      <li>4. Помогаем довести дело до результата</li>
                    </ul>
                    <ul className='text-[#535862] text-[16px] font-[400] text-left leading-[150%] lg:hidden'>
                      <li>Подбираем → направляем → сопровождаем</li>
                    </ul>
                    <p className='text-[#181d27] font-[500] text-left text-[18px] leading-[156%] lg:hidden underline'>
                      Только проверенные профильные специалисты
                    </p>
                  </>
                )
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
                className='max-w-[592px] max-lg:max-w-[343px] w-full flex flex-col gap-[16px] max-lg:m-auto'
              >
                <motion.img 
                  src={step.img} 
                  alt=""
                  className='max-w-[592px] w-full h-[394px] rounded-[16px] max-lg:max-w-[343px] max-lg:h-[228px]'
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                />
                <h6 className='text-[#181d27] font-[600] text-[18px] leading-[156%] text-left max-lg:hidden'>
                  {step.desktopTitle}
                </h6>
                <h6 className='text-[#181d27] font-[600] text-left text-[18px] leading-[156%] lg:hidden'>
                  {step.mobileTitle}
                </h6>
                {step.content}
              </motion.div>
            ))}
          </div>

          {/* Кнопка */}
          <a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-lg:hidden mt-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition mx-auto block"
          >
            НАЧАТЬ РЕШЕНИЕ ПРОБЛЕМЫ
          </motion.button>
              </a>
          
        </div>
      </ContainerWrapper>
    </section>
  )
}

export default WorkSteps
