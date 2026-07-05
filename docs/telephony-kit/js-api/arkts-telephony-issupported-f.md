# isSupported

## Modules to Import

```TypeScript
import { eSIM } from '@ohos.telephony.esim';
```

## isSupported

```TypeScript
function isSupported(slotId: number): boolean
```

Whether embedded subscriptions are currently supported.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the eSIM capability is supported; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [3120001](../errorcode-telephony.md#3120001-service-connection-error) | Service connection failed. |
| [3120002](../errorcode-telephony.md#3120002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { eSIM } from '@kit.TelephonyKit';

let isSupported: boolean = eSIM.isSupported(1);
console.info(`the esim is Supported:` + isSupported);

```

