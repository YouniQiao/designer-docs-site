# SignalInformation

Returns child class objects specific to the network type.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## signalLevel

```TypeScript
signalLevel: int
```

Obtains the signal level of the current network.

**Type:** int

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## signalType

```TypeScript
signalType: NetworkType
```

Obtains the network type corresponding to the signal.

**Type:** NetworkType

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## dBm

```TypeScript
dBm: int
```

rsrp for LTE and NR; dbm for CDMA and EVDO; rscp for WCDMA; rssi for GSM.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Telephony.CoreService

