import React from 'react';

function PostsStatusFilter(props) {
    return (
        <div>
            <div className="btn-group buttons" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary ">Liked</button>
            </div>
        </div>
    );
}

export default PostsStatusFilter;