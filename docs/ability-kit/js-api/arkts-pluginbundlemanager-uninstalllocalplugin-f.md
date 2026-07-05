# uninstallLocalPlugin

## uninstallLocalPlugin

```TypeScript
function uninstallLocalPlugin(pluginBundleName: string): Promise<void>
```

Uninstall the plugin for self application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pluginBundleName | string | Yes | Indicates the bundle name of plugin application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'. |
| 17700092 | Failed to uninstall the plugin because the specified plugin is not found. |

