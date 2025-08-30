import type { IContainer } from '../types';

const ContainerWrapper = ({ children }: IContainer) => {
  return <section className="max-w-[1216px] m-auto">{children}</section>;
};

export default ContainerWrapper;
