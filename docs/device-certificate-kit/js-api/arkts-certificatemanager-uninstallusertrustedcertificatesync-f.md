# uninstallUserTrustedCertificateSync

## uninstallUserTrustedCertificateSync

```TypeScript
function uninstallUserTrustedCertificateSync(certUri: string): void
```

卸载用户CA证书。

**Since:** 18

**Required permissions:** 

 ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| certUri | string | Yes | 表示待卸载证书的唯一标识符，长度限制256字节以内 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | Indicates that the certificate does not exist. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

let certUri: string = "test"; /* The service needs to use the certificate identifier to delete the certificate, which is not elaborated here. */
try {
  certificateManager.uninstallUserTrustedCertificateSync(certUri);
} catch (error) {
  console.error(`Failed to uninstall user trusted certificate. Code: ${error.code}, message: ${error.message}`);
}

```

