# toSendableValuesBucket

## Modules to Import

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
```

<a id="tosendablevaluesbucket"></a>
## toSendableValuesBucket

```TypeScript
function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket
```

Converts a key-value (KV) pair that cannot be passed across threads into the data that can be passed across threads.

**Since:** 12

<!--Device-sendableRelationalStore-function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket--><!--Device-sendableRelationalStore-function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| valuesBucket | [NonSendableBucket](arkts-arkdata-sendablerelationalstore-nonsendablebucket-t.md) | Yes | Data that cannot be passed across threads. |

**Return value:**

| Type | Description |
| --- | --- |
| [ValuesBucket](arkts-arkdata-rdb-valuesbucket-t.md) | Data that can be passed across threads. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [14800000](../../apis-basic-services-kit/errorcode-settings.md#14800000-parameter-check-failed) | Inner error. |

**Example**

```TypeScript
const asset1: sendableRelationalStore.NonSendableAsset = {
  name: 'hangman',
  uri: '//path/example',
  path: '//path/example',
  createTime: 'createTime1',
  modifyTime: 'modifyTime1',
  size: 'size1'
};
const asset2: sendableRelationalStore.NonSendableAsset = {
  name: 'hangman',
  uri: '//path/example',
  path: '//path/example',
  createTime: 'createTime1',
  modifyTime: 'modifyTime1',
  size: 'size1'
};
const u8 = new Uint8Array([1, 2, 3]);
const valuesBucket: sendableRelationalStore.NonSendableBucket = {
  age: 18,
  name: "hangman",
  salary: 100.5,
  passed: true,
  data1: asset1,
  blobType: u8,
  bigValue: BigInt("15822401018187971961171"),
  data2: [asset1, asset2]
};

const sendableValuesBucket = sendableRelationalStore.toSendableValuesBucket(valuesBucket);

```

