# hasVoiceCapability

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## hasVoiceCapability

```TypeScript
function hasVoiceCapability(): boolean
```

Checks whether a device supports voice calls. The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching (even if the device supports OTT calls), {@code false} is returned.

**Since:** 7

**System capability:** SystemCapability.Telephony.CallManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the device supports voice calls; returns {@code false} otherwise. |

