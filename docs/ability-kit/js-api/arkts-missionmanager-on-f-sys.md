# on

## on('mission')

```TypeScript
function on(type: 'mission', listener: MissionListener): long
```

注册系统任务状态监听器。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mission' | Yes | 监听的任务名称。固定值：'mission'，表示系统任务状态监听器。 |
| listener | MissionListener | Yes | 系统任务监听器。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 监听器的index值，由系统创建，在注册系统任务状态监听时分配，和监听器一一对应?。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

