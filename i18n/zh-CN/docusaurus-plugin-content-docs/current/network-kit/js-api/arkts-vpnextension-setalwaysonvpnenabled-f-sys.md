# setAlwaysOnVpnEnabled

## setAlwaysOnVpnEnabled

```TypeScript
function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>
```

Set the Enable/Disable Always on VPN mode for a device.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_VPN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Always on enable or disable |
| bundleName | string | 是 | bundleName is used to set always on. |

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

