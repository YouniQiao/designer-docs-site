# getStringFromFunctions（系统接口）

## getStringFromFunctions

```TypeScript
function getStringFromFunctions(funcs: FunctionType): string
```

在设备模式下，将数字掩码形式的USB功能列表转化为字符串。

**起始版本：** 12

**需要权限：** ohos.permission.MANAGE_USB_CONFIG

**系统能力：** SystemCapability.USB.USBManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| funcs | FunctionType | 是 | 功能列表对应的数字掩码。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 转化后的字符串形式的功能列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [201](../../errorcode-universal.md#201-权限校验失败) | Permission verification failed. The application does not have the permission required tocall the API.<br>**适用版本：** 18 |
| [202](../../errorcode-universal.md#202-系统api权限校验失败) | Permission denied. Normal application do not have permission to use system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported.<br>**适用版本：** 18 |

