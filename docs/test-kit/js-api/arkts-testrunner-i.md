# TestRunner

TestRunner模块提供了框架测试的能力。包括准备单元测试环境、运行测试用例。 如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { TestRunner } from '@kit.TestKit';
```

## onPrepare

```TypeScript
onPrepare(): void
```

为运行测试用例准备单元测试环境。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

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

运行测试用例。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

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

## onRun

```TypeScript
onRun: OnRunFn
```

运行测试用例。

**Type:** OnRunFn

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onPrepare

```TypeScript
onPrepare: OnPrepareFn
```

为运行测试用例准备单元测试环境。

**Type:** OnPrepareFn

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onStop

```TypeScript
onStop?: OnStopFn
```

当测试完成时，系统会在测试环境退出前触发该回调。

**Type:** OnStopFn

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

