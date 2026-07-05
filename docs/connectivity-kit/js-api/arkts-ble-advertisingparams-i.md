# AdvertisingParams

Describes the advertising parameters.

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

Indicates the duration for advertising continuously. The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms). If this parameter is not specified or is set to 0, advertisement is continuously sent.

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertisingSettings

```TypeScript
advertisingSettings: AdvertiseSetting
```

Indicates the advertising settings.

**Type:** AdvertiseSetting

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertisingData

```TypeScript
advertisingData: AdvertiseData
```

Indicates the advertising data.

**Type:** AdvertiseData

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertisingResponse

```TypeScript
advertisingResponse?: AdvertiseData
```

Indicates the advertising response.

**Type:** AdvertiseData

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

