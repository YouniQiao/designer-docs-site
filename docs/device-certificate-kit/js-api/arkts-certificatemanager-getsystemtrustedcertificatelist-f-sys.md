# getSystemTrustedCertificateList

## getSystemTrustedCertificateList

```TypeScript
function getSystemTrustedCertificateList(): Promise<CMResult>
```

获取系统信任的CA证书列表，仅证书管理应用调用。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取系统信任CA证书列表的结果，返回值为  [CMResult](arkts-certificatemanager-cmresult-i.md#CMResult)对象中的certList属性。 |

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
  certificateManager.getSystemTrustedCertificateList().then((cmResult: certificateManager.CMResult) => {
    if (cmResult === undefined) { // If the number of trusted CA certificates is 0, the returned cmResult is undefined.
      console.info('The count of system trusted certificates is 0.');
    } else if (cmResult.certList == undefined) {
      console.info('The result of getting system trusted certificates is undefined.');
    } else {
      let list: Array<certificateManager.CertAbstract> = cmResult.certList;
      console.info('Succeeded in getting system trusted certificates.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get system trusted certificates. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get system trusted certificates. Code: ${error.code}, message: ${error.message}`);
}

```

