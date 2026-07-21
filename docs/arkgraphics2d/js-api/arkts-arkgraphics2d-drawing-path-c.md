# Path

A compound geometric path consisting of line segments, arcs, quadratic Bezier curves, and cubic Bezier curves.

> **NOTE**  
>  
> - This module uses the physical pixel unit, px.  
>  
> - The module operates under a single-threaded model. The caller needs to manage thread safety and context state  
> transitions.

**Since:** 11

<!--Device-drawing-class Path--><!--Device-drawing-class Path-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

<a id="addarc"></a>
## addArc

```TypeScript
addArc(rect: common2D.Rect, startAngle: number, sweepAngle: number): void
```

Adds an arc to this path.When **startAngle** and **sweepAngle** meet the following conditions, an oval instead of an arc is added:

1. The result of **startAngle** modulo 90 is close to 0.2. The value of **sweepAngle** is not in the range of (-360, 360).In other cases, this API adds an arc by applying the result of **sweepAngle** modulo 360 to the path.

**Since:** 12

<!--Device-Path-addArc(rect: common2D.Rect, startAngle: double, sweepAngle: double): void--><!--Device-Path-addArc(rect: common2D.Rect, startAngle: double, sweepAngle: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | common2D.Rect | Yes | Rectangular boundary that encapsulates the oval including the arc. |
| startAngle | number | Yes | Start angle of the arc, in degrees. The value 0 indicates the positive direction of the X axis. The value is a floating point number. |
| sweepAngle | number | Yes | Angle to sweep, in degrees. A positive value indicates a clockwise sweep, and a negative value indicates a counterclockwise sweep. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="addcircle"></a>
## addCircle

```TypeScript
addCircle(x: number, y: number, radius: number, pathDirection?: PathDirection): void
```

Adds a circle to this path in the specified direction. The start point of the circle is (x + radius, y).

**Since:** 12

<!--Device-Path-addCircle(x: double, y: double, radius: double, pathDirection?: PathDirection): void--><!--Device-Path-addCircle(x: double, y: double, radius: double, pathDirection?: PathDirection): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of the center of the circle. The value is a floating point number. |
| y | number | Yes | Y coordinate of the center of the circle. The value is a floating point number. |
| radius | number | Yes | Radius of the circle. The value is a floating point number. If the value is less than or equal to 0, there is no effect. |
| pathDirection | [PathDirection](arkts-arkgraphics2d-drawing-pathdirection-e.md) | No | Direction of the path. The default direction is clockwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="addoval"></a>
## addOval

```TypeScript
addOval(rect: common2D.Rect, start: number, pathDirection?: PathDirection): void
```

Adds the inscribed ellipse of a rectangle to this path in the specified direction.

**Since:** 12

<!--Device-Path-addOval(rect: common2D.Rect, start: int, pathDirection?: PathDirection): void--><!--Device-Path-addOval(rect: common2D.Rect, start: int, pathDirection?: PathDirection): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | common2D.Rect | Yes | Rectangular boundary of the oval. |
| start | number | Yes | Start point of the oval, where 0, 1, 2, and 3 correspond to the upper, right, lower, and left points, respectively. The value is an integer greater than or equal to 0. If the value is greater than or equal to 4, the remainder of 4 is used. |
| pathDirection | [PathDirection](arkts-arkgraphics2d-drawing-pathdirection-e.md) | No | Direction of the path. The default direction is clockwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="addpath"></a>
## addPath

```TypeScript
addPath(path: Path, matrix?: Matrix | null): void
```

Transforms the points in a path by a matrix and stores the resulting path in the current **Path** object.

**Since:** 12

<!--Device-Path-addPath(path: Path, matrix?: Matrix | null): void--><!--Device-Path-addPath(path: Path, matrix?: Matrix | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Source **Path** object. |
| matrix | [Matrix](arkts-arkgraphics2d-drawing-matrix-c.md) \| null | No | **Matrix** object. The default value is an identity matrix. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="addpolygon"></a>
## addPolygon

```TypeScript
addPolygon(points: Array<common2D.Point>, close: boolean): void
```

Adds a polygon to this path.

**Since:** 12

<!--Device-Path-addPolygon(points: Array<common2D.Point>, close: boolean): void--><!--Device-Path-addPolygon(points: Array<common2D.Point>, close: boolean): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| points | Array&lt;common2D.Point&gt; | Yes | Array that holds the vertex coordinates of the polygon. |
| close | boolean | Yes | Whether to close the path, that is, whether to add a line segment from the start point to the end point of the path. The value **true** means to close the path, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="addrect"></a>
## addRect

```TypeScript
addRect(rect: common2D.Rect, pathDirection?: PathDirection): void
```

Adds a rectangle to a path in the specified direction. The start point is the upper left corner of the rectangle.

**Since:** 12

<!--Device-Path-addRect(rect: common2D.Rect, pathDirection?: PathDirection): void--><!--Device-Path-addRect(rect: common2D.Rect, pathDirection?: PathDirection): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | common2D.Rect | Yes | Rectangle. |
| pathDirection | [PathDirection](arkts-arkgraphics2d-drawing-pathdirection-e.md) | No | Direction of the path. The default direction is clockwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="addroundrect"></a>
## addRoundRect

```TypeScript
addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void
```

Adds a rounded rectangle to a path in the specified direction. When the path direction is clockwise, the start point is at the intersection of the rounded rectangle's left boundary and its lower left corner. When the path direction is counterclockwise, the start point is at the intersection point between the left boundary and the upper left corner.

**Since:** 12

<!--Device-Path-addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void--><!--Device-Path-addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| roundRect | [RoundRect](arkts-arkgraphics2d-drawing-roundrect-c.md) | Yes | Rounded rectangle. |
| pathDirection | [PathDirection](arkts-arkgraphics2d-drawing-pathdirection-e.md) | No | Direction of the path. The default direction is clockwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="approximate"></a>
## approximate

```TypeScript
approximate(acceptableError: number): Array<number>
```

Converts the existing path into an approximate path consisting of consecutive line segments.

> **NOTE**  
>  
> - Avoid setting **acceptableError** to **0** as it heavily divides the curve path, significantly impacting  
> performance and memory usage.  
>  
> - Setting a high **acceptableError** simplifies the path greatly by keeping only essential points, potentially  
> distorting the original shape.  
>  
> - When you set a high **acceptableError** for curves such as ellipses, the fitting process often simplifies  
> them to polygons by keeping just the start and end points of their Bezier curve segments.

**Since:** 20

<!--Device-Path-approximate(acceptableError: number): Array<number>--><!--Device-Path-approximate(acceptableError: number): Array<number>-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| acceptableError | number | Yes | Acceptable error of each line segment on a path. The value is a floating point number. If the value is less than 0, an error is reported. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | An array of points in the approximate path, which contains at least two points. Each point consists of three values:<br>1. Length ratio of the point to the start point of the path. The value range is [0.0, 1.0].<br>2. X coordinate of a point.<br>3. Y coordinate of a point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

<a id="arcto"></a>
## arcTo

```TypeScript
arcTo(x1: number, y1: number, x2: number, y2: number, startDeg: number, sweepDeg: number): void
```

Draws an arc to this path using angle arc mode. This mode first defines a rectangle and takes its inscribed ellipse. Then, it specifies a start angle and a sweep angle. The arc is the portion of the ellipse's circumference defined by the start angle and the sweep angle. By default, a line segment from the last point of the path to the start point of the arc is also added.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-arcTo(x1: double, y1: double, x2: double, y2: double, startDeg: double, sweepDeg: double): void--><!--Device-Path-arcTo(x1: double, y1: double, x2: double, y2: double, startDeg: double, sweepDeg: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x1 | number | Yes | X coordinate of the upper left corner of the rectangle. The value is a floating point number. |
| y1 | number | Yes | Y coordinate of the upper left corner of the rectangle. The value is a floating point number. |
| x2 | number | Yes | X coordinate of the lower right corner of the rectangle. The value is a floating point number. |
| y2 | number | Yes | Y coordinate of the lower right corner of the rectangle. The value is a floating point number. |
| startDeg | number | Yes | Start angle. The start direction (0��) of the angle is the positive direction of the X axis. |
| sweepDeg | number | Yes | Angle to sweep, in degrees. A positive value indicates a clockwise sweep, and a negative value indicates a counterclockwise sweep. The actual swipe degree is the modulo operation result of the input parameter by 360. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="buildfromsvgstring"></a>
## buildFromSvgString

```TypeScript
buildFromSvgString(str: string): boolean
```

Parses the path represented by an SVG string.

**Since:** 12

<!--Device-Path-buildFromSvgString(str: string): boolean--><!--Device-Path-buildFromSvgString(str: string): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| str | string | Yes | String in SVG format, which is used to describe the path. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Result of the parsing operation. The value **true** means that the operation is successful,and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this path by adding a line segment from the start point to the last point of the path.

**Since:** 11

<!--Device-Path-close(): void--><!--Device-Path-close(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="conicto"></a>
## conicTo

```TypeScript
conicTo(ctrlX: number, ctrlY: number, endX: number, endY: number, weight: number): void
```

Draws a conic curve from the last point of this path to the target point. If the path is empty, the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-conicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void--><!--Device-Path-conicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctrlX | number | Yes | X coordinate of the control point. The value is a floating point number. |
| ctrlY | number | Yes | Y coordinate of the control point. The value is a floating point number. |
| endX | number | Yes | X coordinate of the target point. The value is a floating point number. |
| endY | number | Yes | Y coordinate of the target point. The value is a floating point number. |
| weight | number | Yes | Weight of the curve, which determines its shape. The larger the value, the closer of the curve to the control point. If the value is less than or equal to 0, this API has the same effect as [lineTo](arkts-arkgraphics2d-drawing-path-c.md#lineto-1). If the value is 1, it has the same effect as [quadTo](arkts-arkgraphics2d-drawing-path-c.md#quadto-1). The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructs a path.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-constructor()--><!--Device-Path-constructor()-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(path: Path)
```

Constructs a copy of an existing path.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-constructor(path: Path)--><!--Device-Path-constructor(path: Path)-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Path to copy. |

<a id="contains"></a>
## contains

```TypeScript
contains(x: number, y: number): boolean
```

Checks whether a coordinate point is included in this path. For details, see [PathFillType](arkts-arkgraphics2d-drawing-pathfilltype-e.md).

**Since:** 12

<!--Device-Path-contains(x: double, y: double): boolean--><!--Device-Path-contains(x: double, y: double): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate. The value is a floating point number. |
| y | number | Yes | Y coordinate. The value is a floating point number. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that the coordinate point is included in the path,and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="converttosvgstring"></a>
## convertToSvgString

```TypeScript
convertToSvgString(): string
```

Converts path to an SVG string.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-convertToSvgString(): string--><!--Device-Path-convertToSvgString(): string-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| string | The SVG string of the path. |

<a id="cubicto"></a>
## cubicTo

```TypeScript
cubicTo(ctrlX1: number, ctrlY1: number, ctrlX2: number, ctrlY2: number, endX: number, endY: number): void
```

Draws a cubic Bezier curve from the last point of this path to the target point. If the path is empty, the start point (0, 0) is used.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-cubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void--><!--Device-Path-cubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctrlX1 | number | Yes | X coordinate of the first control point. The value is a floating point number. |
| ctrlY1 | number | Yes | Y coordinate of the first control point. The value is a floating point number. |
| ctrlX2 | number | Yes | X coordinate of the second control point. The value is a floating point number. |
| ctrlY2 | number | Yes | Y coordinate of the second control point. The value is a floating point number. |
| endX | number | Yes | X coordinate of the target point. The value is a floating point number. |
| endY | number | Yes | Y coordinate of the target point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="getbounds"></a>
## getBounds

```TypeScript
getBounds(): common2D.Rect
```

Obtains the minimum bounding rectangle that encloses this path.

**Since:** 12

<!--Device-Path-getBounds(): common2D.Rect--><!--Device-Path-getBounds(): common2D.Rect-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Rect | Minimum bounding rectangle. |

<a id="getconicweightdata"></a>
## getConicWeightData

```TypeScript
getConicWeightData(): Array<number>
```

Gets path conic weight data.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-getConicWeightData(): Array<double>--><!--Device-Path-getConicWeightData(): Array<double>-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | path conic weight array. |

<a id="getfilltype"></a>
## getFillType

```TypeScript
getFillType(): PathFillType
```

Obtains the fill type of a path.

**Since:** 20

<!--Device-Path-getFillType(): PathFillType--><!--Device-Path-getFillType(): PathFillType-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [PathFillType](arkts-arkgraphics2d-drawing-pathfilltype-e.md) | Fill type of a path. |

<a id="getlastpoint"></a>
## getLastPoint

```TypeScript
getLastPoint(): common2D.Point
```

Gets the last point of the path.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-getLastPoint(): common2D.Point--><!--Device-Path-getLastPoint(): common2D.Point-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Point | Returns the last point of the path. |

<a id="getlength"></a>
## getLength

```TypeScript
getLength(forceClosed: boolean): number
```

Obtains the path length.

**Since:** 12

<!--Device-Path-getLength(forceClosed: boolean): double--><!--Device-Path-getLength(forceClosed: boolean): double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forceClosed | boolean | Yes | Whether the path is measured as a closed path. The value **true** means that the path is considered closed during measurement, and **false** means that the path is measured based on the actual closed status. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Path length. |

<a id="getmatrix"></a>
## getMatrix

```TypeScript
getMatrix(forceClosed: boolean, distance: number, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean
```

Obtains a transformation matrix at a specific position along the path, which represents the coordinates and orientation of that point.

**Since:** 12

<!--Device-Path-getMatrix(forceClosed: boolean, distance: double, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean--><!--Device-Path-getMatrix(forceClosed: boolean, distance: double, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forceClosed | boolean | Yes | Whether the path is measured as a closed path. The value **true** means that the path is considered closed during measurement, and **false** means that the path is measured based on the actual closed status. |
| distance | number | Yes | Distance from the start point. If a negative number is passed in, the value **0** is used. If a value greater than the path length is passed in, the path length is used. The value is a floating point number. |
| matrix | [Matrix](arkts-arkgraphics2d-drawing-matrix-c.md) | Yes | **Matrix** object used to store the matrix obtained. |
| flags | [PathMeasureMatrixFlags](arkts-arkgraphics2d-drawing-pathmeasurematrixflags-e.md) | Yes | Type of the matrix information obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the transformation matrix is obtained. The value **true** indicates that the operation is successful, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

<a id="getpathiterator"></a>
## getPathIterator

```TypeScript
getPathIterator(): PathIterator
```

Obtains the operation iterator of this path.

**Since:** 18

<!--Device-Path-getPathIterator(): PathIterator--><!--Device-Path-getPathIterator(): PathIterator-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [PathIterator](arkts-arkgraphics2d-drawing-pathiterator-c.md) | **Iterator** object of the path. |

<a id="getpointdata"></a>
## getPointData

```TypeScript
getPointData(): Array<common2D.Point>
```

Gets path point data.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-getPointData(): Array<common2D.Point>--><!--Device-Path-getPointData(): Array<common2D.Point>-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point&gt; | path points array. |

<a id="getpositionandtangent"></a>
## getPositionAndTangent

```TypeScript
getPositionAndTangent(forceClosed: boolean, distance: number, position: common2D.Point, tangent: common2D.Point): boolean
```

Obtains the coordinates and tangent at a distance from the start point of this path.

**Since:** 12

<!--Device-Path-getPositionAndTangent(forceClosed: boolean, distance: double, position: common2D.Point, tangent: common2D.Point): boolean--><!--Device-Path-getPositionAndTangent(forceClosed: boolean, distance: double, position: common2D.Point, tangent: common2D.Point): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forceClosed | boolean | Yes | Whether the path is measured as a closed path. The value **true** means that the path is considered closed during measurement, and **false** means that the path is measured based on the actual closed status. |
| distance | number | Yes | Distance from the start point. If a negative number is passed in, the value **0** is used. If a value greater than the path length is passed in, the path length is used. The value is a floating point number. |
| position | common2D.Point | Yes | Coordinates obtained. |
| tangent | common2D.Point | Yes | Tangent obtained, where **tangent.x** and **tangent.y** represent the cosine and sine of the tangent of the point, respectively. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that they are obtained, and **false** means the opposite. The values of **position** and **tangent** are not changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="getsegment"></a>
## getSegment

```TypeScript
getSegment(forceClosed: boolean, start: number, stop: number, startWithMoveTo: boolean, dst: Path): boolean
```

Extracts a segment of a path and appends it to a destination path.

**Since:** 18

<!--Device-Path-getSegment(forceClosed: boolean, start: double, stop: double, startWithMoveTo: boolean, dst: Path): boolean--><!--Device-Path-getSegment(forceClosed: boolean, start: double, stop: double, startWithMoveTo: boolean, dst: Path): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forceClosed | boolean | Yes | Whether the path is measured as a closed path. The value **true** means that the path is considered closed during measurement, and **false** means that the path is measured based on the actual closed status. |
| start | number | Yes | Distance from the start point of the path to the start point of the segment. If it is less than 0, it defaults to 0. If it is greater than or equal to **stop**, the extraction fails. The value is a floating point number. |
| stop | number | Yes | Distance from the start point of the path to the end point of the segment. If it is less than or equal to **start**, the extraction fails. If it is greater than the path length, it defaults to the path length. The value is a floating point number. |
| startWithMoveTo | boolean | Yes | Whether to execute [moveTo](arkts-arkgraphics2d-drawing-path-c.md#moveto-1) in the destination path to move to its start point. The value **true** means to move to the start point, and **false** means the opposite. |
| dst | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Destination path. If the extraction succeeds, the segment is appended to the path. If the extraction fails, nothing changes. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Extraction result. The value **true** means that the extraction is successful, and **false** means the opposite. |

<a id="getverbdata"></a>
## getVerbData

```TypeScript
getVerbData(): Array<PathIteratorVerb>
```

Gets path verb data.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-getVerbData(): Array<PathIteratorVerb>--><!--Device-Path-getVerbData(): Array<PathIteratorVerb>-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PathIteratorVerb&gt; | path verbs array. |

<a id="interpolate"></a>
## interpolate

```TypeScript
interpolate(other: Path, weight: number, interpolatedPath: Path): boolean
```

Interpolates between the existing path and another path based on the given weight and stores the result in the target path object. Interpolation is achievable if the two paths have the same number of points. The target path is created based on the structure of the existing path.

**Since:** 20

<!--Device-Path-interpolate(other: Path, weight: double, interpolatedPath: Path): boolean--><!--Device-Path-interpolate(other: Path, weight: double, interpolatedPath: Path): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| other | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Another path object. |
| weight | number | Yes | Interpolation weight, which must be within the range of [0.0, 1.0]. The value is a floating point number. |
| interpolatedPath | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Target path object used to store the interpolation result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether interpolation is successful. **true** means yes; **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

<a id="isclosed"></a>
## isClosed

```TypeScript
isClosed(): boolean
```

Checks whether a path is closed.

**Since:** 12

<!--Device-Path-isClosed(): boolean--><!--Device-Path-isClosed(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that the path is closed, and **false** means the opposite. |

<a id="isempty"></a>
## isEmpty

```TypeScript
isEmpty(): boolean
```

Checks whether a path is empty.

**Since:** 20

<!--Device-Path-isEmpty(): boolean--><!--Device-Path-isEmpty(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a path is empty. **true** means yes; **false** otherwise. |

<a id="isequal"></a>
## isEqual

```TypeScript
isEqual(path: Path): boolean
```

Checks if two paths are equal.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Path-isEqual(path: Path): boolean--><!--Device-Path-isEqual(path: Path): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Another Path object to compare. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the two paths are equal, otherwise returns false. |

<a id="isinterpolate"></a>
## isInterpolate

```TypeScript
isInterpolate(other: Path): boolean
```

Checks whether the existing path and another path are compatible for interpolation in terms of structure and operation sequence. If the paths contain conic operations, the weight values of the operations must be the same.

**Since:** 20

<!--Device-Path-isInterpolate(other: Path): boolean--><!--Device-Path-isInterpolate(other: Path): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| other | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Another path object. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the existing path and another path are compatible for interpolation. **true** means yes; **false** otherwise. |

<a id="isinversefilltype"></a>
## isInverseFillType

```TypeScript
isInverseFillType(): boolean
```

Checks whether the current path fill type is the inverse fill type. For example, the fill types **Winding** and **EvenOdd** are not inverse types, while **InverseWinding** and **InverseEvenOdd** are inverse types.

**Since:** 23

<!--Device-Path-isInverseFillType(): boolean--><!--Device-Path-isInverseFillType(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the current path fill type is the inverse fill type. **true** means yes; **false** otherwise. |

<a id="isrect"></a>
## isRect

```TypeScript
isRect(rect: common2D.Rect | null): boolean
```

Checks whether a path forms a rectangle.

**Since:** 20

<!--Device-Path-isRect(rect: common2D.Rect | null): boolean--><!--Device-Path-isRect(rect: common2D.Rect | null): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | common2D.Rect \| null | Yes | Rectangle object, which is used as an output parameter. If the path forms a rectangle, the rectangle object is overwritten with the rectangle represented by the path. Otherwise, the rectangle object remains unchanged. The value can be **null**, indicating that the rectangle represented by the path does not need to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a path forms a rectangle. **true** means yes; **false** otherwise. |

<a id="lineto"></a>
## lineTo

```TypeScript
lineTo(x: number, y: number): void
```

Draws a line segment from the last point of this path to the target point. If the path is empty, the start point(0, 0) is used.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-lineTo(x: double, y: double): void--><!--Device-Path-lineTo(x: double, y: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of the target point. The value is a floating point number. |
| y | number | Yes | Y coordinate of the target point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="moveto"></a>
## moveTo

```TypeScript
moveTo(x: number, y: number): void
```

Sets the start point of this path.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-moveTo(x: double, y: double): void--><!--Device-Path-moveTo(x: double, y: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of the start point. The value is a floating point number. |
| y | number | Yes | Y coordinate of the start point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="offset"></a>
## offset

```TypeScript
offset(dx: number, dy: number): Path
```

Offsets this path by specified distances along the X axis and Y axis and stores the resulting path in the **Path** object returned.

**Since:** 12

<!--Device-Path-offset(dx: number, dy: number): Path--><!--Device-Path-offset(dx: number, dy: number): Path-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | number | Yes | X offset. A positive number indicates an offset towards the positive direction of the X axis, and a negative number indicates an offset towards the negative direction of the X axis. The value is a floating point number. |
| dy | number | Yes | Y offset. A positive number indicates an offset towards the positive direction of the Y axis, and a negative number indicates an offset towards the negative direction of the Y axis. The value is a floating point number. |

**Return value:**

| Type | Description |
| --- | --- |
| [Path](arkts-arkgraphics2d-drawing-path-c.md) | New path generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="op"></a>
## op

```TypeScript
op(path: Path, pathOp: PathOp): boolean
```

Combines this path with the passed-in path based on the specified operation mode.

**Since:** 12

<!--Device-Path-op(path: Path, pathOp: PathOp): boolean--><!--Device-Path-op(path: Path, pathOp: PathOp): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Path object, which will be combined with the current path. |
| pathOp | [PathOp](arkts-arkgraphics2d-drawing-pathop-e.md) | Yes | Defines an enum for the operation modes available for a path. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Result of the path combination result. The value **true** means that the path combination is successful, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="quadto"></a>
## quadTo

```TypeScript
quadTo(ctrlX: number, ctrlY: number, endX: number, endY: number): void
```

Draws a quadratic Bezier curve from the last point of this path to the target point. If the path is empty, the start point (0, 0) is used.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-quadTo(ctrlX: double, ctrlY: double, endX: double, endY: double): void--><!--Device-Path-quadTo(ctrlX: double, ctrlY: double, endX: double, endY: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctrlX | number | Yes | X coordinate of the control point. The value is a floating point number. |
| ctrlY | number | Yes | Y coordinate of the control point. The value is a floating point number. |
| endX | number | Yes | X coordinate of the target point. The value is a floating point number. |
| endY | number | Yes | Y coordinate of the target point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="rconicto"></a>
## rConicTo

```TypeScript
rConicTo(ctrlX: number, ctrlY: number, endX: number, endY: number, weight: number): void
```

Draws a conic curve from the last point of this path to a point relative to the last point. If the path is empty,the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-rConicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void--><!--Device-Path-rConicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctrlX | number | Yes | X offset of the control point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| ctrlY | number | Yes | Y offset of the control point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point.The value is a floating point number. |
| endX | number | Yes | X offset of the target point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| endY | number | Yes | Y offset of the target point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |
| weight | number | Yes | Weight of the curve, which determines its shape. The larger the value, the closer of the curve to the control point. If the value is less than or equal to 0, this API is equivalent to [rLineTo](arkts-arkgraphics2d-drawing-path-c.md#rlineto-1), that is, adding a line segment from the last point of the path to the target point. If the value is 1, this API is equivalent to [rQuadTo](arkts-arkgraphics2d-drawing-path-c.md#rquadto-1). The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="rcubicto"></a>
## rCubicTo

```TypeScript
rCubicTo(ctrlX1: number, ctrlY1: number, ctrlX2: number, ctrlY2: number, endX: number, endY: number): void
```

Draws a cubic Bezier curve from the last point of this path to a point relative to the last point. If the path is empty, the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-rCubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void--><!--Device-Path-rCubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctrlX1 | number | Yes | X offset of the first control point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point. The value is a floating point number. |
| ctrlY1 | number | Yes | Y offset of the first control point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |
| ctrlX2 | number | Yes | X offset of the second control point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point. The value is a floating point number. |
| ctrlY2 | number | Yes | Y offset of the second control point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |
| endX | number | Yes | X offset of the target point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| endY | number | Yes | Y offset of the target point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="rlineto"></a>
## rLineTo

```TypeScript
rLineTo(dx: number, dy: number): void
```

Draws a line segment from the last point of this path to a point relative to the last point. If the path is empty, the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-rLineTo(dx: double, dy: double): void--><!--Device-Path-rLineTo(dx: double, dy: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | number | Yes | X offset of the target point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| dy | number | Yes | Y offset of the target point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="rmoveto"></a>
## rMoveTo

```TypeScript
rMoveTo(dx: number, dy: number): void
```

Sets the start position relative to the last point of this path. If the path is empty, the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-rMoveTo(dx: double, dy: double): void--><!--Device-Path-rMoveTo(dx: double, dy: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | number | Yes | X offset of the start point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| dy | number | Yes | Y offset of the start point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="rquadto"></a>
## rQuadTo

```TypeScript
rQuadTo(dx1: number, dy1: number, dx2: number, dy2: number): void
```

Draws a quadratic Bezier curve from the last point of this path to a point relative to the last point. If the path is empty, the start point (0, 0) is used.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-rQuadTo(dx1: double, dy1: double, dx2: double, dy2: double): void--><!--Device-Path-rQuadTo(dx1: double, dy1: double, dx2: double, dy2: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx1 | number | Yes | X offset of the control point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| dy1 | number | Yes | Y offset of the control point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |
| dx2 | number | Yes | X offset of the target point relative to the last point. A positive number indicates a rightward shift from the last point, and a negative number indicates a leftward shift from the last point.The value is a floating point number. |
| dy2 | number | Yes | Y offset of the target point relative to the last point. A positive number indicates an upward shift from the last point, and a negative number indicates a downward shift from the last point. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="reset"></a>
## reset

```TypeScript
reset(): void
```

Resets the path data.

**Since:** 11

<!--Device-Path-reset(): void--><!--Device-Path-reset(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="rewind"></a>
## rewind

```TypeScript
rewind(): void
```

Rewinds a path by clearing all its points and lines but reserves the memory space.

**Since:** 20

<!--Device-Path-rewind(): void--><!--Device-Path-rewind(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="set"></a>
## set

```TypeScript
set(src: Path): void
```

Updates the existing path with another path.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Path-set(src: Path): void--><!--Device-Path-set(src: Path): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Path for the update. |

<a id="setfilltype"></a>
## setFillType

```TypeScript
setFillType(pathFillType: PathFillType): void
```

Sets the fill type of this path. The fill type determines how "inside" of the path is drawn. For example, when the fill type **Winding** is used, "inside" of the path is determined by a non-zero sum of signed edge crossings.When **EvenOdd** is used, "inside" of the path is determined by an odd number of edge crossings.

**Since:** 12

<!--Device-Path-setFillType(pathFillType: PathFillType): void--><!--Device-Path-setFillType(pathFillType: PathFillType): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pathFillType | [PathFillType](arkts-arkgraphics2d-drawing-pathfilltype-e.md) | Yes | Fill type of the path. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setlastpoint"></a>
## setLastPoint

```TypeScript
setLastPoint(x: number, y: number): void
```

Sets the last point of a path.

**Since:** 20

<!--Device-Path-setLastPoint(x: double, y: double): void--><!--Device-Path-setLastPoint(x: double, y: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of a point. The value is a floating point number. **0** indicates the coordinate origin. A positive value places the point to the right of the coordinate origin, while a negative value places the point to the left. |
| y | number | Yes | Y coordinate of a point. The value is a floating point number. **0** indicates the coordinate origin. A positive value places the point below the coordinate origin, while a negative value places the point above the coordinate origin. |

<a id="toggleinversefilltype"></a>
## toggleInverseFillType

```TypeScript
toggleInverseFillType(): void
```

Toggles the fill type of the path to the inverse type. For example, if the **Winding** fill type is used, the fill type after inversion is **InverseWinding**. If the **EvenOdd** fill type is used, the fill type after inversion is **InverseEvenOdd**. The same applies to the other two types.

**Since:** 23

<!--Device-Path-toggleInverseFillType(): void--><!--Device-Path-toggleInverseFillType(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="transform"></a>
## transform

```TypeScript
transform(matrix: Matrix): void
```

Transforms the points in a path by matrix.

**Since:** 12

<!--Device-Path-transform(matrix: Matrix): void--><!--Device-Path-transform(matrix: Matrix): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | [Matrix](arkts-arkgraphics2d-drawing-matrix-c.md) | Yes | **Matrix** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

