import {useEffect, useState} from 'react'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton';
import styles from '../projeto/ProjetoForm.module.css'


function ProjetoForm({ handleSubmit, bntText, projectData }) {
    const [filmes, setFilmes] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
    fetch("http://localhost:3333/Filmes", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setFilmes(data)
    })
    .catch((err) => console.log(err))

}, [])

const submit =(e) => {
    e.preventDefault()
    handleSubmit(project)
}
function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value })
   
}

    return(
        <form onSubmit={submit} className={styles.form}>
           
                <Input 
                type='text'
                text='Nome do Filme'
                name="name"
                placeholder= 'Insira a sessao'
                handleOnChange={handleChange}
                />
        

           
                <Input 
                type="number"
                text='Numero da Sala'
                name="budget"
                placeholder= 'Insira a sessao'
                handleOnChange={handleChange}
                />

                <Select 
                name="category_id" 
                text="Selecione" 
                options={filmes} />

                <SubmitButton text="Sessoes " />
          

          

            
            
        
        </form>
    )
}
export default ProjetoForm;