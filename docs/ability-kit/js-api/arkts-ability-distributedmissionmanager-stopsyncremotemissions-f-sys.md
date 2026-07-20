# stopSyncRemoteMissions (System API)

## Modules to Import

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
```

## stopSyncRemoteMissions

```TypeScript
function stopSyncRemoteMissions(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void
```

Stops synchronizing the remote mission list. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-distributedMissionManager-function stopSyncRemoteMissions(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void--><!--Device-distributedMissionManager-function stopSyncRemoteMissions(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | [MissionDeviceInfo](arkts-ability-missiondeviceinfo-i-sys.md) | Yes | Parameters required for synchronization. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the synchronization is stopped, **err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedMissionManager.stopSyncRemoteMissions(
    {
      deviceId: ""
    },
    (error: BusinessError) => {
      if (error) {
        console.error('stopSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
        return;
      }
      console.info('stopSyncRemoteMissions finished');}
  )
} catch (error) {
  console.error('stopSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
}

```


## stopSyncRemoteMissions

```TypeScript
function stopSyncRemoteMissions(parameter: MissionDeviceInfo): Promise<void>
```

Stops synchronizing the remote mission list. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-distributedMissionManager-function stopSyncRemoteMissions(parameter: MissionDeviceInfo): Promise<void>--><!--Device-distributedMissionManager-function stopSyncRemoteMissions(parameter: MissionDeviceInfo): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | [MissionDeviceInfo](arkts-ability-missiondeviceinfo-i-sys.md) | Yes | Parameters required for synchronization. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedMissionManager.stopSyncRemoteMissions(
    {
      deviceId: ""
    }).then(() => {
      console.info('stopSyncRemoteMissions finished successfully');
    }).catch((error: BusinessError) => {
    console.error('stopSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
  })
} catch (error) {
  console.error('stopSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
}

```

