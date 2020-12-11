import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface ImageProps {
  className: string;
  src: string;
  alt: string;
}

export default function LazyImage({
  src,
  alt,
  className,
}: ImageProps): JSX.Element {
  return <LazyLoadImage className={className} src={src} alt={alt} />;
}
