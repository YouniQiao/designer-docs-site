# isInSandbox

## isInSandbox

```TypeScript
function isInSandbox(): Promise<boolean>
```

Checks whether this application is running in a DLP sandbox environment. This API uses a promise to return the result.

This API is used to determine whether the current application is running in a DLP sandbox environment. If it is,the system can perform operations or call APIs for sandbox applications.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function isInSandbox(): Promise<boolean>--><!--Device-dlpPermission-function isInSandbox(): Promise<boolean>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means the application is running in a sandbox; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let inSandbox = dlpPermission.isInSandbox(); // Check whether the application is running in a sandbox.
  console.info('res', inSandbox);
} catch (err) {
  console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
}
```


## isInSandbox

```TypeScript
function isInSandbox(callback: AsyncCallback<boolean>): void
```

Checks whether this application is running in a DLP sandbox environment. This API uses an asynchronous callback to return the result.

This API is used to determine whether the current application is running in a DLP sandbox environment. If it is,the system can perform operations or call APIs for sandbox applications.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function isInSandbox(callback: AsyncCallback<boolean>): void--><!--Device-dlpPermission-function isInSandbox(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**. Otherwise, **err** is an error object. The value **true** means the application is running in a sandbox; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  dlpPermission.isInSandbox((err, data) => {
    if (err) {
      console.error('isInSandbox error', err.code, err.message);
    } else {
      console.info('isInSandbox, data', JSON.stringify(data));
    }
  }); // Whether the application is running in a sandbox.
} catch (err) {
  console.error('isInSandbox error', (err as BusinessError).code, (err as BusinessError).message);
}
```

