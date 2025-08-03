"use client"; // Only if you're using App Router and want client-side effects

import React from "react";
import PropTypes from "prop-types"; 

const BackgroundVideo = ({ src, type = "video/mp4", children }) => {
  return (
    <div className={styles.videoWrapper}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type={type} />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};

BackgroundVideo.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default BackgroundVideo;
