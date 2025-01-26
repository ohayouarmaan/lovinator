import Image from "next/image"
import Link from "next/link";

export default function() {
  return <div>
  <Image 
    src={"/samaan-on-car.png"}
    alt={"samaan"}
    width={300}
    height={300}
    className="pixel-border absolute top-1/2 translate-y-[-80%] animate-fade-in-longer left-[40px] p-5"
  />
  <Image 
    src={"/us-staring.jpg"}
    alt={"samaan"}
    width={300}
    height={300}
    className="pixel-border absolute top-1/2 translate-y-[-20%] animate-fade-in right-[40px] p-5"
  />
  <div className="flex items-center justify-center h-[100vh] w-[100%]">
    <div className="animate-fade-in flex flex-col w-[30vw] h-[80vh] pixel-border-dark  text-[#D2B48C] items-center justify-center">
      <h1 className="text-4xl font-bold w-full text-center text-white">
        HAPPY BIRTHDAY BB!!
      </h1>
      <p className="text-white font-bold text-md p-4">
        SAM I LOVE YOU SOOOOOOO FUCKING MUCH I SWEAR TO GOD YOU'RE SO CUTEEEEEEEEEEEEEEAAAAAAAAA
        Okay, I know I fuck up a lot sometimes. But trust me I actually do love you a lot. You're the best
        thing which has happened to me in a while, not just in a while BUT ACTUALLY IN MY ENTIRE FUCKING LIFE
        I love you so fucking much please, I can't wait for you to come back and hang out with me again.
        And please I can't express how much I love you, and and and IT'S YOUR FUCKING BIRTHDAY YIPPPEEEE
        I'm so thankful to your parents for getting freaky. You're so prettyyyyyy and and and cute and and and
        smarty panties SUSH I WILL ACTUALLY EAT YOU UP ASJDKLAJSKLDJLK AND BHAI PLEASE JUST COME OVER I CAN'T 
        WAIT FOR US TO CELEBRATE YOUR BIRTHDAY AND OUR ANNIVERSARY TOGETHER &lt;3
      </p>
      <Link 
        href={"/gallery"}
        className="gallery font-bold underline">
        CLICK ME FOR CUTESIES :3
      </Link>
    </div>
  </div>
  </div>
}
