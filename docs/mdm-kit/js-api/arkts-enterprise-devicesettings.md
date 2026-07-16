# @ohos.enterprise.deviceSettings

The **deviceSettings** module provides APIs for setting enterprise devices, including setting and obtaining the
screen-off time of a device.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.
>
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { deviceSettings } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addHiddenSettingsMenu](arkts-mdm-addhiddensettingsmenu-f.md#addhiddensettingsmenu-1) | Adds a setting item to the hidden setting item list of the current user. Then the setting item is hidden in thecurrent user's settings menu and cannot be found in settings search. Even if the setting item is located throughsome means, it cannot be opened when tapped. The settings take effect immediately after the API is called. TheSettings application does not need to be restarted. |
| [getHiddenSettingsMenu](arkts-mdm-gethiddensettingsmenu-f.md#gethiddensettingsmenu-1) | Obtains the hidden setting item list of the current user. |
| [getValue](arkts-mdm-getvalue-f.md#getvalue-1) | Obtains a device setting policy. |
| [getValueForAccount](arkts-mdm-getvalueforaccount-f.md#getvalueforaccount-1) | Obtains the device policy of a specified user. This API allows you to obtain a specific parameter of a given user,such as obtaining the device name of user 100. |
| [removeHiddenSettingsMenu](arkts-mdm-removehiddensettingsmenu-f.md#removehiddensettingsmenu-1) | Removes a setting item from the hidden setting item list of the current user. Setting items in the hidden settingitem list are hidden in the current user's settings menu and cannot be found in settings search. Even if a settingitem is located through some means, it cannot be opened when tapped. If the remaining hidden setting item list isempty after the removal, all setting items are displayed. The settings take effect immediately after the API iscalled. The Settings application does not need to be restarted. |
| [setHomeWallpaper](arkts-mdm-sethomewallpaper-f.md#sethomewallpaper-1) | Sets the home screen wallpaper. This API uses a promise to return the result. |
| [setSwitchStatus](arkts-mdm-setswitchstatus-f.md#setswitchstatus-1) | Sets the state of a switch. This API can enable or disable NearLink, Bluetooth, and Wi-Fi. After the setting isapplied, users can manually enable or disable them. If a switch has been disabled through the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API, error code 203 will be thrown when you attempt to set the state of the switch through this API. In this case,you need to use the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API to enable the switch. |
| [setUnlockWallpaper](arkts-mdm-setunlockwallpaper-f.md#setunlockwallpaper-1) | Sets the lock screen wallpaper. This API uses a promise to return the result. |
| [setValue](arkts-mdm-setvalue-f.md#setvalue-1) | Sets the device policy. |
| [setValueForAccount](arkts-mdm-setvalueforaccount-f.md#setvalueforaccount-1) | Sets the device policy for a specified user. This API allows you to set a specific parameter for a given user, suchas setting the device name for user 100. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPowerPolicy](arkts-mdm-getpowerpolicy-f-sys.md#getpowerpolicy-1) | Obtains the power policy. |
| [getScreenOffTime](arkts-mdm-getscreenofftime-f-sys.md#getscreenofftime-1) | Obtains the device screen-off time. This API uses an asynchronous callback to return the result. |
| [getScreenOffTime](arkts-mdm-getscreenofftime-f-sys.md#getscreenofftime-2) | Obtains the device screen-off time. This API uses an asynchronous promise to return the result. |
| [installUserCertificate](arkts-mdm-installusercertificate-f-sys.md#installusercertificate-1) | Installs a user certificate. This API uses a callback to return the result. |
| [installUserCertificate](arkts-mdm-installusercertificate-f-sys.md#installusercertificate-2) | Installs a user certificate. This API uses a promise to return the result. |
| [setPowerPolicy](arkts-mdm-setpowerpolicy-f-sys.md#setpowerpolicy-1) | Sets the power policy. |
| [setScreenOffTime](arkts-mdm-setscreenofftime-f-sys.md#setscreenofftime-1) | Sets the device screen-off time. |
| [uninstallUserCertificate](arkts-mdm-uninstallusercertificate-f-sys.md#uninstallusercertificate-1) | Uninstalls a user certificate. This API uses a callback to return the result. |
| [uninstallUserCertificate](arkts-mdm-uninstallusercertificate-f-sys.md#uninstallusercertificate-2) | Uninstalls a user certificate. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CertBlob](arkts-mdm-certblob-i-sys.md) | Represents the certificate information. |
| [PowerPolicy](arkts-mdm-powerpolicy-i-sys.md) | Represents the power policy. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SettingsItem](arkts-mdm-settingsitem-e.md) | Policy type. |
| [SettingsMenu](arkts-mdm-settingsmenu-e.md) | Describes the setting item list. |
| [SwitchKey](arkts-mdm-switchkey-e.md) | Enumerates switch names. |
| [SwitchStatus](arkts-mdm-switchstatus-e.md) | Enumerates switch states. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PowerPolicyAction](arkts-mdm-powerpolicyaction-e-sys.md) | Enumerates the actions that can be performed to apply the power policy.&lt;!--no_check--&gt; |
| [PowerScene](arkts-mdm-powerscene-e-sys.md) | Defines the scenario to which the power policy applies. |
<!--DelEnd-->

