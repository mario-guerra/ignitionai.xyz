"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPostMetadata } from '@/lib/blog/metadata';
import LanguageToggle from '@/components/blog/LanguageToggle';

interface NuncaPierdasOtroClientePotencialClientProps {
  post: BlogPostMetadata;
}

const NuncaPierdasOtroClientePotencialClient = ({ post }: NuncaPierdasOtroClientePotencialClientProps) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-ignition-orange text-white rounded-full text-sm font-semibold">
                {post.category || 'Gestión de Clientes Potenciales'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl !text-gray-300 mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center text-gray-300 text-sm gap-4">
              <div className="flex items-center">
                <span>Por {post.author}</span>
                <span className="mx-3">•</span>
                <span>{post.readTime}</span>
              </div>
              <LanguageToggle currentPost={post} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                En el panorama empresarial hipercompetitivo de hoy, la diferencia entre ganar o perder un cliente a menudo se reduce a segundos, literalmente. Un cliente potencial se pone en contacto, ansioso por conocer tus servicios, pero si estás atrapado en reuniones, lejos de tu escritorio o simplemente abrumado con las tareas diarias, esa oportunidad de oro puede desvanecerse más rápido de lo que puedes decir &ldquo;llamada perdida&rdquo;.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En Ignition AI, hemos descifrado este desafío con un sistema de automatización inteligente que no solo responde a los clientes potenciales, sino que los involucra, los califica y los guía sin problemas hacia convertirse en tu próximo cliente. Todo mientras tú te concentras en lo que haces mejor: dirigir tu negocio.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">El costo oculto de la gestión manual de clientes potenciales</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Imagina este escenario: Sarah, una cliente potencial, visita tu sitio web a las 8 de la noche un martes. Ha estado investigando soluciones toda la semana, está lista para tomar una decisión y tu servicio es exactamente lo que necesita. Rellena tu formulario de contacto con interés genuino, lo envía y luego... espera.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pasan horas. Luego un día entero. Para cuando respondes con &ldquo;Gracias por contactarnos, agendemos una llamada&rdquo;, Sarah ya ha pasado a un competidor que le respondió en minutos. Has perdido no solo una venta, sino potencialmente una relación a largo plazo con un cliente que podría valer miles de dólares.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Este escenario se repite innumerables veces en los negocios todos los días. Las estadísticas son contundentes:
              </p>

              <div className="bg-light-gray p-8 rounded-lg mb-8">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>78% de los clientes</strong> compran a la primera empresa que responde a su consulta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>50% de las ventas</strong> van al proveedor que responde primero</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>El tiempo de respuesta a los clientes potenciales</strong> se correlaciona directamente con las tasas de conversión: cada minuto de retraso reduce tus posibilidades</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Pero aquí está el punto: esto no se trata de trabajar más duro o revisar el correo electrónico con más frecuencia. Se trata de trabajar de manera más inteligente con sistemas que nunca duermen, nunca toman descansos y nunca dejan que una oportunidad se escape.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Más allá de las respuestas automáticas básicas: La anatomía de la automatización inteligente de clientes potenciales</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La mayoría de las empresas piensan que la automatización significa enviar un correo genérico de &ldquo;Te responderemos pronto&rdquo;. Eso es como poner una curita en un brazo roto. La verdadera automatización de clientes potenciales es un sistema sofisticado de varias etapas que trata cada consulta como una oportunidad única que requiere atención personalizada.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Permíteme guiarte a través de cómo funciona nuestro sistema inteligente siguiendo una interacción real con un cliente de principio a fin.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 1: Captura instantánea y enrutamiento inteligente</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cuando un cliente potencial completa tu formulario de contacto, nuestro sistema no solo recolecta su información: la analiza. En segundos, el sistema:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Captura todos los detalles de la consulta</strong>, incluyendo información de contacto, necesidades específicas y nivel de urgencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Clasifica automáticamente al cliente potencial</strong> según sus respuestas (tipo de servicio, tamaño de la empresa, indicadores de presupuesto)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Agrega al prospecto a tu CRM</strong> con etiquetado adecuado y colocación en el embudo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Activa la secuencia de respuesta adecuada</strong> adaptada al tipo específico de consulta</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Sin entrada manual de datos. Sin riesgo de errores tipográficos. Sin clientes potenciales cayendo en agujeros negros digitales.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 2: Respuesta personalizada que realmente involucra</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aquí es donde la mayoría de las automatizaciones fallan: la respuesta. Las plantillas genéricas se sienten robóticas e impersonales. Nuestro sistema crea respuestas que se sienten humanas mientras ofrecen valor inmediato.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Toma a Emily Chen, quien recientemente contactó a uno de nuestros clientes legales sobre planificación patrimonial. A los 3 minutos de enviar su formulario, recibió esta respuesta:
              </p>

              <div className="bg-gray-50 border-l-4 border-ignition-orange p-6 mb-8">
                <div className="text-lg text-gray-700">
                  <p className="font-semibold mb-4">Asunto: Tu consulta sobre planificación patrimonial - Aseguremos el futuro de tu familia, Emily</p>
                  
                  <p className="mb-4">Hola Emily,</p>
                  
                  <p className="mb-4">Gracias por contactarnos sobre servicios de planificación patrimonial. Dado que mencionaste preocupaciones sobre proteger los activos de tu familia y asegurar el futuro de tus hijos, quiero asegurarme de abordar tu situación específica adecuadamente.</p>
                  
                  <p className="mb-4">Para proporcionarte la orientación más relevante durante nuestra consulta, he preparado un breve cuestionario que me ayudará a entender tus circunstancias únicas. Toma solo 3-4 minutos completarlo y asegura que nuestra conversación sea altamente productiva desde el inicio.</p>
                  
                  <p className="mb-4 font-semibold">[Completa tu evaluación de planificación patrimonial - Haz clic aquí]</p>
                  
                  <p className="mb-4">Una vez que hayas completado la evaluación, puedes programar inmediatamente tu consulta en un horario que te convenga. Tengo disponibilidad esta semana y estaré encantado de discutir cómo podemos proteger lo que más te importa.</p>
                  
                  <p className="mb-2">Saludos cordiales,</p>
                  <p className="mb-1">Abogado Max Power</p>
                  <p>Harborview Legal Group</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ¿Notas la diferencia? Esto no es solo un reconocimiento: es compromiso. Emily se siente escuchada, comprendida y guiada hacia el siguiente paso lógico.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 3: Recopilación de información inteligente</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cuando Emily hace clic en el cuestionario, no está llenando un formulario genérico. Las preguntas se ajustan dinámicamente según su consulta inicial, creando una experiencia personalizada que se siente más como una conversación con un experto que como un proceso burocrático.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Para la planificación patrimonial, podría ver preguntas como:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-6 pl-6">
                <li>&ldquo;¿Qué activos específicos te preocupa proteger?&rdquo;</li>
                <li>&ldquo;¿Tienes hijos menores que necesitarían arreglos de tutela?&rdquo;</li>
                <li>&ldquo;¿Has experimentado algún cambio significativo en tu vida recientemente (matrimonio, divorcio, nuevo negocio, etc.)?&rdquo;</li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mientras tanto, alguien que consulte sobre derecho empresarial vería preguntas completamente diferentes enfocadas en sus necesidades comerciales.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 4: Análisis y priorización de clientes potenciales impulsados por IA</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aquí es donde ocurre la magia real. A medida que llegan las respuestas, nuestro sistema de IA las analiza y crea resúmenes ejecutivos para tu equipo. En lugar de leer respuestas largas de cuestionarios, obtienes información como esta:
              </p>

              <div className="bg-gradient-to-r from-ignition-orange/10 to-ember-red/10 border border-ignition-orange/20 p-6 mb-8 rounded-lg">
                <div className="text-lg text-gray-700">
                  <p className="font-bold text-deep-charcoal mb-2">Emily Chen - Resumen de cliente potencial de planificación patrimonial</p>
                  <p className="mb-2"><strong>Nivel de prioridad:</strong> Alto</p>
                  <p className="mb-2"><strong>Necesidades clave:</strong> Propiedad heredada recientemente, preocupada por implicaciones fiscales, tiene hijos menores</p>
                  <p className="mb-2"><strong>Indicadores de urgencia:</strong> Mencionó &ldquo;necesito resolver esto pronto&rdquo;</p>
                  <p className="mb-2"><strong>Valor estimado del caso:</strong> $15,000-25,000 basado en indicadores de complejidad</p>
                  <p><strong>Pasos recomendados:</strong> Programar dentro de 3 días, preparar materiales de orientación sobre impuestos de herencia</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Este nivel de inteligencia te permite priorizar tus oportunidades más valiosas y llegar a cada conversación completamente preparado.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 5: Integración de programación inteligente</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Emily no necesita jugar al teléfono para reservar su consulta. El sistema le presenta horarios disponibles que se sincronizan con el calendario del abogado en tiempo real. Cuando reserva, ambas partes reciben confirmaciones automáticas, y el sistema agrega todo el contexto de su cuestionario al evento del calendario.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Pero aquí está la parte sofisticada: el sistema reconoce que diferentes tipos de reuniones requieren diferentes asignaciones de tiempo. Una consulta simple de testamento podría durar 30 minutos por defecto, mientras que una discusión compleja de planificación de sucesión empresarial bloquea automáticamente 60 minutos.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Etapa 6: Seguimiento inteligente que nunca se siente insistente</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No todos los clientes potenciales convierten de inmediato, y ahí es donde la mayoría de las empresas fallan. Nuestro sistema monitorea el compromiso y activa automáticamente secuencias de seguimiento apropiadas basadas en comportamientos específicos:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Si alguien completa el cuestionario pero no programa:</strong> recordatorio suave enfocado en la conveniencia de la programación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Si alguien programa pero no completa el cuestionario:</strong> seguimiento enfatizando cómo hará que su consulta sea más productiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Si alguien no muestra compromiso después de 48 horas:</strong> seguimiento impulsado por valor con recursos o estudios de casos relevantes</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cada punto de contacto se siente natural y útil, nunca desesperado ni agresivo.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Resultados del mundo real: Los números no mienten</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hablemos de lo que esto significa realmente para tu negocio. Aquí están los resultados de implementaciones recientes de clientes:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-light-gray p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Harborview Legal Group (resultados de 6 meses):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Tiempo de respuesta:</strong> Reducido de más de 4 horas a menos de 5 minutos</li>
                    <li><strong>Tasa de conversión de clientes potenciales:</strong> Aumentó del 23% al 47%</li>
                    <li><strong>Tasa de asistencia a consultas:</strong> Mejoró del 71% al 89%</li>
                    <li><strong>Impacto en los ingresos:</strong> $180,000 en reservas adicionales directamente atribuidas a una respuesta más rápida y una mejor calificación</li>
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">TechSolutions Consulting (resultados de 3 meses):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Tiempo de calificación de clientes potenciales:</strong> Reducido de 20 minutos por cliente potencial a 3 minutos</li>
                    <li><strong>Eficiencia del equipo de ventas:</strong> Mejora del 300% en clientes potenciales calificados por hora</li>
                    <li><strong>Valor del embudo:</strong> Aumentó el tamaño promedio de los acuerdos en un 34% debido a una mejor precalificación</li>
                    <li><strong>Satisfacción del cliente:</strong> 95% de retroalimentación positiva sobre la experiencia de respuesta inicial</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">La tecnología detrás de la magia</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Podrías estar pensando: &ldquo;Esto suena complejo. ¿Necesito un equipo de desarrolladores para implementarlo?&rdquo; Absolutamente no. Nuestro sistema se integra con herramientas que probablemente ya estás utilizando:
              </p>

              <div className="bg-light-gray p-8 rounded-lg mb-8">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Integración de formularios:</strong> Funciona con cualquier formulario de sitio web, constructor de páginas de aterrizaje o CRM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Plataforma de correo electrónico:</strong> Se conecta a Gmail, Outlook o cualquier sistema de correo empresarial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Herramientas de calendario:</strong> Se sincroniza con Calendly, Acuity, Google Calendar o Outlook Calendar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Sistemas CRM:</strong> Se integra con Salesforce, HubSpot, Pipedrive y más de 50 plataformas adicionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Seguimiento analítico:</strong> Proporciona informes detallados sobre cada paso del recorrido de tus clientes potenciales</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Todo el sistema puede estar funcionando en menos de una semana, con la mayoría de los clientes viendo mejoras inmediatas en la respuesta y el compromiso con los clientes potenciales.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Más allá del correo electrónico: La experiencia completa de los clientes potenciales</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aunque la automatización del correo electrónico es la base, la gestión inteligente de clientes potenciales se extiende a cada punto de contacto:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Integración de SMS:</strong> Para consultas urgentes, el sistema puede enviar confirmaciones y recordatorios por mensaje de texto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Seguimiento multicanal:</strong> Coordina correo electrónico, redes sociales y alcance telefónico para mantenerse en la mente del cliente sin ser abrumador</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Puntuación de clientes potenciales:</strong> Clasifica automáticamente a los prospectos según el compromiso, las respuestas de calificación y los indicadores de comportamiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Coordinación de equipos:</strong> Asegura que el miembro adecuado del equipo maneje cada cliente potencial según su experiencia, disponibilidad y carga de trabajo</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Cómo empezar: Tu camino para no perder nunca otro cliente potencial</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ¿Listo para transformar cómo tu negocio maneja los clientes potenciales? Aquí te decimos cómo comenzar:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Opción 1: Implementación DIY</h4>
                  <p className="text-gray-700 mb-4">Si tienes inclinaciones técnicas y quieres empezar de manera simple:</p>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. Configura una automatización básica de correo electrónico con tus herramientas actuales</li>
                    <li>2. Crea un cuestionario simple usando Google Forms o Typeform</li>
                    <li>3. Conecta una herramienta de programación como Calendly</li>
                    <li>4. Agrega gradualmente funciones más sofisticadas a medida que veas resultados</li>
                  </ol>
                </div>
                
                <div className="bg-gradient-to-br from-ignition-orange/10 to-ember-red/10 p-6 rounded-lg border border-ignition-orange/20">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Opción 2: Implementación profesional con Ignition AI</h4>
                  <p className="text-gray-700 mb-4">Para empresas que desean el sistema completo sin la curva de aprendizaje:</p>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. <strong>Llamada de descubrimiento:</strong> Analizamos tu proceso actual de clientes potenciales e identificamos oportunidades</li>
                    <li>2. <strong>Diseño personalizado:</strong> Construimos secuencias de automatización adaptadas a tu industria y necesidades específicas</li>
                    <li>3. <strong>Integración:</strong> Conectamos todo a tus herramientas y flujos de trabajo existentes</li>
                    <li>4. <strong>Capacitación:</strong> Nos aseguramos de que tu equipo sepa cómo maximizar el sistema</li>
                    <li>5. <strong>Optimización:</strong> Monitoreamos los resultados y mejoramos continuamente el rendimiento</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">La inversión que se paga sola</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Pongamos esto en perspectiva. Si normalmente conviertes el 20% de tus clientes potenciales y estás recibiendo 50 clientes potenciales por mes, estás cerrando 10 acuerdos. Ahora imagina duplicar tu tasa de conversión al 40% simplemente respondiendo más rápido y proporcionando una mejor experiencia inicial. Eso son 20 acuerdos en lugar de 10: un aumento del 100% en las ventas con el mismo gasto en marketing.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Para la mayoría de las empresas, este sistema se amortiza en el primer mes con los clientes potenciales que de otra manera se habrían perdido por tiempos de respuesta lentos.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Tu turno: Deja de dejar escapar oportunidades</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cada día que esperas para implementar la automatización inteligente de clientes potenciales es otro día de oportunidades perdidas. Mientras respondes manualmente correos electrónicos y juegas al teléfono con prospectos, tus competidores están capturando esos clientes potenciales en minutos con sistemas que nunca duermen.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                La pregunta no es si puedes permitirte implementar este sistema: es si puedes permitirte no hacerlo.
              </p>

              <div className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu gestión de clientes potenciales?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Reserva una consulta gratuita con nuestro equipo. Te mostraremos exactamente cómo la automatización inteligente puede transformar tu gestión de clientes potenciales, e incluso construiremos una secuencia de automatización de muestra durante nuestra llamada.
                </p>
                <Link href="/contact" className="inline-block bg-white text-ignition-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Programa tu sesión gratuita de estrategia de automatización
                </Link>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                O, si prefieres comenzar con una conversación, contáctanos directamente. Cuéntanos sobre tus mayores desafíos en la gestión de clientes potenciales, y compartiremos estrategias específicas que pueden ayudar, ya sea que trabajes con nosotros o no.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Porque en Ignition AI, creemos que cada negocio merece capturar cada oportunidad. Asegurémonos de que ninguna de las tuyas se escape.
              </p>

            </motion.div>
          </div>
        </div>
      </article>

      {/* Services CTA */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">
              ¿Listo para no perder nunca otro cliente potencial?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Desde automatización inteligente de clientes potenciales hasta sistemas avanzados de compromiso con clientes, ayudamos a las empresas a capturar y convertir más oportunidades. Descubre cómo nuestras soluciones de automatización pueden transformar tu proceso de gestión de clientes potenciales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors text-lg"
              >
                Explora Nuestros Servicios
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-charcoal transition-colors text-lg"
              >
                Obtén tu auditoría gratuita
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              ✓ Auditoría gratuita de gestión de leads  ✓ Estrategia de automatización personalizada  ✓ Hoja de ruta de implementación
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NuncaPierdasOtroClientePotencialClient;