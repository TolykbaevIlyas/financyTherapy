import React from 'react';

interface ICard {
  icon: React.ReactNode;
  title: string;
  description?: string;
  maxWidth?: string;
}

const CardFeaturesSect = ({ icon, title, description, maxWidth }: ICard) => {
  return (
    <div className={`flex w-full ${maxWidth ? maxWidth : 'max-w-[384px] w-full'}`}>
      <div key={0} className="flex flex-col items-center gap-4 text-center w-full">
        {icon}
        <div className="flex flex-col gap-1 max-w-[320px] w-full">
          <h3 className="text-[18px] font-semibold text-[#181D27]">{title}</h3>
          <p className="text-[16px] font-normal text-[#535862]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeaturesSect;
