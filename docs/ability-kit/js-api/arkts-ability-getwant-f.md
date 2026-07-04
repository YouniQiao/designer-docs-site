# getWant

## Modules to Import

```TypeScript
import { featureAbility } from '@ohos.ability.featureAbility';
```

## getWant

```TypeScript
function getWant(callback: AsyncCallback<Want>): void
```

Obtain the want sent from the source ability.

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Want&gt; | Yes | Indicates the ability to start. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.getWant((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getWant fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getWant success, data: ${JSON.stringify(data)}`);
  }
});

```


## getWant

```TypeScript
function getWant(): Promise<Want>
```

Obtain the want sent from the source ability.

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want&gt; | The promise form returns the Want result |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.getWant().then((data) => {
  console.info(`getWant data: ${JSON.stringify(data)}`);
});

```

