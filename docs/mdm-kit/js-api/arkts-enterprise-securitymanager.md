# @ohos.enterprise.securityManager

The **securityManager** module provides device security management capabilities, including obtaining the security patch status and file system encryption status. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 11

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedPermissionBundle](arkts-mdm-addallowedpermissionbundle-f.md#addallowedpermissionbundle-1) | Adds the application to the list of applications allowed to grant the permission. |
| [cancelScreenWatermarkImage](arkts-mdm-cancelscreenwatermarkimage-f.md#cancelscreenwatermarkimage-1) | Cancels the watermark image displayed on the screen. |
| [cancelWatermarkImage](arkts-mdm-cancelwatermarkimage-f.md#cancelwatermarkimage-1) | Cancels the watermark policy for a specified user. |
| [getAllowedPermissionBundles](arkts-mdm-getallowedpermissionbundles-f.md#getallowedpermissionbundles-1) | Gets the applications that are allowed to be granted the permission. |
| [getAppClipboardPolicy](arkts-mdm-getappclipboardpolicy-f.md#getappclipboardpolicy-1) | Obtains the device clipboard policy. |
| [getAppClipboardPolicy](arkts-mdm-getappclipboardpolicy-f.md#getappclipboardpolicy-2) | Obtains the device clipboard policy of a specified application for a specified user. |
| [getDisallowedPermissions](arkts-mdm-getdisallowedpermissions-f.md#getdisallowedpermissions-1) | Gets the permissions that are disallowed to be granted for an account. |
| [getExternalSourceExtensionsPolicy](arkts-mdm-getexternalsourceextensionspolicy-f.md#getexternalsourceextensionspolicy-1) | Obtains the management policy for extensions from external sources. |
| [getPasswordPolicy](arkts-mdm-getpasswordpolicy-f.md#getpasswordpolicy-1) | Obtains the device screen lock password policy. |
| [getPermissionManagedState](arkts-mdm-getpermissionmanagedstate-f.md#getpermissionmanagedstate-1) | Obtains the management policy for the [user_grant permission](../../apis-ability-kit/arkts-apis/arkts-ability-permissions-t.md) of a specified application. |
| [getSecurityStatus](arkts-mdm-getsecuritystatus-f.md#getsecuritystatus-1) | Obtains the security status of the current device. |
| [getUserCertificates](arkts-mdm-getusercertificates-f.md#getusercertificates-1) | Obtains the user certificate of a specified system account. |
| [getWatermarkImageApps](arkts-mdm-getwatermarkimageapps-f.md#getwatermarkimageapps-1) | Gets the bundle names of the applications that have been set watermark. |
| [installEnterpriseReSignatureCertificate](arkts-mdm-installenterpriseresignaturecertificate-f.md#installenterpriseresignaturecertificate-1) | Installs the enterprise re-signing certificate. A maximum of 10 distinct certificates can be deployed per user. The certificate alias serves as a unique identifier for each certificate and cannot be duplicated during deployment. To update a certificate with an existing alias, you must first uninstall the old certificate by calling [uninstallEnterpriseReSignatureCertificate](arkts-mdm-uninstallenterpriseresignaturecertificate-f.md#uninstallenterpriseresignaturecertificate-1). The installed certificates are retained on the device and will not be removed when the MDM app is uninstalled or the admin privilege is deactivated. In the enterprise app distribution scenario, &lt;!--RP2--&gt;&lt;!--RP2End--&gt;you can use the re-signing certificate to re- sign enterprise apps. After re-signing, the app package is provided to enterprise administrators, who can then install the re-signed app on enterprise devices where the corresponding re-signing certificate has been deployed. Process of using the enterprise re-signing certificate:&lt;!--RP3--&gt;&lt;!--RP3End--&gt; 1. Installs the enterprise re-signing certificate through the MDM app. 2. Re-sign the original HAP package using a signing tool (**ohos-signer** or the DevEco Studio signing plugin). 3. Install the re-signed app (through the enterprise private app store). 4. Launch and run the app. Specifications: 1. Apps signed with the old certificate will continue to run normally after a new re-signing certificate is installed. 2. After a new enterprise signing certificate is installed for an installed enterprise app, if the installed app needs to be updated, you can directly overwrite the original app without uninstalling it. 3. In enterprise scenarios (especially those involving information security), enterprises need to ensure that only designated internal software and tools are installed and run on employees' mobile devices. The enterprise re-signing certificate, in conjunction with the system's app management and permission controlmechanisms (via a unified app ID), supports silent installation of enterprise apps, controlled invocation of system capabilities, and restriction of app running scopes. This enables admission control and security governance for enterprise software on managed devices. |
| [installUserCertificate](arkts-mdm-installusercertificate-f.md#installusercertificate-1) | Installs a user certificate. This API uses a promise to return the result. |
| [installUserCertificate](arkts-mdm-installusercertificate-f.md#installusercertificate-2) | Installs a user certificate based on the system account. |
| [isScreenLockDisabledForAccount](arkts-mdm-isscreenlockdisabledforaccount-f.md#isscreenlockdisabledforaccount-1) | Queries whether the screen lock is disabled. |
| [removeAllowedPermissionBundle](arkts-mdm-removeallowedpermissionbundle-f.md#removeallowedpermissionbundle-1) | Removes the application from the list of applications allowed to grant the permission. |
| [setAppClipboardPolicy](arkts-mdm-setappclipboardpolicy-f.md#setappclipboardpolicy-1) | Sets the device clipboard policy. |
| [setAppClipboardPolicy](arkts-mdm-setappclipboardpolicy-f.md#setappclipboardpolicy-2) | Sets the device clipboard policy of a specified application for a specified user. |
| [setDisallowedPermission](arkts-mdm-setdisallowedpermission-f.md#setdisallowedpermission-1) | Sets the permissions that are disallowed to be granted for an account. |
| [setExternalSourceExtensionsPolicy](arkts-mdm-setexternalsourceextensionspolicy-f.md#setexternalsourceextensionspolicy-1) | Sets the management policy for extensions from external sources. - DEFAULT: Default policy with no restrictions applied. Users can enable or disable **Run extensions from external sources** in **Settings** &gt; **Privacy & security** &gt; **Advanced option**. - DISALLOW: Policy that disallows extensions from external sources to run. With this policy, currently running extensions can continue, but cannot be started after being closed. Users cannot enable **Run extensions from external sources**. - FORCE_OPEN: Policy that forcibly enables extensions from external sources to run. Users cannot disable **Run extensions from external sources**. |
| [setPasswordPolicy](arkts-mdm-setpasswordpolicy-f.md#setpasswordpolicy-1) | Sets the device screen lock password policy. During screen lock password setting, if the current screen lock password does not meet the requirements, a security message will be displayed, prompting the user to reset the screen lock password. |
| [setPermissionManagedState](arkts-mdm-setpermissionmanagedstate-f.md#setpermissionmanagedstate-1) | Sets the management policy for the [user_grant permission](../../apis-ability-kit/arkts-apis/arkts-ability-permissions-t.md) of a specified application. |
| [setScreenLockDisabledForAccount](arkts-mdm-setscreenlockdisabledforaccount-f.md#setscreenlockdisabledforaccount-1) | Sets the screen lock disabled for current account. |
| [setScreenWatermarkImage](arkts-mdm-setscreenwatermarkimage-f.md#setscreenwatermarkimage-1) | Sets the watermark image to be displayed on the screen. |
| [setWatermarkImage](arkts-mdm-setwatermarkimage-f.md#setwatermarkimage-1) | Sets a watermark policy for a specified application of a specified user. Currently, a maximum of 100 policies can be saved. &gt; **NOTE** &gt; &gt; This API is applicable to setting watermarks for third-party applications in enterprise scenarios to reduce the &gt; risk of enterprise information leakage. You are not advised to set watermarks for system applications (such as &gt; the home screen application), as unknown exceptions may occur. |
| [setWatermarkImage](arkts-mdm-setwatermarkimage-f.md#setwatermarkimage-2) | Sets the watermark image displayed during the application running. |
| [uninstallEnterpriseReSignatureCertificate](arkts-mdm-uninstallenterpriseresignaturecertificate-f.md#uninstallenterpriseresignaturecertificate-1) | Uninstalls the enterprise re-signing certificate. |
| [uninstallUserCertificate](arkts-mdm-uninstallusercertificate-f.md#uninstallusercertificate-1) | Uninstalls a user certificate. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDeviceEncryptionStatus](arkts-mdm-getdeviceencryptionstatus-f-sys.md#getdeviceencryptionstatus-1) | Queries the encryption status of the device file system. |
| [getPasswordPolicy](arkts-mdm-getpasswordpolicy-f-sys.md#getpasswordpolicy-2) | Obtains the device screen lock password policy. |
| [getSecurityPatchTag](arkts-mdm-getsecuritypatchtag-f-sys.md#getsecuritypatchtag-1) | Queries the security patch tag of a device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInstance](arkts-mdm-applicationinstance-i.md) | Application instance |
| [CertBlob](arkts-mdm-certblob-i.md) | Represents the certificate information. |
| [PasswordPolicy](arkts-mdm-passwordpolicy-i.md) | Represents a device screen lock password policy. |
| [WatermarkProperties](arkts-mdm-watermarkproperties-i.md) | The properties of a watermark. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceEncryptionStatus](arkts-mdm-deviceencryptionstatus-i-sys.md) | Represents the file system encryption status. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ClipboardPolicy](arkts-mdm-clipboardpolicy-e.md) | Represents a device clipboard policy. |
| [PasswordAlgs](arkts-mdm-passwordalgs-e.md) | Encryption algorithm. |
| [PermissionManagedState](arkts-mdm-permissionmanagedstate-e.md) | Represents the management status of application permissions. |

