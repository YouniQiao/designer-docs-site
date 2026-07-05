# UIAbility

表示包含UI界面的应用组件，提供组件创建、销毁、前后台切换等生命周期回调，同时也具备后台通信能力。

**Inheritance:** UIAbilityextends: Ability.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { Callee,Caller,OnReleaseCallback,OnRemoteStateChangeCallback,CalleeCallback } from '@kit.AbilityKit';
```

## onBackground

```TypeScript
onBackground(): void
```

当应用从前台转入到后台时，系统触发该回调。开发者可在该回调中实现UI不可见时的资源释放操作，如停止定位功能等。 同步接口，不支持异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  onBackground() {
    // The UIAbility transitions to the background.
    hilog.info(0x0000, 'testTag', `onBackground`);
  }
}

```

## onBackPressed

```TypeScript
onBackPressed(): boolean
```

UIAbility生命周期回调，当UIAbility侧滑返回时触发，根据返回值决定是否销毁UIAbility。 - 当targetSdkVersion<12时，默认返回值为false，会销毁UIAbility。 - 当targetSdkVersion>=12时，默认返回值为true，会将UIAbility移动到后台不销毁。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value true means that the UIAbility instance will be moved to the background  and will not be destroyed, and false means that the UIAbility instance will be destroyed. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onBackPressed() {
    return true;
  }
}

