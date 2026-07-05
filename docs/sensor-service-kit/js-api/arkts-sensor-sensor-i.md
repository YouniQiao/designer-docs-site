# Sensor

Describes the sensor information.

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## sensorIndex

```TypeScript
sensorIndex?: int
```

Sensor index.

**Type:** int

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

## sensorName

```TypeScript
sensorName:string
```

Sensor name.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## precision

```TypeScript
precision:double
```

Precision of the sensor.

**Type:** double

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## maxRange

```TypeScript
maxRange:double
```

Maximum measurement range of the sensor.

**Type:** double

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## isLocalSensor

```TypeScript
isLocalSensor?: boolean
```

Whether the sensor is a local sensor. The value **true** indicates a local sensor, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

## vendorName

```TypeScript
vendorName:string
```

Vendor of the sensor.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## deviceName

```TypeScript
deviceName?: string
```

Device name.

**Type:** string

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

## deviceId

```TypeScript
deviceId?: int
```

Device ID.

**Type:** int

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

## sensorId

```TypeScript
sensorId:int
```

Sensor type ID.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## hardwareVersion

```TypeScript
hardwareVersion:string
```

Hardware version of the sensor.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## power

```TypeScript
power:double
```

Estimated sensor power, in mA.

**Type:** double

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## maxSamplePeriod

```TypeScript
maxSamplePeriod:long
```

Maximum sampling period.

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## firmwareVersion

```TypeScript
firmwareVersion:string
```

Firmware version of the sensor.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

## isMockSensor

```TypeScript
isMockSensor?: boolean
```

Whether the sensor is a mock sensor. The value **true** indicates a mock sensor, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Sensors.Sensor

## minSamplePeriod

```TypeScript
minSamplePeriod:long
```

Minimum sampling period.

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Sensors.Sensor

