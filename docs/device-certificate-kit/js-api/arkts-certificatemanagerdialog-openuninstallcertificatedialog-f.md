# openUninstallCertificateDialog

## openUninstallCertificateDialog

```TypeScript
function openUninstallCertificateDialog(context: common.Context, certType: CertificateType, certUri: string): Promise<void>
```

打开证书管理卸载证书向导，显示相应的页面。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | 表示应用的上下文信息。 |
| certType | CertificateType | Yes | 表示待卸载证书类型，目前仅支持CA_CERT。  目前仅支持CA_CERT类型。 |
| certUri | string | Yes | 表示待卸载证书的唯一标识符，可通过安装CA证书接口或查询CA证书列表接口获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 29700001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 29700002 | The user cancels the uninstallation operation. |
| 29700003 | The user uninstall certificate failed in the certificate manager dialog, such  as the certificate uri is not exist. |
| 29700004 | For security purposes, the current device does not support this API.  You can use the [supportsCACertDialog]certificateManagerDialog.supportsCACertDialog to determine  whether the device can open the dialog box for deleting a CA certificate with certType set to CA. |
| 29700005 | The operation does not comply with the device security policy, such as the  device does not allow users to manage the CA certificate of the global user. |

**Example**

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

/* context is application context information, which is obtained by the caller. The context here is only an example. */
let context: common.Context = new UIContext().getHostContext() as common.Context;
/* certificateType specifies the certificate type. The value CA_CERT indicates a CA certificate is deleted. */
let certificateType: certificateManagerDialog.CertificateType = certificateManagerDialog.CertificateType.CA_CERT;
/* certUri is the unique identifier of the certificate installed. The value here is only an example. */
let certUri: string = "test";
try {
  certificateManagerDialog.openUninstallCertificateDialog(context, certificateType, certUri).then(() => {
    console.info('Succeeded in opening uninstall certificate');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to open uninstall certificate dialog. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to open uninstall certificate dialog. Code: ${error.code}, message: ${error.message}`);
}

```

