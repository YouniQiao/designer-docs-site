# AdvertiseSetting

Describes the settings for BLE advertising.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** AdvertiseSetting

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## connectable

```TypeScript
connectable?: boolean
```

Indicates whether the BLE is connectable, default is {@code true}

**Type:** boolean

**Since:** 9

**Deprecated since:** 10

**Substitutes:** connectable

**System capability:** SystemCapability.Communication.Bluetooth.Core

## interval

```TypeScript
interval?: number
```

Minimum slot value for the advertising interval, which is {@code 32} (20 ms)
Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s)
Default slot value for the advertising interval, which is {@code 1600} (1s)

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitutes:** interval

**System capability:** SystemCapability.Communication.Bluetooth.Core

## txPower

```TypeScript
txPower?: number
```

Minimum transmission power level for advertising, which is {@code -127}
Maximum transmission power level for advertising, which is {@code 1}
Default transmission power level for advertising, which is {@code -7}

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitutes:** txPower

**System capability:** SystemCapability.Communication.Bluetooth.Core

