# @ohos.application.testRunner

## Modules to Import

```TypeScript
import { TestRunner } from '@kit.TestKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [TestRunner](arkts-testrunner-i.md) | TestRunner模块提供了框架测试的能力。包括准备单元测试环境、运行测试用例。 如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。 |

### Types

| Name | Description |
| --- | --- |
| [OnPrepareFn](arkts-onpreparefn-t.md) | 为运行测试用例准备单元测试环境。 |
| [OnRunFn](arkts-onrunfn-t.md) | 运行测试用例。 |
| [OnStopFn](arkts-onstopfn-t.md) | 当测试完成时，系统会在测试环境退出前触发该回调。 |

