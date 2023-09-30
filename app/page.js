import { NavBar } from "/components/NavBar";
import { Footer } from "/components/footer";
import { Introduction } from "/components/intro";
import { About } from "/components/about";
export default function Home() {

  return (
    <>
      {/* navbar */}
        <NavBar/>
        {/* body */}
        <div className='pt-2 mb-28 px-48 sm:mb-0 scroll-mt-[100rem]'>
          <section id='intro'><Introduction/></section>
          <section id='about'><About/></section>
          <section id='experience'>Hi I am Oscar!!!</section>
        </div>
        {/* Footer */}
        <Footer/>
    </>
  )
}
