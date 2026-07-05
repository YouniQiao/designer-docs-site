# registerMissionListener

## registerMissionListener

```TypeScript
function registerMissionListener(listener: MissionListener): number
```

注册系统任务状态监听器。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.missionManager/missionManager#on

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | MissionListener | Yes | 系统任务监听器。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 监听器的index值，由系统创建，在注册系统任务状态监听器时分配，和监听器一一对应 。 |

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

```

