# getEnrolledState

## getEnrolledState

```TypeScript
function getEnrolledState(authType: UserAuthType): EnrolledState
```

查询凭据注册的状态，以检测用户注册凭据的变更。该接口用于获取指定认证类型的凭据注册信息，包括凭据摘要和数量。应用可通过对比当前查询结果与之前保存的结果，判断用户是否新增或删除了凭据，从而采取相应的业务处理。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_BIOMETRIC

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | UserAuthType | Yes | 认证类型。用于指定查询的凭据类型，支持FACE（人脸）、FINGERPRINT（指纹）、PIN（密码）、COMPANION_DEVICE（伴随设备）。查询PIN  时返回的是密码的整体状态，而非单个密码的数量。 |

**Return value:**

| Type | Description |
| --- | --- |
| EnrolledState | 当查询成功时，返回值为用户注册凭据的状态。包含credentialDigest（凭据摘要）和credentialCount（凭据数量）。应用可保存  credentialDigest值，后续查询时对比以检测凭据变更。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified. |
| 12500002 | General operation error. |
| 12500005 | The authentication type is not supported. |
| 12500010 | The type of credential has not been enrolled. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let enrolledState = userAuth.getEnrolledState(userAuth.UserAuthType.FACE);
  console.info('get current enrolled state successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`get current enrolled state failed, Code is ${err?.code}, message is ${err?.message}`);
}

```

