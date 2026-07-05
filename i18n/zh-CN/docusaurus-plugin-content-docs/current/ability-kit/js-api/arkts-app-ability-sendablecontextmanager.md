# @ohos.app.ability.sendableContextManager

sendableContextManager模块提供Context与[SendableContext]{@link ./application/SendableContext:SendableContext}相互转换的能力。

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { sendableContextManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [convertFromContext](arkts-sendablecontextmanager-convertfromcontext-f.md#convertFromContext-1) | 将Context转换为SendableContext对象。 |
| [convertToAbilityStageContext](arkts-sendablecontextmanager-converttoabilitystagecontext-f.md#convertToAbilityStageContext-1) | 将SendableContext对象转换为AbilityStageContext。 |
| [convertToApplicationContext](arkts-sendablecontextmanager-converttoapplicationcontext-f.md#convertToApplicationContext-1) | 将SendableContext对象转换为ApplicationContext。 |
| [convertToContext](arkts-sendablecontextmanager-converttocontext-f.md#convertToContext-1) | 将SendableContext对象转换为Context。 |
| [convertToUIAbilityContext](arkts-sendablecontextmanager-converttouiabilitycontext-f.md#convertToUIAbilityContext-1) | 将SendableContext对象转换为UIAbilityContext。 |
| [setEventHubMultithreadingEnabled](arkts-sendablecontextmanager-seteventhubmultithreadingenabled-f.md#setEventHubMultithreadingEnabled-1) | 设置[Context]{@link ./app/context}中的[EventHub]{@link ./application/EventHub:EventHub}是否启用跨线程通信能力。 > **说明：** > > - 当多个Context进行通信时，需要调用该接口设置每个Context都支持EventHub跨线程数据传递功能。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [SendableContext](arkts-sendablecontextmanager-sendablecontext-t.md) | SendableContext二级模块 |

