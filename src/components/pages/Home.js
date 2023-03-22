import styles from './Home.module.css'
import img2 from '../../img/img2.jpg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>NALEO</span></h1>
            <p>Conheça um pouco da nossa história!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={img2} alt='NALEO' />
        </section>
    )
}

export default Home