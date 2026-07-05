# setDefaultApplication

## setDefaultApplication

```TypeScript
function setDefaultApplication(type: string, elementName: ElementName, userId: int, callback: AsyncCallback<void>) : void
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型设置默认应用。使用callback异 步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_DEFAULT_APPLICATION

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要设置的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| elementName | ElementName | Yes | 要设置为默认应用的组件信息。 |
| userId | int | Yes | 表示用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;void> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当设置默认应用成功时，err返回undefined。否则回调函数返回  具体错误对象。 |

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
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

let userId = 100;
defaultAppManager.setDefaultApplication(defaultAppManager.ApplicationType.BROWSER, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

defaultAppManager.setDefaultApplication("image/png", {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

defaultAppManager.setDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

```

## setDefaultApplication

```TypeScript
function setDefaultApplication(type: string, elementName: ElementName, callback: AsyncCallback<void>) : void
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型设置默认应用。使用callback异 步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_DEFAULT_APPLICATION

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 要设置的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| elementName | ElementName | Yes | 要设置为默认应用的组件信息。 |
| callback | AsyncCallback&lt;void> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当设置默认应用成功时，err返回undefined。否则回调函数返回  具体错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700025 | The specified type is invalid. |
| 17700028 | The specified ability does not match the type. |

**Example**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

defaultAppManager.setDefaultApplication(defaultAppManager.ApplicationType.BROWSER, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

defaultAppManager.setDefaultApplication("image/png", {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

defaultAppManager.setDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful.');
});

```

## setDefaultApplication

```TypeScript
function setDefaultApplication(type: string, elementName: ElementName, userId?: int) : Promise<void>
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型设置默认应用。使用Promise异步 回调。

**Since:** 9

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

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

defaultAppManager.setDefaultApplication(defaultAppManager.ApplicationType.BROWSER, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}).then((data) => {
  console.info('Operation successful.');
}).catch((error: BusinessError) => {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
});

let userId = 100;
defaultAppManager.setDefaultApplication(defaultAppManager.ApplicationType.BROWSER, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId).then((data) => {
  console.info('Operation successful.');
}).catch((error: BusinessError) => {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
});

defaultAppManager.setDefaultApplication("image/png", {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId).then((data) => {
  console.info('Operation successful.');
}).catch((error: BusinessError) => {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
});

defaultAppManager.setDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI, {
  bundleName: "com.example.myapplication",
  moduleName: "module01",
  abilityName: "EntryAbility"
}, userId).then((data) => {
  console.info('Operation successful.');
}).catch((error: BusinessError) => {
  console.error('Operation failed. Cause: ' + JSON.stringify(error));
});

```

