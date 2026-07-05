# ShapeAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** ShapeAttribute继承自：CommonMethod<ShapeAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## antiAlias

```TypeScript
antiAlias(value: boolean)
```

设置是否开启抗锯齿效果，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否开启抗锯齿效果。 true：开启抗锯齿；false：关闭抗锯齿。 默认值：true 异常值undefined和null按照false处理。 |

## fill

```TypeScript
fill(value: ResourceColor)
```

设置填充区域的颜色，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，异常值按照默认值处理。与通用属性foregroundColor同时设置时， 后设置的属性生效。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 填充区域颜色。 默认值：[Color]Color.Black 异常值undefined、null、NaN和Infinity按照默认  值处理。 |

## fillOpacity

```TypeScript
fillOpacity(value: number | string | Resource)
```

设置填充区域透明度，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 | 填充区域透明度。 说明： number格式取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若给  定值大于1.0，则取值为1.0，其余异常值按1.0处理。 string格式支持number格式取值的字符串形式，取值范围与number格式相同。 Resource格式支持系统资源或者应用资源中的字符串，取值  范围和number格式相同。 默认值：1.0 |

## mesh

```TypeScript
mesh(value: Array<any>, column: number, row: number)
```

设置网格效果。将图像分割为（row + 1）* (column + 1)的网格，每个网格交点坐标存储在数组中（每两个元素表示一个交点的x、y坐标）。通过数组value中的坐标值，重新定位网格顶点位置，实现图像局部扭曲。支持 [attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 > **说明：** > > mesh只对shape传入pixelMap时生效，且效果作用于传入的pixelMap。与[绘制模块](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-drawing.md#drawing)的 > [drawPixelMapMesh<sup>12+</sup>](../../apis-arkgraphics2d/arkts-apis/arkts-drawing-canvas-c.md#drawPixelMapMesh)效果一致，建议使用 > drawPixelMapMesh。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 | 长度（row + 1） （column + 1） 2的数组，记录扭曲后的位图各个顶点位置。 设置异常值undefined、null时value按照空数组处理，  设置空数组时column和row按0处理，value按空数组处理。 |
| column | number | 是 | mesh矩阵列数。 设置异常值undefined、null、NaN和Infinity时column和row按0处理，value按空数组处理。 |
| row | number | 是 | mesh矩阵行数。 设置异常值undefined、null、NaN和Infinity时column和row按0处理，value按空数组处理。 |

## stroke

```TypeScript
stroke(value: ResourceColor)
```

设置边框颜色，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，不设置时，默认边框透明度为0，即没有边框。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 边框颜色。 默认值：[Color]Color.Transparent 异常值undefined和null按照默认值处理，NaN和  Infinity按照[Color]Color.Black处理。 |

## strokeDashArray

```TypeScript
strokeDashArray(value: Array<any>)
```

设置边框间隙，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。取值范围为≥0，异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 | 定义Shape轮廓的虚线模式的数组，数组元素交替表示线段长度和间隙长度。 默认值：[]（空数组） 默认单位：vp 异常值undefined和  null按照默认值处理。 说明： 空数组：实线 偶数多元素数组：数组元素按顺序循环，如[a, b, c, d]表示线段长度a->间隙长度b->线段长度c->间隙长度d->线段长度a->...  奇数多元素数组：重复一次该数组元素，按偶数多元素数组的规则顺序循环，如[a, b, c]等效于[a, b, c, a, b, c]，表示线段长度a->间隙长度b->线段长度c->间隙长度a->线段长度b->间隙长  度c->线段长度a->... |

## strokeDashOffset

```TypeScript
strokeDashOffset(value: Length)
```

设置边框绘制起点的偏移量，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 边框绘制起点的偏移量。 默认值：0 默认单位：vp 异常值undefined和null按照默认值处理，NaN和Infinity会导致  strokeDashArray失效。 [since 11] |

## strokeLineCap

```TypeScript
strokeLineCap(value: LineCapStyle)
```

设置边框端点绘制样式，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LineCapStyle | 是 | 边框端点绘制样式。 默认值：LineCapStyle.Butt 异常值undefined、null、NaN和Infinity按照默认值处理。 |

## strokeLineJoin

```TypeScript
strokeLineJoin(value: LineJoinStyle)
```

设置边框拐角绘制样式，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LineJoinStyle | 是 | 边框拐角绘制样式。 默认值：LineJoinStyle.Miter 异常值undefined、null、NaN和Infinity按照默认值处理。 |

## strokeMiterLimit

```TypeScript
strokeMiterLimit(value: Length)
```

设置斜接长度与边框宽度比值的极限值，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。斜接长度表示外边框外边交点到内边交点的距离，边框宽度即 strokeWidth属性的值。该属性取值需在strokeLineJoin属性取值LineJoinStyle.Miter时生效。 该属性的合法值范围应当大于等于1.0，当取值范围在[0,1)时按1.0处理，其余异常值按默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 斜接长度与边框宽度比值的极限值。 默认值：4 异常值undefined、null和NaN按照默认值处理，Infinity会导致stroke失  效。 [since 20] |

## strokeOpacity

```TypeScript
strokeOpacity(value: number | string | Resource)
```

设置边框透明度，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。该属性的取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若 给定值大于1.0，则取值为1.0。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 | 边框透明度。 默认值：[stroke](arkts-shapeattribute-c.md#stroke)接口设置的透明度。 异常值  NaN按0.0处理，undefined、null和Infinity按1.0处理。 |

## strokeWidth

```TypeScript
strokeWidth(value: Length)
```

设置边框宽度，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。该属性若为string类型，暂不支持百分比，百分比按照1px处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 边框宽度，取值范围≥0。 默认值：1 默认单位：vp 异常值undefined、null和NaN按照默认值处理，Infinity按0处  理。 [since 20] |

## viewPort

```TypeScript
viewPort(value: ViewportRect)
```

设置形状的视口。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ViewportRect | 是 | Viewport绘制属性。 默认值：{} 异常值undefined和null按照默认值处理。 [since 18] |

