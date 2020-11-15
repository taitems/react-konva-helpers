# react-konva-helpers

## `<CircleImage />`
Apply a circular mask to an image.
Use how you would a normal image, first you must use-image.

```javascript
import { CircleImage } from "react-konva-helpers";
import useImage from 'use-image';
const [src] = useImage('path/to/file');

// Inside <Stage> etc.
<CircleImage src={src} x={100} y={100} width={50} height={50} />
//</Stage>

```
## `<SvgIcon />`
Use an SVG like an icon font. Provide the raw XML and a fill color.

```javascript
import { SvgIcon } from "react-konva-helpers";
const GithubForkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" [...]`

// Inside <Stage> etc.
<SvgIcon xml={GithubForkIcon} fill="red" x={0} />
//</Stage>

```