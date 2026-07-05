# off

## off('connect')

```TypeScript
function off(type: 'connect', callback?: Callback<VpnConnectState>): void
```

Unsubscribes from vpn connect state changes.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_VPN

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connect' | 是 | Indicates vpn connect state changes. |
| callback | Callback&lt;VpnConnectState> | 否 | The callback of the vpn connect state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

## off('connectMulti')

```TypeScript
function off(type: 'connectMulti', callback?: Callback<MultiVpnConnectState>): void
```

Unsubscribes from vpn connect state changes.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_VPN

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'connectMulti' | 是 | Indicates multi vpn connect state changes. |
| callback | Callback&lt;MultiVpnConnectState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 19900001 | Invalid parameter value. |
| 19900002 | System internal error. |

