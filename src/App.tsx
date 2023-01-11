import { MusicPlayer } from './components/MusicPlayer'

export function App() {
  return (
    <div className="min-h-screen flex flex-row gap-8 justify-center items-center p-8 max-md:flex-col">
      <MusicPlayer typePlayer="Player1" />
      <div className="flex flex-col gap-8">
        <MusicPlayer typePlayer="Player2" />
        <MusicPlayer typePlayer="Player3" />
      </div>
    </div>
  )
}
