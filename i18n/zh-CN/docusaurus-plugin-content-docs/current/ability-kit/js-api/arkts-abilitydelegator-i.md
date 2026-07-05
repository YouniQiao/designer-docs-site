# AbilityDelegator

AbilityDelegator模块可以通过[AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例来监听和管理 [UIAbility]./../@ohos.app.ability.UIAbility生命周期的变化。例如获取UIAbility当前状态（如是否已创建/是否在前台等）、查询当前获焦的UIAbility、等待UIAbility进入 某个生命周期节点（如等待UIAbility进入onForeground）、启动指定UIAbility、设置超时机制等功能。 AbilityDelegator可以通过 [getAbilityDelegator]./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator方 法获取。 > **说明：** > > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## addAbilityMonitor

```TypeScript
addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void
```

添加AbilityMonitor实例。使用callback异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当添加AbilityMonitor实例成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityMonitor failed. |

## addAbilityMonitor

```TypeScript
addAbilityMonitor(monitor: AbilityMonitor): Promise<void>
```

添加AbilityMonitor实例。使用Promise异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityMonitor failed. |

## addAbilityMonitorSync

```TypeScript
addAbilityMonitorSync(monitor: AbilityMonitor): void
```

同步添加AbilityMonitor实例。不支持多线程并发调用。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityMonitorSync failed. |

## addAbilityStageMonitor

```TypeScript
addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void
```

添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当添加一个用于监视指定AbilityStage的生命周期状态更改的AbilityStageMonitor对象成功，err为undefined，否则  为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityStageMonitor failed. |

## addAbilityStageMonitor

```TypeScript
addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>
```

添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityStageMonitor failed. |

## addAbilityStageMonitorSync

```TypeScript
addAbilityStageMonitorSync(monitor: AbilityStageMonitor): void
```

同步添加一个AbilityStageMonitor对象，用于监视指定AbilityStage的生命周期状态更改。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling AddAbilityStageMonitorSync failed. |

## addInteropAbilityMonitorSync

```TypeScript
addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void
```

新增InteropAbilityMonitor对象，用于监控此进程中指定能力的生命周期状态变化。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | InteropAbilityMonitor | 是 | InteropAbilityMonitor对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000100 | Calling InteropAbilityMonitor failed. |

## doAbilityBackground

```TypeScript
doAbilityBackground(ability: UIAbility, callback: AsyncCallback<void>): void
```

调度指定Ability生命周期状态到Background状态。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 指定Ability对象。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当调度指定Ability生命周期状态到Background状态成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling DoAbilityBackground failed. |

## doAbilityBackground

```TypeScript
doAbilityBackground(ability: UIAbility): Promise<void>
```

调度指定Ability生命周期状态到Background状态。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 指定Ability对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling DoAbilityBackground failed. |

## doAbilityForeground

```TypeScript
doAbilityForeground(ability: UIAbility, callback: AsyncCallback<void>): void
```

调度指定Ability生命周期状态到Foreground状态。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 指定Ability对象。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当调度指定Ability生命周期状态到Foreground状态成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling DoAbilityForeground failed. |

## doAbilityForeground

```TypeScript
doAbilityForeground(ability: UIAbility): Promise<void>
```

调度指定Ability生命周期状态到Foreground状态。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 指定Ability对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling DoAbilityForeground failed. |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void
```

执行指定的shell命令。使用callback异步回调。 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cmd | string | 是 | shell命令字符串。 |
| callback | AsyncCallback&lt;ShellCmdResult> | 是 | 回调函数。当执行指定的shell命令成功，err为undefined，data为获取到的执行结果；否则为错误对象。 |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, timeoutSecs: long, callback: AsyncCallback<ShellCmdResult>): void
```

指定超时时间，并执行指定的shell命令。使用callback异步回调。 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cmd | string | 是 | shell命令字符串。 |
| timeoutSecs | long | 是 | 设定命令超时时间，单位秒（s）。 |
| callback | AsyncCallback&lt;ShellCmdResult> | 是 | 回调函数。当执行指定的shell命令成功，err为undefined，data为获取到的执行结果；否则为错误对象。 |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, timeoutSecs?: long): Promise<ShellCmdResult>
```

指定超时时间，并执行指定的shell命令。使用Promise异步回调。 仅支持如下shell命令：aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm, hidumper, wukong, pkill, ps, pidof

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cmd | string | 是 | shell命令字符串。 |
| timeoutSecs | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ShellCmdResult> | Promise对象，返回Shell命令执行结果  [ShellCmdResult]./application/shellCmdResult:ShellCmdResult对象。 |

## finishTest

```TypeScript
finishTest(msg: string, code: long, callback: AsyncCallback<void>): void
```

结束测试并打印日志信息到单元测试终端控制台。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msg | string | 是 | 日志字符串。 |
| code | long | 是 | 日志码。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当结束测试并打印日志信息到单元测试终端控制台成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling FinishTest failed. |

## finishTest

```TypeScript
finishTest(msg: string, code: long): Promise<void>
```

结束测试并打印日志信息到单元测试终端控制台。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msg | string | 是 | 日志字符串。 |
| code | long | 是 | 日志码。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling FinishTest failed. |

## getAbilityState

```TypeScript
getAbilityState(ability: UIAbility): int
```

获取指定ability的生命周期状态。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 指定Ability对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 指定ability的生命周期状态。状态枚举值使用  [AbilityLifecycleState]./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.AbilityLifecycleState  。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getAppContext

```TypeScript
getAppContext(): Context
```

获取应用Context。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 应用[Context]./app/context。 |

## getCurrentTopAbility

```TypeScript
getCurrentTopAbility(callback: AsyncCallback<UIAbility>): void
```

获取当前应用顶部Ability。使用callback异步回调。不支持Worker线程调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;UIAbility> | 是 | 回调函数。当获取当前应用顶部Ability成功，err为undefined，data为获取到的Ability实例；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling GetCurrentTopAbility failed. |

## getCurrentTopAbility

```TypeScript
getCurrentTopAbility(): Promise<UIAbility>
```

获取当前应用顶部Ability。使用Promise异步回调。不支持Worker线程调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UIAbility> | Promise对象，返回前应用顶部Ability。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000100 | Calling GetCurrentTopAbility failed. |

## print

```TypeScript
print(msg: string, callback: AsyncCallback<void>): void
```

打印日志信息到单元测试终端控制台。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msg | string | 是 | 日志字符串。字符串最大长度为10000。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当打印日志信息到单元测试终端控制台成功，err为undefined，否则为错误对象。 |

## print

```TypeScript
print(msg: string): Promise<void>
```

打印日志信息到单元测试终端控制台。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msg | string | 是 | 日志字符串。字符串最大长度为10000。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

## printSync

```TypeScript
printSync(msg: string): void
```

打印日志信息到单元测试终端控制台。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| msg | string | 是 | 日志字符串。字符串最大长度为10000。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## removeAbilityMonitor

```TypeScript
removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void
```

删除已经添加的AbilityMonitor实例。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当删除已经添加的AbilityMonitor实例成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityMonitor failed. |

## removeAbilityMonitor

```TypeScript
removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>
```

删除已经添加的AbilityMonitor实例。使用Promise异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityMonitor failed. |

## removeAbilityMonitorSync

```TypeScript
removeAbilityMonitorSync(monitor: AbilityMonitor): void
```

同步删除已经添加的AbilityMonitor实例。不支持多线程并发调用。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityMonitorSync failed. |

## removeAbilityStageMonitor

```TypeScript
removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void
```

从应用程序内存中删除指定的AbilityStageMonitor对象。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当从应用程序内存中删除指定的AbilityStageMonitor对象成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityStageMonitor failed. |

## removeAbilityStageMonitor

```TypeScript
removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>
```

从应用程序内存中删除指定的AbilityStageMonitor对象。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityStageMonitor failed. |

## removeAbilityStageMonitorSync

```TypeScript
removeAbilityStageMonitorSync(monitor: AbilityStageMonitor): void
```

同步从应用程序内存中删除指定的AbilityStageMonitor对象。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling RemoveAbilityStageMonitorSync failed. |

## removeInteropAbilityMonitorSync

```TypeScript
removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void
```

从应用程序内存中移除指定的InteropAbilityMonitor对象。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | InteropAbilityMonitor | 是 | InteropAbilityMonitor对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000100 | Calling removeInteropAbilityMonitorSync failed. |

## setMockList

```TypeScript
setMockList(mockList: Record<string, string>): void
```

设置模块的mock替换关系。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mockList | Record&lt;string, string> | 是 | 模块mock替换关系的键值对象，其中key为待替换的目标路径，value为用于替换的mock实现文件的路径。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000050 | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

启动指定Ability。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability参数。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当启动指定Ability成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

启动指定Ability。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 启动Ability参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<UIAbility>): void
```

