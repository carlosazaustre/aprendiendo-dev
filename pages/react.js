import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Summary } from "../components/Summary";
import { Support } from "../components/Support";
import { LessonList } from "../components/LessonList";
import { Footer } from "../components/Footer";

import data from "../data/react.json";

export async function getStaticProps() {
  return {
    props: {
      info: data?.info,
      questions: data?.questions,
      lessons: data?.lessons,
    },
  };
}

export default function JavaScriptCoursePage({ info, questions, lessons }) {
  return (
    <div>
      <Head>
        <title>Curso de React.js desde cero - aprendiendo.dev</title>
        <meta
          name="description"
          content="Curso de Desarrollo Web con React.js para principiantes."
        />
        <meta property="og:title" content="Curso de React desde cero" />
        <meta
          property="og:description"
          content="Curso de React.js desde cero. Aprende una de las librerías JavaScript más populares."
        />
        <meta
          property="og:image"
          content={`https://aprendiendo.dev/${info?.imageOg}`}
        />
        <meta property="og:url" content="https://aprendiendo.dev/react" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosazaustre" />
        <meta name="twitter:creator" content="@carlosazaustre" />
        <meta name="twitter:title" content="Curso de React.js" />
        <meta
          name="twitter:description"
          content="Curso de React.js para principiantes."
        />
        <meta
          name="twitter:image"
          content={`https://aprendiendo.dev/${info?.imageOg}`}
        />
        <link rel="icon" href="/react-logo.png" />
      </Head>

      <main>
        <NavBar theme="react" />
        <Hero {...info} />
        <Summary questions={questions} />
        <Support />
        <LessonList
          title="Comienza a aprender React, ¡Hoy!"
          lessons={lessons}
        />
      </main>

      <Footer courseId="react" courseName="ReactJS" />
    </div>
  );
}
