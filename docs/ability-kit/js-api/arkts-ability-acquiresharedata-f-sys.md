# acquireShareData (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@ohos.app.ability.abilityManager';
```

## acquireShareData

```TypeScript
function acquireShareData(missionId: number, callback: AsyncCallback<Record<string, Object>>): void
```

Called by a system dialog box to obtain shared data, which is set by the target UIAbility through [onShare](arkts-ability-uiability-c.md#onshare-1). This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID on the target application. The maximum value is 2&lt;sup&gt;31&lt;/sup&gt;-1. |
| callback | AsyncCallback&lt;Record&lt;string, Object&gt;&gt; | Yes | Callback used to return the result. If the API call issuccessful, **err** is **undefined** and **data** is the shared data obtained. Otherwise, **err** is an errorobject. You can perform error handling or other custom processing.<br>**Since:** 11 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |


## acquireShareData

```TypeScript
function acquireShareData(missionId: number): Promise<Record<string, Object>>
```

Called by a system dialog box to obtain shared data, which is set by the target UIAbility through [onShare](arkts-ability-uiability-c.md#onshare-1). This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | number | Yes | Mission ID on the target application. The maximum value is 2&lt;sup&gt;31&lt;/sup&gt;-1. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Object&gt;&gt; | Promise used to return the API call result and the shared data. You canperform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

