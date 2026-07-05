# createStream

## createStream

```TypeScript
function createStream(sessionId: int, param: StreamParam): Promise<int>
```

Creating a Stream.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | Ability connection Session id. |
| param | StreamParam | Yes | Transport Stream Parameters |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | The promise returned by the function, contain the ID of a transport stream. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 32300001 | Only one stream can be created for the current session. |
| 32300003 | Bitrate not supported. |
| 32300004 | Color space not supported. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

hilog.info(0x0000, 'testTag', 'startStream');
let sessionId = 100;
abilityConnectionManager.createStream(sessionId ,{name: 'receive', role: 0}).then(async (streamId) => {
  let surfaceParam: abilityConnectionManager.SurfaceParam = {
    width: 640,
    height: 480,
    format: 1
  }
  let surfaceId = abilityConnectionManager.getSurfaceId(streamId, surfaceParam);
  hilog.info(0x0000, 'testTag', 'surfaceId is'+surfaceId);
  AppStorage.setOrCreate<string>('surfaceId', surfaceId);
  abilityConnectionManager.startStream(streamId);
})

```

