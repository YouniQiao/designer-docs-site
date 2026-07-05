# getPrivateCertificates

## getPrivateCertificates

```TypeScript
function getPrivateCertificates(): Promise<CMResult>
```

表示获取应用安装的凭据列表。使用Promise异步回调。

**Since:** 13

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取应用安装的凭据列表的结果，返回值为[CMResult]certificateManager.CMResult对象中的  credentialList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  certificateManager.getPrivateCertificates().then((cmResult) => {
    if (cmResult === undefined) { // If the number of certificate credentials is 0, the returned cmResult is undefined.
      console.info('The count of the private certificates is 0.');
    } else if (cmResult.credentialList == undefined) {
      console.info('The result of getting all private certificates installed by the application is undefined.');
    } else {
      let list = cmResult.credentialList;
      console.info('Succeeded in getting all private certificates installed by the application.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get all private certificates installed by the application. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get all private certificates installed by the application. Code: ${error.code}, message: ${error.message}`);
}

```

