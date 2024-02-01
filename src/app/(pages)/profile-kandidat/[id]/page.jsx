import {anies, cakimin, prabowo} from "@/app/lib/utils/image";
import HeroCandidate from "@/app/(pages)/profile-kandidat/[id]/components/hero-candidate";
import BiographyCandidate from "@/app/(pages)/profile-kandidat/[id]/components/biography-candidate";
import SosmedCandidate from "@/app/(pages)/profile-kandidat/[id]/components/sosmed-candidate";
import AchievementCandidate from "@/app/(pages)/profile-kandidat/[id]/components/achievement-candidate";

function Page({ params }) {
  return (
      <div className=" w-screen pb-24 bg-white pt-32 px-[56px]">

        <h1 className="text-xl font-bold text-primary mb-16">KANDIDAT LAINNYA</h1>

       <div className="flex flex-col gap-28">
         <HeroCandidate
             name={'Prabowo Subianto'}
             role={'Menteri Pertahanan dan Keamanan Periode 2019 - 2024'}
             image={prabowo}
             background={'Innovative Solutions is a cutting-edge technology company that provides innovative solutions for businesses of all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our customized and effective technology solutions. With over a decade of experience, we have built a reputation for delivering high-quality services to our clients.\n'}
         />

         <BiographyCandidate
             number={2}
             birthdatePlace={'17 Oktober 1951, Jakarta'}
             position={'Calon Presiden'}
             asset={'2,04 Trilliun'}
         />

         <SosmedCandidate
             linkInstagram={'https://www.instagram.com/prabowo/'}
             linkTwitter={'https://www.twitter.com/prabowo/'}
         />

         <AchievementCandidate/>


       </div>

      </div>

  );
}

export default Page;
