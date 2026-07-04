# enableDistributed (System API)

## enableDistributed

```TypeScript
function enableDistributed(enable: boolean, callback: AsyncCallback<void>): void
```

Sets whether this device supports distributed notifications. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setDistributedEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether the device supports distributed notifications. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |


## enableDistributed

```TypeScript
function enableDistributed(enable: boolean): Promise<void>
```

Sets whether this device supports distributed notifications. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setDistributedEnable

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether the device supports distributed notifications. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

