# setDefaultApplicationSync

## setDefaultApplicationSync

```TypeScript
function setDefaultApplicationSync(type: string, elementName: ElementName, userId?: int): void
```

以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型设置默认应用。

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_DEFAULT_APPLICATION

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要设置的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| elementName | ElementName | Yes | 要设置为默认应用的组件信息。 |
| userId | int | No | 表示用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。默认值：调用方所在用户。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700004 | The specified user ID is not found. |
| 17700025 | The specified type is invalid. |
| 17700028 | The specified ability does not match the type. |

**Example**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

try {
  defaultAppManager.setDefaultApplicationSync(defaultAppManager.ApplicationType.BROWSER, {
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  });
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

let userId = 100;
try {
  defaultAppManager.setDefaultApplicationSync(defaultAppManager.ApplicationType.BROWSER, {
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

try {
  defaultAppManager.setDefaultApplicationSync("image/png", {
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

try {
  defaultAppManager.setDefaultApplicationSync(uniformTypeDescriptor.UniformDataType.AVI, {
    bundleName: "com.example.myapplication",
    moduleName: "module01",
    abilityName: "EntryAbility"
  }, userId);
  console.info('Operation successful.');
} catch (error) {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
};

```

