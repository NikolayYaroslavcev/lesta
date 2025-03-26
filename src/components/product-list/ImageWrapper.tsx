import React from 'react';

interface ImageWrapperProps {
    imageUrl: string;
    altText: string;
}

export const ImageWrapper = ({ imageUrl, altText }: ImageWrapperProps) => {
    return <img src={imageUrl} alt={altText} />;
};
