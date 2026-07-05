# getUkeyCertificate

## getUkeyCertificate

```TypeScript
function getUkeyCertificate(keyUri: string, ukeyInfo: UkeyInfo): Promise<CMResult>
```

获取USB Key证书凭据详细信息。使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.ACCESS_CERT_MANAGER

**系统能力：** SystemCapability.Security.CertificateManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyUri | string | 是 | 表示USB Key证书凭据的唯一标识符，长度限制256字节以内 |
| ukeyInfo | UkeyInfo | 是 | 表示USB Key证书凭据的属性信息 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取到的USB Key证书凭据详情的结果，返回值为 [CMResult]certificateManager.CMResult对象中的credentialDetailList属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 801 | Capability not supported.  The application does not have the permission required to call the API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | Indicates that the certificate does not exist. |
| 17500010 | Indicates that access USB Key service failed. |
| 17500011 | Indicates that the input parameters validation failed.  For example, the parameter format is incorrect or the value range is invalid. |

**示例：**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let keyUri: string = 'test'; /* USB凭据的唯一标识符，此处省略 */
let ukeyInfo: certificateManager.UkeyInfo = { /* USB凭据的属性信息，此处省略 */
  certPurpose: certificateManager.CertificatePurpose.PURPOSE_DEFAULT,
}
try {
  certificateManager.getUkeyCertificate(keyUri, ukeyInfo).then((cmResult) => {
    let list = cmResult.credentialDetailList;
    console.info('Succeeded in getting detail of USB Key certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get detail of USB Key certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get detail of USB Key certificate. Code: ${error.code}, message: ${error.message}`);
}

```

