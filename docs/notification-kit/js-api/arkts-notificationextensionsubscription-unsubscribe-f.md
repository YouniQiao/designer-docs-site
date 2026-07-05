# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(): Promise<void>
```

取消通知扩展的订阅。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**System capability:** SystemCapability.Notification.Notification

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

**Example**

```TypeScript

notificationExtensionSubscription.unsubscribe().then(() => {
  console.info(`unsubscribe success`);
}).catch((err: BusinessError) => {
  console.error(`unsubscribe fail: ${JSON.stringify(err)}`);
});

```

