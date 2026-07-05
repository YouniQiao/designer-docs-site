# toSendableValues

## toSendableValues

```TypeScript
function toSendableValues(values: NonSendableValues): collections.Array<ValueType>
```

Converts the array data that cannot be passed across threads into the data that can be passed across threads.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | NonSendableValues | Yes | Array data that cannot be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| collections.Array&lt;ValueType> | Array data that can be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800000 | Inner error. |

