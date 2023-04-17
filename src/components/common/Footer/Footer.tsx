import {FooterHeading} from "@/components/common/Footer/FooterHeading"
import {FacebookIcon, InstagramIcon, TwitterIcon} from "@/components/common/Footer/SocialIcons"
import {DuckSplash} from "@/components/Home/Landing/DuckSplash"

export const Footer = () => {
  return <footer className="bg-PED-yellow py-20">
    <div className="mx-auto flex max-w-4xl flex-col items-center">
      <FooterHeading/>
      <p className="mt-8 border-b-[3px] border-b-PED-purple pb-14 text-center">ped4youtupedped4youtupedped4youtupedped4youtupedped4youtupedped4youtupedped4youtuped
        ped4youtupedped4youtupedped4youtupedped4youtupedped4youtupedped4youtuped
        ped4youtupedped4youtupedped4youtupedped4youtupedped4youtuped
        ped4youtupedped4youtupedped4youtupedped4youtuped</p>
      <div className="mt-14 w-[100px]">
        <DuckSplash/>
      </div>
      <div className="mt-8 flex space-x-8">
        <div className="flex items-center space-x-2">
          <FacebookIcon/>
          <span className="text-lg font-light">PED4you</span>
        </div>
        <div className="flex items-center space-x-2">
          <TwitterIcon/>
          <span className="text-lg font-light">@PED4you</span>
        </div>
        <div className="flex items-center space-x-2">
          <InstagramIcon/>
          <span className="text-lg font-light">@PED4you</span>
        </div>
      </div>
    </div>
  </footer>
}