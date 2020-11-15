import React from 'react';
import { Image } from "react-konva";

const SvgIcon = ({ xml, fill, ...props }) => {
    const modifiedSrc = xml.replace('<svg ', `<svg fill="${fill}" `);
    const img = document.createElement('img');
    img.src = 'data:image/svg+xml;base64,' + window.btoa(modifiedSrc);
    return <Image image={img} {...props} />
}

export { SvgIcon }