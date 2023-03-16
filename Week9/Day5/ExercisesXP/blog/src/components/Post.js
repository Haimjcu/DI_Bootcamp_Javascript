import {React} from 'react';
import {connect} from 'react-redux';
import { useParams } from "react-router-dom";
import { deletePost } from '../actions/index';


const Post = (props) => {
    let params = useParams();

    return (
        <div className='container'>
            {
                props.posts.filter( posts => posts.id === params.post_id).length > 0 ? (
                props.posts.filter( posts => posts.id === params.post_id).map((post, i) => {
                    return (
                        <div className='post'>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    );
                  })
                  ) 
                  : <p>Loading</p> 
            }
            <div class="center">
                <button className="btn grey" onClick={() => props.deletePost(params.post_id)}>Delete Post</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      posts: state.posts
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (id) =>dispatch(deletePost(id))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Post);