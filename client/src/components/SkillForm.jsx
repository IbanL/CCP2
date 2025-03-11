import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const SkillForm = ({ forceUpdate }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()



    const onSubmit = async (data) => {
        try {

            console.log(data);

            data.imageFile = data.imageFile[0];

            console.log(data);
            axios.defaults.withCredentials = true;
            const response = await axios.post(process.env.VITE_API_URL + 'skills/add', data, { headers: { 'content-type': 'multipart/form-data' } });
            axios.defaults.withCredentials = false;
            forceUpdate();

        } catch (error) {
            console.error("erreur lors de l'envoi de la compétence", error.response ? error.response.data : error.message);

            alert("erreur lors de l'envoi de la compétence")
        }
    }


    return (
        <>
            <div>ajouter une compétence</div>

            <br />

            <form onSubmit={handleSubmit(onSubmit)} encType={'multipart/form-data'}>
                <div className="form-group">
                    <label htmlFor="title">Nom de la compétence</label> <br />
                    <input
                        type="text"
                        name='title'
                        className="form-control"
                        id="title"
                        placeholder="competence 1"
                        {...register('title', { required: true })} />
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="categorie">Catégorie</label>
                    <select
                        className="form-control"
                        name='categorie'
                        id="categorie"
                        {...register('categorie', { required: true })}>
                        <option>front</option>
                        <option>back</option>
                    </select>
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="niveau">niveau</label>
                    <select
                        className="form-control"
                        name='niveau'
                        id="niveau"
                        {...register('niveau', { required: true })} >
                        <option>débutant</option>
                        <option>intermédiaire</option>
                        <option>expert</option>
                    </select>
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="imageFile">illustration de la compétence</label> <br />
                    <input
                        type="file"
                        accept="image/*"
                        name='imageFile'
                        className="form-control-file"
                        id="imageFile"
                        {...register('imageFile', { required: true })} />
                </div>

                <button type='submit'>ajouter la compétence</button>
            </form>
        </>
    )
}

export default SkillForm