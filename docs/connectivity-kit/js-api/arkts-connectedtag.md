# @ohos.connectedTag

Provides methods to operate or manage Connected Tag.

**Since:** 8

<!--Device-unnamed-declare namespace connectedTag--><!--Device-unnamed-declare namespace connectedTag-End-->

**System capability:** SystemCapability.Communication.ConnectedTag

## Modules to Import

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [init](arkts-connectivity-connectedtag-init-f.md#init-1) | Initializes Connected Tag. |
| [initialize](arkts-connectivity-connectedtag-initialize-f.md#initialize-1) | Initializes the connected NFC tag. |
| [off](arkts-connectivity-connectedtag-off-f.md#off-1) | Unsubscribes NFC RF status change events.&lt;p&gt;All callback functions will be unregistered If there is no specific callback parameter.&lt;/p&gt; |
| [on](arkts-connectivity-connectedtag-on-f.md#on-1) | Subscribes NFC RF status change events. |
| [read](arkts-connectivity-connectedtag-read-f.md#read-1) | Reads the NDEF data from the connected NFC tag. |
| [read](arkts-connectivity-connectedtag-read-f.md#read-2) | Reads the NDEF data from the connected NFC tag. |
| [readNdefTag](arkts-connectivity-connectedtag-readndeftag-f.md#readndeftag-1) | Reads the NDEF Data. |
| [readNdefTag](arkts-connectivity-connectedtag-readndeftag-f.md#readndeftag-2) | Reads the NDEF Data. |
| [uninit](arkts-connectivity-connectedtag-uninit-f.md#uninit-1) | UnInitializes Connected Tag. |
| [uninitialize](arkts-connectivity-connectedtag-uninitialize-f.md#uninitialize-1) | Uninitializes the connected NFC tag. |
| [write](arkts-connectivity-connectedtag-write-f.md#write-1) | Writes the NDEF data to the connected NFC tag. |
| [write](arkts-connectivity-connectedtag-write-f.md#write-2) | Writes the NDEF data to the connected NFC tag. |
| [writeNdefTag](arkts-connectivity-connectedtag-writendeftag-f.md#writendeftag-1) | Writes the NDEF Data. |
| [writeNdefTag](arkts-connectivity-connectedtag-writendeftag-f.md#writendeftag-2) | Writes the NDEF Data. |

### Enums

| Name | Description |
| --- | --- |
| [NfcRfType](arkts-connectivity-connectedtag-nfcrftype-e.md) | Describes the NFC RF type. |

