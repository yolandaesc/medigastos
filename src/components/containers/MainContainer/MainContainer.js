import React, { Component } from 'react'
import Axios from 'axios';

export class MainContainer extends Component {

    state={
        name:"",
        pokemons:{}
    }

    findPokemon(){
            Axios.get("https://pokeapi.co/api/v2/pokemon/"+this.state.name)
            .then(pokemon=>{
                this.setState({pokemon:pokemon.data})
            })
            .catch(err=>console.log(err));
    }

    handleChange(event){
        console.log(event.target.value);
       this.setState({name:event.target.value});
    }

    
    render() {
        return (
            <div>
                <div className="Container">
                    <input typoe="text" onChange={this.handleChange.bind(this)}/>
                    <button type="button" onClick={this.findPokemon} className="btn btn-primary">Buscar</button>
                </div>
            </div>
        )
    }
}

export default MainContainer
