# @ohos.enterprise.restrictions

This **restrictions** module provides APIs for disallowing general features of devices. You can globally disable or enable the features such as Bluetooth, HDC, USB, and Wi-Fi.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace restrictions--><!--Device-unnamed-declare namespace restrictions-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { restrictions } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addDisallowedListForAccount](arkts-mdm-restrictions-adddisallowedlistforaccount-f.md#adddisallowedlistforaccount) | Adds a list of applications that are not allowed to use a feature for a specified user. |
| [getDisallowedListForAccount](arkts-mdm-restrictions-getdisallowedlistforaccount-f.md#getdisallowedlistforaccount) | Obtains the list of applications that are not allowed to use a feature for a specified user. |
| [getDisallowedPolicy](arkts-mdm-restrictions-getdisallowedpolicy-f.md#getdisallowedpolicy) | Queries whether a feature is disabled. |
| [getDisallowedPolicy](arkts-mdm-restrictions-getdisallowedpolicy-f.md#getdisallowedpolicy-1) | Queries whether a specified device feature is disabled. |
| [getDisallowedPolicyForAccount](arkts-mdm-restrictions-getdisallowedpolicyforaccount-f.md#getdisallowedpolicyforaccount) | Obtains the status of a feature for a specified user. |
| [getDisallowedPolicyForAccount](arkts-mdm-restrictions-getdisallowedpolicyforaccount-f.md#getdisallowedpolicyforaccount-1) | Obtains the status of a feature for a specified user. |
| [getUserRestricted](arkts-mdm-restrictions-getuserrestricted-f.md#getuserrestricted) | Obtains the disabled status of a setting item. |
| [getUserRestricted](arkts-mdm-restrictions-getuserrestricted-f.md#getuserrestricted-1) | Gets whether users are restricted from changing specified settings items on the device. |
| [getUserRestrictedForAccount](arkts-mdm-restrictions-getuserrestrictedforaccount-f.md#getuserrestrictedforaccount) | Obtains the disabled status of a setting item for a specified user. |
| [getUserRestrictedForAccount](arkts-mdm-restrictions-getuserrestrictedforaccount-f.md#getuserrestrictedforaccount-1) | Gets whether users are restricted from changing specified settings items for account on the device. |
| [removeDisallowedListForAccount](arkts-mdm-restrictions-removedisallowedlistforaccount-f.md#removedisallowedlistforaccount) | Removes the list of applications that are not allowed to use a feature for a specified user. |
| [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy) | Disallows a feature. |
| [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1) | Enables or disables a specified device feature. Once disabled, the feature cannot be used. |
| [setDisallowedPolicyForAccount](arkts-mdm-restrictions-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount) | Disallows a feature for a specified user. |
| [setDisallowedPolicyForAccount](arkts-mdm-restrictions-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) | Disallows a feature for a specified user. |
| [setUserRestriction](arkts-mdm-restrictions-setuserrestriction-f.md#setuserrestriction) | Sets restrictions on user behaviors. |
| [setUserRestriction](arkts-mdm-restrictions-setuserrestriction-f.md#setuserrestriction-1) | Restricting users from changing specified settings item on the device. |
| [setUserRestrictionForAccount](arkts-mdm-restrictions-setuserrestrictionforaccount-f.md#setuserrestrictionforaccount) | Sets restrictions on specified user behaviors. |
| [setUserRestrictionForAccount](arkts-mdm-restrictions-setuserrestrictionforaccount-f.md#setuserrestrictionforaccount-1) | Restricting users from changing specified settings item for account on the device. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableMicrophone](arkts-mdm-restrictions-disablemicrophone-f-sys.md#disablemicrophone) | Enables or disables the microphone. |
| [isFingerprintAuthDisabled](arkts-mdm-restrictions-isfingerprintauthdisabled-f-sys.md#isfingerprintauthdisabled) | Queries whether fingerprint authentication is disabled. |
| [isHdcDisabled](arkts-mdm-restrictions-ishdcdisabled-f-sys.md#ishdcdisabled) | Queries whether HDC is disabled. This API uses an asynchronous callback to return the result. |
| [isHdcDisabled](arkts-mdm-restrictions-ishdcdisabled-f-sys.md#ishdcdisabled-1) | Queries whether HDC is disabled. This API uses a promise to return the result. |
| [isMicrophoneDisabled](arkts-mdm-restrictions-ismicrophonedisabled-f-sys.md#ismicrophonedisabled) | Queries whether the microphone is disabled. |
| [isPrinterDisabled](arkts-mdm-restrictions-isprinterdisabled-f-sys.md#isprinterdisabled) | Queries whether the printing capability of a device is disabled. This API uses an asynchronous callback to return the result. |
| [isPrinterDisabled](arkts-mdm-restrictions-isprinterdisabled-f-sys.md#isprinterdisabled-1) | Queries whether the printing capability of a device is disabled. This API uses a promise to return the result. |
| [setFingerprintAuthDisabled](arkts-mdm-restrictions-setfingerprintauthdisabled-f-sys.md#setfingerprintauthdisabled) | Enables or disables fingerprint authentication. |
| [setHdcDisabled](arkts-mdm-restrictions-sethdcdisabled-f-sys.md#sethdcdisabled) | Enables or disables [HDC](docroot://../device-dev/subsystems/subsys-toolchain-hdc-guide.md). This API uses an asynchronous callback to return the result. |
| [setHdcDisabled](arkts-mdm-restrictions-sethdcdisabled-f-sys.md#sethdcdisabled-1) | Enables or disables HDC on a device. This API uses a promise to return the result. |
| [setPrinterDisabled](arkts-mdm-restrictions-setprinterdisabled-f-sys.md#setprinterdisabled) | Enables or disables the printing capability of the device. This API uses an asynchronous callback to return the result. |
| [setPrinterDisabled](arkts-mdm-restrictions-setprinterdisabled-f-sys.md#setprinterdisabled-1) | Enables or disables the printing capability of the device. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [FeatureForAccount](arkts-mdm-restrictions-featureforaccount-e.md) | Enumerates the features that can be disabled or enabled for a specified user. |
| [FeatureForDevice](arkts-mdm-restrictions-featurefordevice-e.md) | Enumerates device features. |
| [SettingsForAccount](arkts-mdm-restrictions-settingsforaccount-e.md) | The settings item for account. |
| [SettingsForDevice](arkts-mdm-restrictions-settingsfordevice-e.md) | The settings item for device. |

