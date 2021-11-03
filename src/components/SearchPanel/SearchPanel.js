import React from 'react';

function SearchPanel(props) {
    return (
        <div>
            <div className="input-group mb-3 inputField">
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default" name='input' placeholder='Search by posts'/>
            </div>
        </div>
    );
}

export default SearchPanel;