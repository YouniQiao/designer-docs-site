# connect

## connect

```TypeScript
function connect(sessionId: int): Promise<ConnectResult>
```

Sets up a UIAbility connection after a collaboration session is created and the session ID is obtained. This API uses a promise to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | ID of the collaboration session. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ConnectResult> | Promise used to return the  [connection result]abilityConnectionManager.ConnectResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let sessionId = 100;
abilityConnectionManager.connect(sessionId).then((ConnectResult) => {
  if (!ConnectResult.isConnected) {
    hilog.info(0x0000, 'testTag', 'connect failed');
    return;
  }
}).catch(() => {
  hilog.error(0x0000, 'testTag', "connect failed");
})

```

