# stop

## Modules to Import

```TypeScript
import { vibrator } from '@ohos.vibrator';
```

## stop

```TypeScript
function stop(stopMode: VibratorStopMode): Promise<void>
```

Stops vibration in the specified mode. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** stopVibration(stopMode:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stopMode | VibratorStopMode | Yes | Mode to stop the vibration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns the result. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Start vibration based on the specified effect ID.
vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})
// Stop vibration in VIBRATOR_STOP_MODE_PRESET mode.
vibrator.stop(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET).then(() => {
  console.info('Succeed in stopping');
}, (error: BusinessError) => {
  console.error(`Failed to stop. Code: ${error.code}, message: ${error.message}`);
});

```


## stop

```TypeScript
function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void
```

Stops vibration in the specified mode. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** stopVibration(stopMode:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stopMode | VibratorStopMode | Yes | Mode to stop the vibration. |
| callback | AsyncCallback&lt;void&gt; | No | Callback used to return the result. If the vibration stops, **err** is**undefined**; otherwise, **err** is an error object. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Start vibration based on the specified effect ID.
vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})
// Stop vibration in VIBRATOR_STOP_MODE_PRESET mode.
vibrator.stop(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to stop. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in stopping');
  }
})

```

