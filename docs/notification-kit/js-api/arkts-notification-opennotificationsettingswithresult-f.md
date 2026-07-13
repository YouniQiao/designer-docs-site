# openNotificationSettingsWithResult

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## openNotificationSettingsWithResult

```TypeScript
function openNotificationSettingsWithResult(context: UIAbilityContext): Promise<NotificationSetting>
```

Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to
set the notification enabling and notification mode. This API uses a promise to return the result. When the semi-
modal window is closed, the user-defined status is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.NotificationSettings

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | Ability context bound to the notification settings page. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationSetting&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |
| [1600018](../errorcode-notification.md#1600018-notification-settings-page-already-displayed) | The notification settings window is already displayed. |

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

