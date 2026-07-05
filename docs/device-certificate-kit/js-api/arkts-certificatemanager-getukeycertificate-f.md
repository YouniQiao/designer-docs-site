# getUkeyCertificate

## getUkeyCertificate

```TypeScript
function getUkeyCertificate(keyUri: string, ukeyInfo: UkeyInfo): Promise<CMResult>
```

获取USB Key证书凭据详细信息。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示USB Key证书凭据的唯一标识符，长度限制256字节以内 |
| ukeyInfo | UkeyInfo | Yes | 表示USB Key证书凭据的属性信息 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取到的USB Key证书凭据详情的结果，返回值为 [CMResult]certificateManager.CMResult对象中的credentialDetailList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 801 | Capability not supported.  The application does not have the permission required to call the API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | Indicates that the certificate does not exist. |
| 17500010 | Indicates that access USB Key service failed. |
| 17500011 | Indicates that the input parameters validation failed.  For example, the parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let keyUri: string = 'test'; /* Unique identifier of the USB credential. The value is omitted here. */
let ukeyInfo: certificateManager.UkeyInfo = { /* USB credential attributes. The value is omitted here. */
  certPurpose: certificateManager.CertificatePurpose.PURPOSE_DEFAULT,
}
try {
  certificateManager.getUkeyCertificate(keyUri, ukeyInfo).then((cmResult) => {
    let list = cmResult.credentialDetailList;
    console.info('Succeeded in getting detail of USB key certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get detail of USB key certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get detail of USB key certificate. Code: ${error.code}, message: ${error.message}`);
}

```

