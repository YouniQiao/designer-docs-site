# getPaymentServices

## getPaymentServices

```TypeScript
function getPaymentServices(): AbilityInfo[]
```

Gets all payment services.

**Since:** 11

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| AbilityInfo[] | Returns all payment services. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |

