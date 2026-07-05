# getPaymentServices

## getPaymentServices

```TypeScript
function getPaymentServices(): AbilityInfo[]
```

Gets all payment services.

**起始版本：** 11

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AbilityInfo[] | Returns all payment services. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |

