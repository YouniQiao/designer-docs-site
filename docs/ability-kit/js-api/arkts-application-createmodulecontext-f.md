# createModuleContext

## createModuleContext

```TypeScript
export function createModuleContext(context: Context, moduleName: string): Promise<Context>
```

创建指定模块的上下文。创建出的模块上下文中[resourceManager.Configuration](../../apis-localization-kit/arkts-apis/arkts-resourcemanager-configuration-c.md#Configuration)资源继承 自入参上下文，便于开发者获取[跨HAP/HSP包应用资源](docroot://quick-start/resource-categories-and-access.md#跨haphsp包应用资源)。使用Promise异步回调。 > **说明：** > > 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 表示应用上下文。 |
| moduleName | string | Yes | 表示应用模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Context> | Promise对象。返回创建的Context。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

