# setSandboxAppConfig

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## setSandboxAppConfig

```TypeScript
function setSandboxAppConfig(configInfo: string): Promise<void>
```

Sets the configuration information of the sandbox application. The configuration information is in JSON string format and can be set by the application. After the API is successfully called, the sandbox application runs based on the configuration information. This API uses a promise to return the result.

This API sets the sandbox application configuration so that the application can pass custom parameters as required.

**Since:** 11

<!--Device-dlpPermission-function setSandboxAppConfig(configInfo: string): Promise<void>--><!--Device-dlpPermission-function setSandboxAppConfig(configInfo: string): Promise<void>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configInfo | string | Yes | Sandbox application configuration. The value contains a maximum of 4,194,304bytes. If the value is out of range, error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |
| [19100018](../errorcode-dlp.md#19100018-application-unauthorized) | The application is not authorized. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.setSandboxAppConfig('configInfo').then((configInfo) => { // Set sandbox application configuration.
  console.info('configInfo: ', configInfo);
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

