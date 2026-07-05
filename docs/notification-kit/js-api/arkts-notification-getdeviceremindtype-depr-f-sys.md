# getDeviceRemindType (System API)

## getDeviceRemindType

```TypeScript
function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void
```

Obtains the notification reminder type. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDeviceRemindType

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeviceRemindType&gt; | Yes | Callback used to return the result. |


## getDeviceRemindType

```TypeScript
function getDeviceRemindType(): Promise<DeviceRemindType>
```

Obtains the notification reminder type. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDeviceRemindType

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceRemindType&gt; | Promise used to return the result. |

