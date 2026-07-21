# unregisterMissionListener (System API)

<a id="unregistermissionlistener"></a>
## unregisterMissionListener

```TypeScript
function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void
```

Unregisters a mission status listener. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void--><!--Device-missionManager-function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listenerId | number | Yes | Index of the mission status listener to unregister. It is returned by **registerMissionListener()**. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';

console.info('registerMissionListener');
let listenerId = missionManager.registerMissionListener({
  onMissionCreated: (mission) => {
    console.info('--------onMissionCreated-------');
  },
  onMissionDestroyed: (mission) => {
    console.info('--------onMissionDestroyed-------');
  },
  onMissionSnapshotChanged: (mission) => {
    console.info('--------onMissionSnapshotChanged-------');
  },
  onMissionMovedToFront: (mission) => {
    console.info('--------onMissionMovedToFront-------');
  },
  onMissionIconUpdated: (mission, icon) => {
    console.info('--------onMissionIconUpdated-------');
  },
  onMissionClosed: (mission) => {
    console.info('--------onMissionClosed-------');
  },
  onMissionLabelUpdated: (mission) => {
    console.info('--------onMissionLabelUpdated-------');
  }
});

missionManager.unregisterMissionListener(listenerId, (error) => {
  console.error(`unregisterMissionListener fail, error: ${JSON.stringify(error)}`);
});

```


<a id="unregistermissionlistener-1"></a>
## unregisterMissionListener

```TypeScript
function unregisterMissionListener(listenerId: number): Promise<void>
```

Unregisters a mission status listener. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function unregisterMissionListener(listenerId: number): Promise<void>--><!--Device-missionManager-function unregisterMissionListener(listenerId: number): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listenerId | number | Yes | Index of the mission status listener to unregister. It is returned by **registerMissionListener()**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import missionManager from '@ohos.application.missionManager';
import { BusinessError } from '@ohos.base';

console.info('registerMissionListener');
let listenerId = missionManager.registerMissionListener({
  onMissionCreated: (mission) => {
    console.info('--------onMissionCreated-------');
  },
  onMissionDestroyed: (mission) => {
    console.info('--------onMissionDestroyed-------');
  },
  onMissionSnapshotChanged: (mission) => {
    console.info('--------onMissionSnapshotChanged-------');
  },
  onMissionMovedToFront: (mission) => {
    console.info('--------onMissionMovedToFront-------');
  },
  onMissionIconUpdated: (mission, icon) => {
    console.info('--------onMissionIconUpdated-------');
  },
  onMissionClosed: (mission) => {
    console.info('--------onMissionClosed-------');
  },
  onMissionLabelUpdated: (mission) => {
    console.info('--------onMissionLabelUpdated-------');
  }
});

missionManager.unregisterMissionListener(listenerId)
  .then(() => {
    console.info(`UnregisterMissionListener success.`)
  })
  .catch((error: BusinessError) => {
    console.error(`UnregisterMissionListener fail, error: ${JSON.stringify(error)}.`);
  });

```

