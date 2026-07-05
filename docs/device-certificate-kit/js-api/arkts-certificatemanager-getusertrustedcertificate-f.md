# getUserTrustedCertificate

## getUserTrustedCertificate

```TypeScript
function getUserTrustedCertificate(certUri: string): Promise<CMResult>
```

表示获取用户根CA证书的详细信息。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| certUri | string | Yes | 表示用户根CA证书的唯一标识符，长度限制256字节以内。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取用户根CA证书详细信息的结果，返回值为[CMResult]certificateManager.CMResult对象中的  certInfo属性。 |

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

let certUri: string = 'testUserCert'; /* The user needs to use the unique identifier of the CA certificate to obtain the user root CA certificate details, which is not elaborated here. */
try {
  certificateManager.getUserTrustedCertificate(certUri).then((cmResult) => {
    if (cmResult?.certInfo == undefined) {
      console.info('The result of getting user trusted certificate is undefined.');
    } else {
      let cert = cmResult.certInfo;
      console.info('Succeeded in getting user trusted certificate.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get user trusted certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get user trusted certificate. Code: ${error.code}, message: ${error.message}`);
}

```

