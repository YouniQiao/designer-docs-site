# DataDeleteOperation

Represents an operation for deleting data.

**Since:** 12

<!--Device-unnamed-interface DataDeleteOperation--><!--Device-unnamed-interface DataDeleteOperation-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## count

```TypeScript
count?: number
```

Number of data records to delete.

Default value: **1**.

**Type:** number

**Default:** 1

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataDeleteOperation-count?: number--><!--Device-DataDeleteOperation-count?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

Index at which to start deleting data. The value range is [0, data source length - 1].

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataDeleteOperation-index: number--><!--Device-DataDeleteOperation-index: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: DataOperationType.DELETE
```

Type of data deletion.

**Type:** DataOperationType.DELETE

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataDeleteOperation-type: DataOperationType.DELETE--><!--Device-DataDeleteOperation-type: DataOperationType.DELETE-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

