# getExtensionAbilityResourceInfo

## getExtensionAbilityResourceInfo

```TypeScript
function getExtensionAbilityResourceInfo(bundleName: string, extensionAbilityType: bundleManager.ExtensionAbilityType, resourceFlags: int, appIndex?: int): Array<LauncherAbilityResourceInfo>
```

根据应用包名、扩展组件类型、资源信息标志、应用分身ID获取应用的扩展组件资源。使用同步方式返回。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |
| extensionAbilityType | bundleManager.ExtensionAbilityType | Yes | 应用的扩展组件类型，仅支持ExtensionAbilityType.INPUT_METHOD  、ExtensionAbilityType.SHARE、ExtensionAbilityType.ACTION。 |
| resourceFlags | int | Yes | 资源信息标志，指示需要获取的资源信息的内容。 |
| appIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LauncherAbilityResourceInfo> | 返回指定应用的扩展组件资源，包含图标和名称等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700061 | AppIndex not in valid range or not found. |

**Example**

```TypeScript
import { bundleManager, bundleResourceManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = "com.example.myapplication";
let extensionAbilityType = bundleManager.ExtensionAbilityType.INPUT_METHOD;
let resourceFlag = bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_ALL;
try {
  let resourceInfo =
    bundleResourceManager.getExtensionAbilityResourceInfo(bundleName, extensionAbilityType, resourceFlag);
  console.info('getExtensionAbilityResourceInfo successfully. Data label: ' + JSON.stringify(resourceInfo[0].label));
} catch (err) {
  let message = (err as BusinessError).message;
  let code = (err as BusinessError).code;
  console.error(`getExtensionAbilityResourceInfo failed, err code:${code}, err msg: ${message}`);
}

```

