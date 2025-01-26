import Slider from "@/components/carousel"

export default function() {
  return <div className="flex flex-col items-center justify-center h-[100vh]">
    <h1 className="text-2xl text-white h-[10vh] absolute text-vertical left-[20px] top-1/2 translate-y-[-50%] z-[10] font-bold uppercase absolute top-[10vh]">CUTE MEMORIES :3</h1>
    <div className="w-[80vw]">
      <Slider />
    </div>
  </div>
}
