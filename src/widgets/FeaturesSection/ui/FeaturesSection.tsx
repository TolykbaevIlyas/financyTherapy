
import { motion } from "framer-motion";
import CardFeaturesSect from '../../../entities/CardFeaturesSect';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import type { IFeature } from '../types';

const FeaturesSection = ({ title, card, className }: IFeature) => {
  return (
    <ContainerWrapper>
      <div
        className={`text-[#000] flex-col py-[64px] lg:pt-[96px] lg:pb-[160px] items-center gap-[48px] lg:gap-[96px] w-full ${className}`}
      >
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[30px] font-semibold text-[#181D27]"
        >
          {title}
        </motion.h2>

        {/* Карточки */}
        <div className="flex flex-col lg:flex-row gap-[48px]">
          {card.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CardFeaturesSect
                icon={item.icon}
                title={item.title}
                description={item.description}
                maxWidth={item.maxWidth}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default FeaturesSection;
