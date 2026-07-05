# installLocalPlugin

## installLocalPlugin

```TypeScript
function installLocalPlugin(pluginFilePaths: Array<string>): Promise<void>
```

Install the plugin for self application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pluginFilePaths | Array&lt;string> | 是 | Indicates the file paths of plugin. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

