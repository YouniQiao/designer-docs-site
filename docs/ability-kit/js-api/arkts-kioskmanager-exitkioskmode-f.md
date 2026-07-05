# exitKioskMode

## exitKioskMode

```TypeScript
function exitKioskMode(context: UIAbilityContext): Promise<void>
```

退出Kiosk模式。使用Promise异步回调。 该接口仅对已进入Kiosk模式的应用生效。 该接口仅在Phone、PC/2in1和Tablet设备中可正常调用，在其他设备中返回801错误码。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | 需要退出kiosk模式的UIAbility的上下文。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 16000050 | Failed to connect to the system service. |
| 16000110 | The current application is not in Kiosk app list and cannot enter Kiosk mode. |
| 16000112 | The current application is not in Kiosk mode and cannot exit Kiosk mode. |

**Example**

```TypeScript
import { common, kioskManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  private uiAbilityContext: common.UIAbilityContext | undefined =
    this.getUIContext().getHostContext() as common.UIAbilityContext;

  build() {
    Column() {
      Button('exitKioskMode').margin({ top: 10 })
        .onClick(() => {
          kioskManager.exitKioskMode(this.uiAbilityContext)
            .then(() => {
              hilog.info(0x0000, 'testTag', '%{public}s', 'exitKioskMode success');
            })
            .catch((error: BusinessError) => {
              hilog.error(0x0000, 'testTag', '%{public}s', `exitKioskMode failed:${JSON.stringify(error)}`);
            });
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

