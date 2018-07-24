import React from 'react';


export default function searchForm(props) {

    return (
<form>
    <label> Search Form </label>
    <input type="text" id="search-form" placeholder="Insert Search Here"   onChange = {e => props.onChange(e.target.value) }/>
</form>

    );
}