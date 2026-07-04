# @ohos.bluetooth.hid

Provides methods to accessing bluetooth HID(Human Interface Device)-related capabilities.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { hid } from '@ohos.bluetooth.hid';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createHidDeviceProfile](arkts-connectivity-createhiddeviceprofile-f.md#createhiddeviceprofile-1) | Creates the instance of HID device profile. |
| [createHidHostProfile](arkts-connectivity-createhidhostprofile-f.md#createhidhostprofile-1) | create the instance of hid profile. |

### Interfaces

| Name | Description |
| --- | --- |
| [GetReportData](arkts-connectivity-getreportdata-i.md) | Describe the GET_REPORT data is received from remote host. |
| [HidDeviceProfile](arkts-connectivity-hiddeviceprofile-i.md) | Manager HID device profile. |
| [HidDeviceQos](arkts-connectivity-hiddeviceqos-i.md) | Represents the Quality of Service (QoS) settings for a bluetooth hid device application. |
| [HidDeviceSdp](arkts-connectivity-hiddevicesdp-i.md) | Describe the HID device capability fields of this endpoint being queried. |
| [InterruptData](arkts-connectivity-interruptdata-i.md) | Describe the interrupt data is received from remote host. |
| [ProtocolData](arkts-connectivity-protocoldata-i.md) | Describe the protocol data is received from remote host. |
| [SetReportData](arkts-connectivity-setreportdata-i.md) | Describe the SET_REPORT data is received from remote host. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HidHostProfile](arkts-connectivity-hidhostprofile-i-sys.md) | Manager hid host profile. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ErrorReason](arkts-connectivity-errorreason-e.md) | Describe the error reason. |
| [ProtocolType](arkts-connectivity-protocoltype-e.md) | Describe the protocol type. |
| [ReportType](arkts-connectivity-reporttype-e.md) | Describe the report type. |
| [ServiceType](arkts-connectivity-servicetype-e.md) | Describe the l2cap service type. |
| [Subclass](arkts-connectivity-subclass-e.md) | Describe the subclass. |

### Types

| Name | Description |
| --- | --- |
| [BaseProfile](arkts-connectivity-baseprofile-t.md) | Base interface of profile. |
| [BluetoothAddress](arkts-connectivity-bluetoothaddress-t.md) | Bluetooth device address. |

