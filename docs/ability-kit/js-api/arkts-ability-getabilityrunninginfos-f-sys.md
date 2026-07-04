# getAbilityRunningInfos (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@ohos.app.ability.abilityManager';
```

## getAbilityRunningInfos

```TypeScript
function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void
```

Obtains the UIAbility running information. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AbilityRunningInfo&gt;&gt; | Yes | Callback used to return the result. If the API call issuccessful, **err** is **undefined** and **data** is the UIAbility running information obtained. Otherwise, **err**is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

