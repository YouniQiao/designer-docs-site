# @ohos.bluetooth.bas

Provide methods to access BAS(Battery Service)-related capabilities.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { bas } from '@ohos.bluetooth.bas';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getRemoteDeviceBatteryInfo](arkts-connectivity-getremotedevicebatteryinfo-f-sys.md#getremotedevicebatteryinfo-1) | Get remote device battery information. |
| [isBasSupported](arkts-connectivity-isbassupported-f-sys.md#isbassupported-1) | Determine whether the local device can obtain the battery level of the remote device. |
| [offBatteryChange](arkts-connectivity-offbatterychange-f-sys.md#offbatterychange-1) | Unsubscribe the event of battery state changes from a remote device. |
| [onBatteryChange](arkts-connectivity-onbatterychange-f-sys.md#onbatterychange-1) | Subscribe the event of battery state changed from a remote device. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BatteryInfo](arkts-connectivity-batteryinfo-i-sys.md) | Describe the contents of the battery information. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [BluetoothAddress](arkts-connectivity-bluetoothaddress-t-sys.md) | Bluetooth device address. |
<!--DelEnd-->

