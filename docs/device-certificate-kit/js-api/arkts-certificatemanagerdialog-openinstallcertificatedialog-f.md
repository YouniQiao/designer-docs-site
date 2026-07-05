# openInstallCertificateDialog

## openInstallCertificateDialog

```TypeScript
function openInstallCertificateDialog(context: common.Context, certType: CertificateType, certScope: CertificateScope, cert: Uint8Array): Promise<string>
```

打开证书管理安装证书向导，显示相应的页面。证书安装成功后，返回证书的唯一标识符，应用可通过该标识符对证书进行使用。使用Promise异步回调。

**Since:** 14

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | 表示应用的上下文信息。 |
| certType | CertificateType | Yes | 表示安装证书类型，目前仅支持CA_CERT、CREDENTIAL_USER、CREDENTIAL_SYSTEM。 |
| certScope | CertificateScope | Yes | 表示安装证书的使用范围，目前仅支持CURRENT_USER、NOT_SPECIFIED。 |
| cert | Uint8Array | Yes | 表示证书数据，大小不超过8KB。 当certType为CA_CERT，应为PEM或DER编码格式的证书数据。 当certType为CREDENTIAL_USER或CREDENTIAL_SYSTEM，应为P12编码格式的  证书凭据数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。表示返回证书uri的结果，最大长度为256字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | The certificate management application Hap is not preinstalled in the system,  and the capability is not supported. [since 26.0.0] |
| 29700001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 29700002 | The user cancels the installation operation. |
| 29700003 | The user install certificate failed in the certificate manager dialog, such as  the certificate is in an invalid format. |
| 29700004 | For security purposes, the current device does not support this API.  You can use the [supportsCACertDialog]certificateManagerDialog.supportsCACertDialog to determine  whether the device supports opening the dialog box for installing a CA certificate with certType set to CA. |
| 29700005 | The operation does not comply with the device security policy, such as the  device does not allow users to manage the CA certificate of the global user. [since 18] |

**Example**

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

/* context is application context information, which is obtained by the caller. The context here is only an example. */
let context: common.Context = new UIContext().getHostContext() as common.Context;
/* certificateType specifies the certificate type. The value CA_CERT here indicates a CA certificate. */
let certificateType: certificateManagerDialog.CertificateType = certificateManagerDialog.CertificateType.CA_CERT;
/* certificateScope specifies the usage scope of the certificate. The value CURRENT_USER here means the certificate can be used by the current user. */
let certificateScope: certificateManagerDialog.CertificateScope = certificateManagerDialog.CertificateScope.CURRENT_USER;
/* The CA certificate data must be assigned by the service. In this example, the data is not CA certificate data. */
let caCert: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
try {
  certificateManagerDialog.openInstallCertificateDialog(context, certificateType, certificateScope, caCert).then((uri: string) => {
    console.info('Succeeded in opening install certificate');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to open install certificate dialog. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to open install certificate dialog. Code: ${error.code}, message: ${error.message}`);
}

```

