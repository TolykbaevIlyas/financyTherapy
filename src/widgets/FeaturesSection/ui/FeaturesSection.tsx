import CardFeaturesSect from '../../../entities/CardFeaturesSect';
import ContainerWrapper from '../../../shared/ui/ContainerWrapper';
import type { IFeature } from '../types';

const FeaturesSection = ({ title, card, className }: IFeature) => {
  return (
    <>
      <ContainerWrapper>
        <div
          className={`text-[#000]  flex-col py-[64px] lg:pt-[96px] lg:pb-[160px] items-center gap-[48px] lg:gap-[96px] w-full ${className}`}
        >
          <h2 className="text-4xl font-semibold text-[#181D27]">{title}</h2>
          <div className="flex flex-col lg:flex-row gap-[48px]">
            {card.map((item, index) => (
              <CardFeaturesSect
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                maxWidth={item.maxWidth}
              />
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default FeaturesSection;
