# setUserGrantedBundleState

## setUserGrantedBundleState

```TypeScript
function setUserGrantedBundleState(targetBundle: BundleOption,
    enabledBundles: BundleOption[], enabled: boolean): Promise<void>
```

设置指定应用中“已获取的本机通知”的应用通知开关状态。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundle | BundleOption | Yes | 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，  并且实现[NotificationSubscriberExtensionAbility](arkts-notificationsubscriberextensionability-c.md#NotificationSubscriberExtensionAbility),  否则返回1600022错误码。 |
| enabledBundles | BundleOption[] | Yes | 被授权的应用信息列表。 |
| enabled | boolean | Yes | 表示“已获取的本机通知”的应用授权状态是否启用，true表示已启用，false表示未启用。 |

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
let enabledBundles: notificationExtensionSubscription.BundleOption[] = [
  // Use the actual source application information.
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

