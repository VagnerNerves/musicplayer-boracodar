import { Play, Pause, Rewind, FastForward } from 'phosphor-react'

import musicprogress from '../assets/musicprogress.svg'
import musicprogress2 from '../assets/musicprogress2.svg'
import imagemusic from '../assets/imagemusic.png'

const TYPE_PLAYER = {
  Player1: {
    container:
      'w-[16.655rem] h-[31.125rem] bg-violet-900 rounded-[0.600185625rem] flex flex-col p-[2.375rem]',
    header: 'flex flex-col gap-7 mb-[1.8125rem]',
    imageHeader: 'w-[12.41625rem] h-[12.41625rem]',
    buttonContainer: 'flex justify-between items-center flex-1 '
  },
  Player2: {
    container:
      'w-[22.356875rem] h-[16.6675rem] bg-violet-900 rounded-[0.600185625rem] flex flex-col p-[1.8125rem]',
    header: 'flex flex-row gap-7 mb-[1.8125rem]',
    imageHeader: 'w-[5.25rem] h-[5.25rem]',
    buttonContainer: 'flex justify-between items-center w-[11.731875rem] '
  },
  Player3: {
    container:
      'w-[22.356875rem] h-[12.45375rem] bg-violet-900 rounded-[0.600185625rem] flex flex-col p-[1.8125rem]',
    header: 'flex flex-row gap-7 mb-[1.8125rem]',
    imageHeader: 'w-[5.25rem] h-[5.25rem]',
    buttonContainer: 'flex justify-between items-center w-[11.731875rem] '
  }
}

interface MusicPlayerProps {
  typePlayer: keyof typeof TYPE_PLAYER
}

export function MusicPlayer({ typePlayer }: MusicPlayerProps) {
  return (
    <div className={`${TYPE_PLAYER[typePlayer].container}`}>
      <div className={`${TYPE_PLAYER[typePlayer].header}`}>
        <img
          className={`${TYPE_PLAYER[typePlayer].imageHeader}`}
          src={imagemusic}
          alt=""
        />

        <div className="flex flex-col justify-center">
          <strong className="text-gray-200 font-bold text-2xl mb-[0.6rem]">
            Acorda Devinho
          </strong>
          <span className="text-gray-200 font-normal text-xl opacity-60">
            Banda Rocketset
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center mb-[1.8125rem]">
        <div className={`${TYPE_PLAYER[typePlayer].buttonContainer}`}>
          <button>
            <Rewind size={28} color="#E1E1E6" weight="fill" />
          </button>
          <button>
            <Play size={28} color="#E1E1E6" weight="fill" />
          </button>
          <button>
            <FastForward size={28} color="#E1E1E6" weight="fill" />
          </button>
        </div>
      </div>
      {typePlayer != 'Player3' ? (
        <>
          <img
            className="mb-[0.6rem]"
            src={typePlayer === 'Player1' ? musicprogress : musicprogress2}
            alt=""
          />
          <div className="text-gray-400 font-normal text-sm opacity-70 flex justify-between items-center">
            <span>03:20</span>
            <span>00:12</span>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
