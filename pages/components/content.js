import Navbar from "./nav"
import React from "react"
import Image from "next/image"
import Honesty from '../components/assets/mindwhite.png'
import Innovation from '../components/assets/rockewhite.png'
import Handwhite from '../components/assets/handwhite.png'
import Form from './form'
import Circle from './assets/circle.webp'
export default function Content() {

  return (<>
    <div className="bg-image-startup">
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 2, }}>
        <Navbar />
      </div>
      <div className="h-content flex flex-col justify-center pl-20">
        <div className="flex justify-center sm:justify-left">
          <div className="flex  w-1/2 justify-center sm:justify-left flex-col ">
            <h1 className="text-aqua hover:text-aqua">United Technologies</h1>
            <p className=" text-aqua-md">Una agencia creativa DevOps</p>
            <div>
              <button className="mx-auto mt-16 text-white bg-orange border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded-3xl text-md " href="/">Contáctanos</button>
            </div></div><div className="w-full bg-animation-background"></div></div></div>
    </div>

    <div className="flex items-left justify-center text-center bg-white bg-service">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-orange tracking-widest font-medium title-font mb-1">SERVICIOS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">United Technologies </h1>

          </div>
          <div className="flex justify-center flex-wrap gap-4 ">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border shadow-lg  rounded-3xl border-gray-200 border-opacity-6 bg-white">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Desarrollo y Testing</h2>
              <p className="leading-relaxed text-base mb-4">Nos encargamos del diseño y desarrollo a medida de tu sistema o producto bajo los mejores estándares del mercado. Verificamos el cumplimiento de las especificaciones funcionales proporcionadas por el cliente o el analista para una aplicación determinada.</p>
              <a className="text-orange inline-flex items-center">Más Info
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border shadow-lg rounded-3xl p-5 border-gray-200 border-opacity-60 bg-white">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">CRM Customer Service</h2>
              <p className="leading-relaxed text-base mb-4">Mejora la experiencia del cliente en tu sitio web con nuestro servicio de CRM Customer Service. Gestión de clientes, soporte personalizado y análisis de datos.</p>
              <a className="text-orange inline-flex items-center">Más Info
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border shadow-lg rounded-3xl p-5 border-gray-200 border-opacity-60 bg-white">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Gestión Documental</h2>
              <p className="leading-relaxed text-base mb-4">Nuestro servicio de gestión documental ofrece almacenamiento, organización y recuperación de documentos de forma fácil y segura para tu empresa.</p>
              <a className="text-orange inline-flex items-center">Más Info
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-3xl shadow-lg text-lg">Contacto</button>
        </div>
      </section>

    </div>
    <section className="flex" style={{
      width: '100vw',
      height: '100%',
      left: '0px',
      background: '#1E2832'
    }}>
      <div className="ellipse-container">

        <div className="ellipse"></div>
        <div className="ellipseleft"></div>
        <div className=" flex flex-col justify-center text-right ml-10 core-values gap-10 ml-20 w-3/4">
          <div className="flex justify-end gap-10">
            <div className="w-3/4">
              <h1 className="text-md mb-3 font-bold">Honestidad</h1>
              <p className=" text-sm" >Como compañía Somos transparentes en nuestras acciones y comunicación, nos gusta alentar a actuar con integridad, positivismo para fortalecer nuestra lealtad con nuestros clientes.</p>
            </div>
            <div className="card">
              <Image
                src={Honesty}
                width={100}
                height={10}
              ></Image>
            </div>
          </div>
          <div className="flex justify-end gap-10 mr-10">
            <div className="w-2/3">
              <h1 className="text-md mb-3 font-bold">Innovación:</h1>
              <p className="text-sm">Fomentamos el pensamiento creativo y sin miedo de asumir riesgos, para impulsar el progreso.</p>
            </div>
            <div className="card"> <Image
              src={Innovation}
              width={100}
              height={10}
            ></Image></div>
          </div>
          <div className="flex justify-end gap-10">
            <div className="w-3/4">
              <h1 className="mb-3 font-bold">Enfoque orientado al cliente</h1>
              <p className="text-sm">La base de nuestro negocio es escuchar y entender a nuestros clientes; su satisfacción es esencial para el crecimiento y la rentabilidad a largo plazo.</p>
            </div>
            <div className="card"><Image
              src={Handwhite}
              width={100}
              height={10}
            ></Image></div>

          </div>
        </div>

      </div>

    </section>
    <section className="flex" style={{
      width: '100vw',
      height: '100%',
      background: '#1E2832'
    }} >
      <Form />
    </section></>)
}