# installLocalPlugin

## installLocalPlugin

```TypeScript
function installLocalPlugin(pluginFilePaths: Array<string>): Promise<void>
```

Install the plugin for self application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pluginFilePaths | Array&lt;string> | Yes | Indicates the file paths of plugin. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'. |
| 17700010 | Failed to install the plugin because the plugin fails to be parsed. |
| 17700011 | Failed to install the plugin because the plugin signature fails to be verified. |
| 17700012 | Failed to install the plugin because the HSP path is invalid or the HSP is too large. |
| 17700015 | Failed to install the plugin because they have different configuration information. |
| 17700016 | Failed to install the plugin because of insufficient system disk space. |
| 17700017 | Failed to install the plugin since the version of the plugin to install is too early. |
| 17700048 | Failed to install the plugin because the code signature verification failed. |
| 17700052 | Failed to install the plugin because debug bundle cannot be installed under non-developer mode. |
| 17700073 | Failed to install the plugin because a plugin with the same  bundle name but different signature information exists on the device. |
| 17700087 | Failed to install the plugin because the current device does not support plugins. |
| 17700091 | Failed to install the plugin because the plugin name is the same as the host bundle name. |

