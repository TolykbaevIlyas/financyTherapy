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
                  <a href="">Мы в социальных сетях</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">Instagram (личные истории и кейсы)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">Telegram (ежедневные советы и новости)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">YouTube (разборы и обучение)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">TikTok (короткие советы)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">VK (оф. сообщество Центра снижения кредитной нагрузки №1)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862]">
                  <a href="">Дзен (статьи и истории)</a>
                </li>
              </ul>
              <ul className="max-w-[495px] w-full flex flex-col gap-[17px]">
                <li className="text-[14px] font-[400px] text-[#717680]">
                  <a href="">Служба поддержки</a>
                </li>
                <div className="flex flex-col gap-[12px] mb-[30px] ">
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    <a href="">Круглосуточная экстренная помощь:</a>
                    <li className="text-[16px] font-[400px] text-[#535862]">
                      <a href="">
                        <span className="underline">WhatsApp</span> |{' '}
                        <span className="underline">Telegram</span> |{' '}
                        <span className="underline">VK</span> |{' '}
                        <span className="underline">MAX</span>
                      </a>
                    </li>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    <a href="">Консультации и диагностика:</a> Ежедневно с 8:00 до 23:00 МСК
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    <a href="">Техническая поддержка:</a> cskn24.7@gmail.com
                  </li>
                </div>
                <li className="text-[14px] font-[400px] text-[#717680]">
                  <a href="">Юридические данные</a>
                </li>
                <li className="text-[16px] font-[400px] text-[#535862]">
                  <a href="">ООО ЦСКН1 ИНН: 1900013283 ОГРНИП: 1241900000605</a>
                </li>
              </ul>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[32px] lg:gap-0  py-[33px] border-t-1 border-[#E9EAEB] w-full">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <div className="text-start">
                <ul className="flex lg:flex-row flex-col gap-[12px] lg:gap-[24px]">
                  <li className="text-[16px] font-[400px] text-[#717680]">
                    <a href="">Согласие на обработку персональных данных</a>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680]">
                    <a href="">Политика обработки персональных данных</a>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680]">
                    <a href="">Договор-оферта</a>
                  </li>
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
