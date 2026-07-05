# TestRunner

Base class for the test framework. If you want to implement your own unit test framework, you must inherit this class and overrides all its methods.

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { TestRunner } from '@ohos.application.testRunner';
```

## onPrepare

```TypeScript
onPrepare(): void
```

Prepare the unit testing environment for running test cases.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { TestRunner } from '@kit.TestKit';

export default class UserTestRunner implements TestRunner {
  onPrepare() {
    console.info('Trigger onPrepare');
  }

  onRun() {
  }
}

```

## onRun

```TypeScript
onRun(): void
```

Run all test cases.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { TestRunner } from '@kit.TestKit';

export default class UserTestRunner implements TestRunner {
  onPrepare() {
  }

  onRun() {
    console.info('Trigger onRun');
  }
}

```

## onStop

```TypeScript
onStop?: OnStopFn
```

Stop all test cases.

**Type:** OnStopFn

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

