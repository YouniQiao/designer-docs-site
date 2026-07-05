# setScanAlwaysAllowed

## setScanAlwaysAllowed

```TypeScript
function setScanAlwaysAllowed(isScanAlwaysAllowed: boolean): void
```

User can trigger scan even Wi-Fi is disabled.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isScanAlwaysAllowed | boolean | 是 | true for allow trigger scan, otherwise don't allow trigger scan when Wi-Fi is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

