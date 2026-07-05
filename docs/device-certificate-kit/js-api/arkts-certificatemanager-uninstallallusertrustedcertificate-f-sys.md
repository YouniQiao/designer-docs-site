# uninstallAllUserTrustedCertificate

## uninstallAllUserTrustedCertificate

```TypeScript
function uninstallAllUserTrustedCertificate() : Promise<void>
```

卸载所有用户信任的CA证书，仅证书管理应用调用。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  certificateManager.uninstallAllUserTrustedCertificate().then(() => {
    console.info('Succeeded in uninstalling all user trusted certificates.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to uninstall all user trusted certificates. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to uninstall all user trusted certificates. Code: ${error.code}, message: ${error.message}`);
}

```

