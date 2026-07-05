# getUkeyCertificateList

## getUkeyCertificateList

```TypeScript
function getUkeyCertificateList(ukeyProvider: string, ukeyInfo: UkeyInfo): Promise<CMResult>
```

获取USB Key证书凭据列表。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_CERT_MANAGER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.CertificateManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ukeyProvider | string | 是 | 表示USB Key的设备提供商 |
| ukeyInfo | UkeyInfo | 是 | 表示USB Key证书凭据的属性信息 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取USB Key证书凭据列表的结果，返回值为[CMResult]certificateManager.CMResult对象中的  credentialDetailList属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. |
| 17500010 | Indicates that access USB Key service failed. |
| 17500011 | Parameter verification failed.  Possible causes: the ukeyInfo parameter is invalid.  For example, the parameter format is incorrect or the value range is invalid. |

**示例：**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ukeyProvider: string = 'testProvider'; /* USB凭据提供商，此处省略 */
let ukeyInfo: certificateManager.UkeyInfo = { /* USB凭据的属性信息，此处省略 */
  certPurpose: certificateManager.CertificatePurpose.PURPOSE_DEFAULT,
}
try {
  certificateManager.getUkeyCertificateList(ukeyProvider, ukeyInfo).then((cmResult) => {
    let list: Array<certificateManager.Credential> = cmResult.credentialDetailList ?? [];
    console.info('Succeeded in getting USB Key certificate list.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get USB Key certificate list. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get USB Key certificate list. Code: ${error.code}, message: ${error.message}`);
}

```

