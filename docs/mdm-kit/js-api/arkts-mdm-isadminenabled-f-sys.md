# isAdminEnabled (System API)

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## isAdminEnabled

```TypeScript
function isAdminEnabled(admin: Want, callback: AsyncCallback<boolean>): void
```

Checks whether a device administrator application of the current user is enabled. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null** and **data** is a Boolean value (**true** means that the device administrator applicationis enabled; and **false** means the opposite). If the operation fails, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.isAdminEnabled(wantTemp, (err, result) => {
  if (err) {
    console.error(`Failed to query admin is enabled or not. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying admin is enabled or not, result : ${result}`);
});

```


## isAdminEnabled

```TypeScript
function isAdminEnabled(admin: Want, userId: number, callback: AsyncCallback<boolean>): void
```

Checks whether a device administrator application of the specified user is enabled. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| userId | number | Yes | User ID, which must be greater than or equal to 0.<br> The default value is the user IDof the caller. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null** and **data** is a Boolean value (**true** means that the device administrator applicationis enabled; and **false** means the opposite). If the operation fails, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace parameters with actual values.
adminManager.isAdminEnabled(wantTemp, 100, (err, result) => {
  if (err) {
    console.error(`Failed to query admin is enabled. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying admin is enabled or not, result : ${result}`);
});

```


## isAdminEnabled

```TypeScript
function isAdminEnabled(admin: Want, userId?: number): Promise<boolean>
```

Checks whether a device administrator application of the current or specified user is enabled. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| userId | number | No | User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the currentuser. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means the device administratorapplication is enabled; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace parameters with actual values.
adminManager.isAdminEnabled(wantTemp, 100).then((result) => {
  console.info(`Succeeded in querying admin is enabled or not, result : ${result}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query admin is enabled or not. Code: ${err.code}, message: ${err.message}`);
});

```

