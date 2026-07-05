# LineAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** LineAttribute继承自：CommonShapeMethod<LineAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## endPoint

```TypeScript
endPoint(value: Array<any>)
```

设置直线终点坐标点（相对坐标），支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 | 直线终点坐标点（相对坐标），单位vp。 默认值：[0, 0] 异常值undefined和null按照默认值处理。 |

## startPoint

```TypeScript
startPoint(value: Array<any>)
```

设置直线起点坐标点（相对坐标），支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法，异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;any> | 是 | 直线起点坐标点（相对坐标），单位vp。 默认值：[0, 0] 异常值undefined和null按照默认值处理。 |

