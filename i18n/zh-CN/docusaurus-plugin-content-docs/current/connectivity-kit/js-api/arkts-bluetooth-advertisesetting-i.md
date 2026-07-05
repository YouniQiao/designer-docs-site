# AdvertiseSetting

Describes the settings for BLE advertising.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.AdvertiseSetting

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## txPower

```TypeScript
txPower?: number
```

Minimum transmission power level for advertising, which is {@code -127} Maximum transmission power level for advertising, which is {@code 1} Default transmission power level for advertising, which is {@code -7}

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.txPower

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## connectable

```TypeScript
connectable?: boolean
```

Indicates whether the BLE is connectable, default is {@code true}

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.connectable

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## interval

```TypeScript
interval?: number
```

Minimum slot value for the advertising interval, which is {@code 32} (20 ms) Maximum slot value for the advertising interval, which is {@code 16777215} (10485.759375s) Default slot value for the advertising interval, which is {@code 1600} (1s)

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.AdvertiseSetting.interval

**系统能力：** SystemCapability.Communication.Bluetooth.Core

