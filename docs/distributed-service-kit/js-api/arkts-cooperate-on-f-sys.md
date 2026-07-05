# on

## on('cooperate')

```TypeScript
function on(type: 'cooperate', callback: Callback<{ networkId: string, msg: CooperateMsg }>): void
```

注册监听键鼠穿越状态。

**Since:** 10

**Deprecated since:** 11

**Substitute:** on(type:

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperate' | Yes | 监听类型，取值为'cooperate' |
| callback | Callback&lt;{ networkId: string, msg: CooperateMsg }> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

## on('cooperateMessage')

```TypeScript
function on(type: 'cooperateMessage', callback: Callback<CooperateMessage>): void
```

注册监听键鼠穿越状态。

**Since:** 11

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperateMessage' | Yes | 监听类型，取值为'cooperateMessage' |
| callback | Callback&lt;CooperateMessage> | Yes | 回调函数，异步返回键鼠穿越状态消息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

## on('cooperateMouse')

```TypeScript
function on(type: 'cooperateMouse', networkId: string, callback: Callback<MouseLocation>): void
```

注册监听指定设备鼠标光标位置。

**Since:** 12

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperateMouse' | Yes | 监听类型，取值为'cooperateMouse' |
| networkId | string | Yes | 目标设备描述符 |
| callback | Callback&lt;MouseLocation> | Yes | 回调函数，异步返回指定监听设备鼠标光标位置信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2.Incorrect parameter types.  3.Parameter verification failed. |

