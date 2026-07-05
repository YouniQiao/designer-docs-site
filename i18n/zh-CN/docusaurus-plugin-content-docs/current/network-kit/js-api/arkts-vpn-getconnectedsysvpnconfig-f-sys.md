# getConnectedSysVpnConfig

## getConnectedSysVpnConfig

```TypeScript
function getConnectedSysVpnConfig(): Promise<SysVpnConfig>
```

Get the connected VPN network configuration.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_VPN

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SysVpnConfig> | The promise returned by the connected VPN network configuration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

