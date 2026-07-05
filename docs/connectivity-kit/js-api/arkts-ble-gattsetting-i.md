# GattSetting

Describes the setting for Gatt Connection.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## autoConnect

```TypeScript
autoConnect?: boolean
```

Indicates whether to automatically connect to the remote device, default is {@code false}

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transport

```TypeScript
transport?: BluetoothTransport
```

Transport of the connection, default is {@code TRANSPORT_LE}

**Type:** BluetoothTransport

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

