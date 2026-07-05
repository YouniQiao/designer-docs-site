# getUkeyCertificateList

## getUkeyCertificateList

```TypeScript
function getUkeyCertificateList(ukeyProvider: string, ukeyInfo: UkeyInfo): Promise<CMResult>
```

获取USB Key证书凭据列表。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ukeyProvider | string | Yes | 表示USB Key的设备提供商 |
| ukeyInfo | UkeyInfo | Yes | 表示USB Key证书凭据的属性信息 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取USB Key证书凭据列表的结果，返回值为[CMResult]certificateManager.CMResult对象中的  credentialDetailList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. |
| 17500010 | Indicates that access USB Key service failed. |
| 17500011 | Parameter verification failed.  Possible causes: the ukeyInfo parameter is invalid.  For example, the parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let ukeyProvider: string = 'testProvider'; /* USB credential provider, which is omitted here. */
let ukeyInfo: certificateManager.UkeyInfo = { /* USB credential attributes. The value is omitted here. */
  certPurpose: certificateManager.CertificatePurpose.PURPOSE_DEFAULT,
}
try {
  certificateManager.getUkeyCertificateList(ukeyProvider, ukeyInfo).then((cmResult) => {
    let list: Array<certificateManager.Credential> = cmResult.credentialDetailList ?? [];
    console.info('Succeeded in getting USB key certificate list.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get USB key certificate list. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get USB key certificate list. Code: ${error.code}, message: ${error.message}`);
}

```

