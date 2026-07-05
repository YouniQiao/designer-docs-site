# Bluetooth

Provides methods to manage BLE scan.

**起始版本：** 6

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

## 导入模块

```TypeScript
import { BluetoothDevice,BLEFoundResponse,StopBLEScanOptions,SubscribeBLEFoundOptions,StartBLEScanOptions } from '@kit.ConnectivityKit';
```

## startBLEScan

```TypeScript
static startBLEScan(options: StartBLEScanOptions): void
```

Start BLE scan

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | StartBLEScanOptions | 是 | Options |

## stopBLEScan

```TypeScript
static stopBLEScan(options: StopBLEScanOptions): void
```

Stop BLE scan

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | StopBLEScanOptions | 是 | Options |

## subscribeBLEFound

```TypeScript
static subscribeBLEFound(options: SubscribeBLEFoundOptions): void
```

Subscribe BLE found

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SubscribeBLEFoundOptions | 是 | Options |

## unsubscribeBLEFound

```TypeScript
static unsubscribeBLEFound(): void
```

Stop the subscription of BLE found

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Lite

