# getSensorListByDeviceSync

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

<a id="getsensorlistbydevicesync"></a>
## getSensorListByDeviceSync

```TypeScript
function getSensorListByDeviceSync(deviceId?: number): Array<Sensor>
```

Obtains the information about all sensors on the device.

**Since:** 19

<!--Device-sensor-function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>--><!--Device-sensor-function getSensorListByDeviceSync(deviceId?: int): Array<Sensor>-End-->

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
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
  // The first deviceId is optional. By default, it is set to the ID of the local device.
  const sensorList: sensor.Sensor[] = sensor.getSensorListByDeviceSync(deviceId);
  console.info(`sensorList length: ${sensorList.length}`);
  console.info(`sensorList: ${JSON.stringify(sensorList)}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Failed to get sensorList. Code: ${e.code}, message: ${e.message}`);
}

```

