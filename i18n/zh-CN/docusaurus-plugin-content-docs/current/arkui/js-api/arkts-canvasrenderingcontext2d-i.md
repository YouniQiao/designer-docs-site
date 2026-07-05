# CanvasRenderingContext2D

CanvasRenderingContext2D allows you to draw rectangles, text, images, and other objects on a canvas. You can call getContext('2d') on canvas to obtain a CanvasRenderingContext2D object.

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## arc

```TypeScript
arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
```

Draws an arc on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the center point of the arc. |
| y | number | 是 | Y-coordinate of the center point of the arc. |
| radius | number | 是 | Radius of the arc. |
| startAngle | number | 是 | Start radian of the arc. |
| endAngle | number | 是 | End radian of the arc. |
| counterclockwise | boolean | 否 |  |

## arcTo

```TypeScript
arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
```

Draws an arc based on the radius and points on the arc.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x1 | number | 是 | X-coordinate of the first point on the arc. |
| y1 | number | 是 | Y-coordinate of the first point on the arc. |
| x2 | number | 是 | X-coordinate of the second point on the arc. |
| y2 | number | 是 | Y-coordinate of the second point on the arc. |
| radius | number | 是 | Radius of the arc. |

## beginPath

```TypeScript
beginPath(): void
```

Creates a drawing path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## bezierCurveTo

```TypeScript
bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
```

Draws a cubic bezier curve on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cp1x | number | 是 | X-coordinate of the first parameter of the bezier curve. |
| cp1y | number | 是 | Y-coordinate of the first parameter of the bezier curve. |
| cp2x | number | 是 | X-coordinate of the second parameter of the bezier curve. |
| cp2y | number | 是 | Y-coordinate of the second parameter of the bezier curve. |
| x | number | 是 | End point x-coordinate of the bezier curve. |
| y | number | 是 | End point y-coordinate of the bezier curve. |

## clearRect

```TypeScript
clearRect(x: number, y: number, width: number, height: number): void
```

Clears the content in a rectangle on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the upper left corner of the rectangle. |
| y | number | 是 | Y-coordinate of the upper left corner of the rectangle. |
| width | number | 是 | Width of the rectangle. |
| height | number | 是 | Height of the rectangle. |

## clip

```TypeScript
clip(): void
```

Sets a path as the clipping path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## closePath

```TypeScript
closePath(): void
```

Draws a closed path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## createImageData

```TypeScript
createImageData(width: number, height: number): ImageData
```

Creates an ImageData object.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | Width of the ImageData object. |
| height | number | 是 | Height of the ImageData object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageData | Returns the newly created FunctionCallable object. |

## createImageData

```TypeScript
createImageData(imageData: ImageData): ImageData
```

Creates an ImageData object.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | ImageData object with the same width and height copied from the original ImageData object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageData | Returns the newly created FunctionCallable object. |

## createLinearGradient

```TypeScript
createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
```

Creates a linear gradient color.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x0 | number | 是 | X-coordinate of the start point. |
| y0 | number | 是 | Y-coordinate of the start point. |
| x1 | number | 是 | X-coordinate of the end point. |
| y1 | number | 是 | Y-coordinate of the end point. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CanvasGradient | LinearGradient object. |

## createPath2D

```TypeScript
createPath2D(path?: Path2D): Path2D
```

Creates a path that is later used by the CanvasRenderingContext2D object.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Path2D | the object of Path2D. |

## createPath2D

```TypeScript
createPath2D(cmds?: string): Path2D
```

Creates a path that is later used by the CanvasRenderingContext2D object.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cmds | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Path2D | the object of Path2D. |

## createPattern

```TypeScript
createPattern(image: Image, repetition: string): object
```

Creates a pattern for image filling based on a specified source image and repetition mode.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | Source image. |
| repetition | string | 是 | Repetition mode. The value can be "repeat", "repeat-x", "repeat-y", or "no-repeat". |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| object | Pattern of image filling. |

## createRadialGradient

