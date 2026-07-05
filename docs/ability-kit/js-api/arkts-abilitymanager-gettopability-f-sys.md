# getTopAbility

## getTopAbility

```TypeScript
function getTopAbility(): Promise<ElementName>
```

获取窗口焦点所在的Ability。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ElementName> | Promise对象，返回接口运行结果及应用名。开发者可在此进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 16000050 | Internal error. |

## getTopAbility

```TypeScript
function getTopAbility(callback: AsyncCallback<ElementName>): void
```

获取窗口焦点所在的Ability。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ElementName> | Yes | 回调函数。当获取窗口焦点所在的Ability成功，err为undefined，data为获取到的应用名；否则为错误对象。可进行错误处理或其他自  定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

