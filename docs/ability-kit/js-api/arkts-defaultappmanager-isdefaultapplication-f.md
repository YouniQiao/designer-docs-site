# isDefaultApplication

## isDefaultApplication

```TypeScript
function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void
```

根据系统已定义的应用类型或者[UniformDataType](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformTypeDescriptor)类型判断当前应用是否是该类型的默认应用。使用 callback异步回调。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要查询的应用类型，取[ApplicationType]defaultAppManager.ApplicationType或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformTypeDescriptor)类型中的值。 |
| callback | AsyncCallback&lt;boolean> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为undefined，data为bool值  ，true表示是默认应用，false表示不是默认应用；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |

**Example**

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

根据系统已定义的应用类型或者[UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型判断当前 应用是否是该类型的默认应用。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要查询的应用类型，取[ApplicationType]defaultAppManager.ApplicationType或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformTypeDescriptor)类型中的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回当前应用是否是默认应用，true表示是默认应用，false表示不是默认应用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |

**Example**

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

