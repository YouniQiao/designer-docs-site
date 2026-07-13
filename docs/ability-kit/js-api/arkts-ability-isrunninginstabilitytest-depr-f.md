# isRunningInStabilityTest

## isRunningInStabilityTest

```TypeScript
function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void
```

Checks whether the system is undergoing a stability test. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> A stability test scenario refers to a specific testing environment designed to verify application reliability
> under complex, extreme, or long-term operating conditions.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isRunningInStabilityTest

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the API call result and the result indicatingwhether the system is undergoing a stability test. You can perform error handling or custom processing in thiscallback. **true** if the system is undergoing a stability test, **false** otherwise. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.isRunningInStabilityTest((error, flag) => {
  if (error && error.code !== 0) {
    console.error(`isRunningInStabilityTest fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`isRunningInStabilityTest success, the result is: ${JSON.stringify(flag)}`);
  }
});

```


## isRunningInStabilityTest

```TypeScript
function isRunningInStabilityTest(): Promise<boolean>
```

Checks whether the system is undergoing a stability test. This API uses a promise to return the result.

> **NOTE**
>
> A stability test scenario refers to a specific testing environment designed to verify application reliability
> under complex, extreme, or long-term operating conditions.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isRunningInStabilityTest

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the API call result and the result indicating whether the system isundergoing a stability test. You can perform error handling or custom processing in this callback. **true** if thesystem is undergoing a stability test, **false** otherwise. |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.isRunningInStabilityTest().then((flag) => {
  console.info(`The result of isRunningInStabilityTest is: ${JSON.stringify(flag)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