```

## onCollaborate

```TypeScript
onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult
```

UIAbility生命周期回调，在多设备协同场景下，协同方应用在被拉起的过程中返回是否接受协同。 > **说明：** > > - 该生命周期回调不支持[specified启动模式](docroot://application-models/uiability-launch-type.md#specified启动模式)。 > > - 通过 > [startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>) > 等方法拉起协同方应用时，需要在Want对象中设置协同标记[Flags]./@ohos.app.ability.wantConstant:wantConstant.Flags为 > FLAG_ABILITY_ON_COLLABORATE。 > > - [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时，该回调在 > [onForeground](arkts-uiability-c.md#onForeground)前或[onBackground](arkts-uiability-c.md#onBackground)后调用； > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)时，该回调在 > [onNewWant](arkts-uiability-c.md#onNewWant)前调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, Object> | Yes | want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该  key值可以获取到调用方传输的数据并进行相应的处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.CollaborateResult | 协同方是否接受协同的结果。 |

**Example**

```TypeScript
import { UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class MyAbility extends UIAbility {
  onCollaborate(wantParam: Record<string, Object>) {
    return AbilityConstant.CollaborateResult.ACCEPT;
  }
}

```

## onCollaborate

```TypeScript
onCollaborate(wantParam: Record<string, RecordData>): AbilityConstant.CollaborateResult
```

UIAbility生命周期回调，在多设备协同场景下，协同方应用在被拉起的过程中返回是否接受协同。 > **说明：** > > - 该生命周期回调不支持[specified启动模式](docroot://application-models/uiability-launch-type.md#specified启动模式)。 > > - 通过 > [startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>) > 等方法拉起协同方应用时，需要在Want对象中设置协同标记[Flags]./@ohos.app.ability.wantConstant:wantConstant.Flags为 > FLAG_ABILITY_ON_COLLABORATE。 > > - [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时，该回调在 > [onForeground](arkts-uiability-c.md#onForeground)前或[onBackground](arkts-uiability-c.md#onBackground)后调用； > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)时，该回调在 > [onNewWant](arkts-uiability-c.md#onNewWant)前调用。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, RecordData> | Yes | want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该  key值可以获取到调用方传输的数据并进行相应的处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.CollaborateResult | 协同方是否接受协同的结果。 |

## onContinue

```TypeScript
onContinue(wantParam: Record<string, Object>):
    AbilityConstant.OnContinueResult | Promise<AbilityConstant.OnContinueResult>
```

当UIAbility准备跨端迁移时触发，可以保存待迁移的业务数据。 > **说明：** > > 对于API version 18（不含18） 之前版本仅支持同步调用，从API version 18及后续版本可支持异步调用。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, Object> | Yes | 开发者通过该参数保存待迁移的数据。 [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.OnContinueResult | Return the result of onContinue. [since 9 - 11]  @returns { AbilityConstant.OnContinueResult \| Promise } 表示是否同意迁移的结果：  - AGREE：表示同意。  - REJECT：表示拒绝，如应用在onContinue中异常可以返回REJECT。  - MISMATCH：表示版本不匹配，接续源端应用可以在onContinue中获取到迁移对端应用的版本号，进行协商后，如果版本不匹配导致无法迁移，可以返回该结果。  该回调与onWindowStageRestore成对出现。在接续场景下，源端的UIAbility触发onContinue保存自定义数据，在目标端UIAbility触发onWindowStageRestore恢复自定义数据  。 [since 12] |

**Example**

```TypeScript
import { UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  onContinue(wantParams: Record<string, Object>) {
    console.info('onContinue');
    wantParams['myData'] = 'my1234567';
    return AbilityConstant.OnContinueResult.AGREE;
  }
}


import { UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  async setWant(wantParams: Record<string, Object>) {
    console.info('setWant start');
    for (let time = 0; time < 1000; ++time) {
      wantParams[time] = time;
    }
    console.info('setWant end');
  }

  async onContinue(wantParams: Record<string, Object>) {
    console.info('onContinue');
    return this.setWant(wantParams).then(() => {
      return AbilityConstant.OnContinueResult.AGREE;
    });
  }
}

```

## onCreate

```TypeScript
onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void
```

当UIAbility实例创建完成时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源等）。该回调仅会在UIAbility [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时触发。 同步接口，不支持异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 调用方拉起该UIAbility时传递的数据。 |
| launchParam | AbilityConstant.LaunchParam | Yes | 应用启动参数，包含应用启动原因、应用上次退出原因等。 |

**Example**

```TypeScript
import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    // Execute an asynchronous task.
    hilog.info(0x0000, 'testTag',
      `onCreate, want: ${want.abilityName}, the launchReason is ${launchParam.launchReason}, the lastExitReason is ${launchParam.lastExitReason}`);
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void | Promise<void>
```

当UIAbility被销毁（例如使用 [terminateSelf]./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>) 接口停止UIAbility）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。 使用同步回调或Promise异步回调。 > **说明：** > > - 在执行完onDestroy生命周期回调后，应用可能会退出，从而导致其中的异步函数（比如异步写入数据库）未能正确执行。在此情况下，推荐使用Promise异步回调。 > > - 该回调仅在UIAbility正常退出时触发，当UIAbility异常退出（例如低内存终止进程）时，该回调将不被触发。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  onDestroy() {
    hilog.info(0x0000, 'testTag', `onDestroy`);
    // Call the synchronous function.
  }
}


import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  async onDestroy() {
    hilog.info(0x0000, 'testTag', `onDestroy`);
    // Call the asynchronous function.
  }
}

```

## onDestroy

```TypeScript
onDestroy(): Promise<void> | undefined
```

当UIAbility被销毁（例如使用 [terminateSelf]./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>) 接口停止UIAbility）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。 使用同步回调或Promise异步回调。 > **说明：** > > - 在执行完onDestroy生命周期回调后，应用可能会退出，从而导致其中的异步函数（比如异步写入数据库）未能正确执行。在此情况下，推荐使用Promise异步回调。 > > - 该回调仅在UIAbility正常退出时触发，当UIAbility异常退出（例如低内存终止进程）时，该回调将不被触发。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果或无返回结果的Promise对象。 |

## onDidBackground

```TypeScript
onDidBackground(): void
```

