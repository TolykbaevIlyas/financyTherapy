
import type { CardProps } from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import CardSolvedCases from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const SolvedCases = ({ card }: { card: CardProps[] }) => {
  return (
    <ContainerWrapper>
      {/* Заголовки */}
      <div
        className="flex flex-col gap-[20px] mb-[50px] text-[#000]"
      >
        <h2 className="text-[36px] font-[600] max-lg:hidden">Примеры решенных ситуаций</h2>
        <h2 className="text-[32px] font-semibold lg:hidden">Решенные ситуации:</h2>
        <p className="text-[20px] font-normal text-[#535862] max-lg:hidden">Разнообразие успешных кейсов</p>
      </div>

      {/* Сетка карточек */}
      <div className="relative border border-b-[#E9EAEB] pb-[64px]">
        {/* Контейнер с карточками */}
        <div
          className="
      grid gap-[12px] mx-auto justify-items-center 
      grid-cols-1 md:grid-cols-3
      overflow-y-auto
      max-h-[calc(4*320px)] md:max-h-[calc(4*320px)]
      pr-2 pt-[50px]
      scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent
      hover:scrollbar-thumb-gray-500
    "
        >
          {card.map((item, index) => (
            <div
              key={index}
              className={index % 3 === 1 ? 'lg:-translate-y-[32px] -translate-y-0' : ''}
            >
              <CardSolvedCases
                title={item.title}
                description={item.description}
                account={item.account}
              />
            </div>
          ))}
        </div>

        {/* Градиент всегда внизу */}
        {/* <div
          className="
      pointer-events-none absolute bottom-0 left-0 w-full 
      h-[320px] bg-gradient-to-t from-white to-transparent
    "
        />*/}
      </div> 
    </ContainerWrapper>
  );
};

export default SolvedCases;
