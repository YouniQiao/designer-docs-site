# unregisterMissionListener

## unregisterMissionListener

```TypeScript
function unregisterMissionListener(listenerId: number, callback: AsyncCallback<void>): void
```

解注册任务状态监听器。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#off

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listenerId | number | Yes | 系统任务状态监听器的index值，和监听器一一对应，由registerMissionListener方法返回。 |
| callback | AsyncCallback&lt;void> | Yes | 执行结果回调函数。 |

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

## unregisterMissionListener

```TypeScript
function unregisterMissionListener(listenerId: number): Promise<void>
```

解注册任务状态监听器。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#off

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listenerId | number | Yes | 系统任务状态监听器的index值，和监听器一一对应，由registerMissionListener方法返回。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

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

