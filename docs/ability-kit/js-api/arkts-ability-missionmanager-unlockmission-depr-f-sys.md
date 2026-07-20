# unlockMission (System API)

## unlockMission

```TypeScript
function unlockMission(missionId: number, callback: AsyncCallback<void>): void
```

Unlocks a given mission. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** unlockMission

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function unlockMission(missionId: number, callback: AsyncCallback<void>): void--><!--Device-missionManager-function unlockMission(missionId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the mission is unlocked, **err** is **undefined**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.unlockMission(testMissionId, (err, data) => {
    if (err) {
      console.error(`unlockMission failed: ${err.message}`);
    } else {
      console.info(`unlockMission successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`unlockMission failed: ${err.message}`);
}

```


## unlockMission

```TypeScript
function unlockMission(missionId: number): Promise<void>
```

Unlocks a given mission. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** unlockMission

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function unlockMission(missionId: number): Promise<void>--><!--Device-missionManager-function unlockMission(missionId: number): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

let testMissionId = 2;
try {
  missionManager.unlockMission(testMissionId).then((data) => {
    console.info(`unlockMission successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`unlockMission failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`unlockMission failed. Cause: ${error.message}`);
}

```

