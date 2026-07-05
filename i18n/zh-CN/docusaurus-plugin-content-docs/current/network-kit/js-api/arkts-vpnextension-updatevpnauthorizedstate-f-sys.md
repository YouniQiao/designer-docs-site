# updateVpnAuthorizedState

## updateVpnAuthorizedState

```TypeScript
function updateVpnAuthorizedState(bundleName: string): boolean
```

Update a VPN dialog authorize information

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_VPN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | authorize or not |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

