# fromSendableValues

## fromSendableValues

```TypeScript
function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues
```

Converts the array data that can be passed across threads into the data that cannot be passed across threads.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | collections.Array&lt;ValueType> | Yes | Array data that can be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| NonSendableValues | Array data that cannot be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800000 | Inner error. |

