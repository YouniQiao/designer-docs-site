# subscribe

## subscribe

```TypeScript
function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>
```

订阅通知扩展。使用[蓝牙模块](docroot://connectivity/connectivity-kit-intro.md#蓝牙简介)相关接口获取蓝牙设备的唯一地址后 方可订阅。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NotificationExtensionSubscriptionInfo[] | Yes | 订阅的信息列表（数组）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600023 | The application does not implement the NotificationSubscriberExtensionAbility. |

**Example**

```TypeScript

let infos: notificationExtensionSubscription.NotificationExtensionSubscriptionInfo[] = [
  {
    addr: '01:23:45:67:89:AB', // Use the dynamically obtained Bluetooth address.
    type: notificationExtensionSubscription.SubscribeType.BLUETOOTH
  }
];
notificationExtensionSubscription.subscribe(infos).then(() => {
  console.info(`subscribe success`);
}).catch((err: BusinessError) => {
  console.error(`subscribe fail: ${JSON.stringify(err)}`);
});


```

