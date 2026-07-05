# toSendableValuesBucket

## toSendableValuesBucket

```TypeScript
function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket
```

Converts a key-value (KV) pair that cannot be passed across threads into the data that can be passed across threads.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| valuesBucket | NonSendableBucket | Yes | Data that cannot be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| ValuesBucket | Data that can be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 14800000 | Inner error. |

