# RectAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** RectAttribute继承自：CommonShapeMethod<RectAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## radius

```TypeScript
radius(value: Length | Array<any>)
```

设置圆角半径大小，取值范围≥0，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length \| Array&lt;any> | 是 | 圆角半径大小。 默认值：0 默认单位：vp 异常值undefined和null按照  [[0, 0], [0, 0], [0, 0], [0, 0]]处理。 [since 20] |

## radiusHeight

```TypeScript
radiusHeight(value: Length)
```

设置圆角的高度，仅设置高时宽高一致，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 圆角的高度，取值范围≥0。 默认值：0 默认单位：vp 异常值undefined按照默认值处理。 [since 20] |

## radiusWidth

```TypeScript
radiusWidth(value: Length)
```

设置圆角的宽度，仅设置宽时宽高一致，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 异常值按照默认值处理。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 圆角的宽度，取值范围≥0。 默认值：0 默认单位：vp 异常值undefined按照默认值处理。 [since 20] |

