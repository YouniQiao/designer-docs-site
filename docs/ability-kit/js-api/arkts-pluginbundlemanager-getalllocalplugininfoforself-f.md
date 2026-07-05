# getAllLocalPluginInfoForSelf

## getAllLocalPluginInfoForSelf

```TypeScript
function getAllLocalPluginInfoForSelf(): Promise<Array<PluginBundleInfo>>
```

Obtains information about all local plugins installed on the current application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PluginBundleInfo>> | Promise used to return the list of PluginBundleInfos object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'. |

