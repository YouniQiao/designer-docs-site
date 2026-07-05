# cancelAll

## cancelAll

```TypeScript
function cancelAll(callback: AsyncCallback<void>): void
```

取消所有已发布的通知（callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancelAll

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 表示被指定的回调方法。 |

## cancelAll

```TypeScript
function cancelAll(): Promise<void>
```

取消所有已发布的通知（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#cancelAll

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

