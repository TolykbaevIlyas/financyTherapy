interface ICard {
  icon: React.ReactNode;
  title: string;
  description: string;
  maxWidth?: string;
}

export interface IFeature {
  title: string;
  className?: string;
  card: ICard[];
}
