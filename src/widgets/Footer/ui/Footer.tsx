import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

import logo from '../../../shared/assets/logo-finan.png';

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full text-black px-[20px] lg:px-0 bg-[#FAFAFA] justify-center">
        <ContainerWrapper>
          <div className="flex  flex-col w-full">
            <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-0  justify-between items-center text-start my-[64px]">
              <ul className="max-w-[500px] w-full flex flex-col gap-[12px]">
                <li className="text-[14px] font-[400px] text-[#717680] mb-[5px]">
                  Мы в социальных сетях
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  Instagram (личные истории и кейсы)
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  Telegram (ежедневные советы и новости)
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  YouTube (разборы и обучение)
                </li>
                <li className="text-[16px] font-bold text-[#535862]">TikTok (короткие советы)</li>
                <li className="text-[16px] font-bold text-[#535862]">
                  VK (оф. сообщество Центра снижения кредитной нагрузки №1)
                </li>
                <li className="text-[16px] font-bold text-[#535862]">Дзен (статьи и истории)</li>
              </ul>
              <ul className="max-w-[495px] w-full flex flex-col gap-[17px]">
                <li className="text-[14px] font-[400px] text-[#717680]">Служба поддержки</li>
                <div className="flex flex-col gap-[12px] mb-[30px] ">
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Круглосуточная экстренная помощь:
                    <li className="text-[16px] font-[400px] text-[#535862]">
                      WhatsApp | Telegram | VK | MAX
                    </li>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Консультации и диагностика: Ежедневно с 8:00 до 23:00 МСК
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Техническая поддержка:cskn24.7@gmail.com
                  </li>
                </div>
                <li className="text-[14px] font-[400px] text-[#717680]">Юридические данные</li>
                <li className="text-[16px] font-[400px] text-[#535862]">
                  ООО ЦСКН1 ИНН: 1900013283 ОГРНИП: 1241900000605
                </li>
              </ul>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-[32px] lg:gap-0  py-[33px] border-t-1 border-[#E9EAEB] w-full">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <div className="text-start">
                <ul className="flex lg:flex-row flex-col gap-[12px] lg:gap-[24px]">
                  <li className="text-[16px] font-[400px] text-[#717680]">
                    Согласие на обработку персональных данных
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680]">
                    Политика обработки персональных данных
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680]">Договор-оферта</li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </footer>
    </>
  );
};

export default Footer;
