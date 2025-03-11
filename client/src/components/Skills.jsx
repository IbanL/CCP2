import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Skills = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [skills, setSkills] = useState([])

    
    
        const fetchData = async () => {

            setIsLoading(true);

            try {
                const response = await axios.get(process.env.VITE_API_URL + "skills");
                

                if (!response) {
                    throw new Error("No response from server");
                }

                setSkills(response.data.skills);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }

        }

        useEffect(() => {
            fetchData();

        }, []);
        
    return (
        <>
        {!isLoading ? (
            skills.map((skill) => (

                <div className="card" style={{width: "18rem"}} key={skill._id}>
                    <img className="card-img-top" src={skill.img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{skill.title}</h5>
                        <p className="card-text">catégorie: {skill.categorie}</p>
                        <p className="card-text">niveau: {skill.niveau}</p>
                    </div>            
                </div>
        
            )
        ) ) : (
            <p>Loading...</p>
        )} 
        </>

    )



}
export default Skills