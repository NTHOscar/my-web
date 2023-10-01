import { NavBar } from "/components/NavBar";
import { Footer } from "/components/footer";
import { Introduction } from "/components/intro";
import { About } from "/components/about";
import { Experience } from "/components/experience";
import { Education } from "/components/education";

export default function Home() {
  return (
    <>
      {/* navbar */}
        <NavBar/>
        {/* body */}
        <div className='pt-2 px-48 sm:mb-0 scroll-mt-[100rem]'>
          <section id='intro'><Introduction/></section>
          <section id='about'><About/></section>
          <section id='experience'><Experience/></section>
          <section id='education'><Education/></section>
        </div>
        {/* Footer */}
        {/* <Footer/> */}
    </>
  )
}
