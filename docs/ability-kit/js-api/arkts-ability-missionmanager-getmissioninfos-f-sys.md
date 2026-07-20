# getMissionInfos (System API)

## Modules to Import

```TypeScript
import { missionManager } from '@kit.AbilityKit';
```

## getMissionInfos

```TypeScript
function getMissionInfos(deviceId: string, numMax: number, callback: AsyncCallback<Array<MissionInfo>>): void
```

Obtains information about all missions. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>): void--><!--Device-missionManager-function getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. It is a null string by default for the local device. |
| numMax | number | Yes | Maximum number of missions whose information can be obtained. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<MissionInfo>> | Yes | Callback used to return the array of mission information obtained. |

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

try {
  missionManager.getMissionInfos('', 10, (error: BusinessError, missions: Array<missionManager.MissionInfo>) => {
    if (error) {
      console.error(`getMissionInfos failed, error.code: ${error.code}, error.message: ${error.message}`);
    } else {
      console.info(`size = ${missions.length}`);
      console.info(`missions = ${JSON.stringify(missions)}`);
    }
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`getMissionInfos failed, error code: ${code}, error msg: ${message}.`);
}

```


## getMissionInfos

```TypeScript
function getMissionInfos(deviceId: string, numMax: number): Promise<Array<MissionInfo>>
```

Obtains information about all missions. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function getMissionInfos(deviceId: string, numMax: int): Promise<Array<MissionInfo>>--><!--Device-missionManager-function getMissionInfos(deviceId: string, numMax: int): Promise<Array<MissionInfo>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. It is a null string by default for the local device. |
| numMax | number | Yes | Maximum number of missions whose information can be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<MissionInfo>> | Promise used to return the array of mission information obtained. |

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

try {
  missionManager.getMissionInfos('', 10).then((data: Array<missionManager.MissionInfo>) => {
    console.info(`getMissionInfos successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`getMissionInfos failed. Cause: ${error.message}`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`getMissionInfos failed. Cause: ${err.message}`);
}

```

