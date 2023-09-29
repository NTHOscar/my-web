import { NavBar } from "/components/NavBar";

export default function Home() {

  return (
    <>
      {/* navbar */}
      <NavBar/>
        {/* body */}
        <div className='px-20'>
          <section id='intro'>Hi I am Oscar!!!</section>
          <section id='about'>Hi I am Oscar!!!</section>
          <section id='experience'>Hi I am Oscar!!!</section>
        </div>
    </>
  )
}
