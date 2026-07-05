# getSubscribeInfo

## getSubscribeInfo

```TypeScript
function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>
```

获取当前应用的通知扩展订阅信息。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NotificationExtensionSubscriptionInfo[]> | Promise对象，返回一个  [NotificationExtensionSubscriptionInfo]./notification/NotificationExtensionSubscriptionInfo:NotificationExtensionSubscriptionInfo  对象数组，表示应用的订阅信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript

notificationExtensionSubscription.getSubscribeInfo().then((data: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[]) => {
  console.info(`getSubscribeInfo successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSubscribeInfo fail: ${JSON.stringify(err)}`);
});

```

