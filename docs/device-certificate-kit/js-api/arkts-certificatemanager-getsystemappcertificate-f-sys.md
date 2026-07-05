# getSystemAppCertificate

## getSystemAppCertificate

```TypeScript
function getSystemAppCertificate(keyUri: string) : Promise<CMResult>
```

获取系统应用的凭据详情，仅证书管理应用调用。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示系统应用凭据的唯一标识符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取系统应用凭据详细信息的结果，返回值为  [CMResult](arkts-certificatemanager-cmresult-i.md#CMResult)对象中的credential属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed.  Possible causes: the URI is null or the URI format is wrong. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | Indicates that the certificate does not exist. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let keyUri: string = 'test'; /* Unique identifier of the system application credential. */
try {
  certificateManager.getSystemAppCertificate(keyUri).then((cmResult: certificateManager.CMResult) => {
    if (cmResult?.credential == undefined) {
      console.info('The result of getting system app certificate is undefined.');
    } else {
      let cred: certificateManager.Credential = cmResult.credential;
      console.info('Succeeded in getting system app certificate.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get system app certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get system app certificate. Code: ${error.code}, message: ${error.message}`);
}

```

