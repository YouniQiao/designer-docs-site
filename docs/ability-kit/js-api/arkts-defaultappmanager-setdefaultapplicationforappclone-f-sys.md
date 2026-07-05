# setDefaultApplicationForAppClone

## setDefaultApplicationForAppClone

```TypeScript
function setDefaultApplicationForAppClone(type: string, elementName: ElementName, appIndex: int, userId?: int): void
```

以同步方法将分身应用设置为打开相应type类型的默认应用。

**Since:** 23

**Required permissions:** 

 ohos.permission.SET_DEFAULT_APPLICATION or * (ohos.permission.SET_DEFAULT_APPLICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要设置的应用类型，支持取值包括：  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值、  [MIMEType](docroot://database/uniform-data-type-list.md#基础类型)类型、或  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| elementName | ElementName | Yes | 要设置为默认应用的组件信息，仅使用其中的bundleName、abilityName、moduleName属性，且三个属性必须设置。 |
| appIndex | int | Yes | 表示分身应用的索引。 取值范围：1、2、3、4、5。 |
| userId | int | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |
| 17700004 | The specified user id is not found. |
| 17700025 | The specified type is invalid. |
| 17700028 | The specified ability and type do not match. |
| 17700061 | The specified app index is invalid. |

**Example**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

let appIndex = 1;
try {
  defaultAppManager.setDefaultApplicationForAppClone(defaultAppManager.ApplicationType.BROWSER, {
    // Use the actual bundle name, module name, and ability name.
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, appIndex);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

let userId = 100;
try {
  defaultAppManager.setDefaultApplicationForAppClone(defaultAppManager.ApplicationType.BROWSER, {
    // Use the actual bundle name, module name, and ability name.
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, appIndex, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

try {
  defaultAppManager.setDefaultApplicationForAppClone("image/png", {
    // Use the actual bundle name, module name, and ability name.
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, appIndex, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

try {
  defaultAppManager.setDefaultApplicationForAppClone(uniformTypeDescriptor.UniformDataType.AVI, {
    // Use the actual bundle name, module name, and ability name.
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, appIndex, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

```

