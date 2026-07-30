# getUserRestrictedForAccount

## Modules to Import

```TypeScript
import { restrictions } from '@kit.MDMKit';
```

## getUserRestrictedForAccount

```TypeScript
function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: number): boolean
```

Obtains the disabled status of a setting item for a specified user.

**Since:** 23

**Deprecated since:** 26.0.0

**Substitutes:** [getUserRestrictedForAccount(admin:](arkts-mdm-restrictions-getuserrestrictedforaccount-f.md#getuserrestrictedforaccount)

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

<!--Device-restrictions-function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: int): boolean--><!--Device-restrictions-function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: int): boolean-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| settingsItem | string | Yes | Setting item.<br>- **modifyWallpaper**: Modify the wallpaper, including the lock screen wallpaper and home screen wallpaper. |
| accountId | number | Yes | Account ID.<br>The value must be an integer greater than or equal to 0.<br>You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid)to obtain the user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Disabled status of the specified setting item. The value **true** means the item is disabled;the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { restrictions } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace with actual values.
let userId = 100;
let settingsItem: string = "modifyWallpaper";
try {
  let result: boolean = restrictions.getUserRestrictedForAccount(wantTemp, settingsItem, userId);
  console.info(`Succeeded in getting user restricted: ${result}`);
} catch (err) {
  console.error(`Failed to get user restricted. Code is ${err.code}, message is ${err.message}`);
}

```


## getUserRestrictedForAccount

```TypeScript
function getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: number): boolean
```

Gets whether users are restricted from changing specified settings items for account on the device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

<!--Device-restrictions-function getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int): boolean--><!--Device-restrictions-function getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int): boolean-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) \| null | Yes | admin indicates the administrator ability information. |
| settingsItem | [SettingsForAccount](arkts-mdm-restrictions-settingsforaccount-e.md) | Yes | settingsItem indicates the specific settings item to be disallowed. |
| accountId | number | Yes | accountId indicates the account ID to be restricted.<br>Value range:[0, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true if restrict the specific settings item of device, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

