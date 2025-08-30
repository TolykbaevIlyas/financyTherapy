import { Button } from 'antd';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import arcadi from '../../../../public/arkadi.png';

const BiographyArkadi = () => {
  return (
    <>
      <ContainerWrapper>
        <div className="bg-[#1849A9] flex flex-col-reverse md:flex-row justify-between rounded-[24px]">
          {/* контент */}
          <div className="flex flex-col gap-[48px] p-[32px] md:p-[64px] max-w-[700px] w-full">
            <div className="flex flex-col gap-[20px] text-start w-full text-[#fff]">
              <h2 className="text-[28px] md:text-[36px] font-semibold">Аркадий Шевченко</h2>
              <p className="text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[30px] w-full">
                «Знаю проблему изнутри. Помогаю выбрать лучший путь из возможных, а не продаю то что
                еще больше навредит»
              </p>
            </div>
            <Button type="primary" className="max-w-[305px]">
              ПОЛУЧИТЬ ПОМОЩЬ ЭКСПЕРТА
            </Button>
          </div>

          {/* картинка */}
          <div className="flex justify-center md:justify-end w-full">
            <img
              className="w-full md:w-auto rounded-t-[24px] md:rounded-t-[0px] md:rounded-r-[24px]"
              src={arcadi}
              alt=""
            />
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default BiographyArkadi;
