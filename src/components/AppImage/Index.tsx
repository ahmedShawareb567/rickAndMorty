import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./scss/index.scss";

interface AppImageInterface {
  src: string;
  alt?: string;
  ratio?: string;
  width?: number;
  height?: number;
}

export const AppImage = ({
  src,
  alt,
  ratio = "1-1",
  width = undefined,
  height = undefined,
  ...rest
}: AppImageInterface) => {
  return (
    <>
      <div className={`appImage is-${ratio}`} {...rest}>
        <LazyLoadImage
          alt={alt}
          height={height}
          src={src}
          width={width}
          effect="blur"
        />
      </div>
    </>
  );
};
