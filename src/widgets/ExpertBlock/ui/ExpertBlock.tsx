import { CheckCircle } from "lucide-react";

export default function ExpertBlock() {
  return (
    <section className="w-full bg-white py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl text-left md:text-3xl font-bold text-black">
            АРКАДИЙ ШЕВЧЕНКО
          </h2>
          <p className="uppercase text-gray-600 font-semibold mt-2 text-left underline">
            ЭКСПЕРТ С ЛИЧНЫМ ОПЫТОМ
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-left">
            Почему мне можно доверять:
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              Прошел через долги лично
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              Знаю все схемы и способы изнутри
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              Не продаю кредиты и банкротство
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              Работаю только в ваших интересах
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-gray-700 space-y-4 text-left">
        <p>
          «Я не теоретик из бизнес-школы. 38 миллионов рублей собственной задолженности — это реальный опыт, который я прошел лично. Дикий разрушающий стресс, звонки кредиторов и коллекторов, бессонные ночи, чувство отчаяния и безысходности — все это было в моей жизни.
        </p>

        <p>
          После того как смог выбраться из этой ситуации, понял важную вещь: большинство людей можно уберечь от банкротства и разорения при комплексном анализе ситуации и выборе оптимальной стратегии. Но проблема в том, что задача финансовых и юридических компаний — ПРОДАТЬ, А НЕ ПОМОЧЬ! Их сотрудникам платят только за продажу кредитов и банкротства, а не за помощь людям.
        </p>

        <p>
          Более 1500 человек уже получили персональные планы и решили свои финансовые проблемы. Разработанная мною система диагностики финансового состояния действительно работает.»
        </p>
      </div>
    </section>
  );
}
