# requestEnableNotification

## requestEnableNotification

```TypeScript
function requestEnableNotification(callback: AsyncCallback<void>): void
```

当前应用请求通知使能。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的 > [requestEnableNotification]notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>) > 替代。

**Since:** 9

**Deprecated since:** 12

**Substitute:** requestEnableNotification

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当应用请求通知使能成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. [since 11] |
| 1600013 | A notification dialog box is already displayed. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let requestEnableNotificationCallback = (err: BusinessError): void => {
  if (err) {
    console.error(`requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`requestEnableNotification success`);
  }
};
notificationManager.requestEnableNotification(requestEnableNotificationCallback);

```

## requestEnableNotification

```TypeScript
function requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>): void
```

应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用callback异步回调。 > **说明：** > > - 仅当应用界面加载完成后（即调用 > [loadContent](../../apis-ability-kit/arkts-apis/arkts-uiextensioncontentsession-c.md#loadContent)成功），方可使用该接口 > 。 > > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用 > [openNotificationSettingsWithResult]notificationManager.openNotificationSettingsWithResult二次申请授权，拉起通知管理弹窗 > 。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | 通知弹窗绑定Ability的上下文。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当应用通过弹窗获取用户授权成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. [since 11] |
| 1600013 | A notification dialog box is already displayed. [since 11] |

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
      let requestEnableNotificationCallback = (err: BusinessError): void => {
        if (err) {
          hilog.error(0x0000, 'testTag', `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
        } else {
          hilog.info(0x0000, 'testTag', `[ANS] requestEnableNotification success`);
        }
      };
      notificationManager.requestEnableNotification(this.context, requestEnableNotificationCallback);
    });
  }
}

```

## requestEnableNotification

```TypeScript
function requestEnableNotification(): Promise<void>
```

当前应用请求通知使能。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的 > [requestEnableNotification]notificationManager.requestEnableNotification(context: UIAbilityContext)替代。

**Since:** 9

**Deprecated since:** 12

**Substitute:** requestEnableNotification

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. [since 11] |
| 1600013 | A notification dialog box is already displayed. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.requestEnableNotification().then(() => {
  console.info(`requestEnableNotification success`);
}).catch((err: BusinessError) => {
  console.error(`requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
});

```

## requestEnableNotification

```TypeScript
function requestEnableNotification(context: UIAbilityContext): Promise<void>
```

应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用Promise异步回调。 > **说明：** > > - 仅当应用界面加载完成后（即调用 > [loadContent](../../apis-ability-kit/arkts-apis/arkts-uiextensioncontentsession-c.md#loadContent)成功），方可使用该接口 > 。 > > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用 > [openNotificationSettingsWithResult]notificationManager.openNotificationSettingsWithResult二次申请授权，拉起通知管理弹窗 > 。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | 通知弹窗绑定的Ability上下文。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. [since 11] |
| 1600013 | A notification dialog box is already displayed. [since 11] |

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
      notificationManager.requestEnableNotification(this.context).then(() => {
        hilog.info(0x0000, 'testTag', `[ANS] requestEnableNotification success`);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
      });
    });
  }
}

```

