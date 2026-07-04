# registerMissionListener (System API)

## registerMissionListener

```TypeScript
function registerMissionListener(listener: MissionListener): number
```

Registers a listener to observe the mission status.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on

**Required permissions:** ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | MissionListener | Yes | Mission status listener to register. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the mission status listener, which is created by the system and allocated when the listeneris registered. |

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

