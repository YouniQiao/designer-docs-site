# installUserTrustedCertificate

## installUserTrustedCertificate

```TypeScript
function installUserTrustedCertificate(certificate: CertBlob) : Promise<CMResult>
```

安装用户CA证书。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| certificate | CertBlob | Yes | 表示证书信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回安装用户CA证书的结果，返回值为[CMResult]certificateManager.CMResult对象中的uri属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter verification failed. Possible causes:  the certData parameter is empty or exceeds the maximum length . |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | Indicates that the certificate is in an invalid format. |
| 17500004 | Indicates that the number of certificates reaches the maximum allowed. |
| 17500007 | Indicates that the device enters advanced security mode.  In this mode, the user CA certificate cannot be installed. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* The CA certificate data must be assigned by the service. In this example, the data is not CA certificate data. */
let certData: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
try {
  let certBlob: certificateManager.CertBlob = {
    certData: certData,
    certFormat: certificateManager.CertFileFormat.PEM_DER,
    certScope: certificateManager.CertScope.CURRENT_USER
  };
  certificateManager.installUserTrustedCertificate(certBlob).then((cmResult) => {
    let uri: string = cmResult.uri ?? '';
    console.info('Succeeded in installing user trusted certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to install user trusted certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to install user trusted certificate. Code: ${error.code}, message: ${error.message}`);
}

```

