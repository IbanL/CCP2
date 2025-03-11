import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigation = useNavigate()


  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
         grecaptcha.enterprise.ready(async () => {
          const token = await grecaptcha.enterprise.execute('6LdVY-kqAAAAANTw81T3SHowB-YZvq7YCWiMl9VW', {action: 'signup'});
        
        const dataToSubmit = {...data, recaptchaResponse: token, action: "signup"};
      console.log(dataToSubmit)
      const response = await axios.post(process.env.VITE_API_URL + 'users/register', dataToSubmit)
      alert('inscription reussie')
      navigation("/login")
    });
    } catch (error) {
      console.error("erreur lors de l'inscription", error.response ? error.response.data : error.message)
      alert("erreur lors de l'inscription veuillez verifier vous informations")
    }
  }



  return (
    <>
      <h2>inscription</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">nom:</label>
          <input type="text"
            id='name'
            placeholder='nom ...'
            {...register('name', {
              required: "le nom est obligatoire",
              minLength: {
                value: 3,
                message: "le nom doit avoir au moins 3 caractères"
              },
              maxLength: {
                value: 50,
                message: "le nom ne doit pas avoir plus de 50 caractères"
              }
            })} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <label htmlFor="email">Email:</label>
          <input type="email"
            id='email'
            placeholder='exemple@email.com'
            {...register('email', {
              required: "l'email est obligatoire",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "l'email n'est pas valide"
              }
            })} />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <label htmlFor="password"> mot de passe</label>
          <input type="password"
            id='password'
            placeholder='*******'
            {...register('password', {
              required: "le mot de passe est obligatoire",
              minLength: {
                value: 2,
                message: "le mot de passe doit avoir au moins 2 caractères"
              },
              maxLength: {
                value: 200,
                message: "le mot de passe ne doit pas avoir plus de 200 caractères"
              }
            })} />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <button type='submit'>s'inscrire</button>

        </div>
      </form>
    </>
  )
}

export default Register