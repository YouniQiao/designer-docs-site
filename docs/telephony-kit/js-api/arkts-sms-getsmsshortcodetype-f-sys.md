# getSmsShortCodeType

## getSmsShortCodeType

```TypeScript
function getSmsShortCodeType(slotId: int, destAddr: string): Promise<SmsShortCodeType>
```

Get the SMS short code type of the destination address.

**Since:** 23

**Required permissions:** 

 ohos.permission.SEND_MESSAGES

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of the slot holding the SIM card for sending SMS messages.  The value {@code 0} indicates card slot 1, and the value {@code 1} indicates card slot 2. |
| destAddr | string | Yes | Indicates the destination address of the sending SMS.  Value range:[0,+∞) |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SmsShortCodeType> | Returns the SMS short code type of the sending destination address. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

