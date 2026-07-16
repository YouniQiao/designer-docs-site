# @ohos.security.certManagerDialog

The **certificateManagerDialog** module provides APIs for opening the certificate management pages, on which you can
view and manage certificates (install, uninstall, and authorize certificates).

**Since:** 13

**System capability:** SystemCapability.Security.CertificateManagerDialog

## Modules to Import

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [openAuthorizeDialog](arkts-devicecertificate-openauthorizedialog-f.md#openauthorizedialog-1) | Opens the authorization page of the certificate management dialog box to grant a credential to the application.After the API is successfully called, the app can use the URI of the authorization certificate returned by the APIto sign, verify the signature, and query details.This API uses a promise to return the result. |
| [openAuthorizeDialog](arkts-devicecertificate-openauthorizedialog-f.md#openauthorizedialog-2) | Opens the Certificate Credential Authorization page of the Certificate Management dialog box. On the page that isdisplayed, you can authorize the application to use certificate credentials. After the API is called successfully,the app can use the URI of the authorization certificate returned by the API to sign, verify the signature, andquery details. The types of certificates that can be authorized include application certificate credentials, usercertificate credentials, and USB Key certificate credentials. Using Promise Asynchronous Callbacks. |
| [openCertificateDetailDialog](arkts-devicecertificate-opencertificatedetaildialog-f.md#opencertificatedetaildialog-1) | Opens the Certificate Management dialog box to display the certificate details. After the interface is invokedsuccessfully, detailed information about the certificate, such as the basic information, validity period, issuer,and user, is displayed. Use Promise asynchronous callback. |
| [openCertificateManagerDialog](arkts-devicecertificate-opencertificatemanagerdialog-f.md#opencertificatemanagerdialog-1) | Opens the certificate management dialog box and displays the page of the specified type. After the interface isinvoked successfully, you can view, install, and uninstall the certificate in the dialog box that is displayed.This API uses a promise to return the result. |
| [openInstallCertificateDialog](arkts-devicecertificate-openinstallcertificatedialog-f.md#openinstallcertificatedialog-1) | Opens the Certificate Management Install Certificate dialog box. After the certificate is successfully installed,the unique identifier of the certificate is returned. Applications can use the identifier to use the certificate.Use Promise asynchronous callback. |
| [openUkeyAuthDialog](arkts-devicecertificate-openukeyauthdialog-f.md#openukeyauthdialog-1) | Opens the PIN authentication dialog box of the USB Key credential. On the displayed page, the user can enter thePIN toauthorize the USB credential. After the call is successful, the USB key credential will be unlocked. The app canuse the credential to perform operations such as signing and encryption. This API uses a promise to return theresult. |
| [openUninstallCertificateDialog](arkts-devicecertificate-openuninstallcertificatedialog-f.md#openuninstallcertificatedialog-1) | Open the Certificate Management Uninstall Certificate dialog. The corresponding page is displayed. Use Promiseasynchronous callbacks. |
| [supportsCACertDialog](arkts-devicecertificate-supportscacertdialog-f.md#supportscacertdialog-1) | Check whether the device supports the [openCertificateDetailDialog]{@linkcertificateManagerDialog.openCertificateDetailDialog}, [openInstallCertificateDialog]{@linkcertificateManagerDialog.openInstallCertificateDialog}, and [openUninstallCertificateDialog]{@linkcertificateManagerDialog.openUninstallCertificateDialog} interfaces to open the dialog box for managing CAcertificates. |

### Interfaces

| Name | Description |
| --- | --- |
| [AuthorizeRequest](arkts-devicecertificate-authorizerequest-i.md) | Represents the authorization request information of the credentials. |
| [CertReference](arkts-devicecertificate-certreference-i.md) | Represents the reference information of the credential. |
| [CertificateDialogProperty](arkts-devicecertificate-certificatedialogproperty-i.md) | Defines the property of the certificate management dialog box. |
| [UkeyAuthRequest](arkts-devicecertificate-ukeyauthrequest-i.md) | USB key PIN authentication request. |

### Enums

| Name | Description |
| --- | --- |
| [CertificateDialogErrorCode](arkts-devicecertificate-certificatedialogerrorcode-e.md) | Enumerates the error codes reported when the certificate management dialog box APIs are called. |
| [CertificateDialogPageType](arkts-devicecertificate-certificatedialogpagetype-e.md) | Enumerates the page types of the certificate management dialog box. |
| [CertificateScope](arkts-devicecertificate-certificatescope-e.md) | Defines the usage scope of the certificate to be installed. |
| [CertificateType](arkts-devicecertificate-certificatetype-e.md) | Enumerates the types of the certificate to be installed. |

