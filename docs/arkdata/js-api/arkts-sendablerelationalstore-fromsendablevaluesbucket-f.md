# fromSendableValuesBucket

## fromSendableValuesBucket

```TypeScript
function fromSendableValuesBucket(valuesBucket: ValuesBucket): NonSendableBucket
```

Converts a KV pair that can be passed across threads into the data that cannot be passed across threads.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| valuesBucket | ValuesBucket | Yes | Data that can be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| NonSendableBucket | Data that cannot be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 14800000 | Inner error. |

