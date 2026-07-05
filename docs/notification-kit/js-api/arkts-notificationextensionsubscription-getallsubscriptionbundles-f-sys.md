# getAllSubscriptionBundles

## getAllSubscriptionBundles

```TypeScript
function getAllSubscriptionBundles(): Promise<BundleOption[]>
```

获取所有具有ohos.permission.SUBSCRIBE_NOTIFICATION权限并且实现了 [NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility)的应用列表。 使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleOption[]> | Promise对象，返回所有具有ohos.permission.SUBSCRIBE_NOTIFICATION的应用列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
notificationExtensionSubscription.getAllSubscriptionBundles().then((data: notificationExtensionSubscription.BundleOption[]) => {
  console.info(`getAllSubscriptionBundles successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getAllSubscriptionBundles fail: ${JSON.stringify(err)}`);
});

```

