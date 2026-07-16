# @ohos.net.eap

Provides interfaces to manage ethernet.

**Since:** 20

**System capability:** SystemCapability.Communication.NetManager.Eap

## Modules to Import

```TypeScript
import { eap } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [logOffEthEap](arkts-network-logoffetheap-f.md#logoffetheap-1) | Check whether the specified network is active. |
| [regCustomEapHandler](arkts-network-regcustomeaphandler-f.md#regcustomeaphandler-1) | Customize eap packets by callback |
| [replyCustomEapData](arkts-network-replycustomeapdata-f.md#replycustomeapdata-1) | send Customized eap packets to system |
| [startEthEap](arkts-network-startetheap-f.md#startetheap-1) | Set the specified network interface parameters. |
| [unregCustomEapHandler](arkts-network-unregcustomeaphandler-f.md#unregcustomeaphandler-1) | unreg the callback of eap packet customization. |

### Interfaces

| Name | Description |
| --- | --- |
| [EapData](arkts-network-eapdata-i.md) | Describes the EAP information. |
| [EthEapProfile](arkts-network-etheapprofile-i.md) | Eth EAP profile. |

### Enums

| Name | Description |
| --- | --- |
| [CustomResult](arkts-network-customresult-e.md) | custom 802.1x result. |
| [EapMethod](arkts-network-eapmethod-e.md) | 802.1x EAP method. |
| [Phase2Method](arkts-network-phase2method-e.md) | 802.1x phase 2 method. |

