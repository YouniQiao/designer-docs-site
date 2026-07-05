# CustomComponent

自定义组件

**Inheritance:** CustomComponentextends: BaseCustomComponent.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToReuse

```TypeScript
aboutToReuse?(params: Record<string, Object | undefined | null>): void
```

Invoked when a reusable custom component is re-added to the node tree from the reuse cache to receive construction parameters of the component.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | Record&lt;string, Object \| undefined \| null> | Yes | Custom component init params. |

## onLayout

```TypeScript
onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void
```

**Since:** 9

**Deprecated since:** 10

**Substitute:** CustomComponent#onPlaceChildren

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| children | Array&lt;LayoutChild> | Yes | Child component layout information. |
| constraint | ConstraintSizeOptions | Yes | Size constraint of the parent component. |

## onMeasure

```TypeScript
onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void
```

**Since:** 9

**Deprecated since:** 10

**Substitute:** CustomComponent#onMeasureSize

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| children | Array&lt;LayoutChild> | Yes | Child component layout information. |
| constraint | ConstraintSizeOptions | Yes | Size constraint of the parent component. |

