
import type { ChecklistItem } from '../model/types'


interface ChecklistProps {
    items: ChecklistItem[]
}

const Checklist = ({items}: ChecklistProps) => {
  return (
    <ul className='flex flex-col gap-[20px]'>
        {items.map((item) => (
            <li key={item.id} className='flex gap-[12px] items-start'>
                {item.textM !== "" ? <img src="/assets/images/check-circle.svg" alt="" /> : ""}
                <span className=' text-left text-[#535862] text-[18px] font-[400] max-lg:hidden'>{item.text}</span>
                {item.textM !== "" ? <span className=' text-left text-[#535862] text-[18px] font-[400] lg:hidden'>{item.textM}</span> : "" }
            </li>
        ))}
    </ul>
  )
}

export default Checklist