import React, { useState } from 'react';

interface IAcc {
  icon: React.ReactNode;
  name: string;
  major: string;
}

export interface CardProps {
  title: string;
  description: string;
  account: IAcc;
  className?: string;
}

const CardSolvedCases = ({ title, description, account, className }: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col max-w-[384px] mb-[20px] gap-[48px] border border-[#E9EAEB] rounded-[12px] p-[32px] text-start ${className}`}
    >
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-[16px] font-semibold text-[#000]">{title}</h3>

        {/* --- описание --- */}
        <div className="md:block">
          {/* desktop/tablet: всегда показываем полный текст */}
          <p className="hidden md:block text-[16px] font-normal text-[#535862]">{description}</p>

          {/* mobile: с обрезкой + кнопка */}
          <div className="block md:hidden">
            <p
              className={`text-[16px] font-normal text-[#535862] ${
                expanded ? 'line-clamp-none' : 'line-clamp-2'
              }`}
            >
              {description}
            </p>
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="text-[#2E90FA] text-[16px] font-normal "
              >
                Читать дальше &gt;&gt;
              </button>
            )}
            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                className="text-blue-600 text-sm font-medium mt-1"
              >
                Свернуть
              </button>
            )}
          </div>
        </div>
      </div>

      {/* --- аккаунт --- */}
      <div className="flex gap-[12px] items-center">
        {account.icon}
        <div className="flex flex-col text-start">
          <span className="text-[16px] font-semibold text-[#000]">{account.name}</span>
          <span className="text-[14px] font-normal text-[#535862]">{account.major}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSolvedCases;
