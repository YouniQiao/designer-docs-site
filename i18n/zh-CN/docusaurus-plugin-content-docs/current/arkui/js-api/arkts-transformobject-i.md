# TransformObject

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## matrix

```TypeScript
matrix(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void
```

Defines a 2D transformation, using a matrix of six values..

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleX | number | 是 | the scale value for x-axis |
| skewX | number | 是 | the skew value for y-axis |
| skewY | number | 是 | the skew value for x-axis |
| scaleY | number | 是 | the scale value for y-axis |
| translateX | number | 是 | the translate value for x-axis |
| translateY | number | 是 | the translate value for y-axis |

## matrix3d

```TypeScript
matrix3d(
    n00: number,
    n01: number,
    n02: number,
    n03: number,
    n10: number,
    n11: number,
    n12: number,
    n13: number,
    n20: number,
    n21: number,
    n22: number,
    n23: number,
    n30: number,
    n31: number,
    n32: number,
    n33: number,
  ): void
```

Defines a 3D transformation using a 4x4 matrix of 16 values.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| n00 | number | 是 | the value of the 0 row and 0 column of the 4x4 matrix |
| n01 | number | 是 | the value of the 0 row and 1 column of the 4x4 matrix |
| n02 | number | 是 | the value of the 0 row and 2 column of the 4x4 matrix |
| n03 | number | 是 | the value of the 0 row and 3 column of the 4x4 matrix |
| n10 | number | 是 | the value of the 1 row and 0 column of the 4x4 matrix |
| n11 | number | 是 | the value of the 1 row and 1 column of the 4x4 matrix |
| n12 | number | 是 | the value of the 1 row and 2 column of the 4x4 matrix |
| n13 | number | 是 | the value of the 1 row and 3 column of the 4x4 matrix |
| n20 | number | 是 | the value of the 2 row and 0 column of the 4x4 matrix |
| n21 | number | 是 | the value of the 2 row and 1 column of the 4x4 matrix |
| n22 | number | 是 | the value of the 2 row and 2 column of the 4x4 matrix |
| n23 | number | 是 | the value of the 2 row and 3 column of the 4x4 matrix |
| n30 | number | 是 | the value of the 3 row and 0 column of the 4x4 matrix |
| n31 | number | 是 | the value of the 3 row and 1 column of the 4x4 matrix |
| n32 | number | 是 | the value of the 3 row and 2 column of the 4x4 matrix |
| n33 | number | 是 | the value of the 3 row and 3 column of the 4x4 matrix |

## perspective

```TypeScript
perspective(verticalDistance: number): void
```

Defines a perspective view for the 3D transformation element.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| verticalDistance | number | 是 | the vertical distance from the observation point to the component plane. |

## rotate

```TypeScript
rotate(angle: number): void
```

Define the 2D rotation and specify the angle in the parameters.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the rotate value for z-axis |

## rotate3d

```TypeScript
rotate3d(x: number, y: number, z: number, angle: number): void
```

Defines a 3D transformation for rotating the X / Y / Z axes.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the vector value of the x-axis |
| y | number | 是 | the vector value of the y-axis |
| z | number | 是 | the vector value of the z-axis |
| angle | number | 是 | the rotate value for x&y&z vector. |

## rotateX

```TypeScript
rotateX(angle: number): void
```

Defines 3D transformations for rotating of the X axes.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the scale value for x-axis |

## rotateY

```TypeScript
rotateY(angle: number): void
```

Defines 3D transformations for rotating of the Y axes.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the scale value for y-axis |

## rotateZ

```TypeScript
rotateZ(angle: number): void
```

Defines 3D transformations for rotating of the Z axes.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the scale value for z-axis |

## scale

```TypeScript
scale(x: number, y: number): void
```

Defines 2D transformations for scaling of the X and Y axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the scale value for x-axis |
| y | number | 是 | the scale value for y-axis |

## scale3d

```TypeScript
scale3d(x: number, y: number, z: number): void
```

Defines 3D transformations for scaling of the X / Y / Z axes

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the scale value for x-axis |
| y | number | 是 | the scale value for y-axis |
| z | number | 是 | the scale value for z-axis |

## scaleX

```TypeScript
scaleX(x: number): void
```

Defines 2D transformations for scaling of the X axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the scale value for x-axis |

## scaleY

```TypeScript
scaleY(y: number): void
```

Defines 2D transformations for scaling of the Y axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| y | number | 是 | the scale value for y-axis |

## scaleZ

```TypeScript
scaleZ(z: number): void
```

Defines 3D transformations for scaling of the Z axes

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| z | number | 是 | the scale value for z-axis |

## skew

```TypeScript
skew(xAngle: number, yAngle: number): void
```

Defines the 2D skew transition along the X and Y axes.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| xAngle | number | 是 | the angle of inclination along the x axis. |
| yAngle | number | 是 | the angle of inclination along the y axis. |

## skewX

```TypeScript
skewX(angle: number): void
```

Defines the 2D skew transition along the X axes.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the angle of inclination along the x axis. |

## skewY

```TypeScript
skewY(angle: number): void
```

Defines the 2D skew transition along the Y axes.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| angle | number | 是 | the angle of inclination along the y axis. |

## translate

```TypeScript
translate(x: number, y: number): void
```

Defines 2D transformations for translation of the X and Y axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the translate value for x-axis |
| y | number | 是 | the translate value for y-axis |

## translate3d

```TypeScript
translate3d(x: number, y: number, z: number): void
```

Defines 3D transformations for translation of the X / Y / Z axes

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the translate value for x-axis |
| y | number | 是 | the translate value for y-axis |
| z | number | 是 | the translate value for z-axis |

## translateX

```TypeScript
translateX(x: number): void
```

Defines 2D transformations for translation of the X axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | the translate value for x-axis |

## translateY

```TypeScript
translateY(y: number): void
```

Defines 2D transformations for translation of the Y axes

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| y | number | 是 | the translate value for y-axis |

## translateZ

```TypeScript
translateZ(z: number): void
```

Defines 3D transformations for translation of the Z axes

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| z | number | 是 | the translate value for z-axis |

