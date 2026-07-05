# moveMissionsToForeground

## moveMissionsToForeground

```TypeScript
function moveMissionsToForeground(missionIds: Array<int>, callback: AsyncCallback<void>): void
```

将指定任务批量切到前台。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionIds | Array&lt;int> | Yes | 任务ID数组。 |
| callback | AsyncCallback&lt;void> | Yes | 执行结果回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager, missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  missionManager.getMissionInfos("", 10, (error: BusinessError, missionInfos: Array<missionManager.MissionInfo>) => {
    if (error.code) {
      console.error(`getMissionInfos failed, error code: ${error.code}, error msg: ${error.message}.`);
      return;
    }
    if (missionInfos.length < 1) {
      return;
    }

    let toShows = new Array<number>();
    for (let missionInfo of missionInfos) {
      if (missionInfo.abilityState == abilityManager.AbilityState.BACKGROUND) {
        toShows.push(missionInfo.missionId);
      }
    }
    missionManager.moveMissionsToForeground(toShows, (err: BusinessError, data: void) => {
      if (err) {
        console.error(`moveMissionsToForeground failed: ${err.message}`);
      } else {
        console.info(`moveMissionsToForeground successfully: ${JSON.stringify(data)}`);
      }
    });
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message} `);
}

```

## moveMissionsToForeground

```TypeScript
function moveMissionsToForeground(missionIds: Array<int>, topMission: int, callback: AsyncCallback<void>): void
```

将指定任务批量切换到前台，并将任务ID等于topMission的任务移动到最顶层。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionIds | Array&lt;int> | Yes | 任务ID数组。 |
| topMission | int | Yes | 待移动到最顶层的任务ID |
| callback | AsyncCallback&lt;void> | Yes | 执行结果回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager, missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  missionManager.getMissionInfos("", 10, (error: BusinessError, missionInfos: Array<missionManager.MissionInfo>) => {
    if (error.code) {
      console.error(`getMissionInfos failed, error code: ${error.code}, error msg: ${error.message}.`);
      return;
    }
    if (missionInfos.length < 1) {
      return;
    }

    let toShows = new Array<number>();
    for (let missionInfo of missionInfos) {
      if (missionInfo.abilityState == abilityManager.AbilityState.BACKGROUND) {
        toShows.push(missionInfo.missionId);
      }
    }
    missionManager.moveMissionsToForeground(toShows, toShows[0], (err: BusinessError, data: void) => {
      if (err) {
        console.error(`moveMissionsToForeground failed: ${err.message}`);
      } else {
        console.info(`moveMissionsToForeground successfully`);
      }
    });
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message} `);
}

```

## moveMissionsToForeground

```TypeScript
function moveMissionsToForeground(missionIds: Array<int>, topMission?: int): Promise<void>
```

将指定任务批量切到前台，并将任务ID等于topMission的任务移动到最顶层。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionIds | Array&lt;int> | Yes | 任务ID数组。 |
| topMission | int | No | 待移动到最顶层的任务ID。默认值为-1，表示将默认任务移动到最顶层。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager, missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  missionManager.getMissionInfos("", 10, (error: BusinessError, missionInfos: Array<missionManager.MissionInfo>) => {
    if (error.code) {
      console.error(`getMissionInfos failed, error code: ${error.code}, error msg: ${error.message}`);
      return;
    }
    if (missionInfos.length < 1) {
      return;
    }

    let toShows = new Array<number>();
    for (let missionInfo of missionInfos) {
      if (missionInfo.abilityState == abilityManager.AbilityState.BACKGROUND) {
        toShows.push(missionInfo.missionId);
      }
    }
    missionManager.moveMissionsToForeground(toShows, toShows[0]).then(() => {
      console.info(`moveMissionsToForeground is called`);
    });
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message} `);
}

```

