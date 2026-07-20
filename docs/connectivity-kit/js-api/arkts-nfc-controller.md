# @ohos.nfc.controller

Provides methods to operate or manage NFC.

**Since:** 12

<!--Device-unnamed-declare namespace nfcController--><!--Device-unnamed-declare namespace nfcController-End-->

**System capability:** SystemCapability.Communication.NFC.Core

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [closeNfc](arkts-connectivity-nfccontroller-closenfc-f.md#closenfc-1) | Disables NFC. |
| [disableNfc](arkts-connectivity-nfccontroller-disablenfc-f.md#disablenfc-1) | Disables NFC.This API can be called only by system applications |
| [enableNfc](arkts-connectivity-nfccontroller-enablenfc-f.md#enablenfc-1) | Enables NFC.This API can be called only by system applications |
| [getNfcState](arkts-connectivity-nfccontroller-getnfcstate-f.md#getnfcstate-1) | Obtains the NFC status.&lt;p&gt;The NFC status can be any of the following: &lt;ul&gt;&lt;li&gt;{@link #STATE_OFF}: Indicates that NFC is disabled. &lt;li&gt;{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled.&lt;li&gt;{@link #STATE_ON}: Indicates that NFC is enabled. &lt;li&gt;{@link #STATE_TURNING_OFF}: Indicates that NFC is being disabled.&lt;/ul&gt; |
| [isNfcAvailable](arkts-connectivity-nfccontroller-isnfcavailable-f.md#isnfcavailable-1) | Checks whether a device supports NFC. |
| [isNfcOpen](arkts-connectivity-nfccontroller-isnfcopen-f.md#isnfcopen-1) | Checks whether NFC is enabled. |
| [isNfcSupported](arkts-connectivity-nfccontroller-isnfcsupported-f.md#isnfcsupported-1) | Checks whether a device supports NFC. |
| [off](arkts-connectivity-nfccontroller-off-f.md#off-1) | unregister nfc state changed event. |
| [on](arkts-connectivity-nfccontroller-on-f.md#on-1) | register nfc state changed event. |
| [openNfc](arkts-connectivity-nfccontroller-opennfc-f.md#opennfc-1) | Enables NFC. |

### Enums

| Name | Description |
| --- | --- |
| [NfcState](arkts-connectivity-nfccontroller-nfcstate-e.md) | NFC changed states. |

