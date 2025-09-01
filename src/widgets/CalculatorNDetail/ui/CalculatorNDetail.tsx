"use client";
import { useState } from 'react';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const CalculatorAndDetails = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [hasMicro, setHasMicro] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const details = [
    {
      question: 'Как происходит сбор информации? Нужно ли приезжать в офис?',
      answer:
        'Весь процесс проходит онлайн через мессенджеры. Финансовый Терапевт задаёт вопросы, вы отвечаете в удобное время. Личные встречи не требуются.',
    },
    {
      question: 'Какие документы потребуются?',
      answer:
        'Для проведения диагностики достаточно ответить на вопросы Финансового Терапевта и предоставить выписки из бюро кредитных историй. Для реализации персонального плана, как правило, нужен базовый набор: справки о доходах, выписки по счетам, кредитные договоры. Если что-то отсутствует — подскажем альтернативные способы получения.',
    },
    {
      question: 'Насколько безопасно передавать финансовые данные?',
      answer:
        'Используем защищённые каналы, подписываем соглашение о конфиденциальности. Данные не передаются третьим лицам без вашего письменного согласия.',
    },
    {
      question: 'В каком виде я получу результаты диагностики?',
      answer:
        'Письменный отчет с планом действий в PDF + консультация по телефону/мессенджеру + контакты нужных специалистов. Всё объясняется простым языком с конкретными шагами.',
    },
    {
      question: 'Что если я не пойму рекомендации?',
      answer:
        'Объясняем до полного понимания. Можно задавать любые вопросы. При переводе к другому специалисту передаём детали вашего случая.',
    },
    {
      question: 'Сколько времени действуют результаты диагностики?',
      answer:
        'План действителен 1-3 месяца. При изменении ситуации корректируем рекомендации.',
    },
    {
      question: 'Работаете ли в выходные и праздники?',
      answer:
        'Принимаем заявки ежедневно. Обычно отвечаем в течение 30 минут.',
    },
  ];

  // Расчёты
  const interestRate = hasMicro ? 0.008 : 0.002;
  const fineRate = hasMicro ? 0.015 : 0.004;
  const dailyInterest = amount * interestRate;
  const dailyFine = amount * fineRate;
  const dailyLoss = dailyInterest + dailyFine;
  const monthlyLoss = dailyLoss * 30;
  const yearlyLoss = dailyLoss * 12;

  const formatCurrency = (value: number) =>
    value.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    });

  return (
    <section className="mt-[80px] text-black">
      <ContainerWrapper>
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-[600] text-[36px] leading-[122%] text-[#181d27]"
        >
          ПОСЧИТАЙТЕ ПОТЕРИ
        </motion.h2>

        {/* Калькулятор */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white border border-[#e9eaeb] rounded-lg p-6 mt-8 max-w-[768px] w-full mx-auto"
        >
          <h3 className="text-[30px] max-w-[670px] w-full text-left font-[600] leading-[127%] mb-4 text-[#181d27]">
            Узнайте, сколько денег вы теряете каждый день промедления
          </h3>
          <label className="block font-[500] text-[14px] leading-[143%] text-[#414651] mb-2 text-left">
            Введите общую сумму ваших долгов
          </label>
          <input
            type="number"
            value={amount}
            placeholder='1 000 000 ₽'
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-[#e9eaeb] rounded-md px-3 py-2 mb-4"
          />
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hasMicro}
              onChange={() => setHasMicro(!hasMicro)}
              className="hidden peer"
            />
            <span className="w-5 h-5 border border-[#e9eaeb] rounded-sm flex items-center justify-center peer-checked:bg-[#1570ef] peer-checked:border-[#1570ef]">
              {hasMicro && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            Есть микрозаймы
          </label>

          <div className="text-[16px] leading-[156%] space-y-2 flex flex-col gap-[24px]">
            <p className="text-left text-[18px] leading-[156%] font-[500] text-[#181d27]">
              Ваши ежедневные потери:
            </p>
            <div className="flex flex-col gap-[16px]">
              <div className="w-full flex justify-between font-[400] text-[18px] text-[#181d27]">
                <p>На процентах:</p>
                <p>{formatCurrency(dailyInterest)}</p>
              </div>
              <div className="w-full flex justify-between font-[400] text-[18px] text-[#181d27]">
                <p>На штрафах при просрочке:</p>
                <p>{formatCurrency(dailyFine)}</p>
              </div>
              <div className="w-full flex justify-between font-[400] text-[18px] text-[#181d27]">
                <p>Упущенная выгода:</p>
                <p>{formatCurrency(dailyLoss)}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-full flex justify-between">
                <p className="font-[600] text-[18px] text-[#181d27]">
                  За месяц это составит:
                </p>
                <p className="font-[600] text-[18px] text-[#181d27]">
                  {formatCurrency(monthlyLoss)}
                </p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-[600] text-[18px] text-[#181d27]">
                  За год это составит:
                </p>
                <p className="font-[600] text-[18px] text-[#181d27]">
                  {formatCurrency(yearlyLoss)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Кнопка калькулятора */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="cursor-pointer max-w-[768px] w-full mt-[64px] bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block"
        >
          ОСТАНОВИТЬ РОСТ ДОЛГА
        </motion.button>

        {/* FAQ */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[36px] font-[600] leading-[122%] text-[#181d27] mt-[128px] max-lg:hidden"
        >
          ТЕХНИЧЕСКИЕ ДЕТАЛИ ПРОЦЕССА
        </motion.h2>

        <div className="max-w-[768px] w-full mx-auto mt-8 space-y-2 max-lg:hidden">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#e9eaeb] last:border-0 pt-[24px] pb-[32px] cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center text-left">
              <p className="font-[600] leading-[150%] text-[#181d27] text-[18px]">
                {item.question}
              </p>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition"
              >
                {openIndex === index ? (
                  // Минус
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11.333H15M21 11.333C21 16.8559 16.5228 21.333 11 21.333C5.47715 21.333 1 16.8559 1 11.333C1 5.81016 5.47715 1.33301 11 1.33301C16.5228 1.33301 21 5.81016 21 11.333Z"
                      stroke="#A4A7AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  // Плюс
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 7.33301V15.333M7 11.333H15M21 11.333C21 16.8559 16.5228 21.333 11 21.333C5.47715 21.333 1 16.8559 1 11.333C1 5.81016 5.47715 1.33301 11 1.33301C16.5228 1.33301 21 5.81016 21 11.333Z"
                      stroke="#A4A7AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#535862] font-[400] text-[16px] text-left mt-2 leading-[150%]"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Кнопка FAQ */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-lg:hidden max-w-[768px] w-full mt-6 bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block"
        >
          УТОЧНИТЬ ДЕТАЛИ
        </motion.button>
      </ContainerWrapper>
    </section>
  );
};

export default CalculatorAndDetails;
