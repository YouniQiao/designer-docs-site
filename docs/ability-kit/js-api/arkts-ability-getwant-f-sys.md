# getWant (System API)

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## getWant

```TypeScript
function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void
```

Obtains the Want in a WantAgent object.
This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | Target WantAgent object. |
| callback | AsyncCallback&lt;Want&gt; | Yes | Callback used to return the Want. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000007](../errorcode-ability.md#16000007-service-unresponsive) | Service busy. There are concurrent tasks. Try again later. |
| [16000015](../errorcode-ability.md#16000015-service-timeout) | Service timeout. |
| [16000151](../errorcode-ability.md#16000151-invalid-wantagent-object) | Invalid wantAgent object. |


## getWant

```TypeScript
function getWant(agent: WantAgent): Promise<Want>
```

Obtains the Want in a WantAgent object.
This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | Target WantAgent object. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want&gt; | Promise used to return the Want. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000007](../errorcode-ability.md#16000007-service-unresponsive) | Service busy. There are concurrent tasks. Try again later. |
| [16000015](../errorcode-ability.md#16000015-service-timeout) | Service timeout. |
| [16000151](../errorcode-ability.md#16000151-invalid-wantagent-object) | Invalid wantAgent object. |

