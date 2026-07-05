# getExtensionRunningInfos

## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: int): Promise<Array<ExtensionRunningInfo>>
```

获取关于运行扩展能力的信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upperLimit | int | Yes | 获取消息数量的最大限制，最大为231-1。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ExtensionRunningInfo>> | Promise对象，返回接口运行结果及运行扩展能力的信息。开发者可在此进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>): void
```

获取关于运行扩展能力的信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upperLimit | int | Yes | 获取消息数量的最大限制，最大为231-1。 |
| callback | AsyncCallback&lt;Array&lt;ExtensionRunningInfo>> | Yes | 回调函数。当获取运行扩展能力的信息成功，err为undefined，data为获取到的运行扩展能力信息；否则为  错误对象。可进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

