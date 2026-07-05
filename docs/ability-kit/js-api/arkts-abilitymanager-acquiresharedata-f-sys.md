# acquireShareData

## acquireShareData

```TypeScript
function acquireShareData(missionId: int, callback: AsyncCallback<Record<string, Object>>): void
```

系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的 [onShare](arkts-uiability-c.md#onShare)回调并返回分享数据。使用 callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | int | Yes | 目标应用的missionId，最大为231-1。 |
| callback | AsyncCallback&lt;Record&lt;string, Object>> | Yes | 回调函数。当接口调用成功，err为undefined，data为获取到的分享数据；否则为错误对象。可进行错误处理或其他自  定义处理。 [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## acquireShareData

```TypeScript
function acquireShareData(missionId: int): Promise<Record<string, Object>>
```

系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的 [onShare](arkts-uiability-c.md#onShare)回调并返回分享数据。使用 Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| missionId | int | Yes | 目标应用的missionId，最大为231-1。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Object>> | The promise returned by the function. [since 10 - 10]  @returns { Promise> } Promise used to return the API call result and the shared data. You can  perform error handling or other custom processing. [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

