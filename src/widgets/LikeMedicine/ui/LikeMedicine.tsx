
import { motion } from "framer-motion";
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const LikeMedicine = () => {
  return (
    <div className="pt-[96px]">
      <ContainerWrapper>
        <div className='flex flex-col '>

          {/* Заголовки */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col gap-[24px]'
          >
            <h3 className='max-w-[1024px] w-full m-auto text-[60px] leading-[120%] text-[#181d27] font-[600] max-lg:hidden'>
              КАК В МЕДИЦИНЕ — СНАЧАЛА К ТЕРАПЕВТУ, ПОТОМ К СПЕЦИАЛИСТУ
            </h3>
            <p className='text-[20px] leading-[150%] font-[400] text-[#535862] max-lg:hidden'>
              ИСПОЛЬЗУЕМ МЕДИЦИНСКИЙ ПОДХОД К ФИНАНСОВОМУ ОЗДОРОВЛЕНИЮ
            </p>

            <h3 className='max-w-[343px] text-[36px] w-full m-auto leading-[120%] text-[#181d27] font-[600] lg:hidden'>
              КАК ВРАЧ, НО ДЛЯ ФИНАНСОВ
            </h3>
            <p className='max-w-[353px] mb-[64px] m-auto w-full text-[18px] leading-[150%] font-[400] text-[#535862] lg:hidden'>
              ИСПОЛЬЗУЕМ МЕДИЦИНСКИЙ ПОДХОД К ФИНАНСОВОМУ ОЗДОРОВЛЕНИЮ
            </p>
          </motion.div>

          {/* Сравнение */}
          <div className='flex justify-center lg:pt-[20px] max-lg:flex-col max-lg:m-auto max-lg:gap-[32px]'>

            {/* Левая колонка */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className='flex flex-col gap-[24px] max-w-[568px] w-full'
            >
              <h6 className='text-[30px] leading-[127%] text-[#000] font-[500]'>ВРАЧ-ТЕРАПЕВТ</h6>
              <ul className='flex flex-col gap-[12px] max-w-[355px] w-full m-auto text-[#414651] text-[18px] font-[400] leading-[156%] text-left'>
                <li>1. Диагностика физического состояния</li>
                <li>2. Персональный план лечения</li>
                <li>3. Направление к нужному врачу</li>
                <li>4. Контроль хода лечения</li>
              </ul>
            </motion.div>

            {/* Разделительная линия */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='h-[211px] border-[1px] border-[#e9eaeb] max-lg:hidden'
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='border-[1px] border-[#e9eaeb] max-w-[343px] w-full lg:hidden'
            ></motion.div>

            {/* Правая колонка */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className='flex flex-col gap-[24px] max-w-[568px] w-full'
            >
              <h6 className='text-[30px] leading-[127%] text-[#000] font-[500]'>ФИНАНСОВЫЙ ТЕРАПЕВТ</h6>
              <ul className='flex flex-col gap-[12px] max-w-[405px] w-full m-auto text-[#414651] text-[18px] font-[400] leading-[156%] text-left'>
                <li>1. Диагностика финансового состояния</li>
                <li>2. Персональный план снижения платежей</li>
                <li>3. Направление к профильному специалисту</li>
                <li>4. Сопровождение до результата</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default LikeMedicine;
