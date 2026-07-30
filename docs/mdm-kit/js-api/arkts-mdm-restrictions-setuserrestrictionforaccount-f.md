# setUserRestrictionForAccount

## Modules to Import

```TypeScript
import { restrictions } from '@kit.MDMKit';
```

## setUserRestrictionForAccount

```TypeScript
function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: number, restricted: boolean): void
```

Sets restrictions on specified user behaviors.

**Since:** 23

**Deprecated since:** 26.0.0

**Substitutes:** [setUserRestrictionForAccount(admin:](arkts-mdm-restrictions-setuserrestrictionforaccount-f.md#setuserrestrictionforaccount)

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

<!--Device-restrictions-function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void--><!--Device-restrictions-function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| settingsItem | string | Yes | User behavior.<br>- **modifyWallpaper**: Modify the wallpaper, including the lock screen wallpaper and home screen wallpaper. |
| accountId | number | Yes | Account ID.<br>The value must be an integer greater than or equal to 0.<br>You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid)to obtain the user ID. |
| restricted | boolean | Yes | Whether to disable the action. The value **true** means to disable the action, and **false** means the opposite. |

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
  restrictions.setUserRestrictionForAccount(wantTemp, settingsItem, userId, true);
  console.info('Succeeded in restricting from setting modifyWallpaper');
} catch (err) {
  console.error(`Failed to restrict from setting modifyWallpaper. Code is ${err.code}, message is ${err.message}`);
}

```


## setUserRestrictionForAccount

```TypeScript
function setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: number, restricted: boolean): void
```

Restricting users from changing specified settings item for account on the device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

<!--Device-restrictions-function setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean): void--><!--Device-restrictions-function setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) | Yes | admin indicates the enterprise admin extension ability information. |
| settingsItem | [SettingsForAccount](arkts-mdm-restrictions-settingsforaccount-e.md) | Yes | settingsItem indicates the specific settings item to be restricted. |
| accountId | number | Yes | accountId indicates the account ID to be restricted.<br>Value range:[0, +∞). |
| restricted | boolean | Yes | true if restrict the specific settings item of the device, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

