# @ohos.usbManager.serial

This module provides the serial port management functions, including enabling and disabling the serial port of the device, writing and reading data, setting and obtaining the configuration parameters of the serial port, and managing permissions.

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [cancelSerialRight](arkts-basicservices-cancelserialright-f.md#cancelserialright-1) | Cancels the permission to access the serial port device when the application is running. This API is used to close the enabled serial port device. |
| [close](arkts-basicservices-close-f.md#close-1) | Closes the serial port device. |
| [getAttribute](arkts-basicservices-getattribute-f.md#getattribute-1) | Obtains the configuration parameters of a specified serial port. |
| [getPortList](arkts-basicservices-getportlist-f.md#getportlist-1) | Obtains the serial port device list, including the device name and port number. |
| [hasSerialRight](arkts-basicservices-hasserialright-f.md#hasserialright-1) | Checks whether the application has the permission to access the serial port device. When an application is restarted after exits, you need to request the permission from the user again. |
| [open](arkts-basicservices-open-f.md#open-1) | Opens a serial port device. |
| [read](arkts-basicservices-read-f.md#read-1) | Reads data from the serial port device asynchronously. This API uses a promise to return the result. |
| [readSync](arkts-basicservices-readsync-f.md#readsync-1) | Reads data from the serial port device synchronously. |
| [requestSerialRight](arkts-basicservices-requestserialright-f.md#requestserialright-1) | Requests the permission for the application to access the serial port device. After the application exits, the access permission on the serial port device is automatically removed. After the application is restarted, you need to request the permission again. This API uses a promise to return the result. |
| [setAttribute](arkts-basicservices-setattribute-f.md#setattribute-1) | Sets the parameters of the serial port. If this method is not called, the default configuration parameters are used (baud rate: 9600 bit/s; data bit: 8; parity bit: 0; stop bit: 1). |
| [write](arkts-basicservices-write-f.md#write-1) | Writes data to the serial port device asynchronously. The length of data written each time cannot exceed 4 KB; otherwise, data loss may occur. You are advised to write long data in multiple packets. This API uses a promise to return the result. |
| [writeSync](arkts-basicservices-writesync-f.md#writesync-1) | Writes data to the serial port device synchronously. The length of data written each time cannot exceed 4 KB; otherwise, data loss may occur. You are advised to write long data in multiple packets. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addSerialRight](arkts-basicservices-addserialright-f-sys.md#addserialright-1) | Adds the permission to an application for accessing the serial port device. serialManager.requestSerialRight triggers a dialog box to request user authorization. addSerialRight does not trigger a dialog box but directly adds the device access permission for the application. After the application exits, the access permission on the serial port device is automatically removed. After the application is restarted , you need to request the permission again. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [SerialAttribute](arkts-basicservices-serialattribute-i.md) | Represents the configuration parameters of a serial port. |
| [SerialPort](arkts-basicservices-serialport-i.md) | Represents the parameters of a serial port. |

### Enums

| Name | Description |
| --- | --- |
| [BaudRates](arkts-basicservices-baudrates-e.md) | Enumerates the baud rates. |
| [DataBits](arkts-basicservices-databits-e.md) | Enumerates the number of data bits. |
| [Parity](arkts-basicservices-parity-e.md) | Enumerates the parity check modes. |
| [StopBits](arkts-basicservices-stopbits-e.md) | Enumerates of the number of stop bits. |

