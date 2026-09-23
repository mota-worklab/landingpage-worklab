import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Content, { contentGuides } from "./components/Content";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { questions } from "./components/FAQ";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const contentStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guias sobre desenvolvimento de software sob medida",
  itemListElement: contentGuides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    description: guide.description,
    url: `#${guide.id}`,
  })),
};

export default function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">
        {JSON.stringify(contentStructuredData)}
      </script>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        {/* <SocialProof /> */}
        <Services />
        <Process />
        <Projects />
        <Content />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
