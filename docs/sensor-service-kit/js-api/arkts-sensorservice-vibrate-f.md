# vibrate

## Modules to Import

```TypeScript
import { vibrator } from '@ohos.vibrator';
```

## vibrate

```TypeScript
function vibrate(duration: number, callback?: AsyncCallback<void>): void
```

Triggers vibration based on a specified duration. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startVibration(effect:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | Vibration duration, in ms. The value range is (0,1800000]. The maximum vibrationduration varies with devices due to different component protection design specifications of drivers provided bydifferent vendors. It is recommended that a single vibration duration be less than or equal to 10s to maximizeuser experience. |
| callback | AsyncCallback&lt;void&gt; | No | Callback used to return the result. If the vibration starts, **err** is**undefined**; otherwise, **err** is an error object. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(1000, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})

```


## vibrate

```TypeScript
function vibrate(duration: number): Promise<void>
```

Triggers vibration based on a specified duration. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startVibration(effect:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | number | Yes | Vibration duration, in ms. The value range is (0,1800000]. The maximum vibrationduration varies with devices due to different component protection design specifications of drivers provided bydifferent vendors. It is recommended that a single vibration duration be less than or equal to 10s to maximizeuser experience. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns the result. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(1000).then(() => {
  console.info('Succeed in vibrating');
}, (error: BusinessError) => {
  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
});

```


## vibrate

```TypeScript
function vibrate(effectId: EffectId): Promise<void>
```

Triggers vibration based on a specified effect. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startVibration(effect:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effectId | EffectId | Yes | Effect ID. The value is a string of a maximum of 64 characters. If the lengthexceeds 64 characters, the first 64 characters are used. You are advised to check whether the effect ID issupported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns the result. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER).then(() => {
  console.info('Succeed in vibrating');
}, (error: BusinessError) => {
  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
});

```


## vibrate

```TypeScript
function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void
```

Triggers vibration based on a specified effect. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startVibration(effect:

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effectId | EffectId | Yes | Effect ID. The value is a string of a maximum of 64 characters. If the lengthexceeds 64 characters, the first 64 characters are used. You are advised to check whether the effect ID issupported. |
| callback | AsyncCallback&lt;void&gt; | No | Callback used to return the result. If the vibration starts, **err** is**undefined**; otherwise, **err** is an error object. |

**Example**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})

```

