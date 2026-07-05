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
| [closeNfc](arkts-nfccontroller-closenfc-f.md#closeNfc-1) | Disables NFC. |
| [disableNfc](arkts-nfccontroller-disablenfc-f.md#disableNfc-1) | Disables NFC. This API can be called only by system applications |
| [enableNfc](arkts-nfccontroller-enablenfc-f.md#enableNfc-1) | Enables NFC. This API can be called only by system applications |
| [getNfcState](arkts-nfccontroller-getnfcstate-f.md#getNfcState-1) | Obtains the NFC status. <p>The NFC status can be any of the following: <ul><li>{@link #STATE_OFF}: Indicates that NFC is disabled. <li>{@link #STATE_TURNING_ON}: Indicates that NFC is being enabled. <li>{@link #STATE_ON}: Indicates that NFC is enabled. <li>{@link #STATE_TURNING_OFF}: Indicates that NFC is being disabled.</ul> |
| [isNfcAvailable](arkts-nfccontroller-isnfcavailable-f.md#isNfcAvailable-1) | Checks whether a device supports NFC. |
| [isNfcOpen](arkts-nfccontroller-isnfcopen-f.md#isNfcOpen-1) | Checks whether NFC is enabled. |
| [isNfcSupported](arkts-nfccontroller-isnfcsupported-f.md#isNfcSupported-1) | Checks whether a device supports NFC. |
| [off](arkts-nfccontroller-off-f.md#off-1) | unregister nfc state changed event. |
| [offNfcStateChange](arkts-nfccontroller-offnfcstatechange-f.md#offNfcStateChange-1) | unregister nfc state changed event. |
| [on](arkts-nfccontroller-on-f.md#on-1) | register nfc state changed event. |
| [onNfcStateChange](arkts-nfccontroller-onnfcstatechange-f.md#onNfcStateChange-1) | register nfc state changed event. |
| [openNfc](arkts-nfccontroller-opennfc-f.md#openNfc-1) | Enables NFC. |

### Enums

| Name | Description |
| --- | --- |
| [NfcState](arkts-nfccontroller-nfcstate-e.md) | NFC changed states. |

