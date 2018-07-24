import React from 'react';

export default function CharacterList (props) {

    const characters = props.characters.map((character) => 
        <li>
<span>{character.name}</span>
            </li>
    );

    return (
      
        <ul className="character-list">
        {characters}
            </ul>
    );
}