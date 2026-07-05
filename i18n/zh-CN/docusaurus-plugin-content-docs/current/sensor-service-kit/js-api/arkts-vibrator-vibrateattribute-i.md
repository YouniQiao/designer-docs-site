# VibrateAttribute

Describes the vibration attribute.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## systemUsage

```TypeScript
systemUsage?: boolean
```

Indicates whether to bypass system management switches.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

**系统接口：** 此接口为系统接口。

## usage

```TypeScript
usage: Usage
```

Vibration scenario. The default value is **unknown**. The value must be an enum defined in [Usage]vibrator.Usage.

**类型：** Usage

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

## id

```TypeScript
id?: int
```

Vibrator ID. The default value is **0**.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is **-1**, indicating the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the device ID. This API can be used in atomic services since API version 19.

**类型：** int

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

