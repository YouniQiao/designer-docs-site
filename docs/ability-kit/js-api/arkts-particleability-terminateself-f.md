# terminateSelf

## terminateSelf

```TypeScript
function terminateSelf(callback: AsyncCallback<void>): void
```

销毁当前particleAbility。使用callback异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当销毁当前particleAbility成功，err为undefined，否则为错误对象。 |

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

销毁当前particleAbility。使用Promise异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';

particleAbility.terminateSelf().then(() => {
  console.info('particleAbility terminateSelf');
});

```

