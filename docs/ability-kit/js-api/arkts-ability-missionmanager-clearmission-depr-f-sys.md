# clearMission (System API)

## clearMission

```TypeScript
function clearMission(missionId: number, callback: AsyncCallback<void>): void
```

Clears a given mission, regardless of whether it is locked. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** clearMission

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function clearMission(missionId: number, callback: AsyncCallback<void>): void--><!--Device-missionManager-function clearMission(missionId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the mission is cleared, **err** is **undefined**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

let testMissionId = 2;
try {
  missionManager.clearMission(testMissionId, (err, data) => {
    if (err) {
      console.error(`clearMission failed: ${err.message}`);
    } else {
      console.info(`clearMission successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`clearMission failed: ${err.message}`);
}

```


## clearMission

```TypeScript
function clearMission(missionId: number): Promise<void>
```

Clears a given mission, regardless of whether it is locked. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** clearMission

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function clearMission(missionId: number): Promise<void>--><!--Device-missionManager-function clearMission(missionId: number): Promise<void>-End-->

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
  missionManager.clearMission(testMissionId).then((data) => {
    console.info(`clearMission successfully. Data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`clearMission failed. Cause: ${error.message}`);
  });
} catch (error) {
  console.error(`clearMission failed. Cause: ${error.message}`);
}

```

