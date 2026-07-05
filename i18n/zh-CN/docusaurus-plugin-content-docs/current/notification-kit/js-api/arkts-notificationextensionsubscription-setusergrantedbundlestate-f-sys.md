# setUserGrantedBundleState

## setUserGrantedBundleState

```TypeScript
function setUserGrantedBundleState(targetBundle: BundleOption,
    enabledBundles: BundleOption[], enabled: boolean): Promise<void>
```

设置指定应用中“已获取的本机通知”的应用通知开关状态。使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetBundle | BundleOption | 是 | 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，  并且实现[NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility),  否则返回1600022错误码。 |
| enabledBundles | BundleOption[] | 是 | 被授权的应用信息列表。 |
| enabled | boolean | 是 | 表示“已获取的本机通知”的应用授权状态是否启用，true表示已启用，false表示未启用。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600022 | The specified bundle is invalid. |

**示例：**

```TypeScript
let targetBundle: notificationExtensionSubscription.BundleOption =
  {
    // 应改为开发者需要设置的目标应用信息
    bundle: 'com.example.testnotification',
  };
let enabledBundles: notificationExtensionSubscription.BundleOption[] = [
  // 应改为开发者需要授权的实际应用
  { bundle: 'com.example.xxx', uid: 11111111 },
  { bundle: 'com.example.xxxx', uid: 11111111 },
  { bundle: 'com.example.xxxxx' },
];
notificationExtensionSubscription.setUserGrantedBundleState(targetBundle, enabledBundles, true).then(() => {
  console.info(`setUserGrantedBundleState successfully.`);
}).catch((err: BusinessError) => {
  console.error(`setUserGrantedBundleState fail: ${JSON.stringify(err)}`);
});

```