```TypeScript
createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
```

Creates a radial gradient color.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x0 | number | 是 | X-coordinate of the start point. |
| y0 | number | 是 | Y-coordinate of the start point. |
| r0 | number | 是 | The radius of the starting circle. |
| x1 | number | 是 | X-coordinate of the end point. |
| y1 | number | 是 | Y-coordinate of the end point. |
| r1 | number | 是 | The radius of End Circle. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CanvasGradient | RadialGradient object. |

## drawImage

```TypeScript
drawImage(image: Image, dx: number, dy: number, dWidth: number, dHeight: number): void
```

Draws an image.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | Image resource. |
| dx | number | 是 | X-coordinate of the upper left corner of the drawing area on the canvas. |
| dy | number | 是 | Y-coordinate of the upper left corner of the drawing area on the canvas. |
| dWidth | number | 是 | Width of the drawing area. |
| dHeight | number | 是 | Height of the drawing area. |

## drawImage

```TypeScript
drawImage(
    image: Image,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
  ): void
```

Draws an image.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | Image resource. |
| sx | number | 是 | X-coordinate of the upper left corner of the rectangle used to crop the source image. |
| sy | number | 是 | Y-coordinate of the upper left corner of the rectangle used to crop the source image. |
| sWidth | number | 是 | Target width of the image to crop. |
| sHeight | number | 是 | Target height of the image to crop. |
| dx | number | 是 | X-coordinate of the upper left corner of the drawing area on the canvas. |
| dy | number | 是 | Y-coordinate of the upper left corner of the drawing area on the canvas. |
| dWidth | number | 是 | Width of the drawing area. |
| dHeight | number | 是 | Height of the drawing area. |

## drawImage

```TypeScript
drawImage(image: image.PixelMap, dx: number, dy: number, dWidth: number, dHeight: number): void
```

Draws an image.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | image.PixelMap | 是 | Image resource. |
| dx | number | 是 | X-coordinate of the upper left corner of the drawing area on the canvas. |
| dy | number | 是 | Y-coordinate of the upper left corner of the drawing area on the canvas. |
| dWidth | number | 是 | Width of the drawing area. |
| dHeight | number | 是 | Height of the drawing area. |

## drawImage

```TypeScript
drawImage(
    image: image.PixelMap,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
  ): void
```

Draws an image.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | image.PixelMap | 是 | Image resource. |
| sx | number | 是 | X-coordinate of the upper left corner of the rectangle used to crop the source image. |
| sy | number | 是 | Y-coordinate of the upper left corner of the rectangle used to crop the source image. |
| sWidth | number | 是 | Target width of the image to crop. |
| sHeight | number | 是 | Target height of the image to crop. |
| dx | number | 是 | X-coordinate of the upper left corner of the drawing area on the canvas. |
| dy | number | 是 | Y-coordinate of the upper left corner of the drawing area on the canvas. |
| dWidth | number | 是 | Width of the drawing area. |
| dHeight | number | 是 | Height of the drawing area. |

## ellipse

```TypeScript
ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: number,
  ): void
```

Draws an ellipse based on the coordinate and radius.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the center point on the ellipse. |
| y | number | 是 | Y-coordinate of the center point on the ellipse. |
| radiusX | number | 是 | X-coordinate of the radius Length on the ellipse. |
| radiusY | number | 是 | Y-coordinate of the radius Length on the ellipse. |
| rotation | number | 是 | The rotation angle of the ellipse, in radians. |
| startAngle | number | 是 | Angle of the start point for ellipse drawing. |
| endAngle | number | 是 | End Point Angle for Ellipse Drawing. |
| counterclockwise | number | 否 |  |

## fill

```TypeScript
fill(): void
```

Fills the area inside a closed path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fillRect

```TypeScript
fillRect(x: number, y: number, width: number, height: number): void
```

Fills a rectangle on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the upper left corner of the rectangle. |
| y | number | 是 | Y-coordinate of the upper left corner of the rectangle. |
| width | number | 是 | Width of the rectangle. |
| height | number | 是 | Height of the rectangle. |

