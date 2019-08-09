import React from 'react';


const FaceRecognition = ({imageUrl}) => {
	return(
		<div className = 'center ma'>
		<div className = 'absolute mt2'>
		<img alt = '' src = {imageUrl} width = 'auto' height = '350px'/>
		</div>
		</div>

		);
}

export default FaceRecognition;