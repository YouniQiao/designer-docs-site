# moveMissionToFront

## moveMissionToFront

```TypeScript
function moveMissionToFront(missionId: number, callback: AsyncCallback<void>): void
```

把指定任务id的任务切到前台。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#moveMissionToFront

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | 任务ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当把指定任务id的任务切到前台成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.moveMissionToFront(testMissionId, (err, data) => {
    if (err) {
      console.error(`moveMissionToFront failed: ${err.message}`);
    } else {
      console.info(`moveMissionToFront successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`moveMissionToFront failed: ${err.message}`);
}

```

## moveMissionToFront

```TypeScript
function moveMissionToFront(missionId: number, options: StartOptions, callback: AsyncCallback<void>): void
```

把指定任务id的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#moveMissionToFront

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | 任务ID。 |
| options | StartOptions | Yes | 启动参数选项，用于指定任务切到前台时的窗口模式，设备ID等。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当把指定任务id的任务切到前台成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.moveMissionToFront(testMissionId, { windowMode: 101 }, (err, data) => {
    if (err) {
      console.error(`moveMissionToFront failed: ${err.message}`);
    } else {
      console.info(`moveMissionToFront successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`moveMissionToFront failed: ${err.message}`);
}

```

## moveMissionToFront

```TypeScript
function moveMissionToFront(missionId: number, options?: StartOptions): Promise<void>
```

把指定任务id的任务切到前台，同时指定任务切换到前台时的启动参数，例如窗口模式、设备ID等。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#moveMissionToFront

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | 任务ID。 |
| options | StartOptions | No |  |

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
  missionManager.moveMissionToFront(testMissionId).then((data) => {
    console.info(`moveMissionToFront successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`moveMissionToFront failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`moveMissionToFront failed. Cause: ${error.message}`);
}

```

