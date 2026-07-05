# @ohos.busManager.serial

串口管理

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
| <!--DelRow-->[addPortAuthorization](arkts-serial-addportauthorization-f-sys.md#addPortAuthorization-1) | 添加应用访问串口端口的权限 仅面向串口授权弹窗系统应用开放 |
| [getSerialPortList](arkts-serial-getserialportlist-f.md#getSerialPortList-1) | 获取串口列表。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [SerialConfigs](arkts-serial-serialconfigs-i.md) | 串口通信配置 |
| [SerialPort](arkts-serial-serialport-i.md) | 串口对象，提供串口设备信息和通信相关能力 |
| [SerialPortInfo](arkts-serial-serialportinfo-i.md) | 串口设备信息 |

### Enums

| Name | Description |
| --- | --- |
| [DataBits](arkts-serial-databits-e.md) | 串口通信中的数据位 |
| [Parity](arkts-serial-parity-e.md) | 串口通信中的校验位 |
| [StopBits](arkts-serial-stopbits-e.md) | 串口通信中的停止位 |

