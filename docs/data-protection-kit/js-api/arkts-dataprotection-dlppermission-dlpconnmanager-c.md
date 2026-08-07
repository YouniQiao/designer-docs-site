# DlpConnManager

Calls **registerPlugin** and **unregisterPlugin** to register or unregister callback capabilities in the SA.
    **NOTE**  
    
    **registerPlugin** registers callback capabilities in the SA, and **unregisterPlugin** unregisters callback  
    capabilities from the SA.

**Since:** 21

**ArkTS mode:** ArkTS-Dyn only, since version 21.

<!--Device-dlpPermission-export class DlpConnManager--><!--Device-dlpPermission-export class DlpConnManager-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

## constructor

```TypeScript
constructor()
```

Represents a constructor for instantiating [DlpConnManager]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.

**Since:** 21

**ArkTS mode:** ArkTS-Dyn only, since version 21.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE
- API version 21 - 24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

<!--Device-DlpConnManager-constructor()--><!--Device-DlpConnManager-constructor()-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

## registerPlugin

```TypeScript
static registerPlugin(plugin: DlpConnPlugin): number
```

Registers a callback with the SA.
    **NOTE**  
    
    **registerPlugin** registers the callback with the SA.

**Since:** 21

**ArkTS mode:** ArkTS-Dyn only, since version 21.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE
- API version 21 - 24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

<!--Device-DlpConnManager-static registerPlugin(plugin: DlpConnPlugin): number--><!--Device-DlpConnManager-static registerPlugin(plugin: DlpConnPlugin): number-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| plugin | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Callback plugin object, which is used to register the callback capability with the SA. The **DlpConnPlugin** API needs to be inherited and the **connectServer** method needs to be implemented so that the processing result can be returned using a callback when the API is called on the SA. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Registration result. The unique ID of the callback is returned. The value range is [0, 2\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_53\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_-1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100002](../errorcode-dlp.md#19100002-encryption-and-decryption-error) | Credential service busy due to too many tasks or duplicate tasks. |
| [19100003](../errorcode-dlp.md#19100003-encryptiondecryption-timeout) | Credential task time out. |
| [19100004](../errorcode-dlp.md#19100004-credential-service-error) | Credential service error. |

## unregisterPlugin

```TypeScript
static unregisterPlugin(): void
```

Unregisters a callback from the SA.

This API unregisters a callback and releases resources when an application exits, ensuring that the callback capability is correctly released.
    **NOTE**  
    
    **unregisterPlugin** unregisters a plug-in from the SA.

**Since:** 21

**ArkTS mode:** ArkTS-Dyn only, since version 21.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE
- API version 21 - 24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

<!--Device-DlpConnManager-static unregisterPlugin(): void--><!--Device-DlpConnManager-static unregisterPlugin(): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100002](../errorcode-dlp.md#19100002-encryption-and-decryption-error) | Credential service busy due to too many tasks or duplicate tasks. |
| [19100003](../errorcode-dlp.md#19100003-encryptiondecryption-timeout) | Credential task time out. |
| [19100004](../errorcode-dlp.md#19100004-credential-service-error) | Credential service error. |

