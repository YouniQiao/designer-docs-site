# uninstallLocalPlugin

## uninstallLocalPlugin

```TypeScript
function uninstallLocalPlugin(pluginBundleName: string): Promise<void>
```

Uninstall the plugin for self application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pluginBundleName | string | 是 | Indicates the bundle name of plugin application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'. |
| 17700092 | Failed to uninstall the plugin because the specified plugin is not found. |

