# getTopAbility (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
```

## getTopAbility

```TypeScript
function getTopAbility(): Promise<ElementName>
```

Obtains the top ability, which is the ability that has the window focus. This API uses a promise to return the result.

**Since:** 9

<!--Device-abilityManager-function getTopAbility(): Promise<ElementName>--><!--Device-abilityManager-function getTopAbility(): Promise<ElementName>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ElementName&gt; | Promise used to return the API call result and the element name. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |


## getTopAbility

```TypeScript
function getTopAbility(callback: AsyncCallback<ElementName>): void
```

Obtains the top ability, which is the ability that has the window focus. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-abilityManager-function getTopAbility(callback: AsyncCallback<ElementName>): void--><!--Device-abilityManager-function getTopAbility(callback: AsyncCallback<ElementName>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ElementName&gt; | Yes | Callback used to return the result. If the API call is successful,**err** is **undefined** and **data** is the top ability name obtained. Otherwise, **err** is an error object. You can perform error handling or other custom processing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

