import React from 'react';
import Photo from './Photo';

const PhotoList = ( props ) => {
  const { pictures, category } = props;
  return (
    <div>
      <h2>{category} Images</h2>
      <div class="photo-container">
        <div>
          <ul>
            {
              pictures.map((picture, i) => {
                return (
                  <Photo key={i} src={picture.src.tiny} />
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoList;