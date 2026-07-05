# @ohos.net.eap

Provides interfaces to manage ethernet.

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Eap

## 导入模块

```TypeScript
import { eap } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [logOffEthEap](arkts-eap-logoffetheap-f.md#logOffEthEap-1) | Check whether the specified network is active. |
| [regCustomEapHandler](arkts-eap-regcustomeaphandler-f.md#regCustomEapHandler-1) | Customize eap packets by callback |
| [replyCustomEapData](arkts-eap-replycustomeapdata-f.md#replyCustomEapData-1) | send Customized eap packets to system |
| [startEthEap](arkts-eap-startetheap-f.md#startEthEap-1) | Set the specified network interface parameters. |
| [unregCustomEapHandler](arkts-eap-unregcustomeaphandler-f.md#unregCustomEapHandler-1) | unreg the callback of eap packet customization. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [EapData](arkts-eap-eapdata-i.md) | Describes the EAP information. |
| [EthEapProfile](arkts-eap-etheapprofile-i.md) | Eth EAP profile. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CustomResult](arkts-eap-customresult-e.md) | custom 802.1x result. |
| [EapMethod](arkts-eap-eapmethod-e.md) | 802.1x EAP method. |
| [Phase2Method](arkts-eap-phase2method-e.md) | 802.1x phase 2 method. |

