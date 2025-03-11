import React, { useReducer } from 'react'
import SkillForm from '../components/SkillForm'
import SkillAdmin from '../components/SkillAdmin'


const Competences = () => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    return (
        <>
            <div>Competences</div>
            <SkillForm  forceUpdate={forceUpdate}/>
            <SkillAdmin ignored={ignored} forceUpdate={forceUpdate}/>
        </>
    )
}

export default Competences



