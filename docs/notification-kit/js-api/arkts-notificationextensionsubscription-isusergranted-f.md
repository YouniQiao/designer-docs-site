# isUserGranted

## isUserGranted

```TypeScript
function isUserGranted(): Promise<boolean>
```

查询“允许获取本机通知”的开关状态。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示功能已启用；返回false表示功能未启用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript

notificationExtensionSubscription.isUserGranted().then((isOpen: boolean) => {
  if (isOpen) {
    console.info('isUserGranted true');
  } else {
    console.info('isUserGranted false');
  }
}).catch((err: BusinessError) => {
  console.error(`isUserGranted fail: ${JSON.stringify(err)}`);
});

```

