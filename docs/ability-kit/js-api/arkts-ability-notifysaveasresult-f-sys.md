# notifySaveAsResult (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@ohos.app.ability.abilityManager';
```

## notifySaveAsResult

```TypeScript
function notifySaveAsResult(parameter: AbilityResult, requestCode: number, callback: AsyncCallback<void>): void
```

Used by the [Data Loss Prevention (DLP)](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md#dlppermission) management application to notify a sandbox application of the data saving result. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | Information returned to the caller. |
| requestCode | number | Yes | Request code passed in by the DLP management application. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the API call is successful, **err** is**undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |


## notifySaveAsResult

```TypeScript
function notifySaveAsResult(parameter: AbilityResult, requestCode: number): Promise<void>
```

Used by the [Data Loss Prevention (DLP)](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md#dlppermission) management application to notify a sandbox application of the data saving result. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | Information returned to the caller. |
| requestCode | number | Yes | Request code passed in by the DLP management application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

