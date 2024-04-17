import { Button } from '@/components/Button'
import { List, Play, RefreshCcw, Timer } from 'lucide-react'

export default function Percobaan() {
  return (
    <div className="flex flex-col gap-y-32 p-32">
      <span className="text-[3rem] font-bold">Percobaan</span>
      <div className="flex flex-col gap-y-16 rounded-lg bg-white p-16">
        <span className="text-[2.4rem]">
          Langkah-Langkah Mengikuti Ujian Percobaan
        </span>
        <ol className="ml-32 list-decimal">
          <li className="mb-8">
            Pilih salah satu ujian percobaan dengan klik{' '}
            <span className="font-bold">Mulai</span>
          </li>
          <li className="mb-8">
            Silahkan jawab pertanyaan yang ada sampai selesai
          </li>
          <li className="mb-8">
            Bila ingin mengulangi ujian percobaan, klik{' '}
            <span className="font-bold">Reset</span>
          </li>
          <li className="mb-8">
            Untuk melakukan ujian yang sebenarnya, klik dashboard pada menu di
            atas atau{' '}
            <span className="text-primary-shade-500 hover:cursor-not-allowed">
              klik di sini
            </span>
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4 flex flex-col gap-y-16 rounded-lg bg-white p-16">
          <span className="text-[2.4rem]">Daptar Ujian Percobaan</span>
          <div className="flex flex-col gap-y-24 bg-background p-12">
            <div className="flex items-center gap-x-32">
              <div className="flex flex-1 flex-col gap-y-12">
                <span className="text-[2rem] font-bold">Ujian PMB</span>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-4">
                    <span>
                      <Timer size={16} />
                    </span>
                    <span>Durasi 01:45:00</span>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span>
                      <List size={16} />
                    </span>
                    <span>100 Soal</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-12">
                <Button variant="outlined-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Reset</span>
                    <span>
                      <RefreshCcw size={16} />
                    </span>
                  </div>
                </Button>
                <Button variant="solid-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Mulai</span>
                    <span>
                      <Play size={16} />
                    </span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-center gap-x-32">
              <div className="flex flex-col gap-y-12">
                <span className="text-[2rem] font-bold">
                  <span className="font-bold">Sub Ujian</span> MATEMATIKA 2,
                  Bahasa Inggris, IPA, IPS, BAHASA INDONESIA
                </span>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-4">
                    <span>
                      <Timer size={16} />
                    </span>
                    <span>Durasi 01:45:00</span>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span>
                      <List size={16} />
                    </span>
                    <span>100 Soal</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-12">
                <Button variant="outlined-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Reset</span>
                    <span>
                      <RefreshCcw size={16} />
                    </span>
                  </div>
                </Button>
                <Button variant="solid-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Mulai</span>
                    <span>
                      <Play size={16} />
                    </span>
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-x-32">
              <div className="flex flex-col gap-y-12">
                <span className="text-[2rem] font-bold">
                  <span className="font-bold">Sub Ujian</span> MATEMATIKA 2,
                  Bahasa Inggris, IPA, IPS, BAHASA INDONESIA
                </span>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-4">
                    <span>
                      <Timer size={16} />
                    </span>
                    <span>Durasi 01:45:00</span>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span>
                      <List size={16} />
                    </span>
                    <span>100 Soal</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-12">
                <Button variant="outlined-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Reset</span>
                    <span>
                      <RefreshCcw size={16} />
                    </span>
                  </div>
                </Button>
                <Button variant="solid-primary">
                  <div className="flex items-center gap-x-4">
                    <span>Mulai</span>
                    <span>
                      <Play size={16} />
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
