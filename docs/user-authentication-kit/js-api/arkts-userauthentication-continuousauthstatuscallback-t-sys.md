# ContinuousAuthStatusCallback (System API)

```TypeScript
type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void
```

Defines the callback used to receive the continuous authentication status.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAuthPassed | boolean | Yes | Whether the authentication is successful. The options are as follows: **true**:yes; **false**: no. |
| authTrustLevel | UserAuth.AuthTrustLevel | No | Authentication trust level, that is, the trust level ofidentity authentication required for typical operations. For details, see[Principles for Classifying Biometric Authentication Trust Levels](../../../../security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels). |

