# isSupportTemplate

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void
```

Checks whether a specified template is supported before using [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isSupportTemplate

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. |


## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string): Promise<boolean>
```

Checks whether a specified template is supported before using [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isSupportTemplate

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. |

