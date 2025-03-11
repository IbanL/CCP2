import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';



const SkillAdmin = ({ ignored, forceUpdate }) => {
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState([])

const fetchData = async () => {

    setLoading(true);

    try {
        const response = await axios.get(process.env.VITE_API_URL + "skills");


        if (!response) {
            throw new Error("No response from server");
        }

        setSkills(response.data.skills);
    } catch (error) {
        console.error(error.message);
    } finally {
        setLoading(false);
    }

}

useEffect(() => {
    fetchData();

}, [ignored]);




const handleDelete = async (id) => {
    try {
        const response = await axios.delete(process.env.VITE_API_URL + `skills/delete/${id}`);
        forceUpdate();

    } catch (error) {
        console.error("erreur lors de la suppression", error.response ? error.response.data : error.message);

        alert("erreur lors de la suppression")
    }
};

return (
    <>
        <ul className="list-group">
            {skills ? (

                skills.map((skill) => (
                    <li className="list-group-item d-flex gap-3" key={skill._id}>
                        <img src={skill.img} alt={skill.title} style={{ width: "100px", height: "100px" }} />
                        <p className='skillTitle'>{skill.title}</p>
                        <p className='skillNiveau'>niveau : {skill.niveau}</p>
                        <p className='skillCategorie'> categorie : {skill.categorie}</p>
                        <button onClick={() => { console.log(skill) }}>modifier</button>
                        <button onClick={() => {handleDelete(skill._id)}}>supprimer</button>

                    </li>



                ))

            ) : (
                <p>Loading...</p>
            )}
        </ul>
    </>

)



}

export default SkillAdmin