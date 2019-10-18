import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

const Slider = () => {
    const slider = (
        <AwesomeSlider cssModule={AwsSliderStyles}>
          <div data-src="http://localhost:3000/images/iphone8.jpg" />
          <div data-src="http://localhost:3000/images/iphoneX.png" />
          <div data-src="http://localhost:3000/images/SamsungA50.png" />
        </AwesomeSlider>
      );
    
    return (
        <div>
            {slider}
        </div>
    );
};

export default Slider;