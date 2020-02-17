import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from "../../context";

class Search extends Component {
    state = {
        tagName: ''
    }

    onChange = (e) => {
        this.setState({ tagName: e.target.value })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body my-4 p-4">
                            <form>
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
