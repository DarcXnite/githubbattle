import React from 'react'

export default class Autocomplete extends React.Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
    }
}