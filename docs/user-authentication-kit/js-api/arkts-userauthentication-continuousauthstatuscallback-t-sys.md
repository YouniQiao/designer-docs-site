# ContinuousAuthStatusCallback (System API)

```TypeScript
type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void
```

Defines the callback triggered for receiving notifications of continuous authentication status changes. When the
authentication status of a companion device changes, the system applies the current authentication result and
authentication reliability level through this callback notification.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAuthPassed | boolean | Yes | Whether the authentication is successful. The value **true** indicates that thecompanion device is successfully authenticated and the user identity is confirmed. The value **false**indicates that the authentication fails, the user identity is not confirmed, or the authentication hasexpired. |
| authTrustLevel | UserAuth.AuthTrustLevel | No | Highest authentication trust level that the companiondevice can currently achieve. The value can be **ATL1 (10000)**, **ATL2 (20000)**, **ATL3 (30000)**, or**ATL4 (40000)**. A higher level indicates stronger authentication security.<br>Note:<br>This parameter is provided only when **isAuthPassed** is **true**.<br>that is, the trust level of identity authentication required for typical operations. For details, see[Principles for Classifying Biometric Authentication Trust Levels](../../../../security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels). |

