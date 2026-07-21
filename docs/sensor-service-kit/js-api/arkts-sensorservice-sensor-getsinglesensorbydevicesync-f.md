# getSingleSensorByDeviceSync

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

<a id="getsinglesensorbydevicesync"></a>
## getSingleSensorByDeviceSync

```TypeScript
function getSingleSensorByDeviceSync(type: SensorId, deviceId?: number): Array<Sensor>
```

Obtains information about the sensor of a specific type.

**Since:** 19

<!--Device-sensor-function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>--><!--Device-sensor-function getSingleSensorByDeviceSync(type: SensorId, deviceId?: int): Array<Sensor>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [SensorId](arkts-sensorservice-sensor-sensorid-e.md) | Yes | Sensor type. |
| deviceId | number | No | Device ID. The default value is **-1**, indicating the local device. You can use [getSensorList](arkts-sensorservice-sensor-getsensorlist-f.md#getsensorlist-1) or [sensorStatusChange](sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>)) to obtain the device ID. |

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

