# ColumnLayoutAlgorithm

Vertical linear layout algorithm class.

> **NOTE**  
>  
> The object of the **ColumnLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as  
> the input parameter of the  
> [DynamicLayout](../../../../reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the  
> layout algorithm.

**Inheritance/Implementation:** ColumnLayoutAlgorithm implements [LayoutAlgorithm](arkts-arkui-layoutalgorithm-i.md)

**Since:** 24

<!--Device-unnamed-export class ColumnLayoutAlgorithm implements LayoutAlgorithm--><!--Device-unnamed-export class ColumnLayoutAlgorithm implements LayoutAlgorithm-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: ColumnLayoutAlgorithmOptions)
```

Constructs the vertical linear layout algorithm class.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-ColumnLayoutAlgorithm-constructor(option?: ColumnLayoutAlgorithmOptions)--><!--Device-ColumnLayoutAlgorithm-constructor(option?: ColumnLayoutAlgorithmOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | [ColumnLayoutAlgorithmOptions](arkts-arkui-layoutalgorithm-columnlayoutalgorithmoptions-i.md) | No | Input parameters for constructing the vertical linear layout algorithm, which are used to set the spacing, main axis alignment method, cross axis alignment method, and main axis arrangement direction of the layout algorithm. |

## alignItems

```TypeScript
@Trace public alignItems?: HorizontalAlign
```

Horizontal alignment mode of all child components.

Default value: **HorizontalAlign.Center**

Invalid values are treated as the default value.

**Type:** HorizontalAlign

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-ColumnLayoutAlgorithm-@Trace public alignItems?: HorizontalAlign--><!--Device-ColumnLayoutAlgorithm-@Trace public alignItems?: HorizontalAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isReverse

```TypeScript
@Trace public isReverse?: boolean
```

Whether to reverse the vertical arrangement of child components. **true** indicates to reverse the vertical arrangement of child components. **false** indicates to arrange child components in the vertical direction in normal order.

Default value: **false**

Invalid values are treated as the default value.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-ColumnLayoutAlgorithm-@Trace public isReverse?: boolean--><!--Device-ColumnLayoutAlgorithm-@Trace public isReverse?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## justifyContent

```TypeScript
@Trace public justifyContent?: FlexAlign
```

Vertical alignment mode of all child components.

Default value: **FlexAlign.Start**

Invalid values are treated as the default value.

**Type:** FlexAlign

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-ColumnLayoutAlgorithm-@Trace public justifyContent?: FlexAlign--><!--Device-ColumnLayoutAlgorithm-@Trace public justifyContent?: FlexAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## space

```TypeScript
@Trace public space?: LengthMetrics
```

Vertical spacing between elements in a vertical layout.

Default value: **LengthMetrics.vp(0)**

Invalid values are treated as the default value.

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

<!--Device-ColumnLayoutAlgorithm-@Trace public space?: LengthMetrics--><!--Device-ColumnLayoutAlgorithm-@Trace public space?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

