# isSupported

## isSupported

```TypeScript
function isSupported(feature: number): boolean
```

Checks whether a specified type of card emulation is supported. <p>This method is used to check Whether the host or secure element supports card emulation.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.nfc.cardEmulation/cardEmulation#hasHceCapability

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| feature | number | 是 | Indicates the card emulation type, {@code HCE}, {@code UICC}, or {@code ESE}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the specified type of card emulation is supported; returns false otherwise. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { cardEmulation } from '@kit.ConnectivityKit';

let isHceSupported: boolean = cardEmulation.isSupported(cardEmulation.FeatureType.HCE);
if (!isHceSupported) {
    console.info('this device is not supported for HCE, ignore it.');
}


// 适用于轻量级智能穿戴设备
import cardEmulation from '@ohos.nfc.cardEmulation';

let isHceSupported = cardEmulation.isSupported(cardEmulation.FeatureType.HCE);
if (!isHceSupported) {
    console.error('this device is not supported for HCE, ignore it.');
}

```

