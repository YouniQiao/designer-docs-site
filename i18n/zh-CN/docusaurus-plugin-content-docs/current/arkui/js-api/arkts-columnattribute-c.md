# ColumnAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**继承实现关系：** ColumnAttribute继承自：CommonMethod<ColumnAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## alignItems

```TypeScript
alignItems(value: HorizontalAlign)
```

设置子组件在水平方向上的对齐格式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | HorizontalAlign | 是 | 子组件在水平方向上的对齐格式。 默认值：HorizontalAlign.Center |

## justifyContent

```TypeScript
justifyContent(value: FlexAlign)
```

设置子组件在垂直方向上的对齐格式。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | FlexAlign | 是 | 子组件在垂直方向上的对齐格式。 默认值：FlexAlign.Start |

## pointLight

```TypeScript
pointLight(value: PointLightStyle)
```

Defines the PointLight

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PointLightStyle | 是 | The point light style. |

## reverse

```TypeScript
reverse(isReversed: Optional<boolean>)
```

设置子组件在垂直方向上的排列是否反转。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isReversed | Optional&lt;boolean> | 是 | 子组件在垂直方向上的排列是否反转。 默认值：true，设置true表示子组件在垂直方向上反转排列，设置false表示子组件在垂直方向上正序  排列。 |

