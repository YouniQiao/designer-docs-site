# Sensor

Describes the sensor information.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## sensorIndex

```TypeScript
sensorIndex?: int
```

Sensor index.

**类型：** int

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

## sensorName

```TypeScript
sensorName:string
```

Sensor name.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## precision

```TypeScript
precision:double
```

Precision of the sensor.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## maxRange

```TypeScript
maxRange:double
```

Maximum measurement range of the sensor.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## isLocalSensor

```TypeScript
isLocalSensor?: boolean
```

Whether the sensor is a local sensor. The value **true** indicates a local sensor, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

## vendorName

```TypeScript
vendorName:string
```

Vendor of the sensor.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## deviceName

```TypeScript
deviceName?: string
```

Device name.

**类型：** string

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

## deviceId

```TypeScript
deviceId?: int
```

Device ID.

**类型：** int

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

## sensorId

```TypeScript
sensorId:int
```

Sensor type ID.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## hardwareVersion

```TypeScript
hardwareVersion:string
```

Hardware version of the sensor.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## power

```TypeScript
power:double
```

Estimated sensor power, in mA.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## maxSamplePeriod

```TypeScript
maxSamplePeriod:long
```

Maximum sampling period.

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## firmwareVersion

```TypeScript
firmwareVersion:string
```

Firmware version of the sensor.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

## isMockSensor

```TypeScript
isMockSensor?: boolean
```

Whether the sensor is a mock sensor. The value **true** indicates a mock sensor, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 23

**系统能力：** SystemCapability.Sensors.Sensor

## minSamplePeriod

```TypeScript
minSamplePeriod:long
```

Minimum sampling period.

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.Sensor

