# @ohos.enterprise.securityManager

本模块提供设备安全管理的能力，包括查询安全补丁状态、查询文件加密状态等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

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
| [addAllowedPermissionBundle](arkts-securitymanager-addallowedpermissionbundle-f.md#addAllowedPermissionBundle-1) | 添加允许使用已禁用指定权限的应用到权限使用例外名单，权限使用例外名单中的应用可以不受[setDisallowedPermission]{@link securityManager.setDisallowedPermission}的策略限制。 |
| [addUserExtCredential](arkts-securitymanager-adduserextcredential-f.md#addUserExtCredential-1) | 添加扩展用户认证凭据 |
| [cancelScreenWatermarkImage](arkts-securitymanager-cancelscreenwatermarkimage-f.md#cancelScreenWatermarkImage-1) | 取消屏幕水印 |
| [cancelWatermarkImage](arkts-securitymanager-cancelwatermarkimage-f.md#cancelWatermarkImage-1) | 取消指定用户的水印策略。 |
| [closeSession](arkts-securitymanager-closesession-f.md#closeSession-1) | 关闭指定用户的凭据变更会话 |
| [getAllowedPermissionBundles](arkts-securitymanager-getallowedpermissionbundles-f.md#getAllowedPermissionBundles-1) | 获取权限使用例外名单的应用列表。 |
| [getAppClipboardPolicy](arkts-securitymanager-getappclipboardpolicy-f.md#getAppClipboardPolicy-1) | 获取设备剪贴板策略。 |
| [getAppClipboardPolicy](arkts-securitymanager-getappclipboardpolicy-f.md#getAppClipboardPolicy-2) | 获取指定用户下指定应用的设备剪贴板策略。 |
| <!--DelRow-->[getDeviceEncryptionStatus](arkts-securitymanager-getdeviceencryptionstatus-f-sys.md#getDeviceEncryptionStatus-1) | 查询设备文件系统加密状态。 |
| [getDeviceSecurityLevelPolicy](arkts-securitymanager-getdevicesecuritylevelpolicy-f.md#getDeviceSecurityLevelPolicy-1) | 查询DSL切换策略 |
| [getDisallowedPermissions](arkts-securitymanager-getdisallowedpermissions-f.md#getDisallowedPermissions-1) | 获取指定用户下禁用的权限列表。 |
| [getExternalSourceExtensionsPolicy](arkts-securitymanager-getexternalsourceextensionspolicy-f.md#getExternalSourceExtensionsPolicy-1) | 获取外部来源扩展程序的管控策略。 |
| [getPasswordPolicy](arkts-securitymanager-getpasswordpolicy-f.md#getPasswordPolicy-1) | 获取设备锁屏口令策略。 |
| <!--DelRow-->[getPasswordPolicy](arkts-securitymanager-getpasswordpolicy-f-sys.md#getPasswordPolicy-1) | 获取设备锁屏口令策略。 |
| [getPermissionManagedState](arkts-securitymanager-getpermissionmanagedstate-f.md#getPermissionManagedState-1) | 获取指定应用的指定[user_grant权限]{@link permissions:Permissions}的管理策略。 |
| <!--DelRow-->[getSecurityPatchTag](arkts-securitymanager-getsecuritypatchtag-f-sys.md#getSecurityPatchTag-1) | 查询设备安全补丁Tag。 |
| [getSecurityStatus](arkts-securitymanager-getsecuritystatus-f.md#getSecurityStatus-1) | 获取当前设备安全策略信息。 |
| [getUnlockPolicy](arkts-securitymanager-getunlockpolicy-f.md#getUnlockPolicy-1) | 查询解锁策略 |
| [getUserCertificates](arkts-securitymanager-getusercertificates-f.md#getUserCertificates-1) | 获取指定系统账户下的用户证书信息。 |
| [getUserExtCredential](arkts-securitymanager-getuserextcredential-f.md#getUserExtCredential-1) | 查询指定用户安装的扩展用户凭据 |
| [getWatermarkImageApps](arkts-securitymanager-getwatermarkimageapps-f.md#getWatermarkImageApps-1) | 查询设置了水印的应用列表 |
| [installEnterpriseReSignatureCertificate](arkts-securitymanager-installenterpriseresignaturecertificate-f.md#installEnterpriseReSignatureCertificate-1) | 安装企业应用重签名证书。 同一用户下最多可下发10本不同证书。证书别名作为证书的唯一标识，不支持重复下发相同别名的证书。如需更新同一别名的证书，需先调用 [uninstallEnterpriseReSignatureCertificate]{@link securityManager.uninstallEnterpriseReSignatureCertificate}进行卸载。 在MDM应用卸载或admin取消激活场景下，已安装的证书会保留在设备上，不会被移除。 在企业应用分发场景下，<!--RP2--><!--RP2End-->开发者可以使用重签名证书对企业应用进行二次签名，签名完成后将应用包提供给企业管理员。企业管理员可以将重签名后的应用安装在已部署重签名证书的企业设备上。 企业应用重签名证书使用流程：<!--RP3--><!--RP3End--> 1.通过MDM应用安装企业应用重签名证书； 2.开发者利用签名工具（如ohos-signer或DevEco Studio签名插件），对原始HAP包进行二次签名； 3.安装重签名应用（可以通过企业私有应用市场安装）； 4.运行应用。 规格约束： 1.安装新的签名证书之后，使用旧签名证书的应用可以继续运行； 2.已经安装的企业应用，安装了新的企业签名证书后，已安装的应用如需更新，可以直接覆盖安装，无需先卸载原应用； 3.企业场景下，特别是在涉及信息安全的场景中，企业需要确保员工使用的移动设备中仅安装并运行特定的内部软件和工具。企业应用重签名证书通过统一的应用身份标识，与系统的应用管理与权限控制机制配合使用，可支持企业应用的静默安装、受控的系统 能力调用及运行范围限制，从而实现企业软件在受控终端上的准入控制与安全管理。 |
| [installUserCertificate](arkts-securitymanager-installusercertificate-f.md#installUserCertificate-1) | 安装用户证书，使用Promise异步回调。 |
| [installUserCertificate](arkts-securitymanager-installusercertificate-f.md#installUserCertificate-2) | 支持按系统账户安装用户证书。 |
| [isScreenLockDisabledForAccount](arkts-securitymanager-isscreenlockdisabledforaccount-f.md#isScreenLockDisabledForAccount-1) | 查询当前用户的滑动解锁能力是否被禁用。 |
| [openSession](arkts-securitymanager-opensession-f.md#openSession-1) | 开启指定用户的凭据变更会话 |
| [removeAllowedPermissionBundle](arkts-securitymanager-removeallowedpermissionbundle-f.md#removeAllowedPermissionBundle-1) | 从权限使用例外名单中移除指定应用，移除后该应用则不能继续使用对应的权限。 |
| [removeUserExtCredential](arkts-securitymanager-removeuserextcredential-f.md#removeUserExtCredential-1) | 移除扩展用户认证凭据 |
| [setAppClipboardPolicy](arkts-securitymanager-setappclipboardpolicy-f.md#setAppClipboardPolicy-1) | 设置设备剪贴板策略。 |
| [setAppClipboardPolicy](arkts-securitymanager-setappclipboardpolicy-f.md#setAppClipboardPolicy-2) | 设置指定用户下指定应用的设备剪贴板策略。 |
| [setDeviceSecurityLevelPolicy](arkts-securitymanager-setdevicesecuritylevelpolicy-f.md#setDeviceSecurityLevelPolicy-1) | 设备DSL切换策略 |
| [setDisallowedPermission](arkts-securitymanager-setdisallowedpermission-f.md#setDisallowedPermission-1) | 禁用指定用户下的指定权限，禁用后指定用户下的所有应用申请和使用指定权限时默认拒绝。 |
| [setExternalSourceExtensionsPolicy](arkts-securitymanager-setexternalsourceextensionspolicy-f.md#setExternalSourceExtensionsPolicy-1) | 设置外部来源扩展程序的管控策略。 - DEFAULT： 默认，表示无管控策略，用户可以通过“设置-隐私与安全-高级”中的“运行外部来源的扩展程序”开关来设置是否允许扩展程序运行。 - DISALLOW： 禁用。设置此策略后，禁止运行外部来源的扩展程序，运行中的扩展程序可继续运行，扩展程序关闭后无法启动运行。用户无法开启“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。 - FORCE_OPEN： 强制开启。设置此策略后，允许运行外部来源的扩展程序，用户无法关闭“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。 |
| [setPasswordPolicy](arkts-securitymanager-setpasswordpolicy-f.md#setPasswordPolicy-1) | 设置设备锁屏口令策略。当用户设置锁屏口令时，如果设置的锁屏口令不符合要求，会有安全提示重新设置锁屏口令。 |
| [setPermissionManagedState](arkts-securitymanager-setpermissionmanagedstate-f.md#setPermissionManagedState-1) | 设置指定应用的[user_grant权限]{@link permissions:Permissions}的管理策略。 |
| [setScreenLockDisabledForAccount](arkts-securitymanager-setscreenlockdisabledforaccount-f.md#setScreenLockDisabledForAccount-1) | 禁用/启用当前用户的滑动解锁能力。启用时：设备灭屏后再亮屏，用户需要在屏幕上滑动后才能进入桌面。禁用时：设备灭屏后再亮屏会直接进入桌面。 > **说明：** > > 1.该接口能力仅在设备无锁屏密码时生效。 > > 2.设备默认属于启用滑动解锁的状态。 > > 3.设备上存在密码时，设置禁用滑动解锁会失败，抛出9201021错误码。 > > 4.下发禁用滑动解锁的策略后，用户输入了设备密码，此时密码会生效，设备需要验证密码后才能进入桌面，之前下发的策略失效。 |
| [setScreenWatermarkImage](arkts-securitymanager-setscreenwatermarkimage-f.md#setScreenWatermarkImage-1) | 设置屏幕水印 |
| [setUnlockPolicy](arkts-securitymanager-setunlockpolicy-f.md#setUnlockPolicy-1) | 设置解锁策略 |
| [setWatermarkImage](arkts-securitymanager-setwatermarkimage-f.md#setWatermarkImage-1) | 为指定用户的指定应用设置水印策略。当前只支持最多保存100个策略。 > **说明：** > > 本接口适用于企业场景下为三方应用设置水印，降低企业信息泄露风险。不建议为系统应用设置水印（如：桌面应用），可能存在未知异常。 |
| [setWatermarkImage](arkts-securitymanager-setwatermarkimage-f.md#setWatermarkImage-2) | 为指定用户的指定应用设置水印策略。 |
| [uninstallEnterpriseReSignatureCertificate](arkts-securitymanager-uninstallenterpriseresignaturecertificate-f.md#uninstallEnterpriseReSignatureCertificate-1) | 卸载企业应用重签名证书。 |
| [uninstallUserCertificate](arkts-securitymanager-uninstallusercertificate-f.md#uninstallUserCertificate-1) | 卸载用户证书，使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AddCredentialInfo](arkts-securitymanager-addcredentialinfo-i.md) | 添加凭证信息 |
| [ApplicationInstance](arkts-securitymanager-applicationinstance-i.md) | 应用实例。 |
| [CertBlob](arkts-securitymanager-certblob-i.md) | 证书信息。 |
| <!--DelRow-->[DeviceEncryptionStatus](arkts-securitymanager-deviceencryptionstatus-i-sys.md) |  |
| [PasswordPolicy](arkts-securitymanager-passwordpolicy-i.md) | 设备锁屏口令策略。 |
| [WatermarkProperties](arkts-securitymanager-watermarkproperties-i.md) | 水印参数 |

### Enums

| Name | Description |
| --- | --- |
| [ClipboardPolicy](arkts-securitymanager-clipboardpolicy-e.md) | 设备剪贴板策略。 |
| [PermissionManagedState](arkts-securitymanager-permissionmanagedstate-e.md) | 应用权限的管理状态。 |

