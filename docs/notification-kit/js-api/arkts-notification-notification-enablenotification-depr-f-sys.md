# enableNotification (System API)

<a id="enablenotification"></a>
## enableNotification

```TypeScript
function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void
```

Sets whether to enable notification for a specified application.This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setNotificationEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void--><!--Device-notification-function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| enable | boolean | Yes | Whether to enable notification. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |


<a id="enablenotification-1"></a>
## enableNotification

```TypeScript
function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>
```

Sets whether to enable notification for a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setNotificationEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>--><!--Device-notification-function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | [BundleOption](arkts-notification-notificationcommondef-bundleoption-i.md) | Yes | Bundle information of the application. |
| enable | boolean | Yes | Whether to enable notification. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

