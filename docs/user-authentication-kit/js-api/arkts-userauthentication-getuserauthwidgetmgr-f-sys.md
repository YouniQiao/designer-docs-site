---
last_update:
  date: 2026-07-04
---

# getUserAuthWidgetMgr (System API)

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## getUserAuthWidgetMgr

```TypeScript
function getUserAuthWidgetMgr(version: number): UserAuthWidgetMgr
```

Obtains a **UserAuthWidgetMgr** instance for user authentication. > **NOTE** > A **UserAuthInstance** instance can be used for an authentication only once.

**Since:** 10

**Required permissions:** ohos.permission.SUPPORT_USER_AUTH

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| version | number | Yes | Version of the user authentication widget. |

**Return value:**

| Type | Description |
| --- | --- |
| UserAuthWidgetMgr | **UserAuthWidgetMgr** instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let userAuthWidgetMgrVersion = 1;
try {
  let userAuthWidgetMgr = userAuth.getUserAuthWidgetMgr(userAuthWidgetMgrVersion);
  console.info('get userAuthWidgetMgr instance successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`userAuth widgetMgr failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

