
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'




import bn2 from '../../img/bn2.png'
import bn1 from '../../img/bn1.png'
import crep from '../../img/crep.png'
import cd1 from '../../img/cd1.png'
import cd2 from '../../img/cd2.png'
import cd3 from '../../img/cd3.png'
import cd4 from '../../img/cd4.png'
import cd5 from '../../img/cd5.png'
import cd6 from '../../img/cd6.png'
import cd7 from '../../img/cd7.png'
import cd8 from '../../img/cd8.png'
import cd9 from '../../img/cd9.png'
import cp1 from '../../img/cp1.jpg'
import f1 from '../../img/f1.jpg'
import f2 from '../../img/f2.jpg'
import f3 from '../../img/f3.jpg'




function Home() {
    
    return(
        
       
      
        <section className="container">
       
       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bn2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bn1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crep} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h1 className={styles.titulof}>Filmes em Cartazes</h1>
<LinkButton className={styles.btn} to="/NovoProjeto" text="Sessoes" />
<div class="container text-center mt-5">
  <div class="row">
    <div class="col">
    <img className={styles.card} src={cd1} />
    <p>Cidade dos Ossos</p>
    </div>
    
    <div class="col">
    <img className={styles.card} src={cd2} />
    <p>Cidade dos Ossos</p>
    </div>
    <div class="col">
    <img className={styles.card} src={cd5} />
    <p>Cidade dos Ossos</p>
    
    </div>
  </div>
</div>
<div class="container text-center mt-5">
  <div class="row">
    <div class="col">
    <img className={styles.card} src={cd4} />
    <p>Cidade dos Ossos</p>
    </div>
    
    <div class="col">
    <img className={styles.card} src={cd3} />
    <p>Cidade dos Ossos</p>
    </div>
    <div class="col">
    <img className={styles.card} src={cd6} />
    <p>Cidade dos Ossos</p>

    </div>
  </div>
</div>
<div class="container text-center mt-5">
  <div class="row">
    <div class="col">
    <img className={styles.card} src={cd7} />
    <p>Cidade dos Ossos</p>
    </div>
    
    <div class="col">
    <img className={styles.card} src={cd8} />
    <p>Cidade dos Ossos</p>
    </div>
    <div class="col">
    <img className={styles.card} src={cd9} />
    <p className={styles.pcard} >Cidade dos Ossos</p>
    
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
    <img className={styles.f1} src={f1} />
    <p>Excelente Atendimento.</p>
    </div>
    <div class="col">
    <img className={styles.f1} src={f2} />
    <p>Melhores salas e filmes.</p>
    </div>
    <div class="col">
    <img className={styles.f1} src={f3} />
    
    
    <p>Prioriza seus clientes.</p>
    </div>
  </div>
</div>




        </section>
       
    )
}
export default Home