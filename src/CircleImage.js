import React from 'react'
import { Group, Image } from 'react-konva';

const CircleImage = ({ src, ...props }) => {
    if (!src) {
        return null;
    }
    const { x, y, width, height } = props;
    const radius = width / 2;
    if (width !== height) {
        console.warn("Image dimensions are not 1:1")
    }
    return (
        <Group clipFunc={ctx => calcClipFunc(ctx, x, y, radius)}>
            <Image {...props} image={src} />
        </Group>
    );
}

const calcClipFunc = (ctx, x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, false);
    ctx.closePath();
}

export default CircleImage
