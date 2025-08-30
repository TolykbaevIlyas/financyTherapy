import type { CardProps } from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import CardSolvedCases from '../../../entities/CardSolvedCases/ui/CardSolvedCases';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';

const SolvedCases = ({ card }: { card: CardProps[] }) => {
  return (
    <>
      <ContainerWrapper>
        <div className="flex flex-col gap-[20px] mb-[96px] text-[#000]">
          <h2 className="text-[32px] font-semibold">Примеры решенных ситуаций</h2>
          <p className="text-[20px] font-normal text-[#535862]">Разнообразие успешных кейсов</p>
        </div>
        <div className="relative">
          <div className="grid gap-[12px] mx-auto justify-items-center grid-cols-1 md:grid-cols-3">
            {card.map((item, index) => (
              <CardSolvedCases
                key={index}
                title={item.title}
                description={item.description}
                account={item.account}
                className={index % 3 === 1 ? 'lg:-translate-y-[32px] -translate-y-0' : ''}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-white to-transparent" />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default SolvedCases;
