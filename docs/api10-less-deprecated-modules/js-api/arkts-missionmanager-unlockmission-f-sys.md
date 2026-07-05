# unlockMission

## unlockMission

```TypeScript
function unlockMission(missionId: number, callback: AsyncCallback<void>): void
```

解锁指定任务id的任务。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#unlockMission

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | 任务ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当解锁指定任务id的任务成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.unlockMission(testMissionId, (err, data) => {
    if (err) {
      console.error(`unlockMission failed: ${err.message}`);
    } else {
      console.info(`unlockMission successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`unlockMission failed: ${err.message}`);
}

```

## unlockMission

```TypeScript
function unlockMission(missionId: number): Promise<void>
```

解锁指定任务id的任务。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#unlockMission

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | 任务ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

let testMissionId = 2;
try {
  missionManager.unlockMission(testMissionId).then((data) => {
    console.info(`unlockMission successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`unlockMission failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`unlockMission failed. Cause: ${error.message}`);
}

```

