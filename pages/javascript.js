import { useRef } from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Summary } from "../components/Summary";
import { Support } from "../components/Support";
import { LessonList } from "../components/LessonList";
import { Footer } from "../components/Footer";

import data from "../data/javascript.json";

export async function getStaticProps() {
  console.log(data);
  return {
    props: {
      info: data?.info,
      questions: data?.questions,
      lessons: data?.lessons,
    },
  };
}

export default function JavaScriptCoursePage({ info, questions, lessons }) {
  const ctaSection = useRef(null);

  return (
    <div>
      <Head>
        <title>Curso de JavaScript desde cero - aprendiendo.dev</title>
        <meta
          name="description"
          content="Curso de Progrmación con JavaScript para principiantes."
        />
        <meta property="og:title" content="Curso de JavaScript desde cero" />
        <meta
          property="og:description"
          content="Curso de JavaScript para principiantes. Aprende el lenguaje de programación más popular del mundo."
        />
        <meta
          property="og:image"
          content="https://aprendiendo.dev/og-image.png"
        />
        <meta property="og:url" content="https://aprendiendo.dev/javascript" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosazaustre" />
        <meta name="twitter:creator" content="@carlosazaustre" />
        <meta name="twitter:title" content="Curso de JavaScript" />
        <meta
          name="twitter:description"
          content="Curso de JavaScript para principiantes."
        />
        <meta
          name="twitter:image"
          content="https://aprendiendo.dev/og-image.png"
        />
        <link rel="icon" href="/javascript-logo.png" />
      </Head>

      <main>
        <NavBar theme="javascript" />
        <Hero {...info} />
        <Summary questions={questions} />
        <Support />
        <LessonList
          ref={ctaSection}
          title="Comienza a aprender JavaScript, ¡Hoy!"
          lessons={lessons}
        />
      </main>

      <Footer />
    </div>
  );
}
