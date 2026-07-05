# on

## on('netUidPolicyChange')

```TypeScript
function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void
```

Register uid policy change listener.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netUidPolicyChange' | Yes | Indicates Event name. |
| callback | Callback&lt;NetUidPolicyInfo> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

## on('netUidRuleChange')

```TypeScript
function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void
```

Register uid rule change listener.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netUidRuleChange' | Yes | Indicates Event name. |
| callback | Callback&lt;NetUidRuleInfo> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

## on('netMeteredIfacesChange')

```TypeScript
function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void
```

Register metered ifaces change listener.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netMeteredIfacesChange' | Yes | Indicates Event name. |
| callback | Callback&lt;Array&lt;string>> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

## on('netQuotaPolicyChange')

```TypeScript
function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void
```

Register quota policies change listener.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netQuotaPolicyChange' | Yes | Indicates Event name. |
| callback | Callback&lt;Array&lt;NetQuotaPolicy>> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

## on('netBackgroundPolicyChange')

```TypeScript
function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void
```

Register network background policy change listener.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'netBackgroundPolicyChange' | Yes | Indicates Event name. |
| callback | Callback&lt;boolean> | Yes | the callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

