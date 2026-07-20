# @ohos.net.eap

Provides interfaces to manage ethernet.

**Since:** 20

<!--Device-unnamed-declare namespace eap--><!--Device-unnamed-declare namespace eap-End-->

**System capability:** SystemCapability.Communication.NetManager.Eap

## Modules to Import

```TypeScript
import { eap } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [logOffEthEap](arkts-network-eap-logoffetheap-f.md#logoffetheap-1) | Check whether the specified network is active. |
| [regCustomEapHandler](arkts-network-eap-regcustomeaphandler-f.md#regcustomeaphandler-1) | Customize eap packets by callback |
| [replyCustomEapData](arkts-network-eap-replycustomeapdata-f.md#replycustomeapdata-1) | send Customized eap packets to system |
| [startEthEap](arkts-network-eap-startetheap-f.md#startetheap-1) | Set the specified network interface parameters. |
| [unregCustomEapHandler](arkts-network-eap-unregcustomeaphandler-f.md#unregcustomeaphandler-1) | unreg the callback of eap packet customization. |

### Interfaces

| Name | Description |
| --- | --- |
| [EapData](arkts-network-eap-eapdata-i.md) | Describes the EAP information. |
| [EthEapProfile](arkts-network-eap-etheapprofile-i.md) | Eth EAP profile. |

### Enums

| Name | Description |
| --- | --- |
| [CustomResult](arkts-network-eap-customresult-e.md) | custom 802.1x result. |
| [EapMethod](arkts-network-eap-eapmethod-e.md) | 802.1x EAP method. |
| [Phase2Method](arkts-network-eap-phase2method-e.md) | 802.1x phase 2 method. |

