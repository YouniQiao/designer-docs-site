# isNotificationEnabled

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

获取指定应用的通知使能状态（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| callback | AsyncCallback&lt;boolean> | Yes | 获取通知使能状态回调函数。 |

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(bundle: BundleOption): Promise<boolean>
```

获取指定应用的通知使能状态（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise形式返回获取指定应用的通知使能状态的结果。 |

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(callback: AsyncCallback<boolean>): void
```

获取通知使能状态（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 获取通知使能状态回调函数。 |

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(): Promise<boolean>
```

获取通知使能状态（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise形式返回获取通知使能状态的结果。 |

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void
```

获取指定用户ID下的通知使能状态。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 指定的用户ID。 |
| callback | AsyncCallback&lt;boolean> | Yes | 获取通知使能状态回调函数（true：使能，false：禁止）。 |

## isNotificationEnabled

```TypeScript
function isNotificationEnabled(userId: number): Promise<boolean>
```

获取指定用户下的通知使能状态。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isNotificationEnabled

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 指定的用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 以Promise形式返回获取通知使能状态的结果（true：使能，false：禁止）。 |

