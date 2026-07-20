# off

## Modules to Import

```TypeScript
import { nfcController } from '@kit.ConnectivityKit';
```

## off('nfcStateChange')

```TypeScript
function off(type: 'nfcStateChange', callback?: Callback<NfcState>): void
```

unregister nfc state changed event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-nfcController-function off(type: 'nfcStateChange', callback?: Callback<NfcState>): void--><!--Device-nfcController-function off(type: 'nfcStateChange', callback?: Callback<NfcState>): void-End-->

**System capability:** SystemCapability.Communication.NFC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nfcStateChange' | Yes | The type to unregister. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<NfcState> | No | Callback used to listen to the nfc state changed event. |

