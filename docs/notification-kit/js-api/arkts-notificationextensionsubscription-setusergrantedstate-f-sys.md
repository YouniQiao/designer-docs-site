# setUserGrantedState

## setUserGrantedState

```TypeScript
function setUserGrantedState(targetBundle: BundleOption, enabled: boolean): Promise<void>
```

设置指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundle | BundleOption | Yes | 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，  并且实现[NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility),  否则返回1600022错误码。 |
| enabled | boolean | Yes | 表示应用的“允许获取本机通知”的开关状态，true表示启用，false表示未启用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600022 | The specified bundle is invalid. |

**Example**

```TypeScript
let targetBundle: notificationExtensionSubscription.BundleOption =
{
  // Use the actual target application information.
  bundle: 'com.example.testnotification',
};
notificationExtensionSubscription.setUserGrantedState(targetBundle, true).then(() => {
  console.info(`setUserGrantedState successfully.`);
}).catch((err: BusinessError) => {
  console.error(`setUserGrantedState fail: ${JSON.stringify(err)}`);
});

```

