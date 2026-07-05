# isDistributedEnabled

## isDistributedEnabled

```TypeScript
function isDistributedEnabled(callback: AsyncCallback<boolean>): void
```

查询设备是否支持分布式通知（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isDistributedEnabled

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 设备是否支持分布式通知的回调函数。 |

## isDistributedEnabled

```TypeScript
function isDistributedEnabled(): Promise<boolean>
```

查询设备是否支持分布式通知（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isDistributedEnabled

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise方式返回设备是否支持分布式通知的结果。 |

