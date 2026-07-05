# createModuleContext

## createModuleContext

```TypeScript
export function createModuleContext(context: Context, bundleName: string, moduleName: string): Promise<Context>
```

根据入参Context创建相应模块的Context。使用Promise异步回调。 > **说明：** > > - 从API version 18开始，Context支持获取当前应用的进程名 > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 > createModuleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应 > 的属性值。 > > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 表示应用上下文。 |
| bundleName | string | Yes | 表示应用包名。取值为空字符串时，默认为当前应用。 |
| moduleName | string | Yes | 表示应用模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Context> | Promise对象。返回创建的Context。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

