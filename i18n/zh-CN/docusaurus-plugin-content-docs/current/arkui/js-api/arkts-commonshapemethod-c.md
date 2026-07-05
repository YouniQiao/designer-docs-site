# CommonShapeMethod

**继承实现关系：** CommonShapeMethod继承自：CommonMethod<T>。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## antiAlias

```TypeScript
antiAlias(value: boolean): T
```

Indicates whether to enable anti-aliasing

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## constructor

```TypeScript
constructor()
```

constructor.

**起始版本：** 9

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## fill

```TypeScript
fill(value: ResourceColor): T
```

Fill color.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## fillOpacity

```TypeScript
fillOpacity(value: number | string | Resource): T
```

fill Opacity

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## stroke

```TypeScript
stroke(value: ResourceColor): T
```

border Color

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeDashArray

```TypeScript
strokeDashArray(value: Array<any>): T
```

Sets the gap for the border.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeDashOffset

```TypeScript
strokeDashOffset(value: number | string): T
```

Offset from the start point of the border drawing.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeLineCap

```TypeScript
strokeLineCap(value: LineCapStyle): T
```

Path endpoint drawing style.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LineCapStyle | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeLineJoin

```TypeScript
strokeLineJoin(value: LineJoinStyle): T
```

Border corner drawing style.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LineJoinStyle | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeMiterLimit

```TypeScript
strokeMiterLimit(value: number | string): T
```

Limits for drawing acute angles as bevels

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeOpacity

```TypeScript
strokeOpacity(value: number | string | Resource): T
```

Sets the opacity of the border.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## strokeWidth

```TypeScript
strokeWidth(value: Length): T
```

Sets the width of the dividing line.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

