# createPluginModuleContextForHostBundle

## createPluginModuleContextForHostBundle

```TypeScript
export function createPluginModuleContextForHostBundle(context: Context, pluginBundleName: string, pluginModuleName: string,
    hostBundleName: string): Promise<Context>
```

根据入参Context、插件包名和插件模块名和应用包名，创建对应插件的Context，用于获取插件的基本信息。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 表示应用上下文。 |
| pluginBundleName | string | Yes | 表示应用的插件包名。 |
| pluginModuleName | string | Yes | 表示应用的插件模块名。 |
| hostBundleName | string | Yes | 表示安装插件的应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Context> | Promise对象。返回创建的Context，返回的Context中的属性processName和config与入参Context中的属性processName和config的值相  同。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |

