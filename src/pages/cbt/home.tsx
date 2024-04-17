import { BiodataType } from '@/libs/interface/biodataType'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'

export default function HomeCBT() {
  const { data: biodataData } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (biodataData?.data) {
      setBiodata(biodataData?.data)
    }
  }, [biodataData?.data])

  return (
    <div className="grid grid-cols-12 gap-x-32 rounded-lg p-32">
      <div className="col-span-3 flex flex-col bg-white phones:col-span-12">
        <span className="bg-primary-shade-500 p-16 text-center text-white">
          Your Info
        </span>
        <div className="flex flex-col gap-y-8 p-16">
          <h6 className="text-nowrap uppercase">
            {biodata?.pribadi?.nama ?? 'John Doe'}
          </h6>
          <h6 className="text-nowrap uppercase">
            {biodata?.sekolah?.nama ?? 'Akademi Ninja'}
          </h6>
          <h6 className="text-nowrap uppercase">Kabupaten Tapanuli Utara</h6>
          <h6 className="text-nowrap uppercase">Provinsi Sumatera Utara</h6>
        </div>
        <span className="bg-success p-16 text-center text-white hover:cursor-not-allowed">
          Update
        </span>
      </div>
    </div>
  )
}
