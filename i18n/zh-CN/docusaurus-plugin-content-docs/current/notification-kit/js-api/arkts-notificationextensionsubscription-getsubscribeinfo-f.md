# getSubscribeInfo

## getSubscribeInfo

```TypeScript
function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>
```

获取当前应用的通知扩展订阅信息。使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**系统能力：** SystemCapability.Notification.Notification

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NotificationExtensionSubscriptionInfo[]> | Promise对象，返回一个  [NotificationExtensionSubscriptionInfo]./notification/NotificationExtensionSubscriptionInfo:NotificationExtensionSubscriptionInfo  对象数组，表示应用的订阅信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript

notificationExtensionSubscription.getSubscribeInfo().then((data: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[]) => {
  console.info(`getSubscribeInfo successfully. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSubscribeInfo fail: ${JSON.stringify(err)}`);
});

```

