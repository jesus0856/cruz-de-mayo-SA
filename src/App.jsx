import React, { useState } from 'react';

import './App.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { PiClockUserFill } from "react-icons/pi";

import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

import { IoArrowRedo } from "react-icons/io5";
import { GiRoad } from "react-icons/gi";





function App() {
  return (
    <div>
      <NavigationBar />
      <SobreNosotros />
      <MisionVision/>
      <ServicesSection />
      <Horarios />
      <Tarifas/>
      <PreguntasFrecuentes/>
      <Personal/>
      <ContactSection />
      
      
    </div>
  );
}

function NavigationBar() {
  return (

    <header className='cabecera'>
      <h2 className='nombre_empresa'>CRUZ DE MAYO S.A.</h2>
      <nav>
        <ul className='navBar'>
          <li><a href="#about-us">INICIO</a></li>
          <li><a href="#services">RUTAS</a></li>
          <li className='otros'>
            <a href="#otros" >OTROS <span><IoMdArrowDropdown /></span></a>
            <div className="otros-content">
              <a href="#horarios">HORARIOS</a>
              <a href="#tarifa">TARIFAS</a>
              <a href="#preguntasfrecuentes">PREGUNTAS FRECUENTES</a>
              <a href="#personal">PERSONAL</a>
              
              </div>
          </li>
          <li><a href="#contact">CONTACTANOS</a></li>
          
          
        </ul>
      </nav>
    </header>
    
  );
}

function SobreNosotros() {
  return (
    <section id='about-us'>
      <div className='about-us'>
        
        <div>
          
          
          <h1> <span>NUEVA</span> IMAGEN EN TRANSPORTE </h1>
          <h4>Viaja tranquilo, llegas a tiempo</h4>
        </div>
        
      
      </div>
     
    </section>

  );
}


function MisionVision() {
  return (
    <section id='misionvision'>
      <div className='mis-vis'>
        <div><h3>MISIÓN</h3> <p>Ofrecer un servicio de transporte seguro, puntual y confiable para satisfacer las necesidades de movilidad de los usuarios en Huancayo y sus alrededores. Nos comprometemos a proporcionar un viaje cómodo y placentero, priorizando siempre la seguridad y la satisfacción del cliente.</p>
        </div>
        <div><h3>VISIÓN</h3> <p>Ser reconocidos como líderes en el transporte local de Huancayo, distinguiéndonos por nuestra calidad de servicio, atención al usuario y compromiso con la seguridad vial. Nos esforzamos por expandir nuestras operaciones de manera responsable, manteniendo siempre nuestro enfoque en la excelencia operativa y la satisfacción del cliente.</p>
        </div>
      </div>
    </section>
  );
}



function ServicesSection() {
  return (
    <section id="services">
      <h2>Servicios de Transportes</h2>
      <div className="service-cards-container">
        <ServiceCard
          title="JPV - HUARI"
          ida="Av. Evitamiento, AV. 1° de Mayo, Jr. 26 de Julio, Av. Cultural, Av. Independencia, Ovalo Justicia y Libertad, Av. Julio Sumar, Av. Mariscal Castilla, Av. La Marina, Jr. Arequipa, Jr. Alejandro O. Deustua, Av. Ferrocarril, Jr. Puno, Jr. Amazonas, Jr. Ica, Av. Ferrocarril, Jr. Angaraes, Calle Real, Av. 9 de Diciembre, Jr. Humbolt, Av. Los Proceres, Jr. Sucre, Jr. San Martin, Jr. Toledo, Jr. Integracion, Av. General Cordova, Av. Alfonso Ugarte - Anexo de Huari"
          vuelta= "Av.General Córdova y Av. Alfonso Ugarte, Av. General Cordova, Jr. Integracion, Jr. Toledo, Jr. San Martin, Jr. Sucre, Av. Los Proceres, Jr. Humbolt, Av. 9 de Diciembre, Calle Real, Jr. Angaraes, Jr. Ancash, Coliseo municipal, Jr. Calixto, Jr. Pachitea, Av. Giraldez, Jr. Huancas, Puente Acueducto, Jr. Los Alamos, Jr. Manchego, Av. Ferrocarril, Jr. Trujillo, Jr. Santa Isabel, Av. Julio Sumar, Ovalo Justicia y Libertad, Av. Independencia, Av. Cultural, Jr. 26 de Julio, Av. 1° de Mayo y Av. Evitamiento"
          
        />
        <ServiceCard
          title="SICAYA - HUARI"
          ida="Descripción del servicio de carga y descarga."
          vuelta= "Av.General Córdova y Av. Alonso Ugarte, Av. General Cordoova, Jr. Integracion, Jr. Toledo, Jr. San Martin, Jr. Sucre, Av. Los Proceres, Jr. Humbolt"
          
        />
        <ServiceCard
          title="SICAYA - PILCOMAYO"
          ida="Descripción del servicio de carga y descarga."
          vuelta= "Av.General Córdova y Av. Alonso Ugarte, Av. General Cordoova, Jr. Integracion, Jr. Toledo, Jr. San Martin, Jr. Sucre, Av. Los Proceres, Jr. Humbolt"
          
        />
        <ServiceCard
          title="CHILCA - SAPALLANGA"
          ida="Descripción del servicio de carga y descarga."
          vuelta= "Av.General Córdova y Av. Alonso Ugarte, Av. General Cordoova, Jr. Integracion, Jr. Toledo, Jr. San Martin, Jr. Sucre, Av. Los Proceres, Jr. Humbolt"
          
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, ida, vuelta }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [mostrarRuta, setMostrarRuta] = useState(false);

  const handleClick = () => {
    setIsHighlighted(!isHighlighted);
  };


  const handleClickMostrarRuta = (event) => {
    event.stopPropagation();
    setMostrarRuta(!mostrarRuta);
  };

  return (
    <div className={`service-card ${isHighlighted ? 'highlighted' : ''}`} onClick={handleClick}>
      <h3>{title} </h3>
      <span className='icon-ruta'><GiRoad /></span>
      {isHighlighted && (<button className='botonruta'
      onClick={handleClickMostrarRuta}>{(mostrarRuta ? 'ocultar ' : 'mostrar ')} ruta</button>)}
      {isHighlighted && mostrarRuta && 
      <div className='imagenruta'>
        <h4>IDA</h4>
        <p className='info_ruta'>{ida}</p>
        <h4>VUELTA</h4>
        <p className='info_ruta'>{vuelta}</p>
      </div>}
    </div>
  );
}


