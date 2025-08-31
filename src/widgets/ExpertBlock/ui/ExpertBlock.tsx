"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ExpertBlock() {
  const listItems = [
    "Прошел через долги лично",
    "Знаю все схемы и способы изнутри",
    "Не продаю кредиты и банкротство",
    "Работаю только в ваших интересах",
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
    <section className="w-full bg-white py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-left md:text-3xl font-bold text-black">
            АРКАДИЙ ШЕВЧЕНКО
          </h2>
          <p className="uppercase text-gray-600 font-semibold mt-2 text-left underline">
            ЭКСПЕРТ С ЛИЧНЫМ ОПЫТОМ
          </p>
        </motion.div>

        {/* Desktop список */}
        <div className="max-lg:hidden">
          <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-left">
            Почему мне можно доверять:
          </h3>
          <ul className="space-y-3 text-gray-700">
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

      {/* Right Side (Desktop текст) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-700 space-y-4 text-left max-lg:hidden"
      >
        <p>
          «Я не теоретик из бизнес-школы. 38 миллионов рублей собственной
          задолженности — это реальный опыт, который я прошел лично. Дикий
          разрушающий стресс, звонки кредиторов и коллекторов, бессонные ночи,
          чувство отчаяния и безысходности — все это было в моей жизни.
        </p>
        <p>
          После того как смог выбраться из этой ситуации, понял важную вещь:
          большинство людей можно уберечь от банкротства и разорения при
          комплексном анализе ситуации и выборе оптимальной стратегии. Но
          проблема в том, что задача финансовых и юридических компаний — ПРОДАТЬ,
          А НЕ ПОМОЧЬ! Их сотрудникам платят только за продажу кредитов и
          банкротства, а не за помощь людям.
        </p>
        <p>
          Более 1500 человек уже получили персональные планы и решили свои
          финансовые проблемы. Разработанная мною система диагностики
          финансового состояния действительно работает.»
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
          Моя история: «Я не теоретик из университета. 38 миллионов рублей
          собственного долга — это то, через что я прошел лично. Дикий стресс,
          звонки кредиторов и коллекторов, бессонные ночи, чувство отчаяния и
          безысходности — все это было в моей жизни.
        </p>
        <p>
          После того как выбрался сам, понял: 90% людей можно спасти от
          банкротства при правильной диагностике. Но никто этого не делает — все
          продают то, что им САМИМ выгодно.
        </p>
        <p>
          1500+ наших клиентов уже получили персональные планы спасения. 8 из 10
          избежали банкротства. Система работает.»
        </p>
      </motion.div>

      {/* Mobile список */}
      <div className="lg:hidden">
        <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-left">
          Почему мне можно доверять:
        </h3>
        <ul className="space-y-3 text-gray-700">
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
  );
}
