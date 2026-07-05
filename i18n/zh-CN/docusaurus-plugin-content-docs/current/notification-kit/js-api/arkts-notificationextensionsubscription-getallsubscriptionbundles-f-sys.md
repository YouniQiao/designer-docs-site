# getAllSubscriptionBundles

## getAllSubscriptionBundles

```TypeScript
function getAllSubscriptionBundles(): Promise<BundleOption[]>
```

获取所有具有ohos.permission.SUBSCRIBE_NOTIFICATION权限并且实现了 [NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility)的应用列表。 使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BundleOption[]> | Promise对象，返回所有具有ohos.permission.SUBSCRIBE_NOTIFICATION的应用列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
notificationExtensionSubscription.getAllSubscriptionBundles().then((data: notificationExtensionSubscription.BundleOption[]) => {
  console.info(`getAllSubscriptionBundles successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getAllSubscriptionBundles fail: ${JSON.stringify(err)}`);
});

```

