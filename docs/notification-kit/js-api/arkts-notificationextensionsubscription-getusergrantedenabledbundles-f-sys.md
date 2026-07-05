# getUserGrantedEnabledBundles

## getUserGrantedEnabledBundles

```TypeScript
function getUserGrantedEnabledBundles(targetBundle: BundleOption): Promise<BundleOption[]>
```

获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundle | BundleOption | Yes | 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，  并且实现[NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility),  否则返回1600022错误码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleOption[]> | Promise对象，返回指定应用中“已获取的本机通知”通知开关开启的应用列表。 |

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
notificationExtensionSubscription.getUserGrantedEnabledBundles(targetBundle).then((data: notificationExtensionSubscription.BundleOption[]) => {
  console.info(`getUserGrantedEnabledBundles successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getUserGrantedEnabledBundles fail: ${JSON.stringify(err)}`);
});

```

