import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Calculator',
      category: 'projects',
      description: 'calculator app',
    },
    {
      name: 'Led Lights',
      category: 'projects',
      description: 'controls leds',
    },
    {
      name: 'Car Design',
      category: 'projects',
      description: 'car design',
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'run buddy website',
    },
    {
      name: 'Surf Report',
      category: 'projects',
      description: 'detailed surf report',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (

    <MDBContainer className="mt-5">
      <MDBRow className="mb-4">
        <MDBCol>
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-fluid"
              key={image.name}
            />
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PhotoList;
