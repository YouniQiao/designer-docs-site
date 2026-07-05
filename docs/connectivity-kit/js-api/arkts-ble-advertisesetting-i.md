# AdvertiseSetting

Describes the settings for BLE advertising.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## txPower

```TypeScript
txPower?: int
```

Minimum transmission power level for advertising, which is {@code -127} Maximum transmission power level for advertising, which is {@code 1} Default transmission power level for advertising, which is {@code -7}

**Type:** int

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## connectable

```TypeScript
connectable?: boolean
```

Indicates whether the BLE is connectable, default is {@code true}

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## interval

```TypeScript
interval?: int
```

Minimum slot value for the advertising interval, which is {@code 32} (20 ms) Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s) Default slot value for the advertising interval, which is {@code 1600} (1s)

**Type:** int

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isExtended

```TypeScript
isExtended?: boolean
```

Indicates whether the advertisement is extended, default is {@code false}

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

