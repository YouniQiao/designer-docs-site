# getFunctionsFromString

## getFunctionsFromString

```TypeScript
function getFunctionsFromString(funcs: string): int
```

在设备模式下，将字符串形式的USB功能列表转化为数字掩码。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | string | Yes | 字符串形式的功能列表。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 转化后的功能列表对应的数字掩码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. [since 18]. |
| 202 | Permission denied. Normal application do not have permission to use system api. |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

