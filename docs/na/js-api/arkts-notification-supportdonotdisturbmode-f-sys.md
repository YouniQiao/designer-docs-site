# supportDoNotDisturbMode

## supportDoNotDisturbMode

```TypeScript
function supportDoNotDisturbMode(callback: AsyncCallback<boolean>): void
```

查询是否支持免打扰功能（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 查询是否支持免打扰功能回调函数。 |

## supportDoNotDisturbMode

```TypeScript
function supportDoNotDisturbMode(): Promise<boolean>
```

查询是否支持免打扰功能（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise形式返回获取是否支持免打扰功能的结果。 |

