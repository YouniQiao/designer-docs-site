# isDefaultApplicationSync

## isDefaultApplicationSync

```TypeScript
function isDefaultApplicationSync(type: string): boolean
```

以同步方法根据系统已定义的应用类型或者[UniformDataType](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformTypeDescriptor)类型判断当前应用是否是该类型的默认 应用，使用boolean形式返回结果。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要查询的应用类型，取[ApplicationType]defaultAppManager.ApplicationType或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-data-uniformtypedescriptor.md#uniformTypeDescriptor)类型中的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回当前应用是否是默认应用，true表示是默认应用，false表示不是默认应用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';

try {
  let data = defaultAppManager.isDefaultApplicationSync(defaultAppManager.ApplicationType.BROWSER)
  console.info('Operation successful. IsDefaultApplicationSync ? ' + JSON.stringify(data));
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
}

```

