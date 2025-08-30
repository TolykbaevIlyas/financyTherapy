import ContainerWrapper from "../../../shared/ui/ContainerWrapper";


export default function DebtWarningBlock() {
  return (
    <section className="w-full bg-white py-12 px-6 md:flex-row items-center justify-between max-w-6xl mx-auto mt-[250px]">
        <ContainerWrapper>
            <h2 className="text-[36px] font-[600] text-[#181d27] leading-[122%] text-left">
                ЧТО БУДЕТ, ЕСЛИ НИ-ЧЕ-ГО НЕ ДЕЛАТЬ
            </h2>
      <div className="flex mt-[64px] ">
        <div className="text-left w-full space-y-6 max-w-[560px]">
            

            <div className="space-y-6 text-gray-700">
            <div>
                <h3 className="font-[600] text-[18px] leading-[156%] text-[#181d27]">ЧЕРЕЗ 1 МЕСЯЦ:</h3>
                <ul className="list-disc list-inside space-y-1 font-[400] text-[16px] leading-[150%] text-[#535862]">
                    <li>Долг вырастет на 15-30% (штрафы, пени)</li>
                    <li>Кредитная история окончательно испортится</li>
                    <li>Стресс начнет разрушать здоровье</li>
                </ul>
            </div>

            <div>
                <h3 className="font-[600] text-[18px] leading-[156%] text-[#181d27]">ЧЕРЕЗ 3 МЕСЯЦА:</h3>
                <ul className="list-disc list-inside space-y-1 font-[400] text-[16px] leading-[150%] text-[#535862]">
                <li>Коллекторы начнут терроризировать семью</li>
                <li>Банки подадут в суд</li>
                <li>Приставы арестуют счета</li>
                <li>Близкие узнают о долгах</li>
                </ul>
            </div>

            <div>
                <h3 className="font-[600] text-[18px] leading-[156%] text-[#181d27]">ЧЕРЕЗ 6 МЕСЯЦЕВ:</h3>
                <ul className="list-disc list-inside space-y-1 font-[400] text-[16px] leading-[150%] text-[#535862]">
                <li>Опишут и арестуют имущество</li>
                <li>Запретят выезд за границу</li>
                <li>Возникнет риск потерять работу</li>
                <li>Семья начнет разваливаться</li>
                </ul>
            </div>

            <div>
                <h3 className="font-[600] text-[18px] leading-[156%] text-[#181d27]">ЧЕРЕЗ 1 ГОД:</h3>
                <ul className="list-disc list-inside space-y-1 font-[400] text-[16px] leading-[150%] text-[#535862]">
                <li>Имущество продадут за полцены</li>
                <li>Банкротство станет единственным выходом</li>
                <li>Потеряете ВСЁ накопленное</li>
                <li>Дети будут стыдиться родителей</li>
                </ul>
            </div>
            </div>

            <div className="pt-4">
            <p className="font-[600] text-[18px] leading-[156%] text-[#181d27] underline">ВАЖНО ПОНИМАТЬ:</p>
            <p className="font-[600] text-[18px] leading-[156%] text-[#181d27]">
                Чем раньше начать решение проблемы, тем больше вариантов остается доступными = больше ресурсов удается сохранить.
            </p>
            </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
            <img
            src="/assets/images/Warning.svg"
            alt=""
            className=" max-w-[576px] w-full h-[752px]"
            />
        </div>
      </div>

      <div className="w-full text-center mt-[64px]">
        <h3 className="text-[30px] font-[600] leading-[127%] text-[#181d27] mb-4 ">
          НЕ ДАЙТЕ ЭТОМУ СЛУЧИТЬСЯ С ВАШЕЙ СЕМЬЕЙ!
        </h3>
        <button className=" max-w-[768px] w-full mt-6 bg-[#1570ef] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition mx-auto block">
          НЕ ОТКЛАДЫВАТЬ — ПОЛУЧИТЬ ПЛАН СЕЙЧАС
        </button>
      </div>
        </ContainerWrapper>
    </section>
  );
}
