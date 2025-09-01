import type { ChecklistItem } from '../model/types'

interface ChecklistProps {
  items: ChecklistItem[]
}

const Checklist = ({ items }: ChecklistProps) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      {items.map((item) => {
        const hasTextDesktop = Boolean(item.text && item.text.trim())
        const hasTextMobile = Boolean(item.textM && item.textM.trim())

        return (
          <li key={item.id} className="flex flex-col">
            {/* --- Десктоп: показываем только на lg и выше --- */}
            <div className="hidden lg:flex gap-[12px] items-start">
              {hasTextDesktop && (
                <img
                  src="/assets/images/check-circle.svg"
                  alt="check"
                  className="mt-1"
                />
              )}
              {hasTextDesktop && (
                <span className="text-left text-[#535862] text-[18px] font-[400]">
                  {item.text}
                </span>
              )}
            </div>

            {/* --- Мобилка: показываем только ниже lg --- */}
            <div className="flex lg:hidden gap-[12px] items-start">
              {hasTextMobile ? (
                <>
                  <img
                    src="/assets/images/check-circle.svg"
                    alt="check"
                    className="mt-1"
                  />
                  <span className="text-left text-[#535862] text-[18px] font-[400]">
                    {item.textM}
                  </span>
                </>
              ) : null /* если textM нет — на мобилке ничего не показываем */ }
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Checklist
