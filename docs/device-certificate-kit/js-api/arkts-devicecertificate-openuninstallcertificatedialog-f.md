# openUninstallCertificateDialog

## Modules to Import

```TypeScript
import { certificateManagerDialog } from '@ohos.security.certManagerDialog';
```

## openUninstallCertificateDialog

```TypeScript
function openUninstallCertificateDialog(context: common.Context, certType: CertificateType, certUri: string): Promise<void>
```

Open the Certificate Management Uninstall Certificate dialog. The corresponding page is displayed. Use Promise asynchronous callbacks.

**Since:** 18

**Required permissions:** ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | Context of the application. |
| certType | CertificateType | Yes | The type of the certificate to uninstall, only CA_CERT is supported.<br>Currently, only the CA_CERT type is supported. |
| certUri | string | Yes | Unique identifier of the certificate to uninstall. You can obtain the certUri by usingthe API for installing a CA certificate or querying the CA certificate list. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [29700001](../errorcode-certManagerDialog.md#29700001-internal-error) | Internal error. Possible causes: 1. IPC communication failed;<br>2. Memory operation error; 3. File operation error. Please try again. |
| [29700002](../errorcode-certManagerDialog.md#29700002-operation-canceled) | The user cancels the uninstallation operation. |
| [29700003](../errorcode-certManagerDialog.md#29700003-failed-to-install-the-certificate) | The user uninstall certificate failed in the certificate manager dialog, suchas the certificate uri is not exist. |
| [29700004](../errorcode-certManagerDialog.md#29700004-operation-not-supported-by-the-device) | For security purposes, the current device does not support this API.You can use the [supportsCACertDialog](arkts-devicecertificate-supportscacertdialog-f.md#supportscacertdialog-1) to determinewhether the device can open the dialog box for deleting a CA certificate with certType set to CA. |
| [29700005](../errorcode-certManagerDialog.md#29700005-nonsecure-operation) | The operation does not comply with the device security policy, such as thedevice does not allow users to manage the CA certificate of the global user. |

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

