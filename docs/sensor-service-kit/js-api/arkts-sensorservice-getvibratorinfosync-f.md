# getVibratorInfoSync

## Modules to Import

```TypeScript
import { vibrator } from '@ohos.vibrator';
```

## getVibratorInfoSync

```TypeScript
function getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>
```

Queries the vibrator list of one or all devices.

**Since:** 19

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | VibratorInfoParam | No | Vibrator parameters, such as the specified device and vibrator. If thisparameter is left unspecified, this API applies to all vibrators of the local device by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;VibratorInfo&gt; | Vibrator information. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync({ deviceId: 1, vibratorId: 3 });
  console.info(`vibratorInfoList: ${JSON.stringify(vibratorInfoList)}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

