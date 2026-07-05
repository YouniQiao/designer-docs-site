# lockMission (System API)

## Modules to Import

```TypeScript
import { missionManager } from '@ohos.app.ability.missionManager';
```

## lockMission

```TypeScript
function lockMission(missionId: number, callback: AsyncCallback<void>): void
```

Locks a given mission. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16300001](../errorcode-ability.md#16300001-nonexistent-mission) | Mission not found. |

**Example**

```TypeScript
import { missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let testMissionId = 2;

try {
  missionManager.lockMission(testMissionId, (err: BusinessError, data: void) => {
    if (err) {
      console.error(`lockMission failed: ${err.message}`);
    } else {
      console.info(`lockMission successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`lockMission failed: ${err.message}`);
}

```


## lockMission

```TypeScript
function lockMission(missionId: number): Promise<void>
```

Locks a given mission. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16300001](../errorcode-ability.md#16300001-nonexistent-mission) | Mission not found. |

**Example**

```TypeScript
import { missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let testMissionId = 2;

try {
  missionManager.lockMission(testMissionId).then((data: void) => {
    console.info(`lockMission successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`lockMission failed. Cause: ${error.message}`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`lockMission failed. Cause: ${err.message}`);
}

```

