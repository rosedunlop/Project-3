import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

export const ImageUploadField = ({ handleImageUrl, value }) => {

    const handleUpload = async event => {
        const data = new FormData()
        data.append('file', event.target.files[0])
        data.append('upload_preset', uploadPreset)
        console.log('data', data)
        const res = await axios.post(uploadUrl, data)
        console.log('response --> ', res)
        handleImageUrl(res.data.url)
    
    }

    return (
        <>
        {value ?
            <div className='img-preview'>
                <img src={value} alt='recipe-img'/>
            </div>   
            :
            <> 
        
            <label>Add a photo fo your recipe</label>
            <input
                className='input'
                type='file'
                onChange={handleUpload}
                />
                </>
        }
        </>
    )
}