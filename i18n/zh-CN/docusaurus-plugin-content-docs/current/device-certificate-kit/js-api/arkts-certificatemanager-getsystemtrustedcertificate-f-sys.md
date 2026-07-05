# getSystemTrustedCertificate

## getSystemTrustedCertificate

```TypeScript
function getSystemTrustedCertificate(certUri: string): Promise<CMResult>
```

获取系统信任的CA证书详情，仅证书管理应用调用。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.CertificateManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| certUri | string | 是 | 表示证书的唯一标识符。可通过  [getSystemTrustedCertificateList]certificateManager.getSystemTrustedCertificateList接口获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取系统信任CA证书详细信息的结果，返回值为  [CMResult](arkts-certificatemanager-cmresult-i.md#CMResult)对象中的certInfo属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter verification failed.  Possible causes: the URI is null or the URI format is wrong. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |

**示例：**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let certUri: string = 'test'; /* 证书的唯一标识符，可通过getSystemTrustedCertificateList接口获取 */
try {
  certificateManager.getSystemTrustedCertificate(certUri).then((cmResult: certificateManager.CMResult) => {
    if (cmResult?.certInfo == undefined) {
      console.info('The result of getting system trusted certificate is undefined.');
    } else {
      let cert: certificateManager.CertInfo = cmResult.certInfo;
      console.info('Succeeded in getting system trusted certificate.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get system trusted certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get system trusted certificate. Code: ${error.code}, message: ${error.message}`);
}

```

