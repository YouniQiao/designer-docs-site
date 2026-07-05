# @ohos.bluetooth.hid

Provides methods to accessing bluetooth HID(Human Interface Device)-related capabilities.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createHidDeviceProfile](arkts-hid-createhiddeviceprofile-f.md#createHidDeviceProfile-1) | Creates the instance of HID device profile. |
| [createHidHostProfile](arkts-hid-createhidhostprofile-f.md#createHidHostProfile-1) | create the instance of hid profile. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [GetReportData](arkts-hid-getreportdata-i.md) | Describe the GET_REPORT data is received from remote host. |
| [HidDeviceProfile](arkts-hid-hiddeviceprofile-i.md) | Manager HID device profile. |
| [HidDeviceQos](arkts-hid-hiddeviceqos-i.md) | Represents the Quality of Service (QoS) settings for a bluetooth hid device application. |
| [HidDeviceSdp](arkts-hid-hiddevicesdp-i.md) | Describe the HID device capability fields of this endpoint being queried. |
| [HidHostProfile](arkts-hid-hidhostprofile-i.md) | Manager hid host profile. |
| [InterruptData](arkts-hid-interruptdata-i.md) | Describe the interrupt data is received from remote host. |
| [ProtocolData](arkts-hid-protocoldata-i.md) | Describe the protocol data is received from remote host. |
| [SetReportData](arkts-hid-setreportdata-i.md) | Describe the SET_REPORT data is received from remote host. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [BaseProfile](arkts-hid-baseprofile-t.md) | Base interface of profile. |
| [BluetoothAddress](arkts-hid-bluetoothaddress-t.md) | Bluetooth device address. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ErrorReason](arkts-hid-errorreason-e.md) | Describe the error reason. |
| [ProtocolType](arkts-hid-protocoltype-e.md) | Describe the protocol type. |
| [ReportType](arkts-hid-reporttype-e.md) | Describe the report type. |
| [ServiceType](arkts-hid-servicetype-e.md) | Describe the l2cap service type. |
| [Subclass](arkts-hid-subclass-e.md) | Describe the subclass. |

