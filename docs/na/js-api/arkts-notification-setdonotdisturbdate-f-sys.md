# setDoNotDisturbDate

## setDoNotDisturbDate

```TypeScript
function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void
```

设置免打扰时间（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#setDoNotDisturbDate

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | DoNotDisturbDate | Yes | 免打扰时间选项。 |
| callback | AsyncCallback&lt;void> | Yes | 设置免打扰时间回调函数。 |

## setDoNotDisturbDate

```TypeScript
function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>
```

设置免打扰时间（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#setDoNotDisturbDate

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | DoNotDisturbDate | Yes | 免打扰时间选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setDoNotDisturbDate

```TypeScript
function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void
```

指定用户设置免打扰时间（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#setDoNotDisturbDate

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | DoNotDisturbDate | Yes | 免打扰时间选项。 |
| userId | number | Yes | 设置免打扰时间的用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 设置免打扰时间回调函数。 |

## setDoNotDisturbDate

```TypeScript
function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>
```

指定用户设置免打扰时间（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#setDoNotDisturbDate

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | DoNotDisturbDate | Yes | 免打扰时间选项。 |
| userId | number | Yes | 设置免打扰时间的用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

