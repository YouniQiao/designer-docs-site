# installForResult

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## installForResult

```TypeScript
function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>
```

Install an application.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>--><!--Device-bundleManager-function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information.The admin must have the corresponding permission. |
| hapFilePaths | Array&lt;string&gt; | Yes | indicates the path of the application to be installed. |
| installParam | [InstallParam](arkts-mdm-bundlemanager-installparam-i.md) | No | installParam indicates the installation parameters.It may contain two fields: userId and installFlag.The flag can only be one of correct flags. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise of installing application result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9201002](../errorcode-enterpriseDeviceManager.md#9201002-failed-to-install-the-enterprise-application) | Failed to install the application. |
| 9201022 | Failed to install the HAP because of insufficient system disk space. |
| 9201023 | Failed to install the HAP because enterprise device management disallows the installation. |
| 9201024 | Failed to install the HAP because the HAP fails to be parsed. |
| 9201025 | Failed to install the HAP because the HAP signature fails to be verified. |
| 9201026 | Failed to install the HAP because the HAP path is invalid or the HAP is too large. |
| 9201027 | Failed to install the HAPs because they have different configuration information. |
| 9201028 | Failed to install the HAP because the isolationMode configured is not supported. |
| 9201029 | Failed to install the HAP since the version of the HAP to install is too early. |
| 9201030 | Failed to install the HAP because the VersionCode to be updated is not greater than the current VersionCode. |
| 9201031 | Installation failed because the dependent module does not exist. |
| 9201032 | The specified user ID is not found. |
| 9201033 | Failed to install the HAP because the overlay check failed. |
| 9201034 | Failed to install the HSP due to missing required permissions. |
| 9201035 | Installation failed because the installation of cross-app shared libraries is not allowed. |
| 9201036 | Failed to install the HAP due to incorrect URI in the data proxy. |
| 9201037 | Failed to install the HAP due to incorrect permission configuration in the data proxy. |
| 9201038 | Failed to install the HAP due to code signature verification failure. |
| 9201039 | Failed to install the HAP due to enterprise device verification failure. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

