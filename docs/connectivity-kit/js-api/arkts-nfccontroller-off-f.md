# off

## off('nfcStateChange')

```TypeScript
function off(type: 'nfcStateChange', callback?: Callback<NfcState>): void
```

unregister nfc state changed event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nfcStateChange' | Yes | The type to unregister. |
| callback | Callback&lt;NfcState> | No | Callback used to listen to the nfc state changed event. |

