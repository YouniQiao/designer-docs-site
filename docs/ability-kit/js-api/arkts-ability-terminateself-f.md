# terminateSelf

## Modules to Import

```TypeScript
import { particleAbility } from '@ohos.ability.particleAbility';
```

## terminateSelf

```TypeScript
function terminateSelf(callback: AsyncCallback<void>): void
```

Destroys this service ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Return the result of stopping Ability in the form of callback. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';

particleAbility.terminateSelf(
  (error) => {
    if (error && error.code !== 0) {
      console.error(`terminateSelf fail, error: ${JSON.stringify(error)}`);
    }
  }
);

```


## terminateSelf

```TypeScript
function terminateSelf(): Promise<void>
```

Destroys this service ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';

particleAbility.terminateSelf().then(() => {
  console.info('particleAbility terminateSelf');
});

```

