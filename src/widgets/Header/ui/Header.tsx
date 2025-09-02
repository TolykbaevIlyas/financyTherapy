import logo from '../../../shared/assets/logo.svg';

import { Button } from 'antd';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const Header = () => {
  return (
    <>
      <header className="w-full fixed bg-white" >
        <ContainerWrapper>
          <div className="flex justify-between px-[14px] items-center py-[13px] rounded-2xl border-0 lg:border-1 w-full border-gray-200  lg:mt-[24px]">
            <img src={logo} alt="Logo" className='max-w-[132px]'/>
            <div className="max-w-[177px] max-h-[40px] h-full w-full">
              <a
                href="https://api.whatsapp.com/message/CG4TEM4HZBQQA1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              ><Button className="w-full !h-[40px] !font-[600] font-[Inter]" type="primary" style={{
    boxShadow:
      "0 1px 2px 0 rgba(10, 13, 18, 0.05), inset 0 -2px 0 0 rgba(10, 13, 18, 0.05), inset 0 0 0 1px rgba(10, 13, 18, 0.18)"
  }}>
                Пройти диагностику
              </Button></a>
              
            </div>
          </div>
        </ContainerWrapper>
      </header>
    </>
  );
};

export default Header;
