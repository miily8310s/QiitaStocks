import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from "../../context";

class Search extends Component {
    state = {
        tagName: ''
    }

    findNote = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://qiita.com/api/v2/items?page=1&per_page=20&query=tag%3A${this.state.tagName}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
         .then(res => {
            dispatch({
                type: 'SEARCH_NOTES',
                payload: res.data
            })

            this.setState({ tagName: ''})
         })
         .catch(err => console.log(err))
    }

    onChange = (e) => {
        this.setState({ tagName: e.target.value })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body my-4 p-4">
                            <form onSubmit={this.findNote.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input
                                      type="text" 
                                      className="form-control form-control-lg mb-4" 
                                      placeholder="Tag name.." 
                                      name="tagName" 
                                      value={this.state.tagName} 
                                      onChange={this.onChange}
                                    />
                                    <button className="btn btn-primary btn-lg btn-block mb-2">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search
