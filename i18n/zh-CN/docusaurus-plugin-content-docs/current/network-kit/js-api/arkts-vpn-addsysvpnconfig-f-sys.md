# addSysVpnConfig

## addSysVpnConfig

```TypeScript
function addSysVpnConfig(config: SysVpnConfig): Promise<void>
```

Add a system VPN network configuration.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_VPN

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | SysVpnConfig | 是 | Indicates the {@link SysVpnConfig} configuration of the VPN network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