UIAbility生命周期回调，当应用从前台转到后台后触发，在[onBackground](arkts-uiability-c.md#onBackground)之后被调用。可在该回调中实现应用进入后台之后的资源释放操作，如进入后台后停止音频 播放等。 同步接口，不支持异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { audio } from '@kit.AudioKit';

export default class MyUIAbility extends UIAbility {
  static audioRenderer: audio.AudioRenderer;

  // ...
  onForeground(): void {
    let audioStreamInfo: audio.AudioStreamInfo = {
      samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // Sampling rate.
      channels: audio.AudioChannel.CHANNEL_2, // Channel.
      sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // Sampling format.
      encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // Encoding format.
    };

    let audioRendererInfo: audio.AudioRendererInfo = {
      usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // Audio stream usage type: music. Set this parameter based on the service scenario.
      rendererFlags: 0 // AudioRenderer flag.
    };

    let audioRendererOptions: audio.AudioRendererOptions = {
      streamInfo: audioStreamInfo,
      rendererInfo: audioRendererInfo
    };

    // Request an AudioRenderer in the foreground to play Pulse Code Modulation (PCM) audio data.
    audio.createAudioRenderer(audioRendererOptions).then((data) => {
      MyUIAbility.audioRenderer = data;
      hilog.info(0x0000, 'testTag', `AudioRenderer Created : Success : Stream Type: SUCCESS.`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `AudioRenderer Created : F : ${JSON.stringify(err)}.`);
    });
  }

  onDidBackground() {
    // Release the AudioRenderer after transitioning to the background.
    MyUIAbility.audioRenderer.release((err: BusinessError) => {
      if (err) {
        hilog.error(0x0000, 'testTag', `AudioRenderer release failed, error: ${JSON.stringify(err)}.`);
      } else {
        hilog.info(0x0000, 'testTag', `AudioRenderer released.`);
      }
    });
  }
}

```

## onDidForeground

```TypeScript
onDidForeground(): void
```

UIAbility生命周期回调，应用转到前台后触发，在[onForeground](arkts-uiability-c.md#onForeground)后被调用，可在该回调中实现应用切换到前台后的时间打点。如果与 [onWillForeground](arkts-uiability-c.md#onWillForeground)配合使用，还可以统计出从应用开始进入前台到切换至前台状态的耗时。 同步接口，不支持异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onDump

```TypeScript
onDump(params: Array<string>): Array<string>
```

应用调测场景下，通过命令行dump UIAbility数据时，系统会触发该回调。开发者可以在该回调中返回UIAbility要转储的非敏感信息。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | Array&lt;string> | Yes | 表示dump命令参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回的dump信息。 |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  onDump(params: Array<string>) {
    console.info(`dump, params: ${JSON.stringify(params)}`);
    return ['params'];
  }
}

```

## onForeground

```TypeScript
onForeground(): void
```

当应用首次启动到前台或者从后台转入到前台时，系统触发该回调。开发者可在该回调中实现系统所需资源的申请，如应用转到前台时申请定位服务等。 同步接口，不支持异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  onForeground() {
    hilog.info(0x0000, 'testTag', `onForeground`);
  }
}

```

## onNewWant

```TypeScript
onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void
```

当已经启动的UIAbility实例再次被拉起时，系统会触发该回调。若在特定场景下（参见 [Scenarios]./@ohos.app.ability.contextConstant:contextConstant.Scenarios），不需要触发该生命周期回调，可以使用 [setOnNewWantSkipScenarios]./application/UIAbilityContext:UIAbilityContext.setOnNewWantSkipScenarios接口设置。 同步接口，不支持异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 调用方再次拉起该UIAbility时传递的数据。 |
| launchParam | AbilityConstant.LaunchParam | Yes | UIAbility启动参数，包含启动原因等。 |

**Example**

```TypeScript
import { UIAbility, AbilityConstant, Want } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam) {
    console.info(`onNewWant, want: ${want.abilityName}`);
    console.info(`onNewWant, launchParam: ${JSON.stringify(launchParam)}`);
  }
}

