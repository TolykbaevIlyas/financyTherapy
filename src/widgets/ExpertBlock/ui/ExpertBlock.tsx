'use client';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

export default function ExpertBlock() {
  const listItems = [
    'Прошел через долги лично',
    'Знаю все схемы и способы изнутри',
    'Лично помог 400+ человек',
    'Не продаю кредиты и банкротство',
    'Работаю только в ваших интересах',
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <ContainerWrapper>
        <section className="w-full bg-white mt-[96px] mb-[64px] grid md:grid-cols-2 gap-5 items-start">
          {/* Left Side */}
          <div className="space-y-6 flex flex-col gap-[28px] max-w-[506px] w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-left font-semibold text-black">АРКАДИЙ ШЕВЧЕНКО</h2>
              <p className="uppercase text-[20px] text-[#181D27] font-[500px] mt-2 text-left underline">
                ЭКСПЕРТ С ЛИЧНЫМ ОПЫТОМ
              </p>
            </motion.div>

            {/* Desktop список */}
            <div className="max-lg:hidden">
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-left">
                Почему мне можно доверять:
              </h3>
              <ul className="space-y-3 text-[#181D27] font-semibold">
                {listItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                    custom={i}
                  >
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-[690px] w-full">
            {/* Right Side (Desktop текст) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[#535862] w-full space-y-4 text-left max-lg:hidden"
            >
              <p className="w-full">
                «Я не теоретик из бизнес-школы. <span className='text-[#535862] font-[700]'>38 миллионов рублей собственной задолженности </span> — это
                реальный опыт, который я прошел лично. Дикий разрушающий стресс, звонки кредиторов и
                коллекторов, бессонные ночи, чувство отчаяния и безысходности — все это было в моей
                жизни.
              </p>
              <p className="w-full">
                После того как смог выбраться из этой ситуации, понял важную вещь: <span className='text-[#535862] font-[700]'>большинство людей
                можно уберечь от банкротства</span> и разорения при комплексном анализе ситуации и выборе
                оптимальной стратегии. Но проблема в том, что задача финансовых и юридических
                компаний — ПРОДАТЬ, А НЕ ПОМОЧЬ! Их сотрудникам платят только за продажу кредитов и
                банкротства, а не за помощь людям.
              </p>
              <p className="w-full">
                <span className='text-[#535862] font-[700]'>Более 1500 человек </span> уже получили персональные планы и решили свои финансовые
                проблемы. Разработанная мною система диагностики финансового состояния действительно
                работает.»
              </p>
            </motion.div>

            {/* Mobile текст */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-700 space-y-4 text-left lg:hidden"
            >
              <p>
                <strong>Моя история:</strong> «Я не теоретик из университета. <span className='text-[#535862] font-[700]'>38 миллионов рублей собственного долга</span>
                — это то, через что я прошел лично. Дикий стресс, звонки кредиторов и коллекторов,
                бессонные ночи, чувство отчаяния и безысходности — все это было в моей жизни.
              </p>
              <p>
                После того как выбрался сам, понял: <span className='text-[#535862] font-[700]'>90% людей можно спасти от банкротства</span> при
                правильной диагностике. Но никто этого не делает — все продают то, что им САМИМ
                выгодно.
              </p>
              <p>
                <span className='font-[700]'>1500+ наших клиентов</span> уже получили персональные планы спасения. <span className='font-[700]'>8 из 10 избежали
                банкротства.</span> Система работает.»
              </p>
            </motion.div>
          </div>

          {/* Mobile список */}
          <div className="lg:hidden">
            <h3 className="text-[24px] md:text-xl mt-[20px] font-bold text-[#181d27] mb-4 text-left">
              Почему мне можно доверять:
            </h3>
            <ul className="space-y-3 text-gray-700 flex flex-col gap-[20px] font-[700]">
              {listItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                  custom={i}
                >
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </ContainerWrapper>
    </>
  );
}
