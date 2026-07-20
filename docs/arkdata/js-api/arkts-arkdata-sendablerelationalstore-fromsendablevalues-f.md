# fromSendableValues

## Modules to Import

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
```

## fromSendableValues

```TypeScript
function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues
```

Converts the array data that can be passed across threads into the data that cannot be passed across threads.

**Since:** 20

<!--Device-sendableRelationalStore-function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues--><!--Device-sendableRelationalStore-function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | collections.Array<ValueType> | Yes | Array data that can be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| [NonSendableValues](arkts-arkdata-sendablerelationalstore-nonsendablevalues-t.md) | Array data that cannot be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |

**Example**

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
import { collections } from '@kit.ArkTS';
const array = new collections.Array<sendableRelationalStore.ValueType>();
array.push("a");
array.push("b");
array.push(1);
array.push(2);
const values = sendableRelationalStore.fromSendableValues(array);

```

