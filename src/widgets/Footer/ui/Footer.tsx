import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

import logo from '../../../shared/assets/logo-finan.png';

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full text-black  bg-[#FAFAFA] justify-center">
        <ContainerWrapper>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center text-start my-[64px]">
              <ul className="max-w-[500px] w-full">
                <li>Мы в социальных сетях</li>
                <li>Instagram (личные истории и кейсы)</li>
                <li>Telegram (ежедневные советы и новости)</li>
                <li>YouTube (разборы и обучение)</li>
                <li>TikTok (короткие советы)</li>
                <li>VK (оф. сообщество Центра снижения кредитной нагрузки №1)</li>
                <li>Дзен (статьи и истории)</li>
              </ul>
              <ul className="max-w-[495px] w-full">
                <li>Служба поддержки</li>
                <li>Круглосуточная экстренная помощь:</li>
                <li>WhatsApp | Telegram | VK | MAX</li>
                <li>Консультации и диагностика: Ежедневно с 8:00 до 23:00 МСК</li>
                <li>Техническая поддержка:cskn24.7@gmail.com</li>
                <li>Юридические данные</li>
                <li>ООО ЦСКН1 ИНН: 1900013283 ОГРНИП: 1241900000605</li>
              </ul>
            </div>
            <div className="flex justify-between py-[33px] border-t-1 border-[#E9EAEB] w-full">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <div className="text-start">
                <ul>
                  <li>Согласие на обработку персональных данных</li>
                  <li>Политика обработки персональных данных</li>
                  <li>Договор-оферта</li>
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
