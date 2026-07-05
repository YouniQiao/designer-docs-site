# PolygonAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** PolygonAttributeextends: CommonShapeMethod<PolygonAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## points

```TypeScript
points(value: Array<any>)
```

设置多边形的顶点坐标列表，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any> | Yes | 多边形的顶点坐标列表。使用时传入一个二维数组，每个子数组表示一个顶点的[x, y]坐标。 默认值：[]（空数组） 默认单位：vp 异常值  undefined和null按照默认值处理。 |

