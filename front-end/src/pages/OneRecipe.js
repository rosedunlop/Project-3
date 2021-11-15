import React from 'react'
import { useState, useEffect } from 'react'
import SingleRecipe from '../components/SingleRecipe'
import { useParams } from 'react-router'
import { fetchRecipe } from '../helpers/api'

const RecipeShow = () => {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()
    console.log('End of the world')
    // const history = useHistory()

    useEffect(() => {
        fetchRecipe(id).then(setRecipe)
    }, [id])

    return (
        <>
        {recipe && (
            <section>
                <div className='single-recipe'>
                    <SingleRecipe {...recipe} />
                 </div>
            </section>
        )}
        </>
    )
}

export default RecipeShow
