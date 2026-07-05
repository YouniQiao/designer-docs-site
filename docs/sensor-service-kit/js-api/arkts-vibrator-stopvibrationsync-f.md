# stopVibrationSync

## stopVibrationSync

```TypeScript
function stopVibrationSync(): void
```

Stops any form of motor vibration.

**Since:** 12

**Required permissions:** 

 ohos.permission.VIBRATE

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Sensors.MiscDevice

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 14600101 | Device operation failed. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Use try catch to capture possible exceptions.
try {
  // Stop any form of motor vibration.
  vibrator.stopVibrationSync()
  console.info('Succeed in stopping vibration');
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

