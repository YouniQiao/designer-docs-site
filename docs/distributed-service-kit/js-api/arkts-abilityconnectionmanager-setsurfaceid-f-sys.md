# setSurfaceId

## setSurfaceId

```TypeScript
function setSurfaceId(streamId: int, surfaceId: string, param: SurfaceParam): void
```

Sets the transmission surface.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamId | int | Yes | Indicates the ID of a transport stream. |
| surfaceId | string | Yes | Surface ID. |
| param | SurfaceParam | Yes | Surface Parameters |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

hilog.info(0x0000, 'testTag', 'setSurfaceId');
let sessionId = 100;
abilityConnectionManager.createStream(sessionId ,{name: 'receive', role: 0}).then(async (streamId) => {
  let surfaceParam: abilityConnectionManager.SurfaceParam = {
    width: 640,
    height: 480,
    format: 1
  }
  let surfaceId = abilityConnectionManager.getSurfaceId(streamId, surfaceParam);
  abilityConnectionManager.setSurfaceId(streamId, surfaceId, surfaceParam);
})

```

