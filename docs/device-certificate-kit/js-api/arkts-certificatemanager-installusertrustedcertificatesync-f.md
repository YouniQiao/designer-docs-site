# installUserTrustedCertificateSync

## installUserTrustedCertificateSync

```TypeScript
function installUserTrustedCertificateSync(cert: Uint8Array, certScope: CertScope): CMResult
```

安装用户CA证书。

**Since:** 18

**Required permissions:** 

 ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | Uint8Array | Yes | 表示CA证书数据，  最大长度为8196字节。 |
| certScope | CertScope | Yes | 表示CA证书安装的位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| CMResult | 表示CA证书的安装结果，返回值为CMResult对象中的uri属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | Indicates that the certificate is in an invalid format. |
| 17500004 | Indicates that the number of certificates reaches the maximum allowed. |
| 17500007 | Indicates that the device enters advanced security mode. In this mode, the  user CA certificate cannot be installed. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

/* The CA certificate data must be assigned by the service. In this example, the data is not CA certificate data. */
let certData: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
try {
  let result: certificateManager.CMResult = certificateManager.installUserTrustedCertificateSync(certData, certificateManager.CertScope.CURRENT_USER);
  let certUri = result.uri;
  if (certUri === undefined) {
    console.error("The result of install user trusted certificate is undefined.");
  } else {
    console.info("Succeeded to install user trusted certificate.");
  }
} catch (error) {
  console.error(`Failed to install user trusted certificate. Code: ${error.code}, message: ${error.message}`);
}

```