function Horarios() {
  return (
    <section id='horarios'>
      <div className='horarios-left'></div>
      <div className='horarios-right'>
        
        <div className='horarios'>

          <div className='info-horario'>
            <div className='card-horario'>
              <div className='icon-horario'><PiClockUserFill /></div>
              <h2>lunes - viernes</h2>
              <p>8:00 am - 12:00 pm</p>
              <p>2:00 pm - 5:00 pm</p>
              <p className='card-footer'>Acercarse al paradero de Huari</p>
              
            </div>

            <div className='card-horario'>
              <div className='icon-horario'><PiClockUserFill /></div>
              <h2>sabado</h2>
              <p>9:00 am - 2:00 pm</p>
              <p className='card-footer'>Acercarse al paradero de Huari</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Tarifas() {
  return (
    <section id='tarifa'>
      <div className='tarifa'>
        
        <h1>Tarifa de pasajes</h1>
        <div className='info-tarifa'>
          
            <div className='tabla'>
              <table>
                <tr>
                  <td colspan="2" className='titulo-tabla no-estilo'>CRUZ DE MAYO S.A.</td>
                </tr>
                <tr>
                  <td colspan="2" className='fila2-tabla no-estilo'>TARIFA DE PASAJES D.L. N° 651</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya - Pilcomayo</td>
                  <td>S/ 1.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya   -   El Tambo</td>
                  <td>S/ 2.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya - Huancayo</td>
                  <td>S/ 2.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya - Chilca - Azapampa</td>
                  <td>S/ 3.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya - La Punta</td>
                  <td>S/ 3.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Sicaya - Sapallanga</td>
                  <td>S/ 4.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Pilcomayo - El Tambo</td>
                  <td>S/ 1.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Pilcomayo - Huancayo</td>
                  <td>S/ 2.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Pilcomayo - Chilca - Azapampa</td>
                  <td>S/ 2.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Pilcomayo - La Punta</td>
                  <td>S/ 3.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Pilcomayo - Sapallanga</td>
                  <td>S/ 3.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>El Tambo - Chilca - Azapampa</td>
                  <td>S/ 2.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>El Tambo - La Punta</td>
                  <td>S/ 2.20</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>El Tambo - Sapallanga</td>
                  <td>S/ 2.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Huancayo - La Punta</td>
                  <td>S/ 1.70</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Huancayo - Sapallanga</td>
                  <td>S/ 2.00</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Chilca - La Punta</td>
                  <td>S/ 1.50</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Chilca - Sapallanga</td>
                  <td>S/ 1.70</td>
                </tr>
              
              </table>
            </div>    

                 
          
        </div>

        <div className='tabla-escolar'>
          <table>
                <tr>
                  <td colspan="2" className='fila2-tabla no-estilo'>PASAJE ESCOLAR</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Urbano</td>
                  <td>S/ 0.80</td>
                </tr>
                <tr>
                  <td className='doble-ancho'>Inter-Urbano</td>
                  <td>S/ 1.00</td>
                </tr>
                
          </table>
        </div>

      </div>
    </section>
  );
}




function PreguntasFrecuentes() {

  const preguntas = [
    {
      pregunta: '¿Comó puedo realizar un reclamo o presentar una sugerencia?',
      respuesta: 'Si tienes algun reclamo o sugerencia, por favor comunicate con el gerente de operaciones a través del numero telefonico, o visitanos en nuestras oficinas',
      link: 
      <div className='div-link'>
        <a href="#personal"> <span><IoArrowRedo /></span>Gerente de operaciones </a>
        <a href="#contact"> <span><IoArrowRedo /></span>Nuestras oficinas</a>
      </div>,
    },
    {
      pregunta: '¿Qué debo hacer si pierdo un objeto durante mi viaje?',
      respuesta: 'Si pierdes un objeto durante tu viaje, por favor comunicate con el gerente de operaciones lo antes posible o acercarse al paradero más cercano. Haremos todo lo posible por ayudarte a recuperar tus pertenencias',
      link: 
      <div className='div-link'>
        <a href="#personal"> <span><IoArrowRedo /></span>Gerente de operaciones </a>
        <a href="#contact"> <span><IoArrowRedo /></span>Nuestras oficinas</a>
      </div>,
    },
    {
      pregunta: '¿Comó puedo obtener informacion sobre las rutas disponibles?',
      respuesta: 'Puedes consultar las rutas disponibles en nuestra pagina web o contactando directamente al gerente de operaciones',
      link: 
      <div className='div-link'>
        <a href="#services"> <span><IoArrowRedo /></span>Rutas </a> 
        <a href="#personal"> <span><IoArrowRedo /></span>Gerente de operaciones </a>
      </div>,
    },
    {
      pregunta: '¿Cuál es el costo del pasaje para adultos y niños?',
      respuesta: 'El costo del pasaje para adultos y niños varía segun la ruta. Para obtener información precisa sobre tarifas, te recomendamos consultar la sección de tarifas',
      link: 
      <div className='div-link'>
        <a href="#tarifa"> <span><IoArrowRedo /></span>Tarifas </a>       
      </div>,
    },
    {
      pregunta: '¿Cuáles son los requisistos para poder ingresar a la empresa',
      respuesta: 'Los requisitos para que tu unidad pueda ingresar a la empresa incluye la presentacion de diversos documentos. Te recomendamos comunicarte con el gerente de operaciones para obtener informacion detallada sobre los requisitos especificos',
      link: 
      <div className='div-link'>
        <a href="#personal"> <span><IoArrowRedo /></span>Gerente de operaciones </a>
      </div>,
    },
  ];

  const [respuestaVisible, setRespuestaVisible] = useState(null);

  const toggleRespuesta = (index) => {
    setRespuestaVisible(respuestaVisible === index ? null : index);
  };


  return (
    <section id='preguntasfrecuentes'>
      <div className="preguntasfrec">
      <h1>Preguntas Frecuentes</h1>
      <div className="preguntas">
        {preguntas.map((item, index) => (
          <div key={index} className={`pregunta ${index === respuestaVisible ? 'active' : ''}`} onClick={() => toggleRespuesta(index)}>
            <h4> <span className='icono-pregunta'><MdArrowForwardIos /></span> {item.pregunta}</h4>
            <p className="respuesta">{item.respuesta} </p>
            <p className='respuesta link'>{item.link} </p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}





function Personal() {

  const equipo = [
    { icono: <FcBusinesswoman /> , cargo: 'GERENTE GENERAL', nombre: 'Bertha Perez Espinal' },
    { icono: <FcBusinessman /> , cargo: 'PRESIDENTE DEL DIRECTORIO', nombre: 'Alan Eduardo Granados Sandoval' },
    { icono: <FcBusinesswoman /> , cargo: 'VICEPRESIDENTE DEL DIRECTORIO', nombre: 'Elsa Faustina Rojas Espinoza' },
    { icono: <FcBusinessman /> , cargo: 'GERENTE DE OPERACIONES', nombre: 'Michel Richard Flores Araujo' },
    { icono: <FcBusinessman /> , cargo: 'GERENTE DE OPERACIONES', nombre: 'Teofilo Eusebio Rojas Espinoza' }
  ];


  return (
    <section id='personal'>
      <div className="contenedor">
      
      <div className="cards-container">
        {equipo.map((persona, index) => (
          <Card key={index} {...persona} />
        ))}
      </div>
    </div>
    </section>
  );
}



function Card({ icono, cargo, nombre }) {
  return (
    <div className="card">
      <div className="icono">{icono}</div>
      <div className="cargo">{cargo}</div>
      <div className="nombre">{nombre}</div>
    </div>
  );
}








function ContactSection() {
  return (
    <section id="contact">
      
      <div className='contenedorcontacto'>
        <div className='contacto'>
          <span className='iconocontacto'><FaLocationDot /></span>
          <h4>DIRECCIÓN</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, modi quidem. Animi, cupiditate id repellat quisquam velit odio corporis accusantium, ipsum iusto culpa sit aut quam aliquam numquam, labore fuga.</p>
        </div>
        <div className='contacto'>
          <span className='iconocontacto'><FaPhoneAlt /></span>
          <h4>TELEFONOS</h4>
          <p>980066428</p>
          <p>964406211</p>
        </div>
        
      </div>
      
    </section>
  );
}

export default App;
