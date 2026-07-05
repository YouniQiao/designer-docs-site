# @ohos.bluetooth.bas

Provide methods to access BAS(Battery Service)-related capabilities.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { bas } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getRemoteDeviceBatteryInfo](arkts-bas-getremotedevicebatteryinfo-f-sys.md#getRemoteDeviceBatteryInfo-1) | Get remote device battery information. |
| <!--DelRow-->[isBasSupported](arkts-bas-isbassupported-f-sys.md#isBasSupported-1) | Determine whether the local device can obtain the battery level of the remote device. |
| <!--DelRow-->[offBatteryChange](arkts-bas-offbatterychange-f-sys.md#offBatteryChange-1) | Unsubscribe the event of battery state changes from a remote device. |
| <!--DelRow-->[onBatteryChange](arkts-bas-onbatterychange-f-sys.md#onBatteryChange-1) | Subscribe the event of battery state changed from a remote device. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BatteryInfo](arkts-bas-batteryinfo-i-sys.md) | Describe the contents of the battery information. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BluetoothAddress](arkts-bas-bluetoothaddress-t-sys.md) | Bluetooth device address. |

