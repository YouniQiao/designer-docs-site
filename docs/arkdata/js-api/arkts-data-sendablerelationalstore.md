# @ohos.data.sendableRelationalStore

The **sendableRelationalStore** module provides APIs for obtaining **ValuesBucket** of the sendable type from the query result set and transferring it between concurrent instances.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [fromSendableAsset](arkts-arkdata-fromsendableasset-f.md#fromsendableasset-1) | Converts the asset data that can be passed across threads into the data that cannot be passed across threads. |
| [fromSendableValues](arkts-arkdata-fromsendablevalues-f.md#fromsendablevalues-1) | Converts the array data that can be passed across threads into the data that cannot be passed across threads. |
| [fromSendableValuesBucket](arkts-arkdata-fromsendablevaluesbucket-f.md#fromsendablevaluesbucket-1) | Converts a KV pair that can be passed across threads into the data that cannot be passed across threads. |
| [toSendableAsset](arkts-arkdata-tosendableasset-f.md#tosendableasset-1) | Converts the asset data that cannot be passed across threads into the data that can be passed across threads. |
| [toSendableValues](arkts-arkdata-tosendablevalues-f.md#tosendablevalues-1) | Converts the array data that cannot be passed across threads into the data that can be passed across threads. |
| [toSendableValuesBucket](arkts-arkdata-tosendablevaluesbucket-f.md#tosendablevaluesbucket-1) | Converts a key-value (KV) pair that cannot be passed across threads into the data that can be passed across threads. |

### Interfaces

| Name | Description |
| --- | --- |
| [Asset](arkts-arkdata-asset-i.md) | Represent the asset (such as a document, image, or video). **Asset** inherits from [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-isendable-i.md) and is used to implement cross-thread transfer of asset data. The asset data does not support **Datashare** APIs. Use [sendableRelationalStore.toSendableAsset](arkts-arkdata-tosendableasset-f.md#tosendableasset-1) to create an **Asset** instance. |

### Types

| Name | Description |
| --- | --- |
| [Assets](arkts-arkdata-assets-t.md) | Represent an array of [Assets](arkts-arkdata-asset-i.md), which allows assets to be passed across threads. |
| [NonSendableAsset](arkts-arkdata-nonsendableasset-t.md) | Represents the asset (such as a document, image, or video) that cannot be passed across threads. |
| [NonSendableBucket](arkts-arkdata-nonsendablebucket-t.md) | Represents the KV pair that cannot be passed across threads. |
| [NonSendableValues](arkts-arkdata-nonsendablevalues-t.md) | Represents the [ValueType](arkts-arkdata-valuetype-t.md) array that cannot be passed across threads. |
| [ValueType](arkts-arkdata-valuetype-t.md) | Defines the types of the value in a KV pair. The type varies with the parameter function. |
| [ValuesBucket](arkts-arkdata-valuesbucket-t.md) | Represents the KV pair of the [ValueType](arkts-arkdata-valuetype-t.md) data that can be passed across threads. |

