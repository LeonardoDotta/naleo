import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject () {
    return (
        <div className={styles.newproject_container}>
            <h1>Escolher presente</h1>
            <p>Defina as opções:</p>
            <ProjectForm btnText="Escolher presente" />
        </div>
    )
}

export default NewProject