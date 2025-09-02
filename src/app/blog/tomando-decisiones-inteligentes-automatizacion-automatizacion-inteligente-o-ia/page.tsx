"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const TomandoDecisionesInteligentes = () => {
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
                Guía de Negocios
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
              Tomando decisiones inteligentes: ¿Automatización, Automatización Inteligente o IA?
            </h1>
            <p className="text-xl md:text-2xl !text-gray-300 mb-8">
              Una guía pragmática para elegir entre automatización simple, automatización inteligente e IA para que gastes dinero donde realmente importa.
            </p>
            <div className="flex items-center justify-center text-gray-300 text-sm">
              <span>Por Mario Guerra & Hector Norzagaray</span>
              <span className="mx-3">•</span>
              <span>5 min de lectura</span>
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
                Muchos dueños de pequeñas empresas escuchan términos como <em>automatización</em>, <em>automatización inteligente</em> e <em>inteligencia artificial (IA)</em> y se sienten confundidos. A menudo se usan como sinónimos, pero no significan lo mismo. Elegir el enfoque correcto puede ahorrar tiempo, reducir costos y acelerar el crecimiento.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Un estudio reciente del MIT sobre el estado de la IA en los negocios (2025) reveló que la mayoría de los proyectos de IA no logran resultados medibles. ¿La causa? Mala integración, objetivos poco claros y falta de alineación con las necesidades reales del negocio. La lección: no se trata de usar IA por moda, sino con propósito.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">¿Qué es la Automatización?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La automatización permite que la tecnología realice tareas repetitivas que normalmente haría una persona.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Ejemplos</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>Enviar recordatorios de citas automáticamente</li>
                  <li>Generar reportes diarios de ventas o inventario</li>
                  <li>Mover facturas del correo electrónico al software contable</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Beneficios:</strong> Ahorra tiempo, reduce errores humanos, mejora la eficiencia.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mejor uso:</strong> Para tareas predecibles y repetitivas que consumen tiempo.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">¿Qué es la Automatización Inteligente?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La automatización inteligente agrega capacidad de decisión básica. Interpreta datos y responde con lógica simple.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Ejemplos</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>Un sistema de correo que identifica mensajes urgentes y los asigna automáticamente</li>
                  <li>Una herramienta que escanea facturas en distintos formatos y las organiza</li>
                  <li>Un sistema de atención al cliente que enruta solicitudes según palabras clave</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Beneficios:</strong> Maneja tareas más complejas, reduce decisiones manuales, aumenta velocidad y precisión.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mejor uso:</strong> Para tareas con cierta variabilidad o que requieren decisiones simples.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">¿Qué es la Inteligencia Artificial?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La IA aprende de los datos, se adapta a nuevas situaciones y mejora con el tiempo. A diferencia de la automatización, puede hacer predicciones y ofrecer insights.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Ejemplos</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>Un chatbot que responde preguntas y mejora con cada interacción</li>
                  <li>Una herramienta que predice qué clientes tienen más probabilidad de comprar</li>
                  <li>Un asistente que agenda llamadas de forma natural y eficiente</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Beneficios:</strong> Aprende y mejora continuamente, toma decisiones basadas en datos, abre nuevas oportunidades que la automatización no puede ofrecer.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mejor uso:</strong> Para tareas complejas, que requieren adaptación y análisis profundo.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">¿Cómo Decidir Qué Necesitas?</h2>

              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Necesidad</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Solución Ideal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Tareas simples y repetitivas</td>
                    <td className="border border-gray-300 px-4 py-2">Automatización</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Tareas con decisiones básicas</td>
                    <td className="border border-gray-300 px-4 py-2">Automatización Inteligente</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Tareas que requieren aprendizaje</td>
                    <td className="border border-gray-300 px-4 py-2">Inteligencia Artificial</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                El estudio del MIT destaca que la IA funciona mejor cuando se implementa con objetivos claros y alineación estratégica. Empezar con proyectos pequeños y enfocados en resultados rápidos es clave para lograr impacto.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">Próximos Pasos</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Si quieres explorar si la automatización, la automatización inteligente o la IA son adecuadas para tu negocio, <strong>IgnitionAI</strong> puede ayudarte. Guiamos a pequeñas empresas en la evaluación de oportunidades, implementación de soluciones y medición de impacto—para que tú puedas enfocarte en crecer.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Contáctanos hoy</strong> y descubre cómo tu negocio puede trabajar con más inteligencia, no con más esfuerzo.
              </p>

              <div className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">¿Listo para evaluar tus oportunidades?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Agenda una llamada corta de descubrimiento y identificaremos oportunidades prácticas y de alto impacto en IA y automatización que puedas implementar rápidamente.
                </p>
                <Link href="/contact" className="inline-block bg-white text-ignition-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Agenda una Consulta Gratuita
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TomandoDecisionesInteligentes;
