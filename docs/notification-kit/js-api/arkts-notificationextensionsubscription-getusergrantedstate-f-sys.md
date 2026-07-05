# getUserGrantedState

## getUserGrantedState

```TypeScript
function getUserGrantedState(targetBundle: BundleOption): Promise<boolean>
```

查询指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundle | BundleOption | Yes | 需要查询的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，  并且实现[NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility),  否则返回1600022错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回true表示目标应用的“允许获取本机通知”状态已启用；  返回false表示目标应用的“允许获取本机通知”状态未启用。 |

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
notificationExtensionSubscription.getUserGrantedState(targetBundle).then((isOpen: boolean) => {
  if (isOpen) {
    console.info('GrantedState true');
  } else {
    console.info('GrantedState false');
  }
}).catch((err: BusinessError) => {
  console.error(`getUserGrantedState fail: ${JSON.stringify(err)}`);
});

```

