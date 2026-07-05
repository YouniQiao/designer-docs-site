# terminateSelf

## terminateSelf

```TypeScript
function terminateSelf(callback: AsyncCallback<void>): void
```

停止当前的Ability。使用callback异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止当前的Ability成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.terminateSelf(
  (error) => {
    console.error(`error: ${JSON.stringify(error)}`);
  }
)

```

## terminateSelf

```TypeScript
function terminateSelf(): Promise<void>
```

停止当前的Ability。使用Promise异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

featureAbility.terminateSelf().then(() => {
  console.info('==========================>terminateSelf=======================>');
}).catch((error: BusinessError) => {
  console.error(`terminateSelf failed, error.code: ${error.code}, error.message: ${error.message}`);
});

```

