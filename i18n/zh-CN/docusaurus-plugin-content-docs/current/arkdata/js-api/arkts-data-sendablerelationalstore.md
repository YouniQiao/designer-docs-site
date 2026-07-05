# @ohos.data.sendableRelationalStore

The **sendableRelationalStore** module provides APIs for obtaining **ValuesBucket** of the sendable type from the query result set and transferring it between concurrent instances.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [fromSendableAsset](arkts-sendablerelationalstore-fromsendableasset-f.md#fromSendableAsset-1) | Converts the asset data that can be passed across threads into the data that cannot be passed across threads. |
| [fromSendableValues](arkts-sendablerelationalstore-fromsendablevalues-f.md#fromSendableValues-1) | Converts the array data that can be passed across threads into the data that cannot be passed across threads. |
| [fromSendableValuesBucket](arkts-sendablerelationalstore-fromsendablevaluesbucket-f.md#fromSendableValuesBucket-1) | Converts a KV pair that can be passed across threads into the data that cannot be passed across threads. |
| [toSendableAsset](arkts-sendablerelationalstore-tosendableasset-f.md#toSendableAsset-1) | Converts the asset data that cannot be passed across threads into the data that can be passed across threads. |
| [toSendableValues](arkts-sendablerelationalstore-tosendablevalues-f.md#toSendableValues-1) | Converts the array data that cannot be passed across threads into the data that can be passed across threads. |
| [toSendableValuesBucket](arkts-sendablerelationalstore-tosendablevaluesbucket-f.md#toSendableValuesBucket-1) | Converts a key-value (KV) pair that cannot be passed across threads into the data that can be passed across threads. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Asset](arkts-sendablerelationalstore-asset-i.md) | Represent the asset (such as a document, image, or video). **Asset** inherits from [lang.ISendable]{@link @arkts.lang:lang.ISendable} and is used to implement cross-thread transfer of asset data. The asset data does not support **Datashare** APIs. Use [sendableRelationalStore.toSendableAsset]{@link sendableRelationalStore.toSendableAsset} to create an **Asset** instance. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [Assets](arkts-sendablerelationalstore-assets-t.md) | Represent an array of [Assets]{@link sendableRelationalStore.Asset}, which allows assets to be passed across threads. |
| [NonSendableAsset](arkts-sendablerelationalstore-nonsendableasset-t.md) | Represents the asset (such as a document, image, or video) that cannot be passed across threads. |
| [NonSendableBucket](arkts-sendablerelationalstore-nonsendablebucket-t.md) | Represents the KV pair that cannot be passed across threads. |
| [NonSendableValues](arkts-sendablerelationalstore-nonsendablevalues-t.md) | Represents the [ValueType]{@link @ohos.data.relationalStore:relationalStore.ValueType} array that cannot be passed across threads. |
| [ValuesBucket](arkts-sendablerelationalstore-valuesbucket-t.md) | Represents the KV pair of the [ValueType]{@link sendableRelationalStore.ValueType} data that can be passed across threads. |
| [ValueType](arkts-sendablerelationalstore-valuetype-t.md) | Defines the types of the value in a KV pair. The type varies with the parameter function. |

