# @ohos.nfc.cardEmulation

Provides methods to operate or manage NFC card emulation.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.CardEmulation

## Modules to Import

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getPaymentServices](arkts-cardemulation-getpaymentservices-f-sys.md#getPaymentServices-1) | Gets all payment services. |
| [hasHceCapability](arkts-cardemulation-hashcecapability-f.md#hasHceCapability-1) | Checks whether Host Card Emulation(HCE) capability is supported. |
| [isDefaultService](arkts-cardemulation-isdefaultservice-f.md#isDefaultService-1) | Checks whether a service is default for given type. |
| [isSupported](arkts-cardemulation-issupported-f.md#isSupported-1) | Checks whether a specified type of card emulation is supported. <p>This method is used to check Whether the host or secure element supports card emulation. |

### Classes

| Name | Description |
| --- | --- |
| [HceService](arkts-cardemulation-hceservice-c.md) | A class for NFC host application. <p>The NFC host application use this class, then Nfc service can access the application installation information and connect to services of the application. |

### Enums

| Name | Description |
| --- | --- |
| [CardType](arkts-cardemulation-cardtype-e.md) | Define the card emulation type, payment or other. |
| [FeatureType](arkts-cardemulation-featuretype-e.md) | Defines the capability type. |

