# DlpConnPlugin

Registers the callback capability with the system ability (SA). This API is used in the **registerPlugin** API.

> **NOTE**  
>  
> [registerPlugin](arkts-dataprotection-dlppermission-dlpconnmanager-c.md#registerplugin-1) requires identical parameters to this API.  
> [connectServer](arkts-dataprotection-dlppermission-dlpconnplugin-i.md#connectserver-1) is called by the SA and the parameters are  
> returned through the callback.

**Since:** 21

<!--Device-dlpPermission-export interface DlpConnPlugin--><!--Device-dlpPermission-export interface DlpConnPlugin-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## connectServer

```TypeScript
connectServer(requestId: string, requestData: string, callback: Callback<string>): void
```

This API is called by the SA. After the request of connecting to the cloud server is processed, the result is returned the SA using a callback.

This API can be used in enterprise account authentication and cloud permission verification to enable communication between the SA and the cloud server.

> **NOTE**  
>  
> **connectServer** indicates a call from the system capability side to the frontend.

**Since:** 21

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE
- API version 21 - 24: ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

<!--Device-DlpConnPlugin-connectServer(requestId: string, requestData: string, callback: Callback<string>): void--><!--Device-DlpConnPlugin-connectServer(requestId: string, requestData: string, callback: Callback<string>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | string | Yes | ID of the request transferred by the SA. No value range restriction is specified. |
| requestData | string | Yes | Data transferred by the SA. No value range restriction is specified. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<string> | Yes | API transferred by the SA, which is used for callback. No value range restriction is specified. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { Callback } from '@kit.BasicServicesKit';

export default class DataCapsulePlugin implements dlpPermission.DlpConnPlugin {
  constructor() {
  }

  connectServer(requestId: string, requestData: string, callback: Callback<string>): void {
    let callbackJson = JSON.stringify({
      'requestId': requestId,
    }); // Construct callback JSON data.
    callback(callbackJson);  // Use a callback to return the result.
  }
}

let plugin: dlpPermission.DlpConnPlugin = new DataCapsulePlugin();

```

