# BlankAttribute

除支持[通用属性]CommonMethod外，还支持以下属性： 支持[通用事件]CommonMethod。

**继承实现关系：** BlankAttribute继承自：CommonMethod<BlankAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor)
```

设置空白填充的填充颜色，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 空白填充的填充颜色。 默认值：Color.Transparent 非法值：按默认值处理。 |

