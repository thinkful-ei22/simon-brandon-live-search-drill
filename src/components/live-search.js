import React from 'react';
import SearchForm from './search-form';
import CharList from './character-list';

export default class LiveSearch extends React.Component {
constructor(props){
    super (props);
    this.state = {
searchTerm: ''
    };
}



render (){

const characters = this.props.characters.filter(char => char.name.toLowerCase().includes(
    this.state.searchTerm.toLowerCase())
);

    return (
        <div class ="live-search">
        <SearchForm onChange ={searchTerm =>  this.setState({searchTerm})} />
        <CharList characters={characters} />
        </div>
    );
};

}