# openNotificationSettings

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## openNotificationSettings

```TypeScript
function openNotificationSettings(context: UIAbilityContext): Promise<void>
```

Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set the notification enabling and notification mode. This API uses a promise to return the result.

This is suitable for scenarios where users need to manually modify notification settings, such as a secondary request after a user denies authorization, or when the notification reminder method(vibration, ringtone, etc.) needs to be modified. When the requestEnableNotification dialog box is denied by the user, you can call this API to guide the user to the notification settings page to manually enable it.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

<!--Device-notificationManager-function openNotificationSettings(context: UIAbilityContext): Promise<void>--><!--Device-notificationManager-function openNotificationSettings(context: UIAbilityContext): Promise<void>-End-->

**System capability:** SystemCapability.Notification.NotificationSettings

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [UIAbilityContext](../../apis-ability-kit/arkts-apis/arkts-ability-common-uiabilitycontext-t.md) | Yes | Ability context bound to the notification settings page. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
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
      notificationManager.openNotificationSettings(this.context).then(() => {
        hilog.info(0x0000, 'testTag', `[ANS] openNotificationSettings success`);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', `[ANS] openNotificationSettings failed, code is ${err.code}, message is ${err.message}`);
      });
    });
  }
}

```

