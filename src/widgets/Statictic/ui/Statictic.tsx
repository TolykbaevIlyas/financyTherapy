"use client"; // если Next.js 13+
import { motion } from "framer-motion";

const Statictic = () => {
  const stats = [
    {
      value: "1500+",
      text: <>человек <br/>получили персональные планы</>,
      textMobile: "персональных планов",
    },
    {
      value: "50%",
      text: <>нашли <br/>альтернативу банкротству</>,
      textMobile: "избежали банкротства",
    },
    {
      value: "от 40% до 80%",
      text: <>типичная экономия ежемесячных платежей</>,
      textMobile: "типичная экономия",
      desktopOnly: true,
    },
    {
      value: "от 10 до 90 дней",
      text: <>обычное время решения <br/>в зависимости от сложности</>,
      desktopOnly: true,
    },
    {
      value: "40-80%",
      textMobile: "типичная экономия",
      mobileOnly: true,
    },
  ];

  return (
    <section className='mt-[96px] '>
      {/* Заголовки */}
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-[36px] leading-[122%] font-[600] text-[#181d27] max-lg:hidden'
      >
        СТАТИСТИКА ПО НАШИМ КЛИЕНТАМ:
      </motion.h4>

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-[30px] leading-[122%] font-[600] text-[#181d27] lg:hidden'
      >
        НАША ПРАКТИКА:
      </motion.h4>

      {/* Сетка статистики */}
      <div className="relative mt-[64px] grid grid-cols-2 gap-4 w-full max-w-[1280px] mx-auto max-lg:grid-cols-1 max-lg:m-auto ">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#e9eaeb] max-lg:hidden"></div>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-[#e9eaeb] max-lg:hidden"></div>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`text-[#181d27] p-6 text-center max-w-[574px] w-full flex flex-col gap-[12px] ${
              stat.desktopOnly ? "max-lg:hidden" : ""
            } ${stat.mobileOnly ? "lg:hidden max-lg:m-auto" : "max-lg:m-auto"}`}
          >
            <h2 className='text-[#1570ef] text-[60px] font-[600] leading-[120%]'>{stat.value}</h2>
            {!stat.mobileOnly && (
              <p className='text-[18px] font-[600] leading-[156%] max-lg:hidden'>
                {stat.text}
              </p>
            )}
            {stat.textMobile && (
              <p className='text-[18px] font-[600] leading-[156%] lg:hidden'>
                {stat.textMobile}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA кнопки */}
      <a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-[96px] mb-[96px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition max-lg:hidden"
      >
        ПОЛУЧИТЬ ПЛАН ДЛЯ МОЕЙ СИТУАЦИИ
      </motion.button>
              </a>
      
<a
                href="https://wa.me/79535906427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-[96px] mb-[100px] cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition lg:hidden"
      >
        ПОЛУЧИТЬ РЕЗУЛЬТАТ
      </motion.button>
              </a>
      
    </section>
  );
};

export default Statictic;
