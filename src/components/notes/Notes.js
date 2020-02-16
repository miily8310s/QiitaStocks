import React, { Component } from 'react'
import { Consumer } from '../../context'

import Note from "../notes/Note";

class Notes extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    // return <h1>Notes</h1>
                    const { note_list, heading } = value;
                    if (note_list === undefined || note_list.length === 0) {
                        return <h1>No Notes</h1>
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center my-4">{heading}</h3>
                                <div className="row">
                                    {note_list.map(item => (
                                        <Note key={item.id} note={item}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Notes;
