# disableAdmin (System API)

## Modules to Import

```TypeScript
import { adminManager } from '@kit.MDMKit';
```

## disableAdmin

```TypeScript
function disableAdmin(admin: Want, callback: AsyncCallback<void>): void
```

Disables a common device administrator application for the current user. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function disableAdmin(admin: Want, callback: AsyncCallback<void>): void--><!--Device-adminManager-function disableAdmin(admin: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200005](../errorcode-enterpriseDeviceManager.md#9200005-failed-to-disable-the-device-administrator-application) | Failed to deactivate the administrator application of the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.disableAdmin(wantTemp, (err) => {
  if (err) {
    console.error(`Failed to disable admin. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in disabling admin');
});

```


## disableAdmin

```TypeScript
function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void
```

Disables a common device administrator application for the user specified by **userId**. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void--><!--Device-adminManager-function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| userId | number | Yes | User ID, which must be greater than or equal to 0.<br>The default value is the user ID of the caller. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200005](../errorcode-enterpriseDeviceManager.md#9200005-failed-to-disable-the-device-administrator-application) | Failed to deactivate the administrator application of the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.disableAdmin(wantTemp, 100, (err) => {
  if (err) {
    console.error(`Failed to disable admin. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in disabling admin');
});

```

