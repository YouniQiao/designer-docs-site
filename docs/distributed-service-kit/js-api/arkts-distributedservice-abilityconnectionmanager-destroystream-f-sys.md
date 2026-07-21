# destroyStream (System API)

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

<a id="destroystream"></a>
## destroyStream

```TypeScript
function destroyStream(streamId: number): void
```

Destroy the Stream.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-abilityConnectionManager-function destroyStream(streamId: int): void--><!--Device-abilityConnectionManager-function destroyStream(streamId: int): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamId | number | Yes | Indicates the ID of a transport stream. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
hilog.info(0x0000, 'testTag', 'destroyStream called');
abilityConnectionManager.destroyStream(sessionId)

```

