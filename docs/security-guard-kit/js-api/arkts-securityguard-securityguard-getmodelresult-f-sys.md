# getModelResult (System API)

## Modules to Import

```TypeScript
import { securityGuard } from '@kit.SecurityGuardKit';
```

## getModelResult

```TypeScript
function getModelResult(rule: ModelRule): Promise<ModelResult>
```

Request security model result from security guard.

**Since:** 12

**Required permissions:** ohos.permission.QUERY_SECURITY_MODEL_RESULT

<!--Device-securityGuard-function getModelResult(rule: ModelRule): Promise<ModelResult>--><!--Device-securityGuard-function getModelResult(rule: ModelRule): Promise<ModelResult>-End-->

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rule | [ModelRule](arkts-securityguard-securityguard-modelrule-i-sys.md) | Yes | indicates the security model rule. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ModelResult> | model Results with Promises. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | check permission fail. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | non-system application uses the system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters.Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |

