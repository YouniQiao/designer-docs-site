# getSingleSensorByDeviceSync

## Modules to Import

```TypeScript
import { sensor } from '@ohos.sensor';
```

## getSingleSensorByDeviceSync

```TypeScript
function getSingleSensorByDeviceSync(type: SensorId, deviceId?: number): Array<Sensor>
```

Obtains information about the sensor of a specific type.

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SensorId | Yes | Sensor type. |
| deviceId | number | No | Device ID. The default value is **-1**, indicating the local device. You can use[getSensorList](arkts-sensorservice-getsensorlist-f.md#getsensorlist-1) or[sensorStatusChange](arkts-sensorservice-on-f.md#on-46) toobtain the device ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Sensor&gt; | Sensor attribute list. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const deviceId = 1;
  // The second deviceId is optional.
  const sensorList: sensor.Sensor[] = sensor.getSingleSensorByDeviceSync(sensor.SensorId.ACCELEROMETER, deviceId);
  console.info(`sensorList length: ${sensorList.length}`);
  console.info(`sensorList Json: ${JSON.stringify(sensorList)}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get sensorList. Code: ${e.code}, message: ${e.message}`);
}

```

