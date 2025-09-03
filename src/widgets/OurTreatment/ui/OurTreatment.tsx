
import { motion } from "framer-motion";
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { Checklist } from '../../../entities/checklist';

const OurTreatment = () => {
  const symptoms = [
    { id: "1", text: "Полная непредвзятость — не продаем кредиты и банкротство", textM:"10 способов решения" },
    { id: "2", text: "10 способов снижения долгов — выбираем лучший для ВАС", textM:"Выбираем лучший для ВАС" },
    { id: "3", text: "AI + 4.5 года опыта + 1500 успешных кейсов", textM:"Помощь вместо продаж" },
    { id: "4", text: "Вместо продажи ненужных услуг — помогаем решить проблему", textM: "" },
  ];

  return (
    <section className="text-black mt-[96px] w-full mb-[127px]">
      <ContainerWrapper>
        <div className='flex flex-col gap-[64px]'>

          {/* Контент с картинкой */}
          <div className='flex gap-[96px] max-lg:gap-[48px] m-auto max-lg:flex-col-reverse'>
            
            {/* Desktop картинка */}
            <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className='max-w-[528px] w-full h-[512px] max-lg:hidden'
              src='/assets/images/Treatment.png'
              alt="Treatment"
            />

            {/* Mobile картинка */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className='max-w-[343px] w-full h-[343px] lg:hidden m-auto'
              src='/assets/images/TreatmentMobile.svg'
              alt="Treatment Mobile"
            />

            {/* Текстовый блок */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className='flex flex-col gap-[20px] max-w-[480px] w-full'
            >
              <img className='max-w-[48px] w-full h-[49px]' src='/assets/images/Logo.svg' alt="Logo" />
              <h3 className='text-[30px] leading-[127%] text-[#181d27] text-left font-[600]'>НАШ ПОДХОД:</h3>
              <div className='mt-[32px]'>
                <Checklist items={symptoms}/>
              </div>
            </motion.div>
          </div>

          {/* CTA кнопки */}
          <a
                href="https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="max-lg:hidden"
              >
                <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}
            className="max-lg:hidden cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            УЗНАТЬ ОПТИМАЛЬНЫЙ СПОСОБ ДЛЯ МЕНЯ
          </motion.button>
              </a>
          

<a
                href="https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              ><motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}
            className="lg:hidden cursor-pointer bg-[#1570ef] max-w-[1152px] w-full h-[48px] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            УЗНАТЬ СВОЙ СПОСОБ
          </motion.button></a>
          
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default OurTreatment;
