# getFunctionsFromString

## getFunctionsFromString

```TypeScript
function getFunctionsFromString(funcs: string): int
```

在设备模式下，将字符串形式的USB功能列表转化为数字掩码。

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_USB_CONFIG

**系统能力：** SystemCapability.USB.USBManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| funcs | string | 是 | 字符串形式的功能列表。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 转化后的功能列表对应的数字掩码。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18]. |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

