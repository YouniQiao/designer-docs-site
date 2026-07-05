# createBundleContext

## createBundleContext

```TypeScript
export function createBundleContext(context: Context, bundleName: string): Promise<Context>
```

根据入参Context创建相应应用的Context。使用Promise异步回调。 > **说明：** > > 从API version 18开始，Context支持获取当前应用的进程名 > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 > createBundleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应 > 的属性值。

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 表示应用上下文。 |
| bundleName | string | 是 | 表示应用包名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Context> | Promise对象。返回创建的Context。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

