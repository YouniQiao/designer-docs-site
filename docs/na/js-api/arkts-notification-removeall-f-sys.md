# removeAll

## removeAll

```TypeScript
function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void
```

删除指定应用的所有通知（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#removeAll

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| callback | AsyncCallback&lt;void> | Yes | 删除指定应用的所有通知回调函数。 |

## removeAll

```TypeScript
function removeAll(callback: AsyncCallback<void>): void
```

删除所有通知（Callback形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#removeAll

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 删除所有通知回调函数。 |

## removeAll

```TypeScript
function removeAll(userId: number, callback: AsyncCallback<void>): void
```

删除指定用户下的所有通知（callback形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#removeAll

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 删除指定用户所有通知回调函数。 |

## removeAll

```TypeScript
function removeAll(userId: number): Promise<void>
```

删除指定用户下的所有通知（Promise形式）。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#removeAll

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## removeAll

```TypeScript
function removeAll(bundle?: BundleOption): Promise<void>
```

删除指定应用的所有通知（Promise形式）。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.notificationSubscribe/notificationSubscribe#removeAll

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

