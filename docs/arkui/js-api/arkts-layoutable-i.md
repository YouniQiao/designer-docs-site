# Layoutable

子组件布局信息。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getBorderWidth

```TypeScript
getBorderWidth() : DirectionalEdgesT<number>
```

调用此方法获取子组件的borderWidth信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DirectionalEdgesT&lt;number> | 子组件的borderWidth信息。 |

## getMargin

```TypeScript
getMargin() : DirectionalEdgesT<number>
```

调用此方法获取子组件的margin信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DirectionalEdgesT&lt;number> | 子组件的margin信息。 |

## getPadding

```TypeScript
getPadding() : DirectionalEdgesT<number>
```

调用此方法获取子组件的padding信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DirectionalEdgesT&lt;number> | 子组件的padding信息。 |

## layout

```TypeScript
layout(position: Position): void
```

调用此方法对子组件的位置信息进行限制。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | Position | Yes | 绝对位置。 |

## measureResult

```TypeScript
measureResult: MeasureResult
```

子组件测量后的尺寸信息。 单位为： vp。

**Type:** MeasureResult

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## uniqueId

```TypeScript
uniqueId?: number
```

系统为子组件分配的唯一标识UniqueID。 取值应为≥0的整数。

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

