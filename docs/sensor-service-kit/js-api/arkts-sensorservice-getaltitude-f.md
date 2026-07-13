# getAltitude

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## getAltitude

```TypeScript
function getAltitude(seaPressure: number, currentPressure: number, callback: AsyncCallback<number>): void
```

Obtains the altitude at which the device is located based on the sea-level atmospheric pressure and the current
atmospheric pressure. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDeviceAltitude(seaPressure:

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| seaPressure | number | Yes | Sea-level atmospheric pressure, in hPa. |
| currentPressure | number | Yes | Atmospheric pressure at the altitude where the device is located, in hPa. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the altitude, in meters. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

sensor.getAltitude(0, 200, (err: BusinessError, data: number) => {
  if (err) {
    console.error(`Failed to operate. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info("Succeeded in getting getAltitude interface get data: " + data);
});

```


## getAltitude

```TypeScript
function getAltitude(seaPressure: number, currentPressure: number): Promise<number>
```

Obtains the altitude at which the device is located based on the sea-level atmospheric pressure and the current
atmospheric pressure. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getDeviceAltitude(seaPressure:

**System capability:** SystemCapability.Sensors.Sensor

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| seaPressure | number | Yes | Sea-level atmospheric pressure, in hPa. |
| currentPressure | number | Yes | Atmospheric pressure at the altitude where the device is located, in hPa. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the altitude, in meters. |

**Example**

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const promise = sensor.getAltitude(0, 200);
promise.then((data: number) => {
  console.info('Succeeded in getting sensor_getAltitude_Promise success', data);
}).catch((err: BusinessError) => {
  console.error(`Failed to operate.`);
})

```

