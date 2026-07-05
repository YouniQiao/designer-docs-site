# LayoutChild

布局和测量发生时，框架传递给子组件的信息。

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layout

```TypeScript
layout(childLayoutInfo: LayoutInfo)
```

在 onLayout 回调中调用此布局方法，将布局信息分配给子组件。

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| childLayoutInfo | LayoutInfo | Yes |  |

## measure

```TypeScript
measure(childConstraint: ConstraintSizeOptions)
```

在 onMeasure 回调中调用此 measure 方法以提供子组件的尺寸。

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| childConstraint | ConstraintSizeOptions | Yes |  |

## name

```TypeScript
name: string
```

子组件名字

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constraint

```TypeScript
constraint: ConstraintSizeOptions
```

子组件约束

**Type:** ConstraintSizeOptions

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## position

```TypeScript
position: Position
```

子组件位置信息

**Type:** Position

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderInfo

```TypeScript
borderInfo: LayoutBorderInfo
```

子组件边框信息

**Type:** LayoutBorderInfo

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id: string
```

子组件id

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** Measurable/Layoutable

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