```

## onPrepareToTerminate

```TypeScript
onPrepareToTerminate(): boolean
```

在UIAbility即将关闭前（例如用户通过点击应用窗口右上角的关闭按钮、或者通过Dock栏/托盘右键退出应用时），系统会触发该回调，用于在UIAbility正式关闭前执行其他操作。开发者可以在该回调中返回true阻拦此次关闭，然 后在合适时机主动调用 [terminateSelf]./application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>) 接口关闭。例如，询问用户是否确认关闭UIAbility，再主动销毁UIAbility。 该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。 > **说明：** > > - 从API version 15开始，当[UIAbility.onPrepareToTerminateAsync](arkts-uiability-c.md#onPrepareToTerminateAsync)实现时，本回调函数将不执 > 行。当 > [AbilityStage.onPrepareTerminationAsync]./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTerminationAsync > 或[AbilityStage.onPrepareTermination]./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTermination实现时，在 > dock栏或系统托盘处右键点击关闭，本回调函数将不执行。 > > - 如果应用本身或者所使用的三方框架注册了 > [window.WindowStage.on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14) > 监听，本回调函数将不执行。

**Since:** 10

**Required permissions:** 

 ohos.permission.PREPARE_APP_TERMINATE

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether to terminate the UIAbility.  The value true means that the termination process is canceled.  The value false means to continue terminating the UIAbility. |

**Example**

```TypeScript
import { UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onPrepareToTerminate() {
    // Define a pre-termination operation,
    // for example, starting another UIAbility and performing asynchronous termination based on the startup result.
    let want: Want = {
      bundleName: "com.example.myapplication",
      moduleName: "entry",
      abilityName: "SecondAbility"
    }
    this.context.startAbilityForResult(want)
      .then((result) => {
        // Obtain the startup result and terminate the current UIAbility when resultCode in the return value is 0.
        console.info('startAbilityForResult success, resultCode is ' + result.resultCode);
        if (result.resultCode === 0) {
          this.context.terminateSelf();
        }
      }).catch((err: BusinessError) => {
      // Exception handling.
      console.error('startAbilityForResult failed, err:' + JSON.stringify(err));
      this.context.terminateSelf();
    })

    return true; // The pre-termination operation is defined. The value true means that the UIAbility termination process is canceled.
  }
}

```

## onPrepareToTerminateAsync

```TypeScript
onPrepareToTerminateAsync(): Promise<boolean>
```

在UIAbility关闭前（例如用户通过点击应用窗口右上角的关闭按钮、或者通过Dock栏/托盘右键退出应用时），系统会触发该回调，用于在UIAbility正式关闭前执行其他操作。 开发者可以在该回调中返回true阻拦此次关闭，然后在合适时机主动调用 [terminateSelf]./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>) 接口关闭。例如，询问用户是否确认关闭UIAbility，再主动销毁UIAbility。 从API version 15开始，该接口仅在2in1设备中可正常执行回调，在其他设备上不执行回调。 从API version 19开始，该接口在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。 > **说明：** > > - 当 > [AbilityStage.onPrepareTerminationAsync]./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTerminationAsync > 或[AbilityStage.onPrepareTermination]./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTermination实现时，在 > dock栏或系统托盘处右键点击关闭，本回调函数将不执行。 > > - 如果应用本身或者所使用的三方框架注册了 > [window.WindowStage.on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14) > 监听，本回调函数将不执行。 > > - 若异步回调内发生crash，按超时处理，执行等待超过10秒未响应，UIAbility将被强制关闭。

**Since:** 15

**Required permissions:** 

 ohos.permission.PREPARE_APP_TERMINATE

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result.  The value true means that the termination process is canceled.  The value false means to continue terminating the UIAbility. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  async onPrepareToTerminateAsync(): Promise<boolean> {
    await new Promise<boolean>((res, rej) => {
      setTimeout (res, 2000); // Execute the operation 2 seconds later.
    });
    return true; // The pre-termination operation is defined. The value true means that the UIAbility termination process is canceled.
  }
}

```

