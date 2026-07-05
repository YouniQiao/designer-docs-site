# OffscreenCanvasRenderingContext2D

Provides a 2D rendering context for the drawing surface of the < Canvas > element. It is used to draw shapes, text, images and other objects.

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## arc

```TypeScript
arc(radius: number, x: number, y: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
```

Draw an arc.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | number | 是 | Radius of an arc. |
| x | number | 是 | The X-axis coordinates of the center of the circle. |
| y | number | 是 | The Y-axis coordinates of the center of an arc (center of a circle). |
| startAngle | number | 是 | The starting point of the arc, in the X-axis direction, is calculated in radians. |
| endAngle | number | 是 | The end point of an arc, expressed in radians. |
| counterclockwise | boolean | 否 |  |

## arcTo

```TypeScript
arcTo(x1: number, x2: number, y1: number, y2: number, radius: number): void
```

Draws an arc from the beginning to the end.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x1 | number | 是 | The X-axis coordinates of the first control point. |
| x2 | number | 是 | The X-axis coordinates of the second control point. |
| y1 | number | 是 | The y-coordinate of the first control point. |
| y2 | number | 是 | The Y-axis coordinates of the second control point. |
| radius | number | 是 | Radius of an arc. |

## beginPath

```TypeScript
beginPath(): void
```

Creates a drawing path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## bezierCurveTo

```TypeScript
bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
```

Draw a third order Bezier curve.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cp1x | number | 是 | The X-axis coordinates of the first control point. |
| cp1y | number | 是 | The y-coordinate of the first control point. |
| cp2x | number | 是 | The X-axis coordinates of the second control point. |
| cp2y | number | 是 | The Y-axis coordinates of the second control point. |
| x | number | 是 | The x-coordinate of the end point. |
| y | number | 是 | The y-coordinate of the end point |

## clearRect

```TypeScript
clearRect(x: number, y: number, w: number, h: number): void
```

Clears the contents of the specified rectangular area.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates at the beginning of the rectangle. |
| y | number | 是 | The Y-axis coordinates at the beginning of the rectangle. |
| w | number | 是 | The width of a rectangle. |
| h | number | 是 | The height of a rectangle. |

## clip

```TypeScript
clip(): void
```

Crop the current canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## closePath

```TypeScript
closePath(): void
```

Closing the current path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## createImageData

```TypeScript
createImageData(sw: number, sh: number): ImageData
```

Create an ImageData object.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sw | number | 是 | The width of the new object. |
| sh | number | 是 | The height of the new object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageData | ImageData New ImageData object with width and height specified. |

## createImageData

```TypeScript
createImageData(imageData: ImageData): ImageData
```

Create an ImageData object.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | Copy an object of the same width and height from an existing ImageData object  The image itself is not allowed to be copied. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageData | ImageData New ImageData object with width and height specified. |

## createLinearGradient

```TypeScript
createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
```

Creates a linear gradient color.

**起始版本：** 7

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

**起始版本：** 7

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

**起始版本：** 7

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
createPattern(image: Image, repetition: string): CanvasPattern
```

Create a drawing style template.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | The CanvasImageSource object that is the source of the duplicate image. |
| repetition | string | 是 | Specify how to repeat images. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CanvasPattern | CanvasPattern An opaque object that describes a schema. |

## createRadialGradient

```TypeScript
createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
```

Create a radial tween object.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x0 | number | 是 | The x coordinate of the circle at the beginning. |
| y0 | number | 是 | The y coordinate of the circle at the beginning. |
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
drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void
```

Draw an Image object.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | An element drawn to the context. |
| dx | number | 是 | The top left corner of the image is the X-axis coordinates on the target canvas. |
| dy | number | 是 | The top left corner of the image is the Y-axis coordinates on the target canvas. |
| dw | number | 是 | Image The width drawn on the target canvas. |
| dh | number | 是 | Image The height drawn on the target canvas. |

## drawImage

```TypeScript
drawImage(
    image: Image,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void
```

Draw an Image object.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | An element drawn to the context. |
| sx | number | 是 | The upper-left X-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context. |
| sy | number | 是 | The upper-left Y-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context. |
| sw | number | 是 | The width of the image's rectangular (clipped) selection box that needs to be drawn into the target context. |
| sh | number | 是 | The height of the image's rectangular (clipped) selection box that needs to be drawn into the target context. |
| dx | number | 是 | The top left corner of the image is the X-axis coordinates on the target canvas. |
| dy | number | 是 | The top left corner of the image is the Y-axis coordinates on the target canvas. |
| dw | number | 是 | Image The width drawn on the target canvas. |
| dh | number | 是 | Image The height drawn on the target canvas. |

## drawImage

```TypeScript
drawImage(image: image.PixelMap, dx: number, dy: number, dw: number, dh: number): void
```

Draw an Image object.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | image.PixelMap | 是 | An element drawn to the context. |
| dx | number | 是 | The top left corner of the image is the X-axis coordinates on the target canvas. |
| dy | number | 是 | The top left corner of the image is the Y-axis coordinates on the target canvas. |
| dw | number | 是 | Image The width drawn on the target canvas. |
| dh | number | 是 | Image The height drawn on the target canvas. |

