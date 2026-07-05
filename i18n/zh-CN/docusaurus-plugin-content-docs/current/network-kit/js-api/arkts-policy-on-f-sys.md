# on

## on('netUidPolicyChange')

```TypeScript
function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void
```

Register uid policy change listener.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netUidPolicyChange' | 是 | Indicates Event name. |
| callback | Callback&lt;NetUidPolicyInfo> | 是 | the callback of on. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netUidRuleChange' | 是 | Indicates Event name. |
| callback | Callback&lt;NetUidRuleInfo> | 是 | the callback of on. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netMeteredIfacesChange' | 是 | Indicates Event name. |
| callback | Callback&lt;Array&lt;string>> | 是 | the callback of on. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netQuotaPolicyChange' | 是 | Indicates Event name. |
| callback | Callback&lt;Array&lt;NetQuotaPolicy>> | 是 | the callback of on. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_NET_STRATEGY

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'netBackgroundPolicyChange' | 是 | Indicates Event name. |
| callback | Callback&lt;boolean> | 是 | the callback of on. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