## onSaveState

```TypeScript
onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>): AbilityConstant.OnSaveResult
```

该接口需要与[appRecovery]./@ohos.app.ability.appRecovery:appRecovery配合使用。如果应用已使能故障恢复功能（即 [enableAppRecovery]./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery接口中的saveOccasion参数设置为 SAVE_WHEN_ERROR），当应用出现故障时，系统将触发该回调来保存UIAbility的数据。 > **说明：** > > 从API version 20开始，当 > [onSaveStateAsync](arkts-uiability-c.md#onSaveStateAsync) > 实现时，本回调函数将不执行。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | AbilityConstant.StateType | Yes | 触发应用保存状态的原因，当前仅支持APP_RECOVERY（即应用故障恢复场景）。 |
| wantParam | Record&lt;string, Object> | Yes | 用户自定义的应用状态数据，应用再启动时被保存在[onCreate](arkts-uiability-c.md#onCreate)的  Want.parameters中。 [since 11] |

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.OnSaveResult | 返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。 |

**Example**

```TypeScript
import { UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>) {
    console.info('onSaveState');
    wantParam['myData'] = 'my1234567';
    return AbilityConstant.OnSaveResult.RECOVERY_AGREE;
  }
}

```

## onSaveState

```TypeScript
onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, RecordData>): AbilityConstant.OnSaveResult
```

该接口需要与[appRecovery]./@ohos.app.ability.appRecovery:appRecovery配合使用。如果应用已使能故障恢复功能（即 [enableAppRecovery]./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery接口中的saveOccasion参数设置为 SAVE_WHEN_ERROR），当应用出现故障时，系统将触发该回调来保存UIAbility的数据。 > **说明：** > > 从API version 20开始，当 > [onSaveStateAsync](arkts-uiability-c.md#onSaveStateAsync) > 实现时，本回调函数将不执行。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | AbilityConstant.StateType | Yes | 触发应用保存状态的原因，当前仅支持APP_RECOVERY（即应用故障恢复场景）。 |
| wantParam | Record&lt;string, RecordData> | Yes | 用户自定义的应用状态数据，应用再启动时被保存在onCreate中的Want.parameters中。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbilityConstant.OnSaveResult | 返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。 |

## onSaveStateAsync

```TypeScript
onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, Object>): Promise<AbilityConstant.OnSaveResult>
```

该接口需要与[appRecovery]./@ohos.app.ability.appRecovery:appRecovery配合使用。如果应用已使能故障恢复功能（即 [enableAppRecovery]./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery接口中的saveOccasion参数设置为 SAVE_WHEN_ERROR），当应用出现故障时，将触发该回调来保存UIAbility的数据。使用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stateType | AbilityConstant.StateType | Yes | 触发应用保存状态的原因，当前仅支持`APP_RECOVERY`（即应用故障恢复场景）。 |
| wantParam | Record&lt;string, Object> | Yes | 用户自定义的应用状态数据，应用再启动时被保存在[onCreate](arkts-uiability-c.md#onCreate)的  Want.parameters中。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityConstant.OnSaveResult> | Promise对象。返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。 |

**Example**

```TypeScript
import { UIAbility, AbilityConstant } from '@kit.AbilityKit';

class MyUIAbility extends UIAbility {
  async onSaveStateAsync(reason: AbilityConstant.StateType,
    wantParam: Record<string, Object>): Promise<AbilityConstant.OnSaveResult> {
    await new Promise<string>((res, rej) => {
      setTimeout(res, 1000); // Execute the operation after 1 second.
    });
    return AbilityConstant.OnSaveResult.RECOVERY_AGREE;
  }
}

```

## onSaveStateAsync

```TypeScript
onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, RecordData>): Promise<AbilityConstant.OnSaveResult>
```

该接口需要与[appRecovery]./@ohos.app.ability.appRecovery:appRecovery配合使用。如果应用已使能故障恢复功能（即 [enableAppRecovery]./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery接口中的saveOccasion参数设置为 SAVE_WHEN_ERROR），当应用出现故障时，将触发该回调来保存UIAbility的数据。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stateType | AbilityConstant.StateType | Yes | 触发应用保存状态的原因，当前仅支持`APP_RECOVERY`（即应用故障恢复场景）。 |
| wantParam | Record&lt;string, RecordData> | Yes | 用户自定义的应用状态数据，应用再启动时被保存在[onCreate](arkts-uiability-c.md#onCreate)的  Want.parameters中。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityConstant.OnSaveResult> | Promise对象。返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。 |

## onShare

```TypeScript
onShare(wantParam: Record<string, Object>): void
```

当跨端分享原子化服务时，系统触发该回调。开发者可以在该回调中设置待分享原子化服务的标题、摘要和URL等数据。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, Object> | Yes | 待分享的数据。 [since 11] |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';

export default class MyUIAbility extends UIAbility {
  onShare(wantParams: Record<string, Object>) {
    console.info('onShare');
    wantParams['ohos.extra.param.key.shareUrl'] = 'example.com';
  }
}

```

## onShare

```TypeScript
onShare(wantParam: Record<string, RecordData>): void
```

当跨端分享原子化服务时，系统触发该回调。开发者可以在该回调中设置待分享原子化服务的标题、摘要和URL等数据。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, RecordData> | Yes | 待分享的数据。 |

## onWillBackground

```TypeScript
onWillBackground(): void
```

UIAbility生命周期回调，当应用从前台转到后台前触发，在[onBackground](arkts-uiability-c.md#onBackground)前被调用。可在该回调中实现数据打点，例如，打点应用运行过程中发生的故障信息、统计 信息、安全信息、用户行为信息等。 同步接口，不支持异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class MyUIAbility extends UIAbility {
  onWillBackground(): void {
    let eventParams: Record<string, number | string> = {
      "int_data": 100,
      "str_data": "strValue",
    };
    // Record the application fault information.
    hiAppEvent.write({
      domain: "test_domain",
      name: "test_event",
      eventType: hiAppEvent.EventType.FAULT,
      params: eventParams,
    }, (err: BusinessError) => {
      if (err) {
        hilog.error(0x0000, 'testTag', `hiAppEvent code: ${err.code}, message: ${err.message}`);
        return;
      }
      hilog.info(0x0000, 'testTag', `hiAppEvent success to write event`);
    });
  }
}

```

## onWillForeground

```TypeScript
onWillForeground(): void
```

UIAbility生命周期回调，应用转到前台前触发，在[onForeground](arkts-uiability-c.md#onForeground)前被调用。可在该回调中实现采集应用开始进入前台的时间。如果与 [onDidForeground](arkts-uiability-c.md#onDidForeground)配合使用，还可以统计出从应用开始进入前台到切换至前台状态的耗时。 同步接口，不支持异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWillForeground(): void {
    // Start to log the event that the application starts moving to the foreground.
    let eventParams: Record<string, number> = { 'xxxx': 100 };
    let eventInfo: hiAppEvent.AppEventInfo = {
      // Define the event domain.
      domain: "lifecycle",
      // Define the event name.
      name: "onwillforeground",
      // Define the event type.
      eventType: hiAppEvent.EventType.BEHAVIOR,
      // Define the event parameters.
      params: eventParams,
    };
    hiAppEvent.write(eventInfo).then(() => {
      hilog.info(0x0000, 'testTag', `HiAppEvent success to write event`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `HiAppEvent err.code: ${err.code}, err.message: ${err.message}`);
    });
  }

  // ...

  onDidForeground(): void {
    // Start to log the event that the application fully transitions to the foreground.
    let eventParams: Record<string, number> = { 'xxxx': 100 };
    let eventInfo: hiAppEvent.AppEventInfo = {
      // Define the event domain.
      domain: "lifecycle",
      // Define the event name.
      name: "ondidforeground",
      // Define the event type.
      eventType: hiAppEvent.EventType.BEHAVIOR,
      // Define the event parameters.
      params: eventParams,
    };
    hiAppEvent.write(eventInfo).then(() => {
      hilog.info(0x0000, 'testTag', `HiAppEvent success to write event`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `HiAppEvent err.code: ${err.code}, err.message: ${err.message}`);
    });
  }
}

```

## onWindowStageCreate

```TypeScript
onWindowStageCreate(windowStage: window.WindowStage): void
```

当[WindowStage]./@ohos.window实例创建完成后，系统会触发该回调。开发者可以在该回调中通过WindowStage加载页面。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowStage | window.WindowStage | Yes | WindowStage实例对象。 |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class MyUIAbility extends UIAbility {
  // The main window has been created. Set the main page for the UIAbility.
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', `Failed to load the content. Cause: ${JSON.stringify(err)}`);
        return;
      }
      hilog.info(0x0000, 'testTag', `Succeeded in loading the content. Data: ${JSON.stringify(data)}`);
    });
  }
}

```

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy(): void
```

当WindowStage销毁后，系统触发该回调。该回调用于通知开发者WindowStage对象已被销毁，不能再继续使用。 仅当UIAbility正常退出时会触发该回调，异常退出场景（例如低内存终止进程）不会触发该回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyUIAbility extends UIAbility {
  onWindowStageDestroy() {
    // The main window is destroyed. It is time to release UI resources.
    hilog.info(0x0000, 'testTag', `onWindowStageDestroy`);
  }
}

```

## onWindowStageRestore

```TypeScript
onWindowStageRestore(windowStage: window.WindowStage): void
```

当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时回调。 > **说明：** > > 在应用迁移启动时，无论是[冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)还是 > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)，都会在执行完 > [onCreate()](arkts-uiability-c.md#onCreate)/[onNewWant()](arkts-uiability-c.md#onNewWant)后，触发onWindowStageRestore()生命周期函数，不 > 执行onWindowStageCreate()生命周期函数。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowStage | window.WindowStage | Yes | WindowStage实例对象。 |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class MyUIAbility extends UIAbility {
  onWindowStageRestore(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', `onWindowStageRestore`);
  }
}

```

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy(windowStage: window.WindowStage): void
```

当WindowStage即将销毁时，系统触发该回调。开发者可以在该生命周期中取消windowStage事件的监听。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowStage | window.WindowStage | Yes | WindowStage实例对象。 |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class MyUIAbility extends UIAbility {
  onWindowStageWillDestroy(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', `onWindowStageWillDestroy`);
  }
}

```

## launchWant

```TypeScript
launchWant: Want
```

UIAbility[冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时接收到的Want参数，取值为 [onCreate](arkts-uiability-c.md#onCreate)接收到的Want参数。

**Type:** Want

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## lastRequestWant

```TypeScript
lastRequestWant: Want
```

最近一次拉起UIAbility请求的Want参数。 - 首次拉起UIAbility时，取值为[onCreate](arkts-uiability-c.md#onCreate)接收到的Want参数。 - 重复拉起UIAbility时，取值为[onNewWant](arkts-uiability-c.md#onNewWant)最近一次接收到的Want参数。

**Type:** Want

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## callee

```TypeScript
callee: Callee
```

系统为UIAbility创建的后台通信对象，Callee UIAbility（被调用方）可以通过Callee对象接收Caller对象发送的数据。

**Type:** Callee

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## context

```TypeScript
context: UIAbilityContext
```

UIAbility的上下文。

**Type:** UIAbilityContext

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## specifiedId

```TypeScript
specifiedId?: string
```

仅当UIAbility启动模式为[specified](docroot://application-models/uiability-launch-type.md#specified启动模式)时存在，取值为开发者自定义的 UIAbility标识。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

