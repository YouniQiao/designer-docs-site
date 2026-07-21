# getPaymentServices (System API)

## Modules to Import

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

<a id="getpaymentservices"></a>
## getPaymentServices

```TypeScript
function getPaymentServices(): AbilityInfo[]
```

Gets all payment services.

**Since:** 11

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-cardEmulation-function getPaymentServices(): AbilityInfo[]--><!--Device-cardEmulation-function getPaymentServices(): AbilityInfo[]-End-->

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [AbilityInfo](../../apis-ability-kit/arkts-apis/arkts-ability-abilityinfo-i.md)[] | Returns all payment services. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

