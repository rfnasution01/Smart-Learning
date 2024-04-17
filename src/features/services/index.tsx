import { CardTitle } from '@/components/CardTitle'
import { DataServices } from '@/libs/const/dummy/listService'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <div className="px-32 pb-32">
      <div className="bg-white">
        <CardTitle title="SERVICES" classes="w-2/12 phones:w-6/12" />
        <div className="grid grid-cols-12 gap-32 p-32">
          {DataServices.map((item, idx) => (
            <Link
              to={item?.link}
              className="col-span-2 flex transform flex-col items-center justify-center gap-y-16 bg-white p-48 text-primary-shade-200 shadow-md transition-transform duration-300 hover:scale-90 hover:cursor-pointer phones:col-span-4"
              key={idx}
            >
              <span>{item.icon}</span>
              <div className="flex flex-col items-center gap-y-4">
                <span className="font-sf-pro text-[2rem] font-bold">
                  {item.title}
                </span>
                <span className="text-center text-[1.2rem]">{item.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
