# AdvertisingSettings

Describes the settings for advertising.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## interval

```TypeScript
interval?: number
```

Indicates the advertising interval.
The minimum number of slots is 160, and the corresponding time is 20 ms (160 * 0.125 ms = 20 ms).
The maximum number of slots is 16777215, and the corresponding time is 2097151.875 ms.
Unit: Slots, The value must be an integer within [160,16777215], each slot is 125 microseconds.
Default value: 5000.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## isConnectable

```TypeScript
isConnectable?: boolean
```

Indicates whether the advertising is connectable.
Default value: true.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## power

```TypeScript
power?: TxPowerMode
```

Indicates the advertising power mode.
Default value: ADV_TX_POWER_LOW.

**Type:** TxPowerMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

