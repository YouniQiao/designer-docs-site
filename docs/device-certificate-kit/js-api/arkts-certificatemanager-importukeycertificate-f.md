# importUkeyCertificate

## importUkeyCertificate

```TypeScript
function importUkeyCertificate(keyUri: string, cert: Uint8Array, ukeyInfo: UkeyInfo): Promise<void>
```

导入证书到USB Key

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示USB Key证书凭据的uri.  最大长度为256且不能为空。  keyUri参数用于标识证书实体，可以通过调用[getUkeyCertificateList]certificateManager.getUkeyCertificateList接口得到。 |
| cert | Uint8Array | Yes | 表示待导入的证书数据。  最大长度为10240且不能为空。  证书数据格式遵循SKF（Smart Key Framework）规范的定义。 |
| ukeyInfo | UkeyInfo | Yes | 表示USB Key证书属性信息。  UkeyInfo.CertificatePurpose只能取值为PURPOSE_SIGN、PURPOSE_ENCRYPT或PURPOSE_DEFAULT。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate identified by keyUri does not exist |
| 17500010 | Indicates that access USB Key service failed. |
| 17500011 | Indicates that the input parameters validation failed.  For example, the parameter format is incorrect or the value range is invalid. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* keyUri and cert must be assigned based on the service. The data in this example is for reference only. */
let keyUri: string = 'test'; /* URI of the USB key certificate, which can be obtained using the getUkeyCertificateList API. */
let certData: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
let ukeyInfo: certificateManager.UkeyInfo = {
  certPurpose: certificateManager.CertificatePurpose.PURPOSE_SIGN,
};
try {
  certificateManager.importUkeyCertificate(keyUri, certData, ukeyInfo).then(() => {
    console.info('Succeeded in importing USB key certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to import USB key certificate. Code: ${err.code}, message: ${err.message}`);
  });
} catch (error) {
  console.error(`Failed to import USB key certificate. Code: ${error.code}, message: ${error.message}`);
}

```

