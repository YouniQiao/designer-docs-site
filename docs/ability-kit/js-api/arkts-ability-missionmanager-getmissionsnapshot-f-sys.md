# getMissionSnapShot (System API)

## Modules to Import

```TypeScript
import { missionManager } from '@kit.AbilityKit';
```

<a id="getmissionsnapshot"></a>
## getMissionSnapShot

```TypeScript
function getMissionSnapShot(deviceId: string, missionId: number, callback: AsyncCallback<MissionSnapshot>): void
```

Obtains the snapshot of a given mission. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function getMissionSnapShot(deviceId: string, missionId: int, callback: AsyncCallback<MissionSnapshot>): void--><!--Device-missionManager-function getMissionSnapShot(deviceId: string, missionId: int, callback: AsyncCallback<MissionSnapshot>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. It is a null string by default for the local device. |
| missionId | number | Yes | Mission ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;MissionSnapshot&gt; | Yes | Callback used to return the snapshot information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let testMissionId = 2;

try {
  missionManager.getMissionSnapShot('', testMissionId, (err: BusinessError, data: missionManager.MissionSnapshot) => {
    if (err) {
      console.error(`getMissionSnapShot failed: ${err.message}`);
    } else {
      console.info(`getMissionSnapShot successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`getMissionSnapShot failed: ${err.message}`);
}

```


<a id="getmissionsnapshot-1"></a>
## getMissionSnapShot

```TypeScript
function getMissionSnapShot(deviceId: string, missionId: number): Promise<MissionSnapshot>
```

Obtains the snapshot of a given mission. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function getMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>--><!--Device-missionManager-function getMissionSnapShot(deviceId: string, missionId: int): Promise<MissionSnapshot>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. It is a null string by default for the local device. |
| missionId | number | Yes | Mission ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MissionSnapshot&gt; | Promise used to return the snapshot information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { missionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let testMissionId = 2;

try {
  missionManager.getMissionSnapShot('', testMissionId).then((data: missionManager.MissionSnapshot) => {
    console.info(`getMissionSnapShot successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`getMissionSnapShot failed. Cause: ${error.message}`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`getMissionSnapShot failed. Cause: ${err.message}`);
}

```

