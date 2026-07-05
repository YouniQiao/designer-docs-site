# ValuesBucket

```TypeScript
export type ValuesBucket = Record<string, ValueType | Uint8Array | null>
```

Defines the types of the key and value in a KV pair. This type is not multi-thread safe. If a **ValuesBucket** instance is operated by multiple threads at the same time in an application, use a lock for it.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

| Type | Description |
| --- | --- |
| Record&lt;string, ValueType |  |
| Uint8Array |  |
| null> |  |

