# @ohos.nfc.controller

Provides methods to operate or manage NFC.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Core

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [closeNfc](arkts-connectivity-closenfc-f.md#closenfc-1) | Disables NFC. |
| [disableNfc](arkts-connectivity-disablenfc-f.md#disablenfc-1) | Disables NFC.This API can be called only by system applications |
| [enableNfc](arkts-connectivity-enablenfc-f.md#enablenfc-1) | Enables NFC.This API can be called only by system applications |
| [getNfcState](arkts-connectivity-getnfcstate-f.md#getnfcstate-1) | Obtains the NFC status.&lt;p&gt;The NFC status can be any of the following: &lt;ul&gt;&lt;li&gt;{@link #STATE_OFF}: Indicates that NFCis disabled. &lt;li&gt;{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled.&lt;li&gt;{@link #STATE_ON}: Indicates that NFC is enabled. &lt;li&gt;{@link #STATE_TURNING_OFF}: Indicatesthat NFC is being disabled.&lt;/ul&gt; |
| [isNfcAvailable](arkts-connectivity-isnfcavailable-f.md#isnfcavailable-1) | Checks whether a device supports NFC. |
| [isNfcOpen](arkts-connectivity-isnfcopen-f.md#isnfcopen-1) | Checks whether NFC is enabled. |
| [isNfcSupported](arkts-connectivity-isnfcsupported-f.md#isnfcsupported-1) | Checks whether a device supports NFC. |
| [off](arkts-connectivity-off-f.md#off-1) | unregister nfc state changed event. |
| [on](arkts-connectivity-on-f.md#on-1) | register nfc state changed event. |
| [openNfc](arkts-connectivity-opennfc-f.md#opennfc-1) | Enables NFC. |

### Enums

| Name | Description |
| --- | --- |
| [NfcState](arkts-connectivity-nfcstate-e.md) | NFC changed states. |

