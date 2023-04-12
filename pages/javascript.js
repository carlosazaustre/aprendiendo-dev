import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Summary } from "../components/Summary";
import { Support } from "../components/Support";
import { LessonList } from "../components/LessonList";
import { Footer } from "../components/Footer";

import data from "../data/javascript.json";

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
        <title>Curso de JavaScript desde cero - aprendiendo.dev</title>
        <meta
          name="description"
          content="Curso de Programación con JavaScript para principiantes."
        />
        <meta property="og:title" content="Curso de JavaScript desde cero" />
        <meta
          property="og:description"
          content="Curso de JavaScript para principiantes. Aprende el lenguaje de programación más popular del mundo."
        />
        <meta
          property="og:image"
          content={`https://aprendiendo.dev/${info?.imageOg}`}
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
          content={`https://aprendiendo.dev/${info?.imageOg}`}
        />
        <link rel="icon" href="/javascript-logo.png" />
      </Head>

      <main>
        <NavBar theme="javascript" />
        <Hero {...info} />
        <Summary questions={questions} />
        <Support />
        <LessonList
          title="Comienza a aprender JavaScript, ¡Hoy!"
          subtile="A través de la siguiente serie de videos, aprenderás el lenguaje y estarás listo para empezar con un framework frontend web"
          lessons={lessons}
        />
      </main>

      <Footer courseId="javascript" courseName="JavaScript" />
    </div>
  );
}
