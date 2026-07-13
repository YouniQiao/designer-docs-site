# setDefaultApplicationForAppClone (System API)

## Modules to Import

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
```

## setDefaultApplicationForAppClone

```TypeScript
function setDefaultApplicationForAppClone(type: string, elementName: ElementName, appIndex: number, userId?: number): void
```

Sets an application clone as the default application of the specified type. This API returns the result
synchronously.

**Since:** 23

**Required permissions:** ohos.permission.SET_DEFAULT_APPLICATION or (ohos.permission.SET_DEFAULT_APPLICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**System capability:** SystemCapability.BundleManager.BundleFramework.DefaultApp

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the application. The value can be a value of[ApplicationType](arkts-ability-applicationtype-e.md),[MIMEType](../../../../database/uniform-data-type-list.md#generic-utds), or[UniformDataType](../../apis-arkdata/arkts-apis/arkts-arkdata-uniformdatatype-e.md). |
| elementName | ElementName | Yes | Element information of the application. Only **bundleName**, **abilityName**,and **moduleName** are used, and the three properties must be set. |
| appIndex | number | Yes | Index of the application clone.<br>The options include 1, 2, 3, 4, and 5. |
| userId | number | No | User ID, which can be obtained by calling[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-1).<br>The default value is the user ID of the caller. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user id is not found. |
| [17700025](../errorcode-bundle.md#17700025-invalid-type) | The specified type is invalid. |
| [17700028](../errorcode-bundle.md#17700028-mismatch-between-ability-and-type) | The specified ability and type do not match. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |

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

