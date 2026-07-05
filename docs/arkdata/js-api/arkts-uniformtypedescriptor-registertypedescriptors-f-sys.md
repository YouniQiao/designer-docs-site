# registerTypeDescriptors

## registerTypeDescriptors

```TypeScript
function registerTypeDescriptors(typeDescriptors: Array<TypeDescriptor>): Promise<void>
```

Register type descriptors into the system.

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
| typeDescriptors | Array&lt;TypeDescriptor> | Yes | The list of type descriptors to be registered. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission denied, non-system app called system api. |
| 20400002 | The format of one or more typeDescriptors are invalid. |
| 20400003 | The content of one or more typeDescriptors violate rules. |

