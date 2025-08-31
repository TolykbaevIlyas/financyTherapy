import React, { useState } from 'react';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CalculatorAndDetails = () => {
  const [amount, setAmount] = useState(1000000);
  const [hasMicro, setHasMicro] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  

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

  const formatCurrency = (value) =>
    value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

  return (
    <section className="mt-[80px] text-black">
      <ContainerWrapper>
        {/* Калькулятор */}
        <h2 className="text-center font-[600] text-[36px] leading-[122%] text-[#181d27]">
          ПОСЧИТАЙТЕ ПОТЕРИ
        </h2>
        <div className="bg-white border border-[#e9eaeb] rounded-lg p-6 mt-8 max-w-[768px] w-full mx-auto">
          <h3 className="text-[30px] max-w-[670px] w-full text-left font-[600] leading-[127%] mb-4 text-[#181d27]">
            Узнайте, сколько денег вы теряете каждый день промедления
          </h3>
          <label className="block font-[500] text-[14px] leading-[143%] text-[#414651] mb-2 text-left">Введите общую сумму ваших долгов</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-[#e9eaeb] rounded-md px-3 py-2 mb-4"
          />
          <label className="flex items-center mb-4 gap-2">
            <input
              type="checkbox"
              checked={hasMicro}
              onChange={() => setHasMicro(!hasMicro)}
            />
            Есть микрозаймы
          </label>

          <div className="text-[16px] leading-[156%] space-y-2 flex flex-col gap-[24px]">
            <p className='text-left text-[18px] leading-[156%] font-[500] text-[#181d27]'>Ваши ежедневные потери:</p>
            <div className='flex flex-col gap-[16px]'>
                <div className='w-full flex justify-between font-[400] text-[18px] text-[#181d27]'>
                    <p className='max-lg:max-w-[129px] max-lg:w-full'>На процентах:</p>
                    <p>{formatCurrency(dailyInterest)}</p>
                </div>
                <div className='w-full flex justify-between font-[400] text-[18px] text-[#181d27]'>
                    <p className='max-lg:max-w-[130px] max-lg:w-full max-lg:text-left'>На штрафах при просрочке:</p>
                    <p>{formatCurrency(dailyFine)}</p>
                </div>
                <div className='w-full flex justify-between font-[400] text-[18px] text-[#181d27]'>
                    <p className='max-lg:max-w-[130px] max-lg:w-full max-lg:text-left'>Упущенная выгода:</p>
                    <p>{formatCurrency(dailyLoss)}</p>
                </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='w-full flex justify-between'> 
                    <p className='font-[600] text-[18px] text-[#181d27] max-lg:max-w-[130px] max-lg:w-full max-lg:text-left'>За месяц это составит:</p>
                    <p className='font-[600] text-[18px] text-[#181d27]'>{formatCurrency(monthlyLoss)}</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='font-[600] text-[18px] text-[#181d27] max-lg:max-w-[130px] max-lg:w-full max-lg:text-left'>За год это составит:</p>
                    <p className='font-[600] text-[18px] text-[#181d27]'>{formatCurrency(yearlyLoss)}</p>
                </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer max-w-[768px] w-full mt-[64px] bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block">
          ОСТАНОВИТЬ РОСТ ДОЛГА
        </button>

        {/* FAQ */}
        <h2 className="text-center text-[36px] font-[600] leading-[122%] text-[#181d27] mt-[128px] max-lg:hidden">
          ТЕХНИЧЕСКИЕ ДЕТАЛИ ПРОЦЕССА
        </h2>
        <div className="max-w-[768px] w-full mx-auto mt-8 space-y-2 max-lg:hidden">
          {details.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#e9eaeb] py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between text-left">
                <p className="font-[600] leading-[150%] text-[#181d27] text-[18px] ">{item.question}</p>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openIndex === index && (
                <p className="text-[#535862] font-[400] text-[16px] text-left mt-2 leading-[150%]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <button className="max-lg:hidden max-w-[768px] w-full mt-6 bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block">
          УТОЧНИТЬ ДЕТАЛИ
        </button>
      </ContainerWrapper>
    </section>
  );
};

export default CalculatorAndDetails;
