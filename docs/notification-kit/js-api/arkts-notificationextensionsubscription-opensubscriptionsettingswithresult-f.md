# openSubscriptionSettingsWithResult

## openSubscriptionSettingsWithResult

```TypeScript
function openSubscriptionSettingsWithResult(context: UIAbilityContext): Promise<UserGrantSetting>
```

打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。 使用Promise异步回调，当半模态窗口关闭时返回用户设置的授权的结果。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIAbilityContext | Yes | 通知设置页面绑定Ability的上下文。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;UserGrantSetting> | Promise对象，返回用户设置的授权的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600018 | The notification settings window is already displayed. |
| 1600023 | The application does not implement the NotificationSubscriberExtensionAbility. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

try {
  // Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  notificationExtensionSubscription.openSubscriptionSettingsWithResult(context).then((data) => {
    console.info(`openSubscriptionSettingsWithResult success, data: ${JSON.stringify(data)}`);
  }).catch((e:Error) => {
    let error = e as BusinessError
    console.error(`failed to call openSubscriptionSettingsWithResult ${JSON.stringify(error)}`)
  });
} catch (error) {
  console.error(`failed to call openSubscriptionSettingsWithResult ${JSON.stringify(error)}`)
}

```

