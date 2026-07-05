# getDeviceRemindType

## getDeviceRemindType

```TypeScript
function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void
```

获取通知的提醒方式（Callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getDeviceRemindType

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeviceRemindType> | Yes | 获取通知提醒方式的回调函数。 |

## getDeviceRemindType

```TypeScript
function getDeviceRemindType(): Promise<DeviceRemindType>
```

获取通知的提醒方式（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#getDeviceRemindType

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceRemindType> | Promise方式返回获取通知提醒方式的结果。 |

