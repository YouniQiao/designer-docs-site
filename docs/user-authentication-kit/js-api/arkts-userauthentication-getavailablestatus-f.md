# getAvailableStatus

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## getAvailableStatus

```TypeScript
function getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): void
```

Checks whether the specified authentication capability is supported.

**Since:** 9

**Required permissions:** ohos.permission.ACCESS_BIOMETRIC

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | UserAuthType | Yes | Authentication type. PIN is supported since API version 11. |
| authTrustLevel | AuthTrustLevel | Yes | Authentication trust level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |
| [12500005](../errorcode-useriam.md#12500005-unsupported-authentication-type) | The authentication type is not supported. |
| [12500006](../errorcode-useriam.md#12500006-unsupported-authentication-trust-level) | The authentication trust level is not supported. |
| [12500010](../errorcode-useriam.md#12500010-credential-not-enrolled) | The type of credential has not been enrolled. |
| [12500013](../errorcode-useriam.md#12500013-password-expired) | Operation failed because of PIN expired.<br>**Applicable version:** 12 |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL3);
  console.info('current auth trust level is supported');
} catch (error) {
  console.error(`current auth trust level is not supported, error = ${error}`);
}

```

