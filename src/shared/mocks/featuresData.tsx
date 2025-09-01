import Dolg from '../assets/icons/Dolg';
import Dohod from '../assets/icons/Dohod';
import Credit from '../assets/icons/Credit';
import Prioritet from '../assets/icons/Prioritet';
import Snijenie from '../assets/icons/Snijenie';
import Specialist from '../assets/icons/Specialist';
import Supp from '../assets/icons/Supp';
import Bank from '../assets/icons/Bank';
import MFO from '../assets/icons/MFO';
import Laywers from '../assets/icons/Laywers';
import Procent from '../assets/icons/Procent';
import Poisk from '../assets/icons/Poisk';
import Plan from '../assets/icons/Plan';
import Situation from '../assets/icons/Situation';

interface ICard {
  icon: React.ReactNode;
  title: string;
  description: string;
  maxWidth?: string;
}

export const featuresAnalyze: ICard[] = [
  {
    icon: <Dolg />,
    title: 'Все долговые обязательства (кредиты и займы, микрозаймы, прочие долги)',
    description: '',
    maxWidth: 'max-w-[268px]',
  },
  {
    icon: <Dohod />,
    title: 'Доходы, расходы и семейное положение',
    description: '',
    maxWidth: 'max-w-[268px]',
  },
  {
    icon: <Credit />,
    title: 'Кредитную историю и имущественное положение',
    description: '',
    maxWidth: 'max-w-[268px]',
  },
  {
    icon: <Prioritet />,
    title: 'Ваши приоритеты: что важнее всего сохранить',
    description: '',
    maxWidth: 'max-w-[268px]',
  },
];

export const featuresResult = [
  {
    icon: <Snijenie />,
    title: 'Персональную стратегию снижения платежей на 40-80%',
    description: '',
    maxWidth: 'max-w-[373px]',
  },
  {
    icon: <Specialist />,
    title: 'Направление к проверенному специалисту',
    description: '',
    maxWidth: 'max-w-[373px]',
  },
  {
    icon: <Supp />,
    title: 'Поддержку до полного решения проблемы',
    description: '',
    maxWidth: 'max-w-[373px]',
  },
];

export const featuresWhyNot = [
  {
    icon: <Bank />,
    title: 'Банки и брокеры',
    description: 'предлагают только новые кредиты (усугубляют проблему)',
  },
  {
    icon: <MFO />,
    title: 'МФО',
    description: 'впаривают займы под высокие проценты (загоняют в долговую яму)',
  },
  {
    icon: <Laywers />,
    title: 'Юристы',
    description: 'сразу толкают на банкротство (часто не оптимально)',
  },
];

export const featuresCompare = [
  {
    icon: <Specialist />,
    title: 'Консультация финансового консультанта или юриста',
    description:
      'от 5000₽ за 1 час (узкая специализация + не достаточно времени для анализа ситуации)',
  },
  {
    icon: <Procent />,
    title: 'Услуги кредитного брокера',
    description: '5-15% от суммы кредита (заинтересованность в продаже)',
  },
  {
    icon: <Poisk />,
    title: 'Самостоятельный поиск решения',
    description: 'месяцы времени + ошибки + рост долгов',
  },
];

// MOBILE PART

export const featuresCompareMobile = [
  {
    icon: <Specialist />,
    title: 'Юрист или фин.консультант',
    description: 'от 5000₽ за 1 час',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Procent />,
    title: 'Кредитный брокер',
    description: '5-15% от суммы',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Poisk />,
    title: 'Самостоятельно',
    description: 'месяцы + огромные потери',
    maxWidth: 'min-w-[343px]',
  },
];

export const featuresAnalyzeMobile: ICard[] = [
  {
    icon: <Dolg />,
    title: 'Все долги',
    description: 'кредиты, карты, микрозаймы, коммуналка',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Dohod />,
    title: 'Доходы, расходы, имущество',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Credit />,
    title: 'Кредитную историю',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Prioritet />,
    title: 'Ваши приоритеты',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
];

export const featuresComplexMobile = [
  {
    icon: <Situation />,
    title: 'Анализ ситуации',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Plan />,
    title: 'Персональный план',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
  {
    icon: <Specialist />,
    title: 'Профильный специалист',
    description: '',
    maxWidth: 'min-w-[343px]',
  },
];

export const featuresWhyNotMobile = [
  {
    icon: <Bank />,
    title: 'Банки',
    description: 'продают новые кредиты',
  },
  {
    icon: <MFO />,
    title: 'МФО',
    description: 'займы под 300%',
  },
  {
    icon: <Laywers />,
    title: 'Юристы',
    description: 'сразу банкротство',
  },
];
