"use client";
import ContainerWrapper from "../../../shared/ui/ContainerWrapper";
import { motion } from "framer-motion";

export default function DebtWarningBlock() {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    }),
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:flex-row items-center justify-between max-w-6xl mx-auto mt-[250px] max-lg:mt-[100px]">
      <ContainerWrapper>
        {/* Заголовки */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[36px] font-[600] text-[#181d27] leading-[122%] text-left max-lg:hidden"
        >
          ЧТО БУДЕТ, ЕСЛИ НИ-ЧЕ-ГО НЕ ДЕЛАТЬ
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[30px] font-[600] text-[#181d27] leading-[127%] text-left lg:hidden"
        >
          ПОСЛЕДСТВИЯ БЕЗДЕЙСТВИЯ
        </motion.h2>

        <div className="flex mt-[64px] max-lg:flex-col">
          {/* Desktop список */}
          <div className="text-left w-full space-y-6 max-w-[560px] max-lg:hidden">
            {[
              {
                title: "ЧЕРЕЗ 1 МЕСЯЦ:",
                items: [
                  "Долг вырастет на 15-30% (штрафы, пени)",
                  "Кредитная история окончательно испортится",
                  "Стресс начнет разрушать здоровье",
                ],
              },
              {
                title: "ЧЕРЕЗ 3 МЕСЯЦА:",
                items: [
                  "Коллекторы начнут терроризировать семью",
                  "Банки подадут в суд",
                  "Приставы арестуют счета",
                  "Близкие узнают о долгах",
                ],
              },
              {
                title: "ЧЕРЕЗ 6 МЕСЯЦЕВ:",
                items: [
                  "Опишут и арестуют имущество",
                  "Запретят выезд за границу",
                  "Возникнет риск потерять работу",
                  "Семья начнет разваливаться",
                ],
              },
              {
                title: "ЧЕРЕЗ 1 ГОД:",
                items: [
                  "Имущество продадут за полцены",
                  "Банкротство станет единственным выходом",
                  "Потеряете ВСЁ накопленное",
                  "Дети будут стыдиться родителей",
                ],
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={variants}
                className="space-y-2"
              >
                <h3 className="font-[600] text-[18px] leading-[156%] text-[#181d27]">
                  {block.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 font-[400] text-[16px] leading-[150%] text-[#535862]">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Важно */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={variants}
              className="pt-4"
            >
              <p className="font-[600] text-[18px] leading-[156%] text-[#181d27] underline">
                ВАЖНО ПОНИМАТЬ:
              </p>
              <p className="font-[600] text-[18px] leading-[156%] text-[#181d27]">
                Чем раньше начать решение проблемы, тем больше вариантов остается
                доступными = больше ресурсов удается сохранить.
              </p>
            </motion.div>
          </div>

          {/* Mobile список */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:hidden max-w-[343px] w-full text-left flex flex-col gap-[20px]"
          >
            <div>
              <h3 className="font-[500] text-[18px] leading-[156%] text-[#181d27]">
                1 МЕСЯЦ:
              </h3>
              <p className="text-[16px] text-[#535862]">+15-30% к долгу</p>
            </div>
            <div>
              <h3 className="font-[500] text-[18px] leading-[156%] text-[#181d27]">
                3 МЕСЯЦА:
              </h3>
              <p className="text-[16px] text-[#535862]">
                Суды, коллекторы, арест счетов
              </p>
            </div>
            <div>
              <h3 className="font-[500] text-[18px] leading-[156%] text-[#181d27]">
                6 МЕСЯЦЕВ:
              </h3>
              <p className="text-[16px] text-[#535862]">
                Опись имущества, проблемы в семье, риск потери работы
              </p>
            </div>
            <div>
              <h3 className="font-[500] text-[18px] leading-[156%] text-[#181d27]">
                1 ГОД:
              </h3>
              <p className="text-[16px] text-[#535862]">
                Банкротство неизбежно, имущество продадут за полцены, полное
                разорение
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0"
          >
            <img
              src="/assets/images/Warning.svg"
              alt=""
              className="max-w-[576px] w-full h-[752px] max-lg:hidden"
            />
            <img
              src="/assets/images/WarningMobile.svg"
              alt=""
              className="max-w-[343px] w-full h-[458px] lg:hidden"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full text-center mt-[64px] max-lg:mt-[48px]"
        >
          <h3 className="text-[30px] font-[600] leading-[127%] text-[#181d27] mb-4 max-lg:hidden">
            НЕ ДАЙТЕ ЭТОМУ СЛУЧИТЬСЯ С ВАШЕЙ СЕМЬЕЙ!
          </h3>
          <button className="max-lg:hidden max-w-[768px] w-full mt-6 bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block">
            НЕ ОТКЛАДЫВАТЬ — ПОЛУЧИТЬ ПЛАН СЕЙЧАС
          </button>

          <h3 className="lg:hidden text-[30px] font-[600] leading-[127%] text-[#181d27] mb-4 ">
            НАЧНИТЕ РЕШЕНИЕ СЕГОДНЯ!
          </h3>
          <button className="lg:hidden max-w-[768px] w-full mt-6 bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block">
            ПОЛУЧИТЬ ПЛАН СЕЙЧАС
          </button>
        </motion.div>
      </ContainerWrapper>
    </section>
  );
}
