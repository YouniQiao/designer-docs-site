# DataReloadOperation

Represents an operation for reloading data. If the **onDatasetChange** event contains a **DataOperationType.RELOAD** operation, all other operations in the event are ineffective. In such cases, the framework will call **keyGenerator** to perform a comparison of keys with their corresponding values.

**Since:** 12

<!--Device-unnamed-interface DataReloadOperation--><!--Device-unnamed-interface DataReloadOperation-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reuseImmediately

```TypeScript
reuseImmediately?: boolean
```

Whether to enable the feature that reuse old child components when \@Reuseable or \@ReuseableV2 is used and recycle pool is empty.

**true**: Enable the feature.

**false**: Disable the feature.

Default value: **false**.

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.1.0.

<!--Device-DataReloadOperation-reuseImmediately?: boolean--><!--Device-DataReloadOperation-reuseImmediately?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: DataOperationType.RELOAD
```

Type of data reloading.

**Type:** DataOperationType.RELOAD

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DataReloadOperation-type: DataOperationType.RELOAD--><!--Device-DataReloadOperation-type: DataOperationType.RELOAD-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

