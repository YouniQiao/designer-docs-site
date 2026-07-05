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

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DoNotDisturbDate&gt; | Yes | Callback used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(): Promise<DoNotDisturbDate>
```

Obtains the DND time. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DoNotDisturbDate&gt; | Promise used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void
```

Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| callback | AsyncCallback&lt;DoNotDisturbDate&gt; | Yes | Callback used to return the result. |


## getDoNotDisturbDate

```TypeScript
function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>
```

Obtains the DND time of a specified user. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDoNotDisturbDate

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DoNotDisturbDate&gt; | Promise used to return the result. |

