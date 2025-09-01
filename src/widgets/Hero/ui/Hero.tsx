
import { motion } from "framer-motion";
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import { Checklist } from '../../../entities/checklist';
import CardFeaturesSect from '../../../entities/CardFeaturesSect';
import Situation from '../../../shared/assets/icons/Situation';
import Plan from '../../../shared/assets/icons/Plan';
import Specialist from '../../../shared/assets/icons/Specialist';

const Hero = () => {
  const symptoms = [
    { id: "1", text: "Платежи съедают больше 50% дохода?", textM:"Платежи >50% дохода?" },
    { id: "2", text: "Берете новые кредиты для оплаты старых?",textM:"Новые кредиты на старые?" },
    { id: "3", text: "Живете на микрозаймы?",textM:"Живешь на микрозаймы?" },
    { id: "4", text: "Получаете звонки от коллекторов?",textM: "Звонят коллекторы?"},
    { id: "5", text: "Скрываете финансовые проблемы от близких?", textM:"Скрываешь от близких?"},
    { id: "6", text: "Думаете о банкротстве, но не уверены, что это выход?", textM:"Думаешь о банкротстве?" },
  ];

  const featuresWhyNotMobile = [
  {
    icon: <Situation />,
    title: 'Анализ ситуации',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Plan />,
    title: 'Персональный план',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Specialist />,
    title: 'Профильный специалист',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
];

  return (
    <section className="text-black mt-[96px] w-full">
      <ContainerWrapper>
        <div className='flex flex-col gap-[64px] max-lg:gap-[48px]'>

          {/* Заголовок с анимацией */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col gap-[24px] max-w-[1124px] w-full m-auto'
          >
            <h1 className='text-[60px] font-semibold max-lg:text-[30px] max-lg:text-center max-lg:max-w-[323px] max-lg:m-auto'>
              СНИЗЬ ЕЖЕМЕСЯЧНЫЕ ПЛАТЕЖИ НА 40-80%
            </h1>
            <p className='max-w-[870px] w-full m-auto text-[20px] font-[400] text-[#535862] max-lg:hidden'>
              Комплексная диагностика финансового состояния и персональный план действий. 
              Как врач-терапевт ставит диагноз — так мы анализируем ваши финансы.
            </p>
          </motion.div>

          {/* Контент */}
          <div className='flex gap-[96px] m-auto max-lg:flex-col'>
            {/* Левая колонка */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className='flex flex-col gap-[20px] max-w-[512px] w-full max-lg:m-auto'
            >
              <img className='max-w-[48px] w-full h-[49px]' src='/assets/images/Logo.svg' alt="Logo" />
              <h3 className='text-[30px] leading-[127%] text-[#181d27] text-left font-[600] max-lg:hidden'>
                СИМПТОМЫ, С КОТОРЫМИ ПОМОГАЕТ ФИНАНСОВЫЙ ТЕРАПЕВТ:
              </h3>
              <h3 className='text-[24px] leading-[133%] text-[#181d27] text-left font-[600] lg:hidden'>
                Ваши симптомы:
              </h3>
              <div className='mt-[32px]'>
                <Checklist items={symptoms}/>
              </div>

              {/* Mobile features */}
              <div className='text-[#000] m-auto flex-col py-[64px] lg:pt-[96px] lg:pb-[160px] items-center gap-[48px] lg:gap-[96px] w-full lg:hidden'>
                <h2 className="text-4xl font-semibold text-[#181D27]">КОМПЛЕКСНОЕ РЕШЕНИЕ:</h2>
                <div className="flex flex-col lg:flex-row gap-[48px] mt-[48px]">
                  {featuresWhyNotMobile.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
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
            </motion.div>

            {/* Правая картинка */}
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className='max-w-[528px] w-full h-[512px] max-lg:hidden'
              src='/assets/images/Hero.png'
              alt="Hero"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className='max-w-[343px] w-full h-[343px] lg:hidden m-auto'
              src='/assets/images/HeroMobile.svg'
              alt="Hero Mobile"
            />
          </div>

          {/* Нижний заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className='m-auto max-w-[768px] w-full mb-[64px]'
          >
            <h3 className='text-[36px] font-[600] leading-[122%] max-lg:hidden'>
              КОМПЛЕКСНОЕ РЕШЕНИЕ: <br/> ДИАГНОСТИКА + ПЕРСОНАЛЬНЫЙ ПЛАН
            </h3>
          </motion.div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default Hero;
