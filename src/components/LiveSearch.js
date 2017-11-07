import React from 'react';

import SearchForm from './SearchForm';
import CharacterList from './CharacterList';

export default function LiveSearch(props) {
    return (
        <div className="live-search">
            <SearchForm />
            <CharacterList characters={props.characters} />
        </div>
    );
}
