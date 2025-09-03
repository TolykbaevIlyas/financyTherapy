import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

import logo from '../../../shared/assets/logo.svg';

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
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arkadiyshevchenko/profilecard">Instagram (личные истории и кейсы)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://t.me/cskn_1">Telegram (ежедневные советы и новости)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@arkadiy.shevchenko">YouTube (разборы и обучение)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@arkadiy.shevchenko">TikTok (короткие советы)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://vk.com/arkadiy.shevchenko">VK (оф. сообщество Центра снижения кредитной нагрузки №1)</a>
                </li>
                <li className="text-[16px] font-bold text-[#535862] hover:text-[#175CD3]">
                  <a target="_blank" rel="noopener noreferrer" href="https://dzen.ru/arkadiy_shevchenko?share_to=link">Дзен (статьи и истории)</a>
                </li>
              </ul>
              <ul className="max-w-[495px] w-full flex flex-col gap-[17px]">
                <li className="text-[14px] font-[400px] text-[#717680]">
                  Служба поддержки
                </li>
                <div className="flex flex-col gap-[12px] mb-[30px] ">
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Круглосуточная экстренная помощь:
                    <li className="text-[16px] font-[400px] text-[#535862]">
                      <a href="">
                        <span className="underline hover:text-[#175CD3]"><a href='https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0' target="_blank" rel="noopener noreferrer">WhatsApp</a></span> |{' '}
                        <span className="underline hover:text-[#175CD3]"><a href="https://t.me/arkadyshevchenko" target="_blank" rel="noopener noreferrer">Telegram</a></span> |{' '}
                        <span className="underline hover:text-[#175CD3]"><a href="https://vk.com/?u=2&to=L3dyaXRlODMwMzYyOTUz" target="_blank" rel="noopener noreferrer">VK</a></span> |{' '}
                        <span className="underline hover:text-[#175CD3]"><a href="https://max.ru/u/f9LHodD0cOKQfH2_R_J3u2qI8k7Jer4mC5R1QlyvEP9Lp-m2848MFDqDmN4" target="_blank" rel="noopener noreferrer">MAX</a></span>
                      </a>
                    </li>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Консультации и диагностика: Ежедневно с 8:00 до 23:00 МСК
                  </li>
                  <li className="text-[16px] font-[400px] text-[#535862]">
                    Техническая поддержка: cskn24.7@gmail.com
                  </li>
                </div>
                <li className="text-[14px] font-[400px] text-[#717680]">
                  Юридические данные
                </li>
                <li className="text-[16px] font-[400px] text-[#535862]">
                  ООО ЦСКН1 ИНН: 1900013283 ОГРНИП: 1241900000605
                </li>
              </ul>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[32px] lg:gap-0  py-[33px] border-t-1 border-[#E9EAEB] w-full">
              <div className="mr-auto">
                <img src={logo} alt="" />
              </div>
              <div className="text-start">
                <ul className="flex lg:flex-row flex-col gap-[12px] lg:gap-[24px]">
                  <li className="text-[16px] font-[400px] text-[#717680] hover:text-[#175CD3]">
                    <a href="/assets/docs/Согласие на обработку персональных данных.pdf" target="_blank" rel="noopener noreferrer">Согласие на обработку персональных данных</a>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680] hover:text-[#175CD3]">
                    <a href="/assets/docs/Политика обработки персональных данных.pdf" target="_blank" rel="noopener noreferrer">Политика обработки персональных данных</a>
                  </li>
                  <li className="text-[16px] font-[400px] text-[#717680] hover:text-[#175CD3]">
                    <a href="/assets/docs/Договор-оферта.pdf" target="_blank" rel="noopener noreferrer">Договор-оферта</a>
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
