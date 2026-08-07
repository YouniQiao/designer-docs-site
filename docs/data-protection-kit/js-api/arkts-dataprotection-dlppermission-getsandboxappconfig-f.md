# getSandboxAppConfig

## getSandboxAppConfig

```TypeScript
function getSandboxAppConfig(): Promise<string>
```

Obtains sandbox application configuration. This API uses a promise to return the result.

This API obtains the sandbox application configuration, which can be used to read or verify the current configuration status.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn only, since version 11.

<!--Device-dlpPermission-function getSandboxAppConfig(): Promise<string>--><!--Device-dlpPermission-function getSandboxAppConfig(): Promise<string>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |
| [19100018](../errorcode-dlp.md#19100018-application-unauthorized) | The application is not authorized. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function ExampleFunction() {
  try {
    let res = await dlpPermission.getSandboxAppConfig() // Obtain the sandbox application configuration.
    console.info('res', JSON.stringify(res));
  } catch (err) {
    console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
  }
}
```

