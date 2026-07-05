# ContinuousAuthStatusCallback

```TypeScript
type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void
```

回调函数，用于接收持续认证状态变化通知。当伴随设备的认证状态发生变化时，系统会通过此回调通知应用当前的认证结果和认证可信等级。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAuthPassed | boolean | Yes | 认证是否通过。true表示伴随设备认证通过，用户身份已确认；false表示认证未通过，用户身份未确认或认证已失效。 |
| authTrustLevel | UserAuth.AuthTrustLevel | no |  |

