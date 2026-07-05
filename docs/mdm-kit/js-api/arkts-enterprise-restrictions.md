# @ohos.enterprise.restrictions

本模块提供设置通用限制类策略能力。可以全局禁用和解除禁用蓝牙、HDC、USB、Wi-Fi等特性。 > **说明**： > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

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
| [addDisallowedListForAccount](arkts-restrictions-adddisallowedlistforaccount-f.md#addDisallowedListForAccount-1) | 为指定用户添加禁止使用某特性的应用名单。指定用户下，添加到名单中的应用不允许使用指定的特性能力。 |
| <!--DelRow-->[disableMicrophone](arkts-restrictions-disablemicrophone-f-sys.md#disableMicrophone-1) | 使设备禁用或启用麦克风。 |
| [getDisallowedListForAccount](arkts-restrictions-getdisallowedlistforaccount-f.md#getDisallowedListForAccount-1) | 获取指定用户禁止使用某特性的应用名单。 |
| [getDisallowedPolicy](arkts-restrictions-getdisallowedpolicy-f.md#getDisallowedPolicy-1) | 查询某特性是否被禁用。 |
| [getDisallowedPolicy](arkts-restrictions-getdisallowedpolicy-f.md#getDisallowedPolicy-2) | 查询指定设备特性是否被禁用。 |
| [getDisallowedPolicyForAccount](arkts-restrictions-getdisallowedpolicyforaccount-f.md#getDisallowedPolicyForAccount-1) | 获取指定用户的某特性状态。 |
| [getDisallowedPolicyForAccount](arkts-restrictions-getdisallowedpolicyforaccount-f.md#getDisallowedPolicyForAccount-2) | 获取指定用户的某特性状态。 |
| [getUserRestricted](arkts-restrictions-getuserrestricted-f.md#getUserRestricted-1) | 获取设置项的禁用状态。 |
| [getUserRestrictedForAccount](arkts-restrictions-getuserrestrictedforaccount-f.md#getUserRestrictedForAccount-1) | 获取指定用户设置项的禁用状态。 |
| <!--DelRow-->[isFingerprintAuthDisabled](arkts-restrictions-isfingerprintauthdisabled-f-sys.md#isFingerprintAuthDisabled-1) | 查询指纹认证是否被禁用。 |
| <!--DelRow-->[isHdcDisabled](arkts-restrictions-ishdcdisabled-f-sys.md#isHdcDisabled-1) | 查询HDC是否被禁用。使用callback异步回调。 |
| <!--DelRow-->[isHdcDisabled](arkts-restrictions-ishdcdisabled-f-sys.md#isHdcDisabled-2) | 查询HDC是否被禁用。使用Promise异步回调。 |
| <!--DelRow-->[isMicrophoneDisabled](arkts-restrictions-ismicrophonedisabled-f-sys.md#isMicrophoneDisabled-1) | 查询麦克风是否被禁用。 |
| <!--DelRow-->[isPrinterDisabled](arkts-restrictions-isprinterdisabled-f-sys.md#isPrinterDisabled-1) | 查询设备打印能力是否被禁用。使用callback异步回调。 |
| <!--DelRow-->[isPrinterDisabled](arkts-restrictions-isprinterdisabled-f-sys.md#isPrinterDisabled-2) | 查询设备打印能力是否被禁用。使用Promise异步回调。 |
| [removeDisallowedListForAccount](arkts-restrictions-removedisallowedlistforaccount-f.md#removeDisallowedListForAccount-1) | 为指定用户移除禁止使用某特性的应用名单。 |
| [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) | 设置禁用/启用某特性。 |
| [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-2) | 设置禁用/启用指定设备特性，禁用后相关设备特性无法被使用。 |
| [setDisallowedPolicyForAccount](arkts-restrictions-setdisallowedpolicyforaccount-f.md#setDisallowedPolicyForAccount-1) | 设置禁用/启用指定用户的某特性。 |
| [setDisallowedPolicyForAccount](arkts-restrictions-setdisallowedpolicyforaccount-f.md#setDisallowedPolicyForAccount-2) | 设置禁用/启用指定用户的某特性。 |
| <!--DelRow-->[setFingerprintAuthDisabled](arkts-restrictions-setfingerprintauthdisabled-f-sys.md#setFingerprintAuthDisabled-1) | 禁用或启用指纹认证。 |
| <!--DelRow-->[setHdcDisabled](arkts-restrictions-sethdcdisabled-f-sys.md#setHdcDisabled-1) | 使设备禁用或启用[HDC](docroot://../device-dev/subsystems/subsys-toolchain-hdc-guide.md)。使用callback异步回调。 |
| <!--DelRow-->[setHdcDisabled](arkts-restrictions-sethdcdisabled-f-sys.md#setHdcDisabled-2) | 使设备禁用或启用HDC。使用Promise异步回调。 |
| <!--DelRow-->[setPrinterDisabled](arkts-restrictions-setprinterdisabled-f-sys.md#setPrinterDisabled-1) | 使设备禁用或启用打印能力。使用callback异步回调。 |
| <!--DelRow-->[setPrinterDisabled](arkts-restrictions-setprinterdisabled-f-sys.md#setPrinterDisabled-2) | 使设备禁用或启用打印能力。使用Promise异步回调。 |
| [setUserRestriction](arkts-restrictions-setuserrestriction-f.md#setUserRestriction-1) | 设置用户行为的限制规则。 |
| [setUserRestrictionForAccount](arkts-restrictions-setuserrestrictionforaccount-f.md#setUserRestrictionForAccount-1) | 设置指定用户行为的限制规则。 |

### Enums

| Name | Description |
| --- | --- |
| [FeatureForAccount](arkts-restrictions-featureforaccount-e.md) | 可为指定用户设置禁用/启用的特性的枚举。 |
| [FeatureForDevice](arkts-restrictions-featurefordevice-e.md) | 设备特性枚举。 |

