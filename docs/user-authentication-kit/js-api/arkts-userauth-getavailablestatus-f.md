# getAvailableStatus

## getAvailableStatus

```TypeScript
function getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): void
```

查询指定类型和等级的认证能力是否支持。该接口用于检查当前设备是否支持指定的认证类型和认证可信等级，帮助应用在发起认证前判断认证能力是否可用，从而避免不必要的认证不通过。若查询通过（无错误抛出），表示认证能力可用；若抛出错误，应用应 根据错误码判断具体原因并采取相应处理。

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_BIOMETRIC

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | UserAuthType | Yes | 认证类型。用于指定查询的认证类型，支持FACE（人脸）、FINGERPRINT（指纹）、PIN（密码）、COMPANION_DEVICE（伴随设备）。  说明：  从API版本11开始支持PIN查询。  从API版本26.0.0开始支持COMPANION_DEVICE查询。 |
| authTrustLevel | AuthTrustLevel | Yes | 认证信任等级。用于指定查询的认证可信等级，有效值为ATL1(10000)、ATL2(20000)、ATL3(30000)、ATL4(40000  )。等级越高，对认证方案的活体检测能力要求越高。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified. |
| 12500002 | General operation error. |
| 12500005 | The authentication type is not supported. |
| 12500006 | The authentication trust level is not supported. |
| 12500010 | The type of credential has not been enrolled. |
| 12500013 | Operation failed because of PIN expired. [since 12] |

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

