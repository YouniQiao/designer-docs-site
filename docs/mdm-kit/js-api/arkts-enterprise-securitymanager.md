# @ohos.enterprise.securityManager

The **securityManager** module provides device security management capabilities, including obtaining the security patch status and file system encryption status.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).

**Since:** 11

<!--Device-unnamed-declare namespace securityManager--><!--Device-unnamed-declare namespace securityManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedPermissionBundle](arkts-mdm-securitymanager-addallowedpermissionbundle-f.md#addallowedpermissionbundle) | Adds the application to the list of applications allowed to grant the permission. |
| [cancelScreenWatermarkImage](arkts-mdm-securitymanager-cancelscreenwatermarkimage-f.md#cancelscreenwatermarkimage) | Cancels the watermark image displayed on the screen. |
| [cancelWatermarkImage](arkts-mdm-securitymanager-cancelwatermarkimage-f.md#cancelwatermarkimage) | Cancels the watermark policy for a specified user. |
| [getAllowedPermissionBundles](arkts-mdm-securitymanager-getallowedpermissionbundles-f.md#getallowedpermissionbundles) | Gets the applications that are allowed to be granted the permission. |
| [getAppClipboardPolicy](arkts-mdm-securitymanager-getappclipboardpolicy-f.md#getappclipboardpolicy) | Obtains the device clipboard policy. |
| [getAppClipboardPolicy](arkts-mdm-securitymanager-getappclipboardpolicy-f.md#getappclipboardpolicy-1) | Obtains the device clipboard policy of a specified application for a specified user. |
| [getDisallowedPermissions](arkts-mdm-securitymanager-getdisallowedpermissions-f.md#getdisallowedpermissions) | Gets the permissions that are disallowed to be granted for an account. |
| [getExternalSourceExtensionsPolicy](arkts-mdm-securitymanager-getexternalsourceextensionspolicy-f.md#getexternalsourceextensionspolicy) | Obtains the management policy for extensions from external sources. |
| [getPasswordPolicy](arkts-mdm-securitymanager-getpasswordpolicy-f.md#getpasswordpolicy) | Obtains the device screen lock password policy. |
| [getPermissionManagedState](arkts-mdm-securitymanager-getpermissionmanagedstate-f.md#getpermissionmanagedstate) | Obtains the management policy for the [user_grant permission](../../apis-ability-kit/arkts-apis/arkts-ability-permissions-t.md) of a specified application. |
| [getSecurityStatus](arkts-mdm-securitymanager-getsecuritystatus-f.md#getsecuritystatus) | Obtains the security status of the current device. |
| [getUserCertificates](arkts-mdm-securitymanager-getusercertificates-f.md#getusercertificates) | Obtains the user certificate of a specified system account. |
| [getWatermarkImageApps](arkts-mdm-securitymanager-getwatermarkimageapps-f.md#getwatermarkimageapps) | Gets the bundle names of the applications that have been set watermark. |
| [installEnterpriseReSignatureCertificate](arkts-mdm-securitymanager-installenterpriseresignaturecertificate-f.md#installenterpriseresignaturecertificate) | Installs the enterprise re-signing certificate.  A maximum of 10 distinct certificates can be deployed per user. The certificate alias serves as a unique identifier for each certificate and cannot be duplicated during deployment. To update a certificate with an existing alias,you must first uninstall the old certificate by calling [uninstallEnterpriseReSignatureCertificate](arkts-mdm-securitymanager-uninstallenterpriseresignaturecertificate-f.md#uninstallenterpriseresignaturecertificate-1).  The installed certificates are retained on the device and will not be removed when the MDM app is uninstalled or the admin privilege is deactivated.  In the enterprise app distribution scenario, <!--RP2--><!--RP2End-->you can use the re-signing certificate to re-sign enterprise apps. After re-signing, the app package is provided to enterprise administrators, who can then install the re-signed app on enterprise devices where the corresponding re-signing certificate has been deployed.  Process of using the enterprise re-signing certificate:<!--RP3--><!--RP3End-->  1. Installs the enterprise re-signing certificate through the MDM app.2. Re-sign the original HAP package using a signing tool (**ohos-signer** or the DevEco Studio signing plugin).3. Install the re-signed app (through the enterprise private app store).4. Launch and run the app.  Specifications:  1. Apps signed with the old certificate will continue to run normally after a new re-signing certificate is installed.2. After a new enterprise signing certificate is installed for an installed enterprise app, if the installed app needs to be updated, you can directly overwrite the original app without uninstalling it.3. In enterprise scenarios (especially those involving information security), enterprises need to ensure that only designated internal software and tools are installed and run on employees' mobile devices. The enterprise re-signing certificate, in conjunction with the system's app management and permission controlmechanisms (via a unified app ID), supports silent installation of enterprise apps, controlled invocation of system capabilities,and restriction of app running scopes. This enables admission control and security governance for enterprise software on managed devices. |
| [installUserCertificate](arkts-mdm-securitymanager-installusercertificate-f.md#installusercertificate) | Installs a user certificate. This API uses a promise to return the result. |
| [installUserCertificate](arkts-mdm-securitymanager-installusercertificate-f.md#installusercertificate-1) | Installs a user certificate based on the system account. |
| [isScreenLockDisabledForAccount](arkts-mdm-securitymanager-isscreenlockdisabledforaccount-f.md#isscreenlockdisabledforaccount) | Queries whether the screen lock is disabled. |
| [removeAllowedPermissionBundle](arkts-mdm-securitymanager-removeallowedpermissionbundle-f.md#removeallowedpermissionbundle) | Removes the application from the list of applications allowed to grant the permission. |
| [setAppClipboardPolicy](arkts-mdm-securitymanager-setappclipboardpolicy-f.md#setappclipboardpolicy) | Sets the device clipboard policy. |
| [setAppClipboardPolicy](arkts-mdm-securitymanager-setappclipboardpolicy-f.md#setappclipboardpolicy-1) | Sets the device clipboard policy of a specified application for a specified user. |
| [setDisallowedPermission](arkts-mdm-securitymanager-setdisallowedpermission-f.md#setdisallowedpermission) | Sets the permissions that are disallowed to be granted for an account. |
| [setExternalSourceExtensionsPolicy](arkts-mdm-securitymanager-setexternalsourceextensionspolicy-f.md#setexternalsourceextensionspolicy) | Sets the management policy for extensions from external sources.  - DEFAULT:  Default policy with no restrictions applied. Users can enable or disable **Run extensions from external sources** in **Settings** > **Privacy & security** > **Advanced option**.  - DISALLOW:  Policy that disallows extensions from external sources to run. With this policy, currently running extensions can continue, but cannot be started after being closed. Users cannot enable **Run extensions from external sources**.  - FORCE_OPEN:  Policy that forcibly enables extensions from external sources to run. Users cannot disable **Run extensions from external sources**. |
| [setPasswordPolicy](arkts-mdm-securitymanager-setpasswordpolicy-f.md#setpasswordpolicy) | Sets the device screen lock password policy. During screen lock password setting, if the current screen lock password does not meet the requirements, a security message will be displayed, prompting the user to reset the screen lock password. |
| [setPermissionManagedState](arkts-mdm-securitymanager-setpermissionmanagedstate-f.md#setpermissionmanagedstate) | Sets the management policy for the [user_grant permission](../../apis-ability-kit/arkts-apis/arkts-ability-permissions-t.md) of a specified application. |
| [setScreenLockDisabledForAccount](arkts-mdm-securitymanager-setscreenlockdisabledforaccount-f.md#setscreenlockdisabledforaccount) | Sets the screen lock disabled for current account. |
| [setScreenWatermarkImage](arkts-mdm-securitymanager-setscreenwatermarkimage-f.md#setscreenwatermarkimage) | Sets the watermark image to be displayed on the screen. |
| [setWatermarkImage](arkts-mdm-securitymanager-setwatermarkimage-f.md#setwatermarkimage) | Sets a watermark policy for a specified application of a specified user. Currently, a maximum of 100 policies can be saved. |
| [setWatermarkImage](arkts-mdm-securitymanager-setwatermarkimage-f.md#setwatermarkimage-1) | Sets the watermark image displayed during the application running. |
| [uninstallEnterpriseReSignatureCertificate](arkts-mdm-securitymanager-uninstallenterpriseresignaturecertificate-f.md#uninstallenterpriseresignaturecertificate) | Uninstalls the enterprise re-signing certificate. |
| [uninstallUserCertificate](arkts-mdm-securitymanager-uninstallusercertificate-f.md#uninstallusercertificate) | Uninstalls a user certificate. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDeviceEncryptionStatus](arkts-mdm-securitymanager-getdeviceencryptionstatus-f-sys.md#getdeviceencryptionstatus) | Queries the encryption status of the device file system. |
| [getPasswordPolicy](arkts-mdm-securitymanager-getpasswordpolicy-f-sys.md#getpasswordpolicy-1) | Obtains the device screen lock password policy. |
| [getSecurityPatchTag](arkts-mdm-securitymanager-getsecuritypatchtag-f-sys.md#getsecuritypatchtag) | Queries the security patch tag of a device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInstance](arkts-mdm-securitymanager-applicationinstance-i.md) | Application instance |
| [CertBlob](arkts-mdm-securitymanager-certblob-i.md) | Represents the certificate information. |
| [PasswordPolicy](arkts-mdm-securitymanager-passwordpolicy-i.md) | Represents a device screen lock password policy. |
| [WatermarkProperties](arkts-mdm-securitymanager-watermarkproperties-i.md) | The properties of a watermark. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceEncryptionStatus](arkts-mdm-securitymanager-deviceencryptionstatus-i-sys.md) | Represents the file system encryption status. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ClipboardPolicy](arkts-mdm-securitymanager-clipboardpolicy-e.md) | Represents a device clipboard policy. |
| [PasswordAlgs](arkts-mdm-securitymanager-passwordalgs-e.md) | Encryption algorithm. |
| [PermissionManagedState](arkts-mdm-securitymanager-permissionmanagedstate-e.md) | Represents the management status of application permissions. |

