'use client';
import { Button } from 'antd';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import arcadi from '../../../../public/arkadi.png';
import { motion } from 'framer-motion';

const BiographyArkadi = () => {
  return (
    <ContainerWrapper>
      <div className="bg-[#1849A9] flex flex-col-reverse md:flex-row gap-[64px] rounded-[24px] overflow-hidden max-w-[1216px] w-full">
        {/* Контент */}
        <motion.div
          className="flex flex-col gap-[40px] justify-start md:py-[64px] md:pl-[64px] max-w-[700px] w-full text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-[20px] text-start max-lg:max-w-[295px] max-lg:m-auto">
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
              className="max-w-[648px] w-full text-[16px] -pr-[40px] md:text-[20px] font-normal leading-[24px] md:leading-[30px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              «Знаю проблему изнутри. Помогаю выбрать лучший путь из возможных, а не продаю то, что
              ещё больше навредит»
            </motion.p>
          </div>

          <div className="flex justify-start  w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[305px] w-full max-lg:hidden"
            >
              <a
                href="https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              ><Button type="primary" className="w-full !h-[48px] !font-[600] !text-[16px] hover:!bg-[#175CD3]">
                ПОЛУЧИТЬ ПОМОЩЬ ЭКСПЕРТА
              </Button></a>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[295px] w-full lg:hidden m-auto mb-[48px]"
            >
              <a
                href="https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}
              ><Button type="primary" className="w-full !h-[48px] !font-[600] !text-[16px]">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </Button></a>
              
            </motion.div>
          </div>
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
