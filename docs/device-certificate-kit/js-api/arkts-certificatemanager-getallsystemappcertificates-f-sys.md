# getAllSystemAppCertificates

## getAllSystemAppCertificates

```TypeScript
function getAllSystemAppCertificates(): Promise<CMResult>
```

表示获取所有系统凭据列表。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取所有系统凭据列表的结果，返回值为  [CMResult](arkts-certificatemanager-cmresult-i.md#CMResult)对象中的credentialList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  certificateManager.getAllSystemAppCertificates().then((cmResult) => {
    if (cmResult === undefined) { // If the number of system credentials is 0, return undefined in cmResult.
      console.info('The count of the system certificates is 0.');
    } else if (cmResult.credentialList == undefined) {
      console.info('The result of getting all system app certificates is undefined.');
    } else {
      let list = cmResult.credentialList;
      console.info('Succeeded in getting all system app certificates.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get all system app certificates. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get all system app certificates. Code: ${error.code}, message: ${error.message}`);
}

```

