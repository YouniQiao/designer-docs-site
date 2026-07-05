# getIMEISV

## getIMEISV

```TypeScript
function getIMEISV(slotId: int): string
```

Obtains the software version number of a specified card slot of the device.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot index number  supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the IMEISV. Returns an empty string if the IMEISV does not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
let slotId: number = 0;
let data: string = radio.getIMEISV(slotId);
console.info(`IMEISV is:` + data);

```

