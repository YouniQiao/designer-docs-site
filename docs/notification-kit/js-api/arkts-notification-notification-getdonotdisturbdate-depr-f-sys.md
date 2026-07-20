# getDoNotDisturbDate (System API)

## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void
```

Obtains the DND time. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void--><!--Device-notification-function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DoNotDisturbDate> | Yes | Callback used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(): Promise<DoNotDisturbDate>
```

Obtains the DND time. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getDoNotDisturbDate(): Promise<DoNotDisturbDate>--><!--Device-notification-function getDoNotDisturbDate(): Promise<DoNotDisturbDate>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DoNotDisturbDate> | Promise used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void
```

Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void--><!--Device-notification-function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DoNotDisturbDate> | Yes | Callback used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>
```

Obtains the DND time of a specified user. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notification-function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>--><!--Device-notification-function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DoNotDisturbDate> | Promise used to return the result. |

