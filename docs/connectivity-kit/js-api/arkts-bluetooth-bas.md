# @ohos.bluetooth.bas

Provide methods to access BAS(Battery Service)-related capabilities.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { bas } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getRemoteDeviceBatteryInfo](arkts-bas-getremotedevicebatteryinfo-f-sys.md#getRemoteDeviceBatteryInfo-1) | Get remote device battery information. |
| <!--DelRow-->[isBasSupported](arkts-bas-isbassupported-f-sys.md#isBasSupported-1) | Determine whether the local device can obtain the battery level of the remote device. |
| <!--DelRow-->[offBatteryChange](arkts-bas-offbatterychange-f-sys.md#offBatteryChange-1) | Unsubscribe the event of battery state changes from a remote device. |
| <!--DelRow-->[onBatteryChange](arkts-bas-onbatterychange-f-sys.md#onBatteryChange-1) | Subscribe the event of battery state changed from a remote device. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[BatteryInfo](arkts-bas-batteryinfo-i-sys.md) | Describe the contents of the battery information. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[BluetoothAddress](arkts-bas-bluetoothaddress-t-sys.md) | Bluetooth device address. |

