# GridLayoutAlgorithm

Grid layout algorithm class.

> **NOTE**
>
> The object of the **GridLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as the
> input parameter of the
> [DynamicLayout](../../../../reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
> layout algorithm.

**Inheritance/Implementation:** GridLayoutAlgorithm implements [LayoutAlgorithm](arkts-arkui-layoutalgorithm-i.md)

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: GridLayoutAlgorithmOptions)
```

Constructs the grid layout algorithm class.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | GridLayoutAlgorithmOptions | No | Input parameters for constructing the grid layout algorithm,which are used to set the number of columns, column spacing, and row spacing of the grid layout. |

## columnsGap

```TypeScript
@Trace public columnsGap?: LengthMetrics
```

Spacing between columns.

Default value: **LengthMetrics.vp(0)**

Invalid values are treated as the default value.

**Type:** LengthMetrics

**Default:** LengthMetrics.vp(0)

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsTemplate

```TypeScript
@Trace public columnsTemplate?: string | ItemFillPolicy
```

Number of columns in the grid layout.

Default value: **'1fr'**

Invalid values are treated as the default value.

**Type:** string | ItemFillPolicy

**Default:** '1fr'

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rowsGap

```TypeScript
@Trace public rowsGap?: LengthMetrics
```

Spacing between rows.

Default value: **LengthMetrics.vp(0)**

Invalid values are treated as the default value.

**Type:** LengthMetrics

**Default:** LengthMetrics.vp(0)

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

