# RowAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**Inheritance:** RowAttributeextends: CommonMethod<RowAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignItems

```TypeScript
alignItems(value: VerticalAlign)
```

设置子组件在垂直方向上的对齐格式。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | VerticalAlign | Yes | 子组件在垂直方向上的对齐格式。 默认值：VerticalAlign.Center |

## justifyContent

```TypeScript
justifyContent(value: FlexAlign)
```

设置子组件在水平方向上的对齐格式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FlexAlign | Yes | 子组件在水平方向上的对齐格式。 默认值：FlexAlign.Start |

## pointLight

```TypeScript
pointLight(value: PointLightStyle)
```

Defines the PointLight

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PointLightStyle | Yes | The point light style. |

## reverse

```TypeScript
reverse(isReversed: Optional<boolean>)
```

设置子组件在水平方向上的排列是否反转。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isReversed | Optional&lt;boolean> | Yes | 子组件在水平方向上的排列是否反转。 默认值：true，设置true表示子组件在水平方向上反转排列，设置false表示子组件在水平方向上正序  排列。 |

