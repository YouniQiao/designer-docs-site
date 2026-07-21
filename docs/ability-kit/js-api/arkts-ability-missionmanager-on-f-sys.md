# on (System API)

## Modules to Import

```TypeScript
import { missionManager } from '@kit.AbilityKit';
```

<a id="on"></a>
## on('mission')

```TypeScript
function on(type: 'mission', listener: MissionListener): number
```

Registers a listener to observe the mission status.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function on(type: 'mission', listener: MissionListener): long--><!--Device-missionManager-function on(type: 'mission', listener: MissionListener): long-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mission' | Yes | Name of the target mission. The value is fixed at **'mission'**, indicating the system mission status listener. |
| listener | [MissionListener](arkts-ability-missionmanager-missionlistener-t-sys.md) | Yes | Mission status listener to register. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the mission status listener, which is created by the system and allocated when the listener is registered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { missionManager, UIAbility, AbilityConstant, common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';
import { image } from '@kit.ImageKit';

let listener: missionManager.MissionListener = {
  onMissionCreated: (mission: number) => {console.info('--------onMissionCreated-------');},
  onMissionDestroyed: (mission: number) => {console.info('--------onMissionDestroyed-------');},
  onMissionSnapshotChanged: (mission: number) => {console.info('--------onMissionSnapshotChanged-------');},
  onMissionMovedToFront: (mission: number) => {console.info('--------onMissionMovedToFront-------');},
  onMissionIconUpdated: (mission: number, icon: image.PixelMap) => {console.info('--------onMissionIconUpdated-------');},
  onMissionClosed: (mission: number) => {console.info('--------onMissionClosed-------');},
  onMissionLabelUpdated: (mission: number) => {console.info('--------onMissionLabelUpdated-------');}
};

let listenerId = -1;
let abilityWant: Want;
let context: common.UIAbilityContext;

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    console.info('[Demo] EntryAbility onCreate');
    abilityWant = want;
    context = this.context;
  }

  onDestroy() {
    try {
      if (listenerId !== -1) {
        missionManager.off('mission', listenerId).catch((error: BusinessError) => {
          console.info(JSON.stringify(error));
        });
      }
    } catch (paramError) {
      let code = (paramError as BusinessError).code;
      let message = (paramError as BusinessError).message;
      console.error(`error: ${code}, ${message} `);
    }
    console.info('[Demo] EntryAbility onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // The main window is created. Set a main page for this ability.
    console.info('[Demo] EntryAbility onWindowStageCreate');
    try {
      listenerId = missionManager.on('mission', listener);
    } catch (paramError) {
      let code = (paramError as BusinessError).code;
      let message = (paramError as BusinessError).message;
      console.error(`error: ${code}, ${message} `);
    }

    windowStage.loadContent('pages/index', (err, data) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause: ${JSON.stringify(err)}`);
        return;
      }
      console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}`);
    });
  }
}

```


<a id="on-1"></a>
## on('missionEvent')

```TypeScript
function on(type: 'missionEvent', listener: MissionListener): number
```

Registers a listener to observe the mission status.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** on(type:

**Required permissions:** ohos.permission.MANAGE_MISSIONS

<!--Device-missionManager-function on(type: 'missionEvent', listener: MissionListener): long--><!--Device-missionManager-function on(type: 'missionEvent', listener: MissionListener): long-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'missionEvent' | Yes | Name of the target mission. The value is fixed at **'missionEvent'**,indicating the system mission status listener. |
| listener | [MissionListener](arkts-ability-missionmanager-missionlistener-t-sys.md) | Yes | Mission status listener to register. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the mission status listener, which is created by the system and allocated when the listener is registered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

