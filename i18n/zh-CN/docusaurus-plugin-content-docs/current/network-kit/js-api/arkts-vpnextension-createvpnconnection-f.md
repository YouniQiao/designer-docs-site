# createVpnConnection

## createVpnConnection

```TypeScript
function createVpnConnection(context: VpnExtensionContext): VpnConnection
```

Create a VPN connection using the VpnExtensionContext.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | VpnExtensionContext | 是 | Indicates the context of application or capability. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VpnConnection | the VpnConnection of the construct VpnConnection instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |

