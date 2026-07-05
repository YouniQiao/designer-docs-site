# hasHceCapability

## hasHceCapability

```TypeScript
function hasHceCapability(): boolean
```

Checks whether Host Card Emulation(HCE) capability is supported.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if HCE is supported, otherwise false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { cardEmulation } from '@kit.ConnectivityKit';

let hasHceCap: boolean = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}


// 适用于轻量级智能穿戴设备
import cardEmulation from '@ohos.nfc.cardEmulation';

let hasHceCap = cardEmulation.hasHceCapability();
if (!hasHceCap) {
    console.error('this device hasHceCapability false, ignore it.');
}

```

