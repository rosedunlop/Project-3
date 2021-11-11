import RecipeHomeCard from '../components/RecipeHomeCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function fetchRecipes() {
            const config = {
                method: 'get',
                url: '/api/recipes',
                headers: {}
            }
            const response = await axios(config)
            setRecipes(response.data)
        }
        fetchRecipes()
    }, [])

    return (
        <>
        {recipes.length &&
        <>
            <div className='recipeList'>
                {recipes.map((recipe) => (
                    <div key={recipe._id} className='oneRecipe'>
                        <RecipeHomeCard {...recipe} />
                    </div>
                ))}
            </div>
        </>
        }
        </>
    )
    
}

export default RecipeList 

