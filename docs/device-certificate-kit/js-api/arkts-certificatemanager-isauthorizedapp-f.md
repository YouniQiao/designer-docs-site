# isAuthorizedApp

## isAuthorizedApp

```TypeScript
function isAuthorizedApp(keyUri: string): Promise<boolean>
```

表示当前应用是否由指定的用户凭据授权。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示用户授权给应用使用的凭据的唯一标识符，长度限制256字节以内。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回查询应用是否被授权的结果，true为已授权，false为未授权。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

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