等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用callback异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |
| callback | AsyncCallback&lt;UIAbility> | 是 | 回调函数。当等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期成功，err为undefined，data为获取  到的Ability实例，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityMonitor failed. |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, timeout: long, callback: AsyncCallback<UIAbility>): void
```

设置等待时间，等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用callback异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |
| timeout | long | 是 | 最大等待时间，单位毫秒（ms），默认值为5000毫秒。 |
| callback | AsyncCallback&lt;UIAbility> | 是 | 表示指定的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityMonitor failed. |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, timeout?: long): Promise<UIAbility>
```

设置等待时间，等待与AbilityMonitor实例匹配的Ability到达OnCreate生命周期，并返回Ability实例。使用Promise异步回调。不支持多线程并发调用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityMonitor | 是 | [AbilityMonitor]./application/AbilityMonitor:AbilityMonitor实例。 |
| timeout | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;UIAbility> | Promise对象，返回Ability实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void
```

返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |
| callback | AsyncCallback&lt;AbilityStage> | 是 | 回调函数。当等待并返回与给定AbilityStageMonitor中设置的条件匹配的AbilityStage对象的操作成功，err为  undefined，data为获取到的[AbilityStage]./../@ohos.app.ability.AbilityStage:AbilityStage对象；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityStageMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: long, callback: AsyncCallback<AbilityStage>): void
```

在指定的超时最大等待时间内，返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象。使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |
| timeout | long | 是 | 超时最大等待时间，单位毫秒（ms），默认值为5000毫秒。 |
| callback | AsyncCallback&lt;AbilityStage> | 是 | 回调函数。当等待并返回与给定AbilityStageMonitor中设置的条件匹配的AbilityStage对象的操作成功，err为  undefined，data为获取到的[AbilityStage]./../@ohos.app.ability.AbilityStage:AbilityStage对象；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityStageMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: long): Promise<AbilityStage>
```

返回与AbilityStageMonitor中设置条件相匹配的AbilityStage对象，支持设置超时最大等待时间。使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| monitor | AbilityStageMonitor | 是 | [AbilityStageMonitor]./application/AbilityStageMonitor:AbilityStageMonitor 实例。 |
| timeout | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityStage> | Promise对象，返回  [AbilityStage]./../@ohos.app.ability.AbilityStage:AbilityStage对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 16000100 | Calling WaitAbilityStageMonitor failed. |

