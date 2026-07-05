# Path2D

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## addPath

```TypeScript
addPath(path: Path2D): void
```

Add another path to current path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path2D | 是 | another created Path2D object. |

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

## closePath

```TypeScript
closePath(): void
```

Draws a closed path.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

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

