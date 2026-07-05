# getMissionInfos

## getMissionInfos

```TypeScript
function getMissionInfos(deviceId: string, numMax: number, callback: AsyncCallback<Array<MissionInfo>>): void
```

获取所有任务信息。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#getMissionInfos

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 设备ID，本机默认为空字符串。 |
| numMax | number | Yes | 任务信息数量上限。 |
| callback | AsyncCallback&lt;Array&lt;MissionInfo>> | Yes | 回调函数，返回任务信息数组。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

missionManager.getMissionInfos('', 10, (error, missions) => {
  if (error.code) {
    console.error(`getMissionInfos failed, error.code: ${error.code}, error.message: ${error.message}`);
    return;
  }
  console.info(`size = ${missions.length}`);
  console.info(`missions = ${JSON.stringify(missions)}`);
});

```

## getMissionInfos

```TypeScript
function getMissionInfos(deviceId: string, numMax: number): Promise<Array<MissionInfo>>
```

获取所有任务信息。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#getMissionInfos

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 设备ID，本机默认为空字符串。 |
| numMax | number | Yes | 任务信息数量上限。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MissionInfo>> | Promise对象，返回任务信息数组。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

try {
  missionManager.getMissionInfos('', 10).then((data) => {
    console.info(`getMissionInfos successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`getMissionInfos failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`getMissionInfos failed. Cause: ${error.message}`);
}

```

