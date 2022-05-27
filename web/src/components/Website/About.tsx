
import { useParallax } from 'react-scroll-parallax';

import imgDoutorFeliz from '../../assets/doutor-feliz-segurando-prancheta-com-pacientes.png';

export function About(){

  const { ref } = useParallax<HTMLImageElement>({ opacity: [0.2, 5, 'easeInOut'] }); 

  return (
    <section ref={ref}>
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h4>Sobre nós</h4>
            <h2>Entenda quem somos e por que existimos</h2>
          </header>

          <div className="content">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>

        <div className="col-b">
          <img
            src={imgDoutorFeliz}
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>
  )  
}