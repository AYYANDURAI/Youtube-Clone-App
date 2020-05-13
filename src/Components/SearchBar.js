import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };
    handleSubmit(e) {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }
    render() {
        return (
            <div className="searchBar">
                <Paper elevation={6} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <TextField fullWidth label="SearchBar..." onChange={this.handleChange.bind(this)}></TextField>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default SearchBar;