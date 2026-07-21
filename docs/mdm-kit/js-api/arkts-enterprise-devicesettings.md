# @ohos.enterprise.deviceSettings

The **deviceSettings** module provides APIs for setting enterprise devices, including setting and obtaining the screen-off time of a device.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace deviceSettings--><!--Device-unnamed-declare namespace deviceSettings-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { deviceSettings } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addHiddenSettingsMenu](arkts-mdm-devicesettings-addhiddensettingsmenu-f.md#addhiddensettingsmenu) | Adds a setting item to the hidden setting item list of the current user. Then the setting item is hidden in the current user's settings menu and cannot be found in settings search. Even if the setting item is located through some means, it cannot be opened when tapped. The settings take effect immediately after the API is called. The Settings application does not need to be restarted. |
| [getHiddenSettingsMenu](arkts-mdm-devicesettings-gethiddensettingsmenu-f.md#gethiddensettingsmenu) | Obtains the hidden setting item list of the current user. |
| [getValue](arkts-mdm-devicesettings-getvalue-f.md#getvalue) | Obtains a device setting policy. |
| [getValueForAccount](arkts-mdm-devicesettings-getvalueforaccount-f.md#getvalueforaccount) | Obtains the device policy of a specified user. This API allows you to obtain a specific parameter of a given user,such as obtaining the device name of user 100. |
| [removeHiddenSettingsMenu](arkts-mdm-devicesettings-removehiddensettingsmenu-f.md#removehiddensettingsmenu) | Removes a setting item from the hidden setting item list of the current user. Setting items in the hidden setting item list are hidden in the current user's settings menu and cannot be found in settings search. Even if a setting item is located through some means, it cannot be opened when tapped. If the remaining hidden setting item list is empty after the removal, all setting items are displayed. The settings take effect immediately after the API is called. The Settings application does not need to be restarted. |
| [setHomeWallpaper](arkts-mdm-devicesettings-sethomewallpaper-f.md#sethomewallpaper) | Sets the home screen wallpaper. This API uses a promise to return the result. |
| [setSwitchStatus](arkts-mdm-devicesettings-setswitchstatus-f.md#setswitchstatus) | Sets the state of a switch. This API can enable or disable NearLink, Bluetooth, and Wi-Fi. After the setting is applied, users can manually enable or disable them. If a switch has been disabled through the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API, error code 203 will be thrown when you attempt to set the state of the switch through this API. In this case,you need to use the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API to enable the switch. |
| [setUnlockWallpaper](arkts-mdm-devicesettings-setunlockwallpaper-f.md#setunlockwallpaper) | Sets the lock screen wallpaper. This API uses a promise to return the result. |
| [setValue](arkts-mdm-devicesettings-setvalue-f.md#setvalue) | Sets the device policy. |
| [setValueForAccount](arkts-mdm-devicesettings-setvalueforaccount-f.md#setvalueforaccount) | Sets the device policy for a specified user. This API allows you to set a specific parameter for a given user, such as setting the device name for user 100. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPowerPolicy](arkts-mdm-devicesettings-getpowerpolicy-f-sys.md#getpowerpolicy) | Obtains the power policy. |
| [getScreenOffTime](arkts-mdm-devicesettings-getscreenofftime-f-sys.md#getscreenofftime) | Obtains the device screen-off time. This API uses an asynchronous callback to return the result. |
| [getScreenOffTime](arkts-mdm-devicesettings-getscreenofftime-f-sys.md#getscreenofftime-1) | Obtains the device screen-off time. This API uses an asynchronous promise to return the result. |
| [installUserCertificate](arkts-mdm-devicesettings-installusercertificate-f-sys.md#installusercertificate) | Installs a user certificate. This API uses a callback to return the result. |
| [installUserCertificate](arkts-mdm-devicesettings-installusercertificate-f-sys.md#installusercertificate-1) | Installs a user certificate. This API uses a promise to return the result. |
| [setPowerPolicy](arkts-mdm-devicesettings-setpowerpolicy-f-sys.md#setpowerpolicy) | Sets the power policy. |
| [setScreenOffTime](arkts-mdm-devicesettings-setscreenofftime-f-sys.md#setscreenofftime) | Sets the device screen-off time. |
| [uninstallUserCertificate](arkts-mdm-devicesettings-uninstallusercertificate-f-sys.md#uninstallusercertificate) | Uninstalls a user certificate. This API uses a callback to return the result. |
| [uninstallUserCertificate](arkts-mdm-devicesettings-uninstallusercertificate-f-sys.md#uninstallusercertificate-1) | Uninstalls a user certificate. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CertBlob](arkts-mdm-devicesettings-certblob-i-sys.md) | Represents the certificate information. |
| [PowerPolicy](arkts-mdm-devicesettings-powerpolicy-i-sys.md) | Represents the power policy. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SettingsItem](arkts-mdm-devicesettings-settingsitem-e.md) | Policy type. |
| [SettingsMenu](arkts-mdm-devicesettings-settingsmenu-e.md) | Describes the setting item list. |
| [SwitchKey](arkts-mdm-devicesettings-switchkey-e.md) | Enumerates switch names. |
| [SwitchStatus](arkts-mdm-devicesettings-switchstatus-e.md) | Enumerates switch states. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PowerPolicyAction](arkts-mdm-devicesettings-powerpolicyaction-e-sys.md) | Enumerates the actions that can be performed to apply the power policy.  <!--no_check--> |
| [PowerScene](arkts-mdm-devicesettings-powerscene-e-sys.md) | Defines the scenario to which the power policy applies. |
<!--DelEnd-->

