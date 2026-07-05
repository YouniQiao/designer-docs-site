# @ohos.busManager.serial

串口管理

**起始版本：** 26.0.0

**系统能力：** SystemCapability.BusManager.Serial

## 导入模块

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[addPortAuthorization](arkts-serial-addportauthorization-f-sys.md#addPortAuthorization-1) | 添加应用访问串口端口的权限 仅面向串口授权弹窗系统应用开放 |
| [getSerialPortList](arkts-serial-getserialportlist-f.md#getSerialPortList-1) | 获取串口列表。使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [SerialConfigs](arkts-serial-serialconfigs-i.md) | 串口通信配置 |
| [SerialPort](arkts-serial-serialport-i.md) | 串口对象，提供串口设备信息和通信相关能力 |
| [SerialPortInfo](arkts-serial-serialportinfo-i.md) | 串口设备信息 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [DataBits](arkts-serial-databits-e.md) | 串口通信中的数据位 |
| [Parity](arkts-serial-parity-e.md) | 串口通信中的校验位 |
| [StopBits](arkts-serial-stopbits-e.md) | 串口通信中的停止位 |

