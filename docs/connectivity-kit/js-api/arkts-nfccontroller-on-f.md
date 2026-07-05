# on

## on('nfcStateChange')

```TypeScript
function on(type: 'nfcStateChange', callback: Callback<NfcState>): void
```

register nfc state changed event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nfcStateChange' | Yes | The type to register. |
| callback | Callback&lt;NfcState> | Yes | Callback used to listen to the nfc state changed event. |

