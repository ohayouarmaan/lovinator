import Slider from "@/components/carousel"

export default function() {
  return <div className="flex flex-col items-center justify-center h-[100vh]">
    <h1 className="text-4xl text-white font-bold uppercase absolute top-[10vh]">CUTE MEMORIES :3</h1>
    <div className="w-[80vw] h-[40vh]">
      <Slider />
    </div>
  </div>
}
