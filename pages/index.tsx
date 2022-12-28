import Head from "next/head";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Services from "../components/services";
import WhatWeDo from "../components/whatwedo";
import WhyUs from "../components/whyus";

function App() {
  return (
    <>
      <Head>
        <title>Asbez Media</title>
        <meta
          name='description'
          content='Providing social media engagement and growth to improve your online presence.'
        />
        <meta
          name='keywords'
          content='social media, get followers, get views, get likes, get more subscribers, video editor, content creation, video editing, social media engagement'
        />
        <meta name='author' content='Asbez Media' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-screen bg-hero dark:bg-hero-dark'>
        <article>
          <Hero />
          <div className='bg-fixed bg-graph-paper dark:bg-graph-paper-dark '>
            <WhatWeDo />
          </div>
          <div className='bg-wiggle dark:bg-wiggle-dark '>
            <Services />
          </div>
          <WhyUs />
          <div className='bg-fixed bg-wiggle dark:bg-wiggle-dark '>
            <Pricing />
          </div>
          <div className='bg-fixed bg-graph-paper dark:bg-graph-paper-dark '>
            <Contact />
          </div>
          <Footer />
        </article>
      </main>
    </>
  );
}

export default App;
