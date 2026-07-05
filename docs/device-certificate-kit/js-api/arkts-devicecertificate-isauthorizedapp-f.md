# isAuthorizedApp

## Modules to Import

```TypeScript
import { certificateManager } from '@ohos.security.certManager';
```

## isAuthorizedApp

```TypeScript
function isAuthorizedApp(keyUri: string): Promise<boolean>
```

Checks whether this application is authorized by the specified user credential. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | Unique identifier of the credential authorized by the user to the application. The valuecontains up to 256 bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return whether the application is authorized. The value **true**means authorized; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [17500001](../errorcode-certManager.md#17500001-internal-error) | Internal error. Possible causes: 1. IPC communication failed;<br>2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string = 'test'; /* Unique identifier of the credential. The process for authorizing the credential to the application is omitted here. */
try {
  certificateManager.isAuthorizedApp(uri).then((res) => {
    if (res) {
      console.info('The application is authorized by the user.');
    } else {
      console.info('The application is not authorized by the user.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to check if the application is authorized. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to check if the application is authorized. Code: ${error.code}, message: ${error.message}`);
}

```

