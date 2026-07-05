# SignalInformation

Returns child class objects specific to the network type.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

## 导入模块

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## signalLevel

```TypeScript
signalLevel: int
```

Obtains the signal level of the current network.

**类型：** int

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

## signalType

```TypeScript
signalType: NetworkType
```

Obtains the network type corresponding to the signal.

**类型：** NetworkType

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

## dBm

```TypeScript
dBm: int
```

rsrp for LTE and NR; dbm for CDMA and EVDO; rscp for WCDMA; rssi for GSM.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Telephony.CoreService

