import logo from '../../../shared/assets/logo-finan.png';

import { Button } from 'antd';

const Header = () => {
  return (
    <>
      <header className="rounded-2xl border-1 border-gray-200 mt-[24px]">
        <div className="flex justify-between px-[14px] items-center py-[13px]">
          <img src={logo} alt="Logo" />
          <div className="max-w-[177px] max-h-[40px] h-full w-full">
            <Button className="w-full" type="primary">
              Пройти диагностику
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
