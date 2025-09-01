'use client'; // если Next.js 13+
import { motion } from 'framer-motion';
import type { CardProps } from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import CardSolvedCases from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const SolvedCases = ({ card }: { card: CardProps[] }) => {
  return (
    <ContainerWrapper>
      {/* Заголовки */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-[20px] mb-[96px] text-[#000]"
      >
        <h2 className="text-[32px] font-semibold">Примеры решенных ситуаций</h2>
        <p className="text-[20px] font-normal text-[#535862]">Разнообразие успешных кейсов</p>
      </motion.div>

      {/* Сетка карточек */}
      <div className="relative border border-b-[#E9EAEB] pb-[64px]">
        <div
          className="
      grid gap-[12px] mx-auto justify-items-center 
      grid-cols-1 md:grid-cols-3
      overflow-hidden
      max-h-[calc(4*300px)] md:max-h-[calc(6*300px)] 
    "
        >
          {card.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className={index % 3 === 1 ? 'lg:-translate-y-[32px] -translate-y-0' : ''}
            >
              <CardSolvedCases
                title={item.title}
                description={item.description}
                account={item.account}
              />
            </motion.div>
          ))}
        </div>

        {/* Градиент */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="
      pointer-events-none absolute bottom-0 left-0 w-full 
      h-[320px] bg-gradient-to-t from-white to-transparent
    "
        />
      </div>
    </ContainerWrapper>
  );
};

export default SolvedCases;
