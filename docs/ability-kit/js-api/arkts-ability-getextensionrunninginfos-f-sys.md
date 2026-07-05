# getExtensionRunningInfos (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@ohos.app.ability.abilityManager';
```

## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: number): Promise<Array<ExtensionRunningInfo>>
```

Obtains the ExtensionAbility running information. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upperLimit | number | Yes | Maximum number of messages that can be obtained. The maximum value is 2&lt;sup&gt;31&lt;/sup&gt;-1. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ExtensionRunningInfo&gt;&gt; | Promise used to return the API call result and the ExtensionAbilityrunning information. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |


## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: number, callback: AsyncCallback<Array<ExtensionRunningInfo>>): void
```

Obtains the ExtensionAbility running information. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upperLimit | number | Yes | Maximum number of messages that can be obtained. The maximum value is 2&lt;sup&gt;31&lt;/sup&gt;-1. |
| callback | AsyncCallback&lt;Array&lt;ExtensionRunningInfo&gt;&gt; | Yes | Callback used to return the result. If the API call issuccessful, **err** is **undefined** and **data** is the ExtensionAbility running information obtained. Otherwise,**err** is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

