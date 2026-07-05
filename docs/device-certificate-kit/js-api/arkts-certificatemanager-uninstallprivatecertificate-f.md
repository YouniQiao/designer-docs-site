# uninstallPrivateCertificate

## uninstallPrivateCertificate

```TypeScript
function uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback<void>): void
```

卸载指定的私有凭据，使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示待卸载凭据的唯一标识符，长度限制256字节以内。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当卸载私有凭据成功时，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to delete the private credential, which is not elaborated here. */
try {
  certificateManager.uninstallPrivateCertificate(uri, (err, result) => {
    if (err != null) {
      console.error(`Failed to uninstall private certificate. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in uninstalling private certificate.');
    }
  });
} catch (error) {
  console.error(`Failed to uninstall private certificate. Code: ${error.code}, message: ${error.message}`);
}

```

## uninstallPrivateCertificate

```TypeScript
function uninstallPrivateCertificate(keyUri: string): Promise<void>
```

表示卸载指定的私有凭据。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示待卸载凭据的唯一标识符，长度限制256字节以内。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to delete the private credential, which is not elaborated here. */
try {
  certificateManager.uninstallPrivateCertificate(uri).then((cmResult) => {
    console.info('Succeeded in uninstalling private certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to uninstall private certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to uninstall private certificate. Code: ${error.code}, message: ${error.message}`);
}

```

