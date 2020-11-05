import React from "react"
import { connect } from "react-redux"

function Posts(props) {
    console.log(props);
    return (
        <div>
            <h2>Posts</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts)


