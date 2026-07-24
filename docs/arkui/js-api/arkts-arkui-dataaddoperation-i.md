# DataAddOperation

Represents an operation for adding data.

**Since:** 12

<!--Device-unnamed-interface DataAddOperation--><!--Device-unnamed-interface DataAddOperation-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## count

```TypeScript
count?: number
```

Number of data records to insert.

Default value: **1**.

**Type:** number

**Default:** 1

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataAddOperation-count?: number--><!--Device-DataAddOperation-count?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

Index at which to insert the data record. The value range is [0, data source length - 1].

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataAddOperation-index: number--><!--Device-DataAddOperation-index: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## key

```TypeScript
key?: string | Array<string>
```

Keys to assign to the inserted data records. The original keys are used by default.

**Type:** string \| Array&lt;string&gt;

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataAddOperation-key?: string | Array<string>--><!--Device-DataAddOperation-key?: string | Array<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: DataOperationType.ADD
```

Type of data addition.

**Type:** DataOperationType.ADD

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataAddOperation-type: DataOperationType.ADD--><!--Device-DataAddOperation-type: DataOperationType.ADD-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

