# getActiveNotifications

## getActiveNotifications

```TypeScript
function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void
```

Obtains active notifications of this application. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotifications

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;NotificationRequest&gt;&gt; | Yes | Callback used to return the result. |


## getActiveNotifications

```TypeScript
function getActiveNotifications(): Promise<Array<NotificationRequest>>
```

Obtains active notifications of this application. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getActiveNotifications

**System capability:** SystemCapability.Notification.Notification

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;NotificationRequest&gt;&gt; | Promise used to return the result. |

