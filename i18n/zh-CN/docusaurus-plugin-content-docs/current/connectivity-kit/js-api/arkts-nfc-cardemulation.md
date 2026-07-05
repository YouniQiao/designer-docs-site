# @ohos.nfc.cardEmulation

Provides methods to operate or manage NFC card emulation.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

## 导入模块

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getPaymentServices](arkts-cardemulation-getpaymentservices-f-sys.md#getPaymentServices-1) | Gets all payment services. |
| [hasHceCapability](arkts-cardemulation-hashcecapability-f.md#hasHceCapability-1) | Checks whether Host Card Emulation(HCE) capability is supported. |
| [isDefaultService](arkts-cardemulation-isdefaultservice-f.md#isDefaultService-1) | Checks whether a service is default for given type. |
| [isSupported](arkts-cardemulation-issupported-f.md#isSupported-1) | Checks whether a specified type of card emulation is supported. <p>This method is used to check Whether the host or secure element supports card emulation. |

### 类

| 名称 | 描述 |
| --- | --- |
| [HceService](arkts-cardemulation-hceservice-c.md) | A class for NFC host application. <p>The NFC host application use this class, then Nfc service can access the application installation information and connect to services of the application. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CardType](arkts-cardemulation-cardtype-e.md) | Define the card emulation type, payment or other. |
| [FeatureType](arkts-cardemulation-featuretype-e.md) | Defines the capability type. |

