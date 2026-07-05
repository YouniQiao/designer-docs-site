# getSensorListByDeviceSync

## getSensorListByDeviceSync

```TypeScript
function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>
```

Obtains the information about all sensors on the device.

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Sensor> | Sensor attribute list. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const deviceId = 1;
  // The first deviceId is optional. By default, it is set to the ID of the local device.
  const sensorList: sensor.Sensor[] = sensor.getSensorListByDeviceSync(deviceId);
  console.info(`sensorList length: ${sensorList.length}`);
  console.info(`sensorList: ${JSON.stringify(sensorList)}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get sensorList. Code: ${e.code}, message: ${e.message}`);
}

```

