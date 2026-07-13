# enableNotification (System API)

## enableNotification

```TypeScript
function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void
```

Sets whether to enable notification for a specified application.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setNotificationEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| enable | boolean | Yes | Whether to enable notification. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## enableNotification

```TypeScript
function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>
```

Sets whether to enable notification for a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setNotificationEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| enable | boolean | Yes | Whether to enable notification. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

