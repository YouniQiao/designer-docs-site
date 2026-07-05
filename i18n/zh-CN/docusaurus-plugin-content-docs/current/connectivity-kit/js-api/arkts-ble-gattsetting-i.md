# GattSetting

Describes the setting for Gatt Connection.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## autoConnect

```TypeScript
autoConnect?: boolean
```

Indicates whether to automatically connect to the remote device, default is {@code false}

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## transport

```TypeScript
transport?: BluetoothTransport
```

Transport of the connection, default is {@code TRANSPORT_LE}

**类型：** BluetoothTransport

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

