# getAllLocalPluginInfoForSelf

## getAllLocalPluginInfoForSelf

```TypeScript
function getAllLocalPluginInfoForSelf(): Promise<Array<PluginBundleInfo>>
```

Obtains information about all local plugins installed on the current application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;PluginBundleInfo>> | Promise used to return the list of PluginBundleInfos object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'. |

