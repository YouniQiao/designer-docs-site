# isNotificationEnabledSync

## isNotificationEnabledSync

```TypeScript
function isNotificationEnabledSync(): boolean
```

同步查询当前应用通知使能状态。

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回查询通知使能状态的结果。返回true，表示允许发布通知；返回false，表示禁止发布通知。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
let enabled: boolean = notificationManager.isNotificationEnabledSync();
console.info(`isNotificationEnabledSync success, data is : ${JSON.stringify(enabled)}`);

```