## fillText

```TypeScript
fillText(text: string, x: number, y: number): void
```

Draws filled text on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to draw. |
| x | number | 是 | X-coordinate of the lower left corner of the text. |
| y | number | 是 | Y-coordinate of the lower left corner of the text. |

## getImageData

```TypeScript
getImageData(sx: number, sy: number, sw: number, sh: number): ImageData
```

ImageData object created with pixels in the specified area on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sx | number | 是 | X-coordinate of the upper left corner of the output area. |
| sy | number | 是 | Y-coordinate of the upper left corner of the output area. |
| sw | number | 是 | Width of the output area. |
| sh | number | 是 | Height of the output area. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageData | ImageData object that contains pixels in the specified area on the canvas. |

## getLineDash

```TypeScript
getLineDash(): Array<number>
```

Obtains the dash line style.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;number> | Interval of alternate line segments and the length of spacing. |

## getPixelMap

```TypeScript
getPixelMap(sx: number, sy: number, sw: number, sh: number): image.PixelMap
```

Get an PixelMap object.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sx | number | 是 | The upper-left x-coordinate of the rectangular area of the image data to be extracted. |
| sy | number | 是 | The upper-left y coordinate of the rectangular region of the image data to be extracted. |
| sw | number | 是 | The width of the rectangular area of the image data to be extracted. |
| sh | number | 是 | The height of the rectangular area of the image data to be extracted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | PixelMap A PixelMap object that contains the rectangular ImageData given by the canvas. |

## lineTo

```TypeScript
lineTo(x: number, y: number): void
```

Connects the current point to a target position using a straight line.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the target position. |
| y | number | 是 | Y-coordinate of the target position. |

## measureText

```TypeScript
measureText(text: string): TextMetrics
```

Returns a TextMetrics object used to obtain the width of specified text.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text to be measured. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextMetrics | Object that contains the text width. You can obtain the width by TextMetrics.width. |

## moveTo

```TypeScript
moveTo(x: number, y: number): void
```

Moves a drawing path to a target position on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the target position. |
| y | number | 是 | Y-coordinate of the target position. |

## putImageData

```TypeScript
putImageData(imageData: ImageData, dx: number, dy: number): void
```

Puts the ImageData onto a rectangular area on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | ImageData object with pixels to put onto the canvas. |
| dx | number | 是 | X-axis offset of the rectangle area on the canvas. |
| dy | number | 是 | Y-axis offset of the rectangle area on the canvas. |

## putImageData

```TypeScript
putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number,
  ): void
```

Puts the ImageData onto a rectangular area on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | ImageData object with pixels to put onto the canvas. |
| dx | number | 是 | X-axis offset of the rectangle area on the canvas. |
| dy | number | 是 | Y-axis offset of the rectangle area on the canvas. |
| dirtyX | number | 是 | X-axis offset of the upper left corner of the rectangle area relative to that of the source image. |
| dirtyY | number | 是 | Y-axis offset of the upper left corner of the rectangle area relative to that of the source image. |
| dirtyWidth | number | 是 | Width of the rectangle area to cop the source image. |
| dirtyHeight | number | 是 | Height of the rectangle area to cop the source image. |

## quadraticCurveTo

```TypeScript
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
```

Draws a quadratic curve on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cpx | number | 是 | X-coordinate of the bezier curve parameter. |
| cpy | number | 是 | Y-coordinate of the bezier curve parameter. |
| x | number | 是 | End point x-coordinate of the bezier curve. |
| y | number | 是 | End point y-coordinate of the bezier curve. |

## rect

```TypeScript
rect(x: number, y: number, width: number, height: number): void
```

Creates a rectangular.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the upper left corner of the rectangle. |
| y | number | 是 | Y-coordinate of the upper left corner of the rectangle. |
| width | number | 是 | Width of the rectangle. |
| height | number | 是 | Height of the rectangle. |

## rotate

```TypeScript
rotate(rotate: number): void
```

