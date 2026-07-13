# setSlotByBundle (System API)

## setSlotByBundle

```TypeScript
function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void
```

Sets the notification slot for a specified application.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setSlotByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| slot | NotificationSlot | Yes | Notification slot. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## setSlotByBundle

```TypeScript
function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>
```

Sets the notification slot for a specified application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setSlotByBundle

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | Bundle information of the application. |
| slot | NotificationSlot | Yes | Notification slot. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

