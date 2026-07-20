# isSupportTemplate

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void
```

Checks whether a specified template is supported before using [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification.This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isSupportTemplate

<!--Device-notification-function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void--><!--Device-notification-function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. |


## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string): Promise<boolean>
```

Checks whether a specified template is supported before using [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification.This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isSupportTemplate

<!--Device-notification-function isSupportTemplate(templateName: string): Promise<boolean>--><!--Device-notification-function isSupportTemplate(templateName: string): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | Template name. Currently, only **downloadTemplate** is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. |

