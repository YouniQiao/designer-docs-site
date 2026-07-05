# isBadgeDisplayed

## isBadgeDisplayed

```TypeScript
function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void
```

获取指定应用的角标使能状态（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isBadgeDisplayed

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| callback | AsyncCallback&lt;boolean> | Yes | 获取角标使能状态回调函数。 |

## isBadgeDisplayed

```TypeScript
function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>
```

获取指定应用的角标使能状态（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationManager/notificationManager#isBadgeDisplayed

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
| Promise&lt;boolean> | 以Promise形式返回获取指定应用的角标使能状态。 |

