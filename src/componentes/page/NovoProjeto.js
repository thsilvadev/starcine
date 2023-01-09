
import { useNavigate } from 'react-router-dom'
import styles from './NovoProjeto.module.css'
import ProjetoForm from '../projeto/ProjetoForm'



function NovoProjeto() {

    const navigate = useNavigate()
    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:3333/sessoesn', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/sessoes', {message:'Imovel cadastrado com sucesso!'})
        })
        ).catch(err => console.log(err))

    }

    return(
        <div className={styles.novoprojeto_container}>
        <h1>Novo Projeto</h1>
        <p> novas sessoes</p>
       <ProjetoForm handleSubmit={createPost} btnText="criar projeto" />
        </div>
    )
}
export default NovoProjeto