## drawImage

```TypeScript
drawImage(
    image: image.PixelMap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void
```

Draw an Image object.

**起始版本：** 9

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | image.PixelMap | 是 | An element drawn to the context. |
| sx | number | 是 | The upper-left X-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context. |
| sy | number | 是 | The upper-left Y-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context. |
| sw | number | 是 | The width of the image's rectangular (clipped) selection box that needs to be drawn into the target context. |
| sh | number | 是 | The height of the image's rectangular (clipped) selection box that needs to be drawn into the target context. |
| dx | number | 是 | The top left corner of the image is the X-axis coordinates on the target canvas. |
| dy | number | 是 | The top left corner of the image is the Y-axis coordinates on the target canvas. |
| dw | number | 是 | Image The width drawn on the target canvas. |
| dh | number | 是 | Image The height drawn on the target canvas. |

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
    counterclockwise?: boolean,
  ): void
```

Draw an ellipse.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates of the center of the ellipse. |
| y | number | 是 | The Y-axis coordinates of the center of the ellipse. |
| radiusX | number | 是 | The radius of the major axis of an ellipse. |
| radiusY | number | 是 | The radius of the short axis of an ellipse. |
| rotation | number | 是 | The Angle of rotation of an ellipse, expressed in radians. |
| startAngle | number | 是 | The starting point Angle to be plotted, measured from the X-axis, is expressed in radians. |
| endAngle | number | 是 | The Angle, expressed in radians, at which the ellipse will be drawn. |
| counterclockwise | boolean | 否 |  |

## fill

```TypeScript
fill(): void
```

Fills the current canvas with color.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fillRect

```TypeScript
fillRect(x: number, y: number, w: number, h: number): void
```

Fills a rectangular area.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates at the beginning of the rectangle. |
| y | number | 是 | The Y-axis coordinates at the beginning of the rectangle. |
| w | number | 是 | The width of a rectangle. |
| h | number | 是 | The height of a rectangle. |

## fillText

```TypeScript
fillText(text: string, y: number, x: number /*, maxWidth?: number*/): void
```

Stroke a rectangular area.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Render text using the current values of font, textAlign, textBaseline, and direction. |
| y | number | 是 | The Y-axis coordinates of the starting point of the text. |
| x | number | 是 | The X-axis coordinates of the starting point of the text. |

## getImageData

```TypeScript
getImageData(sx: number, sy: number, sw: number, sh: number): ImageData
```

Get an ImageData object.

**起始版本：** 7

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
| ImageData | ImageData An ImageData object that contains the rectangular ImageData given by the canvas. |

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

## isPointInPath

```TypeScript
isPointInPath(x: number, y: number): boolean
```

Check whether the specified coordinate point is on the Path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X coordinate of the detection point. |
| y | number | 是 | The Y coordinate of the detection point. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | boolean Return true if the detection point is contained within the current or specified path Otherwise return false. |

## isPointInPath

```TypeScript
isPointInPath(path: Path2D, x: number, y: number): boolean
```

Check whether the specified coordinate point is on the Path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | The Path2D path that needs to be populated. |
| x | number | 是 | The X coordinate of the detection point. |
| y | number | 是 | The Y coordinate of the detection point. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | boolean Return true if the detection point is contained within the current or specified path Otherwise return false. |

## isPointInStroke

```TypeScript
isPointInStroke(x: number, y: number): boolean
```

Checks whether the specified coordinate point is on the stroke edge.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X coordinate of the detection point. |
| y | number | 是 | The Y coordinate of the detection point. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | boolean A Boolean value that returns true when the point is on the line of the path, false otherwise. |

## isPointInStroke

```TypeScript
isPointInStroke(path: Path2D, x: number, y: number): boolean
```

Checks whether the specified coordinate point is on the stroke edge.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | Path2D path. |
| x | number | 是 | The X coordinate of the detection point. |
| y | number | 是 | The Y coordinate of the detection point. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | boolean A Boolean value that returns true when the point is on the line of the path, false otherwise. |

## lineTo

```TypeScript
lineTo(x: number, y: number): void
```

Draw a straight line.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates at the end of the line. |
| y | number | 是 | The Y-axis coordinates at the end of the line. |

## measureText

```TypeScript
measureText(text: string): TextMetrics
```

Returns a TextMetrics object used to obtain the width of specified text.

**起始版本：** 7

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

Moves the current canvas to the specified coordinate point.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The x axis. |
| y | number | 是 | The y axis. |

## putImageData

```TypeScript
putImageData(imageData: ImageData, dx: number, dy: number): void
```

Draws the specified ImageData object to the canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | An array object containing pixel values. |
| dx | number | 是 | The offset of the position of the source image data in the target canvas (the offset in the X-axis direction). |
| dy | number | 是 | The offset of the position of the source image data in the target canvas (the Y-axis offset). |

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

Draws the specified ImageData object to the canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| imageData | ImageData | 是 | An array object containing pixel values. |
| dx | number | 是 | The offset of the position of the source image data in the target canvas (the offset in the X-axis direction). |
| dy | number | 是 | he offset of the position of the source image data in the target canvas (the Y-axis offset). |
| dirtyX | number | 是 | In the source image data,  the position of the upper left corner of the rectangular region Default is the upper left corner of the entire image data (x coordinate). |
| dirtyY | number | 是 | In the source image data,  the position of the upper left corner of the rectangular region Default is the top left corner (y coordinate) of the entire image data. |
| dirtyWidth | number | 是 | In the source image data, the width of a rectangular region. Default is the width of the image data. |
| dirtyHeight | number | 是 | In the source image data, the height of a rectangular region. Default is the height of the image data. |

## quadraticCurveTo

```TypeScript
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
```

Draw a second order Bezier curve.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cpx | number | 是 | The X-axis coordinates of the control points. |
| cpy | number | 是 | The y-coordinate of the control point. |
| x | number | 是 | The X-axis of the end point. |
| y | number | 是 | The Y-axis of the end point. |

## rect

```TypeScript
rect(x: number, y: number, w: number, h: number): void
```

Draw a rectangle.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates at the beginning of the rectangle. |
| y | number | 是 | The Y-axis coordinates at the beginning of the rectangle. |
| w | number | 是 | The width of a rectangle. |
| h | number | 是 | The height of a rectangle. |

## resetTransform

```TypeScript
resetTransform(): void
```

Resets the current matrix transformation effect.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## restore

```TypeScript
restore(): void
```

Restores the configuration information of the last saved canvas context.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## rotate

```TypeScript
rotate(angle: number): void
```

Adds a rotation effect to the current canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | The radian of clockwise rotation. |

## save

```TypeScript
save(): void
```

Saves configuration information for the current canvas context.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## scale

```TypeScript
scale(x: number, y: number): void
```

Adds a zoom effect to the current canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The horizontal scaling factor. |
| y | number | 是 | The scaling factor in the vertical direction. |

## setLineDash

```TypeScript
setLineDash(segments: Array<number>): void
```

Sets the dotted spacing of a line.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| segments | Array&lt;number> | 是 | A set of numbers describing the length of alternating drawn line segments and spacing (coordinate space units). |

## setTransform

```TypeScript
setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void
```

Set the rotation, pan, and zoom effects.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| a | number | 是 | The level of zoom. |
| b | number | 是 | Vertical tilt. |
| c | number | 是 | Horizontal tilt. |
| d | number | 是 | Vertical scaling. |
| e | number | 是 | The level of mobile. |
| f | number | 是 | Vertical movement. |

## stroke

```TypeScript
stroke(): void
```

Stroke draws the current path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## stroke

```TypeScript
stroke(path: Path2D): void
```

Stroke draws the current path.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | The object of Path2D. |

## strokeRect

```TypeScript
strokeRect(x: number, y: number, w: number, h: number): void
```

Stroke a rectangular area.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | The X-axis coordinates at the beginning of the rectangle. |
| y | number | 是 | The Y-axis coordinates at the beginning of the rectangle. |
| w | number | 是 | The width of the rectangle. Positive values on the right, negative values on the left. |
| h | number | 是 | The height of the rectangle. Positive values are down, negative values are up. |

## strokeText

```TypeScript
strokeText(text: string, x: number, y: number /*, maxWidth?: number*/): void
```

Draws the stroke of a text string.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text stroke to draw. |
| x | number | 是 | X-coordinate of the lower left corner of the text stroke. |
| y | number | 是 | Y-coordinate of the lower left corner of the text stroke. |

## transform

```TypeScript
transform(a: number, b: number, c: number, d: number, e: number, f: number): void
```

Set the rotation, pan, and zoom effects.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| a | number | 是 | The level of zoom. |
| b | number | 是 | Vertical tilt. |
| c | number | 是 | Horizontal tilt. |
| d | number | 是 | Vertical scaling. |
| e | number | 是 | The level of mobile. |
| f | number | 是 | Vertical movement. |

## translate

```TypeScript
translate(x: number, y: number): void
```

Adds a pan effect to the current canvas.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | Horizontal movement distance. |
| y | number | 是 | Vertical movement. |

## getLineDash

```TypeScript
getLineDash: Array<number>
```

Gets the dotted spacing of a line. Returns the current line segment style array containing an even number of non-negative numbers.

**类型：** Array<number>

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## strokeStyle

```TypeScript
strokeStyle?: string | CanvasGradient | CanvasPattern
```

Sets the stroke paint style. Color of the stroke paint. Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object. Canvas pattern. You can call createPattern() to create a CanvasPattern object.

**类型：** string | CanvasGradient | CanvasPattern

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fillStyle

```TypeScript
fillStyle?: string | CanvasGradient | CanvasPattern
```

Fill style attribute. Paint color used to fill the area. Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object. Canvas pattern. You can call createPattern() to create a CanvasPattern object.

**类型：** string | CanvasGradient | CanvasPattern

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

