# @ohos.nfc.cardEmulation

Provides methods to operate or manage NFC card emulation.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.CardEmulation

## Modules to Import

```TypeScript
import { cardEmulation } from '@ohos.nfc.cardEmulation';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [hasHceCapability](arkts-connectivity-hashcecapability-f.md#hashcecapability-1) | Checks whether Host Card Emulation(HCE) capability is supported. |
| [isDefaultService](arkts-connectivity-isdefaultservice-f.md#isdefaultservice-1) | Checks whether a service is default for given type. |
| [isSupported](arkts-connectivity-issupported-f.md#issupported-1) | Checks whether a specified type of card emulation is supported. &lt;p&gt;This method is used to check Whether the host or secure element supports card emulation. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPaymentServices](arkts-connectivity-getpaymentservices-f-sys.md#getpaymentservices-1) | Gets all payment services. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [HceService](arkts-connectivity-hceservice-c.md) | A class for NFC host application. &lt;p&gt;The NFC host application use this class, then Nfc service can access the application installation information and connect to services of the application. |

### Enums

| Name | Description |
| --- | --- |
| [CardType](arkts-connectivity-cardtype-e.md) | Define the card emulation type, payment or other. |
| [FeatureType](arkts-connectivity-featuretype-e.md) | Defines the capability type. |

