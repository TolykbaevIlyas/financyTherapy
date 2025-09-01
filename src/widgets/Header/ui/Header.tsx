import logo from '../../../shared/assets/logo.svg';

import { Button } from 'antd';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const Header = () => {
  return (
    <>
      <header className="w-full">
        <ContainerWrapper>
          <div className="flex justify-between px-[14px] items-center py-[13px] rounded-2xl border-0 lg:border-1 w-full border-gray-200  lg:mt-[24px]">
            <img src={logo} alt="Logo" className='max-w-[132px]'/>
            <div className="max-w-[177px] max-h-[40px] h-full w-full">
              <Button className="w-full" type="primary">
                Пройти диагностику
              </Button>
            </div>
          </div>
        </ContainerWrapper>
      </header>
    </>
  );
};

export default Header;
