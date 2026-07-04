# getMissionSnapShot (System API)

## getMissionSnapShot

```TypeScript
function getMissionSnapShot(deviceId: string, missionId: number, callback: AsyncCallback<MissionSnapshot>): void
```

Obtains the snapshot of a given mission. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getMissionSnapShot

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. It is a null string by default for the local device. |
| missionId | number | Yes | Mission ID. |
| callback | AsyncCallback&lt;MissionSnapshot&gt; | Yes | Callback used to return the snapshot information obtained. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.getMissionSnapShot('', testMissionId, (err, data) => {
    if (err) {
      console.error(`getMissionSnapShot failed: ${err.message}`);
    } else {
      console.info(`getMissionSnapShot successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`getMissionSnapShot failed: ${err.message}`);
}

```


## getMissionSnapShot

```TypeScript
function getMissionSnapShot(deviceId: string, missionId: number): Promise<MissionSnapshot>
```

Obtains the snapshot of a given mission. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getMissionSnapShot

**Required permissions:** ohos.permission.MANAGE_MISSIONS

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

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

let testMissionId = 2;
try {
  missionManager.getMissionSnapShot('', testMissionId).then((data) => {
    console.info(`getMissionSnapShot successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`getMissionSnapShot failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`getMissionSnapShot failed. Cause: ${error.message}`);
}

```

