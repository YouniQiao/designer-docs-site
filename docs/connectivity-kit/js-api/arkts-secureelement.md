# @ohos.secureElement

Provides APIs for mobile applications to access different SEs in mobile devices, such as SIMs or embedded SEs.See "Open Mobile API Specification".

**Since:** 10

<!--Device-unnamed-declare namespace omapi--><!--Device-unnamed-declare namespace omapi-End-->

**System capability:** SystemCapability.Communication.SecureElement

## Modules to Import

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createService](arkts-connectivity-omapi-createservice-f.md#createservice-1) | Establish a new connection that can be used to connect to all the SEs available in the system.The connection process can be quite long, so it happens in an asynchronous way. It is usable only if isConnected() returns true. |
| [newSEService](arkts-connectivity-omapi-newseservice-f.md#newseservice-1) | Establish a new connection that can be used to connect to all the SEs available in the system.The connection process can be quite long, so it happens in an asynchronous way. It is usable only if the specified callback is called or if isConnected() returns true. |
| [off](arkts-connectivity-omapi-off-f.md#off-1) | Unsubscribe the service state changed event. |
| [on](arkts-connectivity-omapi-on-f.md#on-1) | Register the service state changed event. |

### Interfaces

| Name | Description |
| --- | --- |
| [Channel](arkts-connectivity-omapi-channel-i.md) | Channel represents an [ISO 7816-4] channel opened to a SE. It can be either a logical channel or the basic channel. |
| [Reader](arkts-connectivity-omapi-reader-i.md) | Reader represents the SE readers supported by this device. |
| [SEService](arkts-connectivity-omapi-seservice-i.md) | SEService realizes the communication to available SEs on the device. |
| [Session](arkts-connectivity-omapi-session-i.md) | Session represent a connection session to one of the SEs available on the device. These objects can be used to get a communication channel with an applet in the SE. This channel can be the basic channel or a logical channel. |

### Enums

| Name | Description |
| --- | --- |
| [ServiceState](arkts-connectivity-omapi-servicestate-e.md) | Secure Element service state definition. |

