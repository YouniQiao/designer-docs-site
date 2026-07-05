# off

## off('mission')

```TypeScript
function off(type: 'mission', listenerId: long, callback: AsyncCallback<void>): void
```

解注册任务状态监听器。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mission' | Yes | 取消监听的任务名称。固定值：'mission'，表示系统任务状态监听器。 |
| listenerId | long | Yes | 系统任务状态监器法的index值，和监听器一一对应，由on方法返回。 |
| callback | AsyncCallback&lt;void> | Yes | 执行结果回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300002 | The specified mission listener does not exist. |

**Example**

```TypeScript
import { missionManager, UIAbility, AbilityConstant, common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';
import { image } from '@kit.ImageKit';

let listener: missionManager.MissionListener = {
  onMissionCreated: (mission: number) => {
    console.info('--------onMissionCreated-------');
  },
  onMissionDestroyed: (mission: number) => {
    console.info('--------onMissionDestroyed-------');
  },
  onMissionSnapshotChanged: (mission: number) => {
    console.info('--------onMissionSnapshotChanged-------');
  },
  onMissionMovedToFront: (mission: number) => {
    console.info('--------onMissionMovedToFront-------');
  },
  onMissionIconUpdated: (mission: number, icon: image.PixelMap) => {
    console.info('--------onMissionIconUpdated-------');
  },
  onMissionClosed: (mission: number) => {
    console.info('--------onMissionClosed-------');
  },
  onMissionLabelUpdated: (mission: number) => {
    console.info('--------onMissionLabelUpdated-------');
  }
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
        missionManager.off('mission', listenerId, (error: BusinessError) => {
          if (error) {
            console.error(`MissionManager.off failed, error code: ${error.code}, error msg: ${error.message}`);
            return;
          }
          console.info(`MissionManager.off success.`);
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

    windowStage.loadContent('pages/index', (err: BusinessError, data) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause: ${JSON.stringify(err)}`);
        return;
      }
      console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}`);
    });
  }
}

```

## off('mission')

```TypeScript
function off(type: 'mission', listenerId: long): Promise<void>
```

解注册任务状态监听。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_MISSIONS

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mission' | Yes | 取消监听的任务名称。固定值：'mission'，表示系统任务状态监听器。 |
| listenerId | long | Yes | 系统任务状态监听器的index值，和监听器一一对应，由on方法返回。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300002 | The specified mission listener does not exist. |

**Example**

```TypeScript
import { missionManager, UIAbility, AbilityConstant, common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';
import { image } from '@kit.ImageKit';

let listener: missionManager.MissionListener = {
  onMissionCreated: (mission: number) => {
    console.info('--------onMissionCreated-------');
  },
  onMissionDestroyed: (mission: number) => {
    console.info('--------onMissionDestroyed-------');
  },
  onMissionSnapshotChanged: (mission: number) => {
    console.info('--------onMissionSnapshotChanged-------');
  },
  onMissionMovedToFront: (mission: number) => {
    console.info('--------onMissionMovedToFront-------');
  },
  onMissionIconUpdated: (mission: number, icon: image.PixelMap) => {
    console.info('--------onMissionIconUpdated-------');
  },
  onMissionClosed: (mission: number) => {
    console.info('--------onMissionClosed-------');
  },
  onMissionLabelUpdated: (mission: number) => {
    console.info('--------onMissionLabelUpdated-------');
  }
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
          console.error(`MissionManager.off failed, error code: ${error.code}, error msg: ${error.message}.`);
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

    windowStage.loadContent('pages/index', (err: BusinessError, data) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause: ${JSON.stringify(err)}`);
        return;
      }
      console.info(`Succeeded in loading the content. Data: ${JSON.stringify(data)}`);
    });
  }
}

```

