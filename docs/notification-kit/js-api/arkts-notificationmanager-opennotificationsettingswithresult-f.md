# openNotificationSettingsWithResult

## openNotificationSettingsWithResult

```TypeScript
function openNotificationSettingsWithResult(context: UIAbilityContext): Promise<NotificationSetting>
```

拉起应用的通知设置界面，该页面以半模态形式呈现，可用于设置通知开关、通知提醒方式等。使用Promise异步回调, 当半模态窗口关闭时返回用户设置的状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.NotificationSettings

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | 通知设置页面绑定Ability的上下文。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationSetting> | Promise对象，返回此应用程序的通知设置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600018 | The notification settings window is already displayed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', `Failed to load the content. Cause: ${JSON.stringify(err) ?? ''}`);
        return;
      }
      hilog.info(0x0000, 'testTag', `Succeeded in loading the content. Data: ${JSON.stringify(data) ?? ''}`);
      notificationManager.openNotificationSettingsWithResult(this.context).then((data) => {
        hilog.info(0x0000, 'testTag', `[ANS] openNotificationSettingsWithResult success, data: ${JSON.stringify(data)}`);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', `[ANS] openNotificationSettingsWithResult failed, code is ${err.code}, message is ${err.message}`);
      });
    });
  }
}

```

