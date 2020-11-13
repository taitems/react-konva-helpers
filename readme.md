# react-konva-helpers

## `<CircleImage />`
Use how you would a normal image, first you must use-image.

```javascript
import useImage from 'use-image';
const [src] = useImage('path/to/file');

// Inside <Stage> etc.
<CircleImage src={src} x={100} y={100} width={50} height={50} />
//</Stage>

```