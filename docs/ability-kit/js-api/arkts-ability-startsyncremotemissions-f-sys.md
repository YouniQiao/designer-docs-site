# startSyncRemoteMissions (System API)

## Modules to Import

```TypeScript
import { distributedMissionManager } from '@ohos.distributedMissionManager';
```

## startSyncRemoteMissions

```TypeScript
function startSyncRemoteMissions(parameter: MissionParameter, callback: AsyncCallback<void>): void
```

Starts to synchronize the remote mission list. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | MissionParameter | Yes | Parameters required for synchronization. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the synchronization is started, **err**is **undefined**; otherwise, **err** is an error object. |

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
  distributedMissionManager.startSyncRemoteMissions(
    {
      deviceId: "",
      fixConflict: false,
      tag: 0
    },
    (error: BusinessError) => {
      if (error) {
        console.error('startSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
        return;
      }
      console.info('startSyncRemoteMissions finished');}
  )
} catch (error) {
  console.error('startSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
}

```


## startSyncRemoteMissions

```TypeScript
function startSyncRemoteMissions(parameter: MissionParameter): Promise<void>
```

Starts to synchronize the remote mission list. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | MissionParameter | Yes | Parameters required for synchronization. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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
  distributedMissionManager.startSyncRemoteMissions(
    {
      deviceId: "",
      fixConflict: false,
      tag: 0
    }
  ).then(() => {
      console.info('startSyncRemoteMissions finished successfully');
    }).catch((error: BusinessError) => {
    console.error('startSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
  })
} catch (error) {
  console.error('startSyncRemoteMissions failed, cause: ' + JSON.stringify(error));
}

```

