# getMissionInfo

## getMissionInfo

```TypeScript
function getMissionInfo(deviceId: string, missionId: number, callback: AsyncCallback<MissionInfo>): void
```

获取单个任务信息。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#getMissionInfo

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 设备ID，本机默认为空字符串。 |
| missionId | number | Yes | 任务ID。 |
| callback | AsyncCallback&lt;MissionInfo> | Yes | 回调函数，返回任务信息。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let missionId: number = 0;

missionManager.getMissionInfo('', missionId, (error, mission) => {
  if (error.code) {
    console.error(`getMissionInfo failed, error.code: ${error.code}, error.message: ${error.message}`);
    return;
  }

  console.info(`mission.missionId = ${mission.missionId}`);
  console.info(`mission.runningState = ${mission.runningState}`);
  console.info(`mission.lockedState = ${mission.lockedState}`);
  console.info(`mission.timestamp = ${mission.timestamp}`);
  console.info(`mission.label = ${mission.label}`);
  console.info(`mission.iconPath = ${mission.iconPath}`);
});

```

## getMissionInfo

```TypeScript
function getMissionInfo(deviceId: string, missionId: number): Promise<MissionInfo>
```

获取单个任务信息。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#getMissionInfo

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 设备ID，本机默认为空字符串。 |
| missionId | number | Yes | 任务ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MissionInfo> | Promise对象，返回任务信息。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

let testMissionId = 1;
try {
  missionManager.getMissionInfo('', testMissionId).then((data) => {
    console.info(`getMissionInfo successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`getMissionInfo failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`getMissionInfo failed. Cause: ${error.message}`);
}

```

