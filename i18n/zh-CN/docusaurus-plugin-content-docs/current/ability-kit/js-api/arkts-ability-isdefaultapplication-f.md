---
last_update:
  date: 2026-07-04
---

# isDefaultApplication

## isDefaultApplication

```TypeScript
function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void
```

根据系统已定义的应用类型或者[UniformDataType](@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor)类型判断当前应用是否是该类型的默认应用。使用 callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 要查询的应用类型，取[ApplicationType](arkts-ability-applicationtype-e.md#applicationtype)或者[UniformDataType](@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor)类型中的值。 |
| callback | AsyncCallback&lt;boolean&gt; | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback)，当获取成功时，err为undefined，data为bool值，true表示是默认应用，false表示不是默认应用；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported. |

**示例：**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

defaultAppManager.isDefaultApplication(defaultAppManager.ApplicationType.BROWSER, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. IsDefaultApplication ? ' + JSON.stringify(data));
});

```


## isDefaultApplication

```TypeScript
function isDefaultApplication(type: string) : Promise<boolean>
```

根据系统已定义的应用类型或者[UniformDataType](@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType)类型判断当前 应用是否是该类型的默认应用。使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 要查询的应用类型，取[ApplicationType](arkts-ability-applicationtype-e.md#applicationtype)或者[UniformDataType](@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor)类型中的值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean&gt; | Promise对象，返回当前应用是否是默认应用，true表示是默认应用，false表示不是默认应用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported. |

**示例：**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

defaultAppManager.isDefaultApplication(defaultAppManager.ApplicationType.BROWSER)
  .then((data) => {
    console.info('Operation successful. IsDefaultApplication ? ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
});

```

