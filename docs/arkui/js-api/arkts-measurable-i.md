# Measurable

子组件位置信息。

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

## measure

```TypeScript
measure(constraint: ConstraintSizeOptions) : MeasureResult
```

调用此方法限制子组件的尺寸范围。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| constraint | ConstraintSizeOptions | Yes | 约束尺寸。 |

**Return value:**

| Type | Description |
| --- | --- |
| MeasureResult | Provides the measurement result of the component. |

## uniqueId

```TypeScript
uniqueId?: number
```

系统为子组件分配的唯一标识UniqueID。 取值限定为整数。

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

