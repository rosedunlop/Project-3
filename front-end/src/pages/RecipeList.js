import RecipeHomeCard from '../components/RecipeHomeCard'
import { useState } from 'react'
import { useEffect } from 'react'

import React from 'react'
import { fetchRecipes } from '../helpers/api'


const RecipeList = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipes().then(setRecipes)
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

