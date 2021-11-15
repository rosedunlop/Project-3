import React from 'react'
import FormInput from './FormInput'

const RecipeForm = ({ formInputProps }) => {
  return (
    <>
      <FormInput
        name='title'
        type='text'
        placeholder='Recipe Name'
        {...formInputProps}
      />
      <FormInput
        name='image'
        type='text'
        placeholder='<recipe image url>'
        {...formInputProps}
      />
      <FormInput
        name='description'
        type='text'
        placeholder='A summary of the recipe'
        {...formInputProps}
      />
      <FormInput
        name='method'
        type='text'
        placeholder='Step by step method'
        {...formInputProps}
      />
      <FormInput
        name='ingredients'
        type='text'
        placeholder='List all ingredients and amounts'
        {...formInputProps}
      />
      <FormInput
        name='keywords'
        type='text'
        placeholder='e.g. one-pot'
        {...formInputProps}
      />
      <FormInput
        name='time'
        type='number'
        placeholder='Time in minutes'
        {...formInputProps}
      />
      <FormInput
        name='servings'
        type='number'
        placeholder='how many does this feed?'
        {...formInputProps}
      />
      <FormInput
        name='tips'
        type='text'
        placeholder='Any top tips?'
        {...formInputProps}
      />
      <FormInput
        name='difficulty'
        type='text'
        placeholder='Easy / Medium / Hard'
        {...formInputProps}
      />
      <FormInput
        name='author'
        type='text'
        placeholder='Who wrote this tasty recipe?'
        {...formInputProps}
      />
    </>
  )
}

export default RecipeForm