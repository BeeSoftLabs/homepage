import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor(private readonly ui: UiService) {}
  open: number | null = null
  questions: { id: number; question: string; answer: string }[] = [
    {
      id: 1,
      question: '¿Cómo funciona el programa?',
      answer: `
<p>
El programa se divide en 2 etapas, la primera es aplicación y selección de becados
durante esta primera etapa los aplicantes resuelven varias misiones en la plataforma <b>Connect a Mind</b>.
</p>
<br/>
<p>
Debes dedicar un promedio de <b>30 horas por semana</b> para ello. Si cuentas con menos tiempo disponible es posible no lograr cumplir el objetivo,
ya que la dificultad va creciendo cada más y la práctica hace al ninja 🥷.
</p>
<br/>
<p>
La segunda etapa es el programa de <b>8 meses</b> con los estudiantes becados y al igual que en la primera etapa trabajarán retos semanales,
los sábados será la clase con tus compañeros y mentor(es) del módulo. Esta será para resolver dudas y explicar desde la experiencia
el tema visto en el reto de la semana anterior.
</p>
`,
    },
    {
      id: 2,
      question: '¿Cuánto dura el programa?',
      answer: `<p>
El programa tiene una duración de <b>8 meses</b>. Debido a la crisis sanitaria actual se contempla que la duración se pueda ampliar
unos días o semanas adicionales para cubrir inconvenientes que puedan surgir.<p/>`,
    },
    {
      id: 3,
      question: '¿Si tengo dudas con los retos, como puedo resolverlas?',
      answer: `
        <p> En <b>Discord</b> los mentores y guías del programa así como otros becados
         estarán disponibles para resolver tus dudas y puedas llegar lo más claro posible a la clase del sábado.🌅 <p/>`,
    },
    {
      id: 4,
      question: '¿Cuál es el precio del programa?',
      answer: `<p>El programa es gratis de principio a fin. No hay contratos ocultos solo pasión por la enseñanza y el código. 🤟 ❤️<p>`,
    },
    {
      id: 5,
      question: '¿Qué tecnologías voy a aprender?',
      answer: `<p>El stack de tecnologías que vamos a enseñar lo puedes ver en <a href="https://beesoftlabs.dev/">BeeSoft Labs.dev</a> <p>`,
    },
    {
      id: 6,
      question: '¿Hasta cuando puedo enviar mis retos?',
      answer: `<p>Recibimos retos hasta el último día de febrero 2021.<p>`,
    },
  ]

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Donaciones' })
  }
  openQuestion(questionId: number): void {
    this.open = this.open === questionId ? null : questionId
  }
}
