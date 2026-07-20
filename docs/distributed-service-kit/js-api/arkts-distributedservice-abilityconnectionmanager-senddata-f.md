# sendData

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## sendData

```TypeScript
function sendData(sessionId: number, data: ArrayBuffer): Promise<void>
```

Sends [ArrayBuffer](../../../../arkts-utils/arraybuffer-object.md) byte streams from one device to another after a connection is successfully established.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function sendData(sessionId: int, data: ArrayBuffer): Promise<void>--><!--Device-abilityConnectionManager-function sendData(sessionId: int, data: ArrayBuffer): Promise<void>-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | number | Yes | ID of the collaboration session. |
| data | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Byte stream information. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { util } from '@kit.ArkTS';

let textEncoder = util.TextEncoder.create("utf-8");
const arrayBuffer  = textEncoder.encodeInto("data send success");

let sessionId = 100;
abilityConnectionManager.sendData(sessionId, arrayBuffer.buffer).then(() => {
  hilog.info(0x0000, 'testTag', "sendMessage success");
}).catch(() => {
  hilog.error(0x0000, 'testTag', "sendMessage failed");
})

```

