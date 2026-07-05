# @ohos.identifier.oaid

本模块提供开放匿名设备标识符（Open Anonymous Device Identifier, OAID）的获取和重置能力。 > **说明：** > > 使用获取开放匿名设备标识符接口，需[向用户申请授权](docroot://security/AccessToken/request-user-authorization.md) >（默认开启权限）：ohos.permission.APP_TRACKING_CONSENT。

**Since:** 10

**System capability:** SystemCapability.Advertising.OAID

## Modules to Import

```TypeScript
import { identifier } from '@kit.AdsKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getOAID](arkts-identifier-getoaid-f.md#getOAID-1) | 获取开放匿名设备标识符（OAID）。使用callback异步回调。 |
| [getOAID](arkts-identifier-getoaid-f.md#getOAID-2) | 获取开放匿名设备标识符（OAID）。使用Promise异步回调。 |
| <!--DelRow-->[resetOAID](arkts-identifier-resetoaid-f-sys.md#resetOAID-1) | 重置开放匿名设备标识符（OAID）。 |

