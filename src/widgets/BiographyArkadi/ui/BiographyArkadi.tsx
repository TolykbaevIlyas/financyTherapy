"use client";
import { Button } from "antd";
import ContainerWrapper from "../../../shared/ui/ContainerWrapper";
import arcadi from "../../../../public/arkadi.png";
import { motion } from "framer-motion";

const BiographyArkadi = () => {
  return (
    <ContainerWrapper>
      <div className="bg-[#1849A9] flex flex-col-reverse md:flex-row justify-between rounded-[24px] overflow-hidden">
        {/* Контент */}
        <motion.div
          className="flex flex-col gap-[48px] p-[32px] md:p-[64px] max-w-[700px] w-full text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-[20px] text-start">
            <motion.h2
              className="text-[28px] md:text-[36px] font-semibold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Аркадий Шевченко
            </motion.h2>
            <motion.p
              className="text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              «Знаю проблему изнутри. Помогаю выбрать лучший путь из возможных, а не продаю то, что
              ещё больше навредит»
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button type="primary" className="max-w-[305px]">
              ПОЛУЧИТЬ ПОМОЩЬ ЭКСПЕРТА
            </Button>
          </motion.div>
        </motion.div>

        {/* Фото */}
        <motion.div
          className="flex justify-center md:justify-end w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full md:w-auto rounded-t-[24px] md:rounded-t-[0px] md:rounded-r-[24px]"
            src={arcadi}
            alt="Аркадий Шевченко"
          />
        </motion.div>
      </div>
    </ContainerWrapper>
  );
};

export default BiographyArkadi;
