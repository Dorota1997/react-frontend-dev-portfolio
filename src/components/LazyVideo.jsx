import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const LazyVideo = ({ src, type, muted, autoPlay, loop }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad height={200}>
        <video
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          onPlaying={removePlaceholder}
          src={src}
          type={type}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
        />
      </LazyLoad>
    </>
  );
};

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyVideo;
