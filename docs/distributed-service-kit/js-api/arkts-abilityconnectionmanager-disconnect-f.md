# disconnect

## disconnect

```TypeScript
function disconnect(sessionId: int): void
```

Disconnects the UIAbility connection to end the collaboration session.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | int | Yes | ID of the collaboration session. |

**Example**

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

hilog.info(0x0000, 'testTag', 'disconnectRemoteAbility begin');
let sessionId = 100;
abilityConnectionManager.disconnect(sessionId);

```

