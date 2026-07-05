# installSystemAppCertificate

## installSystemAppCertificate

```TypeScript
function installSystemAppCertificate(keystore: Uint8Array, keystorePwd: string): Promise<CMResult>
```

安装系统应用凭据，仅证书管理应用调用。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | 表示带有密钥对和证书的密钥库文件，仅支持P12格式。 |
| keystorePwd | string | Yes | 表示密钥库文件的密码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回安装系统应用凭据的结果，返回值为  [CMResult](arkts-certificatemanager-cmresult-i.md#CMResult)对象中的uri属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed. Possible causes:  The keystore parameter is empty or exceeds the maximum length. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | Indicates that the certificate is in an invalid format. |
| 17500004 | Indicates that the number of certificates reaches the maximum allowed. |
| 17500008 | Indicates that the password is error. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* The data of the credential to be installed must be assigned based on the service. The data in this example is not the real credential data. */
let keystore: Uint8Array = new Uint8Array([
    0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
let keystorePwd: string = "123456";
try {
  certificateManager.installSystemAppCertificate(keystore, keystorePwd).then((cmResult: certificateManager.CMResult) => {
    let uri: string = (cmResult?.uri == undefined) ? '' : cmResult.uri;
    console.info('Succeeded in installing system app certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to install system app certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to install system app certificate. Code: ${error.code}, message: ${error.message}`);
}

```