Rotates a canvas clockwise around its coordinate axes.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotate | number | 是 | Clockwise rotation angle. You can use Math.PI / 180 to convert the angle to radian. |

## scale

```TypeScript
scale(x: number, y: number): void
```

Scales a canvas based on scaling factors.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | Horizontal scale factor. |
| y | number | 是 | Vertical scale factor. |

## setLineDash

```TypeScript
setLineDash(segments: Array<number>): void
```

Sets the dash line style.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| segments | Array&lt;number> | 是 | Interval of alternate line segments and the length of spacing. |

## setTransform

```TypeScript
setTransform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number,
  ): void
```

Uses same parameters as the transform() function to reset the existing transformation matrix and create a new transformation matrix.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleX | number | 是 | X-axis scale. |
| skewX | number | 是 | X-axis skew. |
| skewY | number | 是 | Y-axis skew. |
| scaleY | number | 是 | Y-axis scale. |
| translateX | number | 是 | X-axis translation. |
| translateY | number | 是 | Y-axis translation. |

## stroke

```TypeScript
stroke(): void
```

Draws a border stroke.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## stroke

```TypeScript
stroke(path: Path2D): void
```

Draws a path stroke.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | The object of Path2D. |

## strokeRect

```TypeScript
strokeRect(x: number, y: number, width: number, height: number): void
```

Draws a rectangle stroke on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-coordinate of the upper left corner of the rectangle stroke. |
| y | number | 是 | Y-coordinate of the upper left corner of the rectangle stroke. |
| width | number | 是 | Width of the rectangle stroke. |
| height | number | 是 | Height of the rectangle stroke. |

## strokeText

```TypeScript
strokeText(text: string, x: number, y: number): void
```

Draws a text stroke on the canvas.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text stroke to draw. |
| x | number | 是 | X-coordinate of the lower left corner of the text stroke. |
| y | number | 是 | Y-coordinate of the lower left corner of the text stroke. |

## transferFromImageBitmap

```TypeScript
transferFromImageBitmap(bitmap: ImageBitmap): void
```

Draws the Bitmap to the current canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bitmap | ImageBitmap | 是 |  |

## transform

```TypeScript
transform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void
```

Defines a transformation matrix. To transform a graph, you only need to set parameters of the matrix. The coordinates of the corresponding graph are multiplied by the matrix values to obtain new coordinates of the transformed graph. You can use the matrix to implement multiple transform effects.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleX | number | 是 | X-axis scale. |
| skewX | number | 是 | X-axis skew. |
| skewY | number | 是 | Y-axis skew. |
| scaleY | number | 是 | Y-axis scale. |
| translateX | number | 是 | X-axis translation. |
| translateY | number | 是 | Y-axis translation. |

## translate

```TypeScript
translate(x: number, y: number): void
```

Moves the origin of the coordinate system.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | X-axis translation. |
| y | number | 是 | Y-axis translation. |

## lineDashOffset

```TypeScript
lineDashOffset: number
```

Sets the dash line offset. Dash line offset. The value is a float number starting from 0.0.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## textBaseline

```TypeScript
textBaseline: string
```

Sets a text baseline in the horizontal direction for text alignment. Text baseline. Available values include: alphabetic (default): The text baseline is the normal alphabetic baseline. top: The text baseline is on the top of the text bounding box. hanging: The text baseline is a hanging baseline over the text. middle: The text baseline is in the middle of the text bounding box. ideographic: The text baseline is the ideographic baseline. If a character exceeds the alphabetic baseline, the ideographic baseline is located at the bottom of the excessive character. bottom: The text baseline is at the bottom of the text bounding box. Its difference from the ideographic baseline is that the ideographic baseline does not consider letters in the next line.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## shadowOffsetX

```TypeScript
shadowOffsetX: number
```

Sets the x-axis shadow offset relative to the original object. X-axis shadow offset relative to the original object.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## shadowOffsetY

```TypeScript
shadowOffsetY: number
```

