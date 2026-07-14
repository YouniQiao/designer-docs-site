# @ohos.busManager.serial

Serial port management.

**Since:** 26.0.0

**System capability:** SystemCapability.BusManager.Serial

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getSerialPortList](arkts-basicservices-getserialportlist-f.md#getserialportlist-1) | Obtains the serial port list. This API returns the result asynchronously through a promise. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addPortAuthorization](arkts-basicservices-addportauthorization-f-sys.md#addportauthorization-1) | Adds the permission for applications to access the serial port. This API is open only to system applications that display a pop-up window for serial port authorization. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [SerialConfigs](arkts-basicservices-serialconfigs-i.md) | Serial port communication configuration. |
| [SerialPort](arkts-basicservices-serialport-i.md) | Serial port object, which provides information and communication capabilities of the serial port device. |
| [SerialPortInfo](arkts-basicservices-serialportinfo-i.md) | Serial port device information. |

### Enums

| Name | Description |
| --- | --- |
| [DataBits](arkts-basicservices-databits-e.md) | Data bits in serial port communication. |
| [Parity](arkts-basicservices-parity-e.md) | Parity bits in serial port communication. |
| [StopBits](arkts-basicservices-stopbits-e.md) | Stop bits in serial port communication. |

