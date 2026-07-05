# createPluginModuleContext

## createPluginModuleContext

```TypeScript
export function createPluginModuleContext(context: Context, pluginBundleName: string, pluginModuleName: string): Promise<Context>
```

根据入参Context、指定的插件包名和插件模块名，创建本应用下插件的Context，用于获取插件的基本信息。使用Promise异步回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 表示应用上下文。 |
| pluginBundleName | string | Yes | 表示应用的插件包名。 |
| pluginModuleName | string | Yes | 表示应用的插件模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Context> | Promise对象。返回创建的Context。 |

