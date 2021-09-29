import React, { useState, useCallback } from "react";
import { PictureProps } from "./types";

const Loading = () => <div className="loader">Loading...</div>;

export const Img: React.FC<PictureProps> = ({
  src,
  alt,
  fallback,
  ...props
}) => {
  const [orignalImageSrc, setSrc] = useState<string>(src);
  const [isLoading, setLoadingStatus] = useState<boolean>(true);
  const handleError = useCallback(() => {
    setSrc(fallback);
  }, [fallback]);
  const handleLoad = useCallback(() => {
    setLoadingStatus(false);
  }, []);

  return (
    <div className="imgWrapper">
      <img
        src={orignalImageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      {isLoading && <Loading />}
    </div>
  );
};
