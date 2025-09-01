import { motion } from "framer-motion";
import ContainerWrapper from '../../../shared/ui/ContainerWrapper'

const faqItems = [
  {
    question: '«У меня много микрозаймов и просрочек, есть ли смысл в диагностике?»',
    answer:
      'Определенно да! Наша клиентка Ольга Р. успешно решила проблему с 31 микрозаймом. Диагностика помогла выбрать оптимальный путь – банкротство через МФЦ, что сэкономило значительные средства (юристы говорили “Невозможно” и вправляли банкротство через арбитражный суд стоимостью 150000 руб.).',
  },
  {
    question: '«У меня нет залогового имущества для рефинансирования»',
    answer:
      'Это не проблема. Рефинансирование бывает и беззалоговое. Кроме того из 10 основных способов решения финансовых проблем только 2 требуют наличие залога. Остальные 8 способов работают и без залогового имущества.',
  },
  {
    question: '«Боюсь, что это может быть обман»',
    answer:
      'Мы работаем полностью прозрачно. Предоставляем письменные планы, подписываем соглашения о конфиденциальности. Основатель компании сам прошел через большие долги и лично помог более чем 400 людям выйти из финансовых трудностей. Уникальный опыт и команда экспертов доказали эффективность сервиса.',
  },
  {
    question: '«Не хватает денег даже на диагностику»',
    answer:
      'Мы лучше других знаем как тяжело может быть и по этому сделали стоимость диагностики доступной для каждого кто нуждается в нашей помощи. В среднем это 1999₽, что обычно окупается в первые две недели. Например, Наталья Д. стала экономить 1711₽ в месяц после реализации плана.',
  },
  
  {
    question: '«А если диагностика покажет, что выход только банкротство?»',
    answer:
      'По нашей практике, лишь в 2 из 10 случаев банкротство действительно является единственным выходом. В остальных 8 случаях мы находим альтернативные варианты. Если это единственный путь — мы честно об этом скажем и направим к проверенному специалисту, чтобы процесс прошёл максимально безопасно и быстро.',
  },
  
]

const Faq = () => {
  return (
    <section className="mt-[96px] bg-[#fafafa]  py-[96px] mb-[96px] max-lg:mb-[64px] max-lg:pb-[64px]">
      <ContainerWrapper>
        <div className="flex flex-col md:flex-row md:gap-[64px]">
          {/* Левая колонка */}
          <div className="flex flex-col items-start max-w-[360px] w-full">
            <div className="flex flex-col items-left gap-2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src='/assets/images/FAQ.svg' 
                alt='' 
                className='h-[36px] max-w-[36px] w-full'
              />
              <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=" text-left text-[36px] font-[600] text-[#181d27] leading-[122%] max-lg:hidden"
              >
                ОТВЕТЫ <br /> НА ЧАСТЫЕ <br /> СОМНЕНИЯ
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=" text-left text-[30px] font-[600] text-[#181d27] leading-[122%] lg:hidden"
              >
                ВАШИ СОМНЕНИЯ
              </motion.h2>
            </div>
          </div>

          {/* Правая колонка (desktop) */}
          <div className="flex flex-col flex-wrap gap-[32px] h-[844px] items-start max-lg:hidden ">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-[#181d27] max-w-[364px] h-fit w-full md:w-[calc(50%-16px)] text-left"
              >
                <h3 className="font-[600] text-[18px] leading-[156%] mb-2">
                  {item.question}
                </h3>
                <p className="font-[400] text-[#535862] text-[16px] leading-[150%]">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Мобильная версия */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:hidden flex flex-col gap-[40px] max-w-[343px] w-full m-auto text-left mt-[48px]'
          >
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«Много микрозаймов - поможет?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>Да! Ольга Р. решила проблему с 31 микрозаймом.</p>
            </div>
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«Нет залога?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>8 из 10 способов снижения ежемесячных платежей работают без залога.</p>
            </div>
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«Боюсь обмана?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>Предоставим план действий или вернем деньги.</p>
            </div>
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«Нет денег на диагностику?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>Наталья К. благодаря диагностике экономит 171 тыс/мес.</p>
            </div>
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«А если только банкротство?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>Скажем честно, что это оптимальный вариант и поможем провести правильно.</p>
            </div>
            <div>
              <h3 className='text-[18px] font-[600] leading-[156%] text-[#181d27]'>«Все онлайн?»</h3>
              <p className='text-[16px] font-[400] leading-[150%] text-[#535862]'>Да, встречи не нужны. Вся работа в мессенджере.</p>
            </div>
          </motion.div>
        </div>

        {/* Кнопки */}
        <div className='w-full flex justify-end'>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-[64px] w-full max-w-[792px] h-[48px] bg-[#1570ef] rounded-lg text-white font-semibold hover:bg-blue-700 transition  block max-lg:hidden"
          >
            ПОЛУЧИТЬ ОТВЕТ НА МОЙ ВОПРОС
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-[64px] w-full max-w-[792px] h-[48px] bg-[#1570ef] rounded-lg text-white font-semibold hover:bg-blue-700 transition  block lg:hidden"
          >
            ЗАДАТЬ ВОПРОС
          </motion.button>
        </div>
      </ContainerWrapper>
    </section>
  )
}

export default Faq
