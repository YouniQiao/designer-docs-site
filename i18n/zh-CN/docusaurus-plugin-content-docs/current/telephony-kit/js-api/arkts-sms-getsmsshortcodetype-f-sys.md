# getSmsShortCodeType

## getSmsShortCodeType

```TypeScript
function getSmsShortCodeType(slotId: int, destAddr: string): Promise<SmsShortCodeType>
```

Get the SMS short code type of the destination address.

**起始版本：** 23

**需要权限：** 

 ohos.permission.SEND_MESSAGES

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the ID of the slot holding the SIM card for sending SMS messages.  The value {@code 0} indicates card slot 1, and the value {@code 1} indicates card slot 2. |
| destAddr | string | 是 | Indicates the destination address of the sending SMS.  Value range:[0,+∞) |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SmsShortCodeType> | Returns the SMS short code type of the sending destination address. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

