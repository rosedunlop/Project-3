import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SingleRecipe from '../components/SingleRecipe'

const RecipeShow = () => {
    const [recipe, setRecipe] = useState([])
    const { _id } = useParams()
    // const history = useHistory()

    useEffect(() => {
        async function fetchRecipe() {
            const config = {
                method: 'get',
                url: `/api/recipes/${_id}`,
                headers: {}
            }
            const response = await axios(config)
            setRecipe(response.data)
        }
        fetchRecipe()
    }, [])



    return (
        <>
        {recipe.length && (
            <section>
                <div className='single-recipe'>
                    <h2>{recipe.title}</h2>
                    <p>
                    <Link to={`/recipes/${_id}/edit`}>Edit this recipe</Link>
                    </p>
                    {recipe.map((recipes) => (
                    <div key={recipes._id} className='oneRecipe'>
                        <SingleRecipe {...recipe} />
                    </div>
                    ))}


                 </div>

            </section>
        )}
        </>
    )
}

export default RecipeShow