Sets the y-axis shadow offset relative to the original object. Y-axis shadow offset relative to the original object.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## strokeStyle

```TypeScript
strokeStyle?: string | CanvasGradient | CanvasPattern
```

Sets the stroke paint style. Color of the stroke paint. Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object. Canvas pattern. You can call createPattern() to create a CanvasPattern object.

**类型：** string | CanvasGradient | CanvasPattern

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## imageSmoothingEnabled

```TypeScript
imageSmoothingEnabled: boolean
```

Sets whether an image is smooth. default value is true.

**类型：** boolean

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## restore

```TypeScript
restore: () => void
```

Restores the saved drawing context.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## shadowBlur

```TypeScript
shadowBlur: number
```

Sets the shadow blur degree. Shadow blur degree. A larger value indicates a more blurred shadow. The value is of the float type, and the default value is 0.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign: "left" | "right" | "center" | "start" | "end"
```

Sets the text alignment mode. Text alignment mode. Available values include: left (default): The text is left-aligned. right: The text is right-aligned. center: The text is center-aligned. start: The text is aligned with the start bound. Can't be supported by smartVision. end: The text is aligned with the end bound. Can't be supported by smartVision. NOTE In the ltr layout mode, the value start equals to left. In the rtl layout mode, the value start equals to right.

**类型：** "left" | "right" | "center" | "start" | "end"

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## globalCompositeOperation

```TypeScript
globalCompositeOperation: string
```

Sets the composite operation type. source-over Default value. Displays the new drawing above the existing drawing. source-atop Displays the new drawing on the top of the existing drawing. source-in Displays the new drawing inside the existing drawing. source-out Displays part of the new drawing that is outside of the existing drawing. destination-over Displays the existing drawing above the new drawing. destination-atop Displays the existing drawing above the new drawing. destination-in Displays the existing drawing inside the new drawing. destination-out Displays part of the existing drawing that is outside of the new drawing. lighter Displays both the new drawing and the existing drawing. copy Displays the new drawing and neglects the existing drawing. xor Combines the new drawing and existing drawing using the XOR operation.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## save

```TypeScript
save: () => void
```

Saves the current drawing context.

**类型：** () => void

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## lineJoin

```TypeScript
lineJoin: string
```

Sets the style for an intersection point where a line joins another. Style of the intersection point of lines. Available values include: round: The intersection part is a sector. The radius of a rounded corner is equal to the line width. bevel: The intersection part is a triangle. The rectangular corner of each line is independent. miter (default): The intersection part has a miter corner by extending the outside edges of the lines until they meet. You can view the effect of this attribute in miterLimit.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## miterLimit

```TypeScript
miterLimit: number
```

Sets the maximum miter length. The miter length is the distance between the inner corner and the outer corner where two lines meet. Maximum miter length. The default value is 10.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## lineWidth

```TypeScript
lineWidth?: number
```

Sets the width of a line.

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## lineCap

```TypeScript
lineCap: string
```

Sets the style of line endpoints. Style of line endpoints. Available values include: butt (default): The endpoints of the line are in square. round: The endpoints of the line are rounded. square: The endpoints of the line are in square, and each end of the line is added with a rectangle whose length is the same as the line thickness and whose width is half of the line thickness.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## globalAlpha

```TypeScript
globalAlpha: number
```

Sets the alpha value. Global alpha value to set. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).

**类型：** number

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fillStyle

```TypeScript
fillStyle?: string | CanvasGradient | CanvasPattern
```

Sets the style of a paint to fill an area. Paint color used to fill the area. Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object. Canvas pattern. You can call createPattern() to create a CanvasPattern object.

**类型：** string | CanvasGradient | CanvasPattern

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## shadowColor

```TypeScript
shadowColor: string
```

Sets the shadow color.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## font

```TypeScript
font: string
```

Sets the font style. Font style. The default value is 10px sans-serif in tv, phone, tablet, wearable. The default value is 30px SourceHanSansSC-Regular in smartVision.

**类型：** string

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

