# getSlots

<a id="getslots"></a>
## getSlots

```TypeScript
function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void
```

Obtains all notification slots. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlots

<!--Device-notification-function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void--><!--Device-notification-function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;NotificationSlot&gt;&gt; | Yes | Callback used to return the result. |


<a id="getslots-1"></a>
## getSlots

```TypeScript
function getSlots(): Promise<Array<NotificationSlot>>
```

Obtains all notification slots of this application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getSlots

<!--Device-notification-function getSlots(): Promise<Array<NotificationSlot>>--><!--Device-notification-function getSlots(): Promise<Array<NotificationSlot>>-End-->

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationSlot&gt;&gt; | Promise used to return the result. |

