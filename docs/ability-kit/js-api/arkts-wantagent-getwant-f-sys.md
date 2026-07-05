# getWant

## getWant

```TypeScript
function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void
```

获取WantAgent对象的want。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |
| callback | AsyncCallback&lt;Want> | Yes | 回调函数。当获取WantAgent对象want成功，err中code为0，data为获取到的Want数据；否则err会返回对应的错误码和错误信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
| 16000015 | Service timeout. |
| 16000151 | Invalid wantAgent object. |

## getWant

```TypeScript
function getWant(agent: WantAgent): Promise<Want>
```

获取WantAgent对象的want。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agent | WantAgent | Yes | WantAgent对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want> | Promise对象，返回WantAgent对象的want。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 16000007 | Service busy. There are concurrent tasks. Try again later. |
| 16000015 | Service timeout. |
| 16000151 | Invalid wantAgent object. |

