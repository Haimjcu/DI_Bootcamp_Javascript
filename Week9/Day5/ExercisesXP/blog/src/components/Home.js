import React from 'react';
import logo from './blog.png';
import {connect} from 'react-redux';
import {Link, NavLink } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
        <div className='container home'>
            <h4>Home</h4>

            {
              this.props.posts.length > 0 ? (
                this.props.posts.map((post, i) => {
                    return (
                        <div className="post card" key={post.id}>
                            <img src={logo} />
                            <div className="card-content">
                                <Link to={post.id}><span class="card-title red-text">{post.title}</span></Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    );
                  })
              ) 
              : <p>No posts to show</p> 
            }


        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      posts: state.posts
    }
  };

export default connect(mapStateToProps)(Home);