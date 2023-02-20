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
        <title>aprendiendo.dev</title>
        <meta
          name="description"
          content="Aprende Programación Web y JavaScript"
        />
        <link rel="icon" href="/favicon.ico" />
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
