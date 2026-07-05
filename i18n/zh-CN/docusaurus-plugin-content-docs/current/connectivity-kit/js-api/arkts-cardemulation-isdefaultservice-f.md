# isDefaultService

## isDefaultService

```TypeScript
function isDefaultService(elementName: ElementName, type: CardType): boolean
```

Checks whether a service is default for given type.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementName | ElementName | 是 | The element name of the service ability |
| type | CardType | 是 | The type to query, payment or other. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the service is default, otherwise false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { cardEmulation } from '@kit.ConnectivityKit';
import { bundleManager, Want } from '@kit.AbilityKit';

// 需要初始化 elementName、bundleName、abilityName，根据实际应用信息更改为正确的值
let elementName: bundleManager.ElementName = {
  bundleName: "com.example.myapplication",
  moduleName: "entry",
  abilityName: "EntryAbility"
};

let isDefaultService: boolean = cardEmulation.isDefaultService(elementName, cardEmulation.CardType.PAYMENT);


// 适用于轻量级智能穿戴设备
import cardEmulation from '@ohos.nfc.cardEmulation';

let appName = "com.example.testquestionlite";
let isDefaultService = cardEmulation.isDefaultService(appName, cardEmulation.CardType.PAYMENT);

```

