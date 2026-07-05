# AdvertisingEnableParams

Parameter for dynamically enable advertising.

**Since:** 11

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## duration

```TypeScript
duration?: int
```

Indicates the duration for advertising continuously. The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms). If this parameter is not specified or is set to 0, advertise is continuously sent.

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertisingId

```TypeScript
advertisingId: int
```

Indicates the ID of current advertising.

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

