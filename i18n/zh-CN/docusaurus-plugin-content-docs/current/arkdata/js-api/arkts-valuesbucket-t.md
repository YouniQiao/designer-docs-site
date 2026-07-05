# ValuesBucket

```TypeScript
export type ValuesBucket = Record<string, ValueType | Uint8Array | null>
```

Defines the types of the key and value in a KV pair. This type is not multi-thread safe. If a **ValuesBucket** instance is operated by multiple threads at the same time in an application, use a lock for it.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, ValueType |  |
| Uint8Array |  |
| null> |  |

