# BluetoothSearchRequest

Indicates request parameters for Bluetooth search function.

**Since:** 26.0.0

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## rssiThreshold

```TypeScript
rssiThreshold?: int
```

Indicates the Bluetooth RSSI threshold, only search Bluetooth BSSID with RSSI greater than this threshold. The value range is all integers.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## deviceIdArray

```TypeScript
deviceIdArray: Array<string>
```

Indicates the list of Bluetooth device ID that need to be search.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

