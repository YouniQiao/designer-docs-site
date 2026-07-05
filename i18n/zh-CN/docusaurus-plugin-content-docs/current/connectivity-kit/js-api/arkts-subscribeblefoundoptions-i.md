# SubscribeBLEFoundOptions

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

SubscribeBLEFoundOptions failed

**类型：** (data: string, code: number) => void

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## success

```TypeScript
success: (data: BLEFoundResponse) => void
```

SubscribeBLEFoundOptions success

**类型：** (data: BLEFoundResponse) => void

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

