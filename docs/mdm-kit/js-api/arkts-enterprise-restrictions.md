# @ohos.enterprise.restrictions

This **restrictions** module provides APIs for disallowing general features of devices. You can globally disable or enable the features such as Bluetooth, HDC, USB, and Wi-Fi. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { restrictions } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addDisallowedListForAccount](arkts-mdm-adddisallowedlistforaccount-f.md#adddisallowedlistforaccount-1) | Adds a list of applications that are not allowed to use a feature for a specified user. |
| [getDisallowedListForAccount](arkts-mdm-getdisallowedlistforaccount-f.md#getdisallowedlistforaccount-1) | Obtains the list of applications that are not allowed to use a feature for a specified user. |
| [getDisallowedPolicy](arkts-mdm-getdisallowedpolicy-f.md#getdisallowedpolicy-1) | Queries whether a feature is disabled. |
| [getDisallowedPolicy](arkts-mdm-getdisallowedpolicy-f.md#getdisallowedpolicy-2) | Queries whether a specified device feature is disabled. |
| [getDisallowedPolicyForAccount](arkts-mdm-getdisallowedpolicyforaccount-f.md#getdisallowedpolicyforaccount-1) | Obtains the status of a feature for a specified user. |
| [getDisallowedPolicyForAccount](arkts-mdm-getdisallowedpolicyforaccount-f.md#getdisallowedpolicyforaccount-2) | Obtains the status of a feature for a specified user. |
| [getUserRestricted](arkts-mdm-getuserrestricted-f.md#getuserrestricted-1) | Obtains the disabled status of a setting item. |
| [getUserRestricted](arkts-mdm-getuserrestricted-f.md#getuserrestricted-2) | Gets whether users are restricted from changing specified settings items on the device. |
| [getUserRestrictedForAccount](arkts-mdm-getuserrestrictedforaccount-f.md#getuserrestrictedforaccount-1) | Obtains the disabled status of a setting item for a specified user. |
| [getUserRestrictedForAccount](arkts-mdm-getuserrestrictedforaccount-f.md#getuserrestrictedforaccount-2) | Gets whether users are restricted from changing specified settings items for account on the device. |
| [removeDisallowedListForAccount](arkts-mdm-removedisallowedlistforaccount-f.md#removedisallowedlistforaccount-1) | Removes the list of applications that are not allowed to use a feature for a specified user. |
| [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) | Disallows a feature. |
| [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-2) | Enables or disables a specified device feature. Once disabled, the feature cannot be used. |
| [setDisallowedPolicyForAccount](arkts-mdm-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) | Disallows a feature for a specified user. |
| [setDisallowedPolicyForAccount](arkts-mdm-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-2) | Disallows a feature for a specified user. |
| [setUserRestriction](arkts-mdm-setuserrestriction-f.md#setuserrestriction-1) | Sets restrictions on user behaviors. |
| [setUserRestriction](arkts-mdm-setuserrestriction-f.md#setuserrestriction-2) | Restricting users from changing specified settings item on the device. |
| [setUserRestrictionForAccount](arkts-mdm-setuserrestrictionforaccount-f.md#setuserrestrictionforaccount-1) | Sets restrictions on specified user behaviors. |
| [setUserRestrictionForAccount](arkts-mdm-setuserrestrictionforaccount-f.md#setuserrestrictionforaccount-2) | Restricting users from changing specified settings item for account on the device. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableMicrophone](arkts-mdm-disablemicrophone-f-sys.md#disablemicrophone-1) | Enables or disables the microphone. |
| [isFingerprintAuthDisabled](arkts-mdm-isfingerprintauthdisabled-f-sys.md#isfingerprintauthdisabled-1) | Queries whether fingerprint authentication is disabled. |
| [isHdcDisabled](arkts-mdm-ishdcdisabled-f-sys.md#ishdcdisabled-1) | Queries whether HDC is disabled. This API uses an asynchronous callback to return the result. |
| [isHdcDisabled](arkts-mdm-ishdcdisabled-f-sys.md#ishdcdisabled-2) | Queries whether HDC is disabled. This API uses a promise to return the result. |
| [isMicrophoneDisabled](arkts-mdm-ismicrophonedisabled-f-sys.md#ismicrophonedisabled-1) | Queries whether the microphone is disabled. |
| [isPrinterDisabled](arkts-mdm-isprinterdisabled-f-sys.md#isprinterdisabled-1) | Queries whether the printing capability of a device is disabled. This API uses an asynchronous callback to return the result. |
| [isPrinterDisabled](arkts-mdm-isprinterdisabled-f-sys.md#isprinterdisabled-2) | Queries whether the printing capability of a device is disabled. This API uses a promise to return the result. |
| [setFingerprintAuthDisabled](arkts-mdm-setfingerprintauthdisabled-f-sys.md#setfingerprintauthdisabled-1) | Enables or disables fingerprint authentication. |
| [setHdcDisabled](arkts-mdm-sethdcdisabled-f-sys.md#sethdcdisabled-1) | Enables or disables [HDC](../../../../../device-dev/subsystems/subsys-toolchain-hdc-guide.md). This API uses an asynchronous callback to return the result. |
| [setHdcDisabled](arkts-mdm-sethdcdisabled-f-sys.md#sethdcdisabled-2) | Enables or disables HDC on a device. This API uses a promise to return the result. |
| [setPrinterDisabled](arkts-mdm-setprinterdisabled-f-sys.md#setprinterdisabled-1) | Enables or disables the printing capability of the device. This API uses an asynchronous callback to return the result. |
| [setPrinterDisabled](arkts-mdm-setprinterdisabled-f-sys.md#setprinterdisabled-2) | Enables or disables the printing capability of the device. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [FeatureForAccount](arkts-mdm-featureforaccount-e.md) | Enumerates the features that can be disabled or enabled for a specified user. |
| [FeatureForDevice](arkts-mdm-featurefordevice-e.md) | Enumerates device features. |
| [SettingsForAccount](arkts-mdm-settingsforaccount-e.md) | The settings item for account. |
| [SettingsForDevice](arkts-mdm-settingsfordevice-e.md) | The settings item for device. |

