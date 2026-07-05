# installForResult

## installForResult

```TypeScript
function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>
```

安装应用

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| hapFilePaths | Array&lt;string> | Yes | 应用包路径 |
| installParam | InstallParam | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 应用安装结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201002 | Failed to install the application. |
| 9201022 | Failed to install the HAP because of insufficient system disk space. |
| 9201023 | Failed to install the HAP because enterprise device management disallows the  installation. |
| 9201024 | Failed to install the HAP because the HAP fails to be parsed. |
| 9201025 | Failed to install the HAP because the HAP signature fails to be verified. |
| 9201026 | Failed to install the HAP because the HAP path is invalid or  the HAP is too large. |
| 9201027 | Failed to install the HAPs because they have different configuration  information. |
| 9201028 | Failed to install the HAP because the isolationMode configured is not  supported. |
| 9201029 | Failed to install the HAP since the version of the HAP to install is too early. |
| 9201030 | Failed to install the HAP because the VersionCode to be updated is not greater  than the current VersionCode. |
| 9201031 | Installation failed because the dependant module does not exist. |
| 9201032 | The specified user ID is not found. |
| 9201033 | Failed to install the HAP because the overlay check failed. |
| 9201034 | Failed to install the HSP due to missing required permissions. |
| 9201035 | Installation failed because the installation of cross-app shared libraries is  not allowed. |
| 9201036 | Failed to install the HAP due to incorrect URI in the data proxy. |
| 9201037 | Failed to install the HAP due to incorrect permission configuration in  the data proxy. |
| 9201038 | Failed to install the HAP due to code signature verification failure. |
| 9201039 | Failed to install the HAP due to enterprise device verification failure. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

