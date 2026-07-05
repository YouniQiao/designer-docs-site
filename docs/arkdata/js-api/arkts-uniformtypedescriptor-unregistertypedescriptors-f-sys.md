# unregisterTypeDescriptors

## unregisterTypeDescriptors

```TypeScript
function unregisterTypeDescriptors(typeIds: Array<string>): Promise<void>
```

Unregister one or more type descriptors from the system by the given type IDs.

**Since:** 22

**Required permissions:** 

 ohos.permission.MANAGE_DYNAMIC_UTD_TYPE

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typeIds | Array&lt;string> | Yes | The list of type IDs to be unregistered. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission denied, non-system app called system api. |
| 20400004 | One or more typeIds are invalid or do not exist. |

