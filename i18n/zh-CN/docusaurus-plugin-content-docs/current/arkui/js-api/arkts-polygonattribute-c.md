# PolygonAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** PolygonAttribute继承自：CommonShapeMethod<PolygonAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## points

```TypeScript
points(value: Array<any>)
```

设置多边形的顶点坐标列表，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 | 多边形的顶点坐标列表。使用时传入一个二维数组，每个子数组表示一个顶点的[x, y]坐标。 默认值：[]（空数组） 默认单位：vp 异常值  undefined和null按照默认值处理。 |

