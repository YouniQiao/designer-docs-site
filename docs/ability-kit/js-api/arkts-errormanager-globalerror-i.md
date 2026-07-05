# GlobalError

有关异常事件名字、消息、错误堆栈信息、异常线程名称和类型的对象。

**Inheritance:** GlobalErrorextends: Error.

**Since:** 18

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { errorManager } from '@kit.AbilityKit';
```

## instanceName

```TypeScript
instanceName: string
```

表示虚拟机实例名称。 **说明**： TaskPool线程中异常的instanceName标识规则： - globalErrorOccurred：标识为“TaskPool Thread + 方法名”； - globalUnhandledRejectionDetected：标识为“TaskPool Thread + 任务名”； - 若仅标识为“TaskPool Thread”，则表明异常源于异步回调内部。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## instanceType

```TypeScript
instanceType: InstanceType
```

表示虚拟机的实例类型。

**Type:** InstanceType

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

