# StartBLEScanOptions

**起始版本：** 6

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## 导入模块

```TypeScript
import { BluetoothDevice,BLEFoundResponse,StopBLEScanOptions,SubscribeBLEFoundOptions,StartBLEScanOptions } from '@kit.ConnectivityKit';
```

## fail

```TypeScript
fail: (data: string, code: number) => void
```

StartBLEScanOptions failed

**类型：** (data: string, code: number) => void

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## success

```TypeScript
success: () => void
```

StartBLEScanOptions success

**类型：** () => void

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## interval

```TypeScript
interval: number
```

Time of delay for reporting the scan result

**类型：** number

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## complete

```TypeScript
complete: () => void
```

StartBLEScanOptions completed

**类型：** () => void

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

