# unsubscribe

## unsubscribe

```TypeScript
function unsubscribe(): Promise<void>
```

取消通知扩展的订阅。使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.SUBSCRIBE_NOTIFICATION

**系统能力：** SystemCapability.Notification.Notification

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied or current device not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript

notificationExtensionSubscription.unsubscribe().then(() => {
  console.info(`unsubscribe success`);
}).catch((err: BusinessError) => {
  console.error(`unsubscribe fail: ${JSON.stringify(err)}`);
});

```

