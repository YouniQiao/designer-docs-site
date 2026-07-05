# off

## off('cooperate')

```TypeScript
function off(type: 'cooperate', callback?: Callback<void>): void
```

取消监听键鼠穿越状态。

**Since:** 10

**Deprecated since:** 11

**Substitute:** off(type:

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperate' | Yes | 监听类型，取值为'cooperate'。 |
| callback | Callback&lt;void> | No | 需要取消注册的回调函数，若无此参数，则取消当前应用注册的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

## off('cooperateMessage')

```TypeScript
function off(type: 'cooperateMessage', callback?: Callback<CooperateMessage>): void
```

取消监听键鼠穿越状态。

**Since:** 11

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperateMessage' | Yes | 监听类型，取值为'cooperate'。 |
| callback | Callback&lt;CooperateMessage> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

## off('cooperateMouse')

```TypeScript
function off(type: 'cooperateMouse', networkId: string, callback?: Callback<MouseLocation>): void
```

取消监听指定设备鼠标光标位置。

**Since:** 12

**Required permissions:** 

 ohos.permission.COOPERATE_MANAGER

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cooperateMouse' | Yes | 监听类型，取值为'cooperateMouse'。 |
| networkId | string | Yes | 目标设备描述符 |
| callback | Callback&lt;MouseLocation> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

