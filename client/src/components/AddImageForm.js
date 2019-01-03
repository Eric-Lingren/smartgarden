import React, { Component} from 'react';
import '../css/addPlantForm.css';
import axios from 'axios';
import {withPlants} from '../context/PlantProvider';

 class AddImageForm extends Component {
    constructor(){
        super()
        this.state = {
            imageUrl: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/images', this.state ).then(res => {
            this.resetForm()
        })
    }

    resetForm = () => {
        this.setState({
            imageUrl: ''
        })
    }

    render(){
        return(
            <div className='addPlantContainer'>
                <h4 className='titleHeader'> Add Image to Choices:</h4>
                <form className='addPlantForm'>
                    URL:   <input 
                                name='imageUrl' 
                                className='newPlantInput4' 
                                type='text' 
                                value={this.state.imageUrl}
                                placeholder='www.example.com' 
                                onChange={this.handleChange}/>
                    <button className='addPlantButton' onClick={this.handleSubmit}>Add to Choices</button>
                </form>
                
            </div>
        )
    }  
}

export default withPlants(AddImageForm)