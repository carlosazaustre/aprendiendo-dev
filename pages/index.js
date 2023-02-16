import Head from "next/head";
import * as NextImage from "next/image";
import {
  chakra,
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  Stack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
} from "@chakra-ui/react";
import { FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";

const ImageOpt = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["src", "width", "height", "objectFit"].includes(prop),
});

export default function Home() {
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
        <Flex bg="yellow.300" p="4" w="100%" h="20" justify="" as="nav">
          <div>aprendiendo.dev</div>
          <Spacer />
          <Button leftIcon={<FaDiscord />} colorScheme="telegram">
            <a href="https://discord.gg/carlosazaustre">Únete a Discord</a>
          </Button>
        </Flex>
        <Box bg="yellow.300" w="100%" h="60" textAlign="center">
          <Heading as="h1" size="2xl" p="4">
            Curso de JavaScript desde cero
          </Heading>
          <Heading as="h2" size="md" p="2">
            Aprende Programación, con JavaScript, desde cero y a tu ritmo.
          </Heading>
        </Box>
        <Box bg="gray.200" w="100%" h="auto" textAlign="left" p="4">
          <Heading as="h3" size="md" p="4">
            ¿Por qué aprender JavaScript?
          </Heading>
          <Box as="p" py="2" px="4">
            JavaScript es el lenguaje de programación de la web. Conocerlo te
            abrirá las puertas a un mundo de posibilidades. Aprende JavaScript
            desde cero y a tu ritmo.
          </Box>
          <Heading as="h3" size="md" p="4">
            Tu profesor de JavaScript
          </Heading>
          <Image
            mx="auto"
            borderRadius="full"
            boxSize="150px"
            src="/carlosazaustre.jpg"
            objectFit="cover"
            alt="Carlos Azaustre mirando a cámara con los premios de Google Developer Expert, Microsoft MVP y la placa de Youtube de 100000 suscriptores."
          />
          <Box as="p" py="2" px="4">
            Llevo divulgando y compartiendo contenido sobre programación desde
            2013.
          </Box>
          <Box as="p" py="2" px="4">
            Ingeniero en Telemática y desarrollador web con más de 10 años de
            experiencia. Formador y Profesor Universitario. Reconocido como
            Google Developer Expert en Tecnologías Web y premio Microsoft MVP en
            2022.
          </Box>
          <Stack direction="column" spacing={4} p="4">
            <Button leftIcon={<FaYoutube />} colorScheme="red">
              <a href="https://youtube.com/@carlosazaustre?sub_confirmation=1">
                Más contenido en YouTube
              </a>
            </Button>
            <Button leftIcon={<FaTwitch />} colorScheme="purple">
              <a href="https://twitch.tv/carlosazaustre"></a>Sígueme en Twitch
            </Button>
          </Stack>
        </Box>
        <Box
          bg="gray.900"
          w="100%"
          h="auto"
          textAlign="left"
          p="4"
          textColor="white"
        >
          <Heading as="h3" size="md" p="4">
            Comienza a aprender JavaScript
          </Heading>
          <Accordion allowToggle>
            <AccordionItem borderColor="yellow.300">
              <h2>
                <AccordionButton color="yellow">
                  <Box flex="1" textAlign="left">
                    Introducción a JavaScript
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>
                  ¡Aprende a programar! Este curso ayuda a aquellos con poca o
                  ninguna experiencia a iniciarse en el desarrollo de software
                  utilizando JavaScript como lenguaje de programación.
                </p>
                <AspectRatio maxW="560px" ratio={16 / 9} mx="auto">
                  <iframe
                    title="Introducción a la programación con JavaScript"
                    src="https://www.youtube.com/embed/-rj-zxmdGHA"
                    allowFullScreen
                  />
                </AspectRatio>
                <ul>
                  <li>Introducción</li>
                  <li>Variables</li>
                  <li>Tipos de datos</li>
                  <li>Operadores</li>
                  <li>Condicionales</li>
                  <li>Funciones</li>
                  <li>Funciones como clases</li>
                  <li>Clases ECMAScript 6+</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor="yellow.300">
              <h2>
                <AccordionButton color="yellow">
                  <Box flex="1" textAlign="left">
                    Bucles en JavaScript
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>
                  Todo lo que necesitas saber sobre los bucles, una excelente
                  herramienta para poder repetir acciones sin repetir código.
                </p>
                <AspectRatio maxW="560px" ratio={16 / 9} mx="auto">
                  <iframe
                    title="Bucles en JavaScript"
                    src="https://www.youtube.com/embed/5ct-3tDiRUY"
                    allowFullScreen
                  />
                </AspectRatio>
                <ul>
                  <li>¿Qué es un bucle?</li>
                  <li>While</li>
                  <li>Do While</li>
                  <li>For</li>
                  <li>Foreach</li>
                  <li>For...in</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </main>

      <Box as="footer" textAlign="center" p="4">
        Made with ❤️ by <a href="https://carlosazaustre.es">Carlos Azaustre</a>
      </Box>
    </div>
  );
}
