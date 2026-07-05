# ApplicationContext

ApplicationContext作为应用上下文，继承自[Context]./../app/context，提供了应用生命周期监听、进程管理、应用环境设置等应用级别的管控能力。 > **说明：** > > 本模块接口仅可在Stage模型下使用。

**继承实现关系：** ApplicationContext继承自：Context。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## clearUpApplicationData

```TypeScript
clearUpApplicationData(): Promise<void>
```

清理当前应用的应用文件路径下的所有数据，同时撤销应用向用户申请的权限。使用Promise异步回调。仅支持主线程调用。 > **说明：** > > 应用文件路径详见[应用文件目录信息](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。图中仅标识了el1~el2目录下的应用文件路径，其他文件 > 加密类型目录下的应用文件路径可以参考el1。 > > 该接口会停止应用进程，应用进程停止后，后续的所有回调都不会再触发。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## clearUpApplicationData

```TypeScript
clearUpApplicationData(callback: AsyncCallback<void>): void
```

清理当前应用的应用文件路径下的所有数据，同时撤销应用向用户申请的权限。使用callback异步回调。仅支持主线程调用。 > **说明：** > > 应用文件路径详见[应用文件目录信息](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。图中仅标识了el1~el2目录下的应用文件路径，其他文件 > 加密类型目录下的应用文件路径可以参考el1。 > > 该接口会停止应用进程，应用进程停止后，后续的所有回调都不会再触发。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the application data is cleared  up, error is undefined; otherwise, error is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## getAllRunningInstanceKeys

```TypeScript
getAllRunningInstanceKeys(): Promise<Array<string>>
```

获取应用的所有多实例的唯一实例标识。使用Promise异步回调。仅支持主线程调用。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回应用的所有多实例的唯一实例标识。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000078 | The multi-instance is not supported. |

## getAllWindowStages

```TypeScript
getAllWindowStages(): Promise<Array<window.WindowStage>>
```

获取应用当前进程内的所有WindowStage对象。使用Promise异步回调。仅支持主线程调用。 该接口主要用于包含多个UIAbility的应用进行多窗口管理，例如管理多个WindowStage的状态、同一应用的多个窗口间的状态或数据同步等。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;window.WindowStage>> | Promise used to return all WindowStage objects in the current  application process. |

## getCurrentAppCloneIndex

```TypeScript
getCurrentAppCloneIndex(): int
```

获取当前应用的分身索引。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 当前应用的分身索引。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000071 | The MultiAppMode is not {@link App_CLONE}. |

## getCurrentInstanceKey

```TypeScript
getCurrentInstanceKey(): string
```

获取当前应用多实例的唯一实例标识。仅支持主线程调用。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回当前应用多实例的唯一实例标识。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000078 | The multi-instance is not supported. |

## getRunningProcessInformation

```TypeScript
getRunningProcessInformation(): Promise<Array<ProcessInformation>>
```

获取运行中的进程信息。使用Promise异步回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation>> | Promise对象，返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## getRunningProcessInformation

```TypeScript
getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void
```

获取运行中的进程信息。使用callback异步回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation>> | 是 | 回调函数，返回有关运行进程的信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## killAllProcesses

```TypeScript
killAllProcesses(): Promise<void>
```

终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用Promise异步回调。仅支持主线程调用。 > **说明：** > > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()](arkts-uiabilitycontext-c.md#terminateSelf)接口。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |

## killAllProcesses

```TypeScript
killAllProcesses(clearPageStack: boolean): Promise<void>
```

终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用Promise异步回调。仅支持主线程调用。 > **说明：** > > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()](arkts-uiabilitycontext-c.md#terminateSelf)接口。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clearPageStack | boolean | 是 | 表示是否清除页面堆栈。true表示清除，false表示不清除。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |
| 16000011 | The context does not exist. |

## killAllProcesses

```TypeScript
killAllProcesses(callback: AsyncCallback<void>): void
```

终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用callback异步回调。仅支持主线程调用。 > **说明：** > > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()](arkts-uiabilitycontext-c.md#terminateSelf)接口。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当终止应用所在的进程成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |

## off('abilityLifecycle')

```TypeScript
off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>): void
```

取消监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | 是 | 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。 |
| callbackId | number | 是 | 通过  [ApplicationContext.on('abilityLifecycle')](arkts-applicationcontext-c.md#on)  接口注册监听应用内UIAbility的生命周期时返回的ID。 |
| callback | AsyncCallback&lt;void> | 是 | 回调方法。当取消监听应用内生命周期成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## off('abilityLifecycle')

```TypeScript
off(type: 'abilityLifecycle', callbackId: number): Promise<void>
```

取消监听应用内UIAbility的生命周期。使用Promise异步回调。仅支持主线程调用。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | 是 | 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。 |
| callbackId | number | 是 | 通过  [ApplicationContext.on('abilityLifecycle')](arkts-applicationcontext-c.md#on)  接口注册监听应用内UIAbility的生命周期时返回的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## off('environment')

```TypeScript
off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void
```

取消对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'environment' | 是 | 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。 |
| callbackId | number | 是 | 通过  [ApplicationContext.on('environment')](arkts-applicationcontext-c.md#on)  接口注册监听系统环境变化时返回的ID。 |
| callback | AsyncCallback&lt;void> | 是 | 回调方法。当取消对系统环境变化的监听成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |

## off('environment')

```TypeScript
off(type: 'environment', callbackId: number): Promise<void>
```

取消对系统环境变化的监听。使用Promise异步回调。仅支持主线程调用。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'environment' | 是 | 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。 |
| callbackId | number | 是 | 通过  [ApplicationContext.on('environment')](arkts-applicationcontext-c.md#on)  接口注册监听系统环境变化时返回的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |

## off('applicationStateChange')

```TypeScript
off(type: 'applicationStateChange', callback?: ApplicationStateChangeCallback): void
```

取消对当前应用进程状态变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'applicationStateChange' | 是 | 此类型表示当前应用进程状态变化，固定为'applicationStateChange'。 |
| callback | ApplicationStateChangeCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## offAbilityLifecycle

```TypeScript
offAbilityLifecycle(callbackId: int, callback: AsyncCallback<void>): void
```

取消监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackId | int | 是 | 通过  [ApplicationContext.on('abilityLifecycle')](arkts-applicationcontext-c.md#on)  接口注册监听应用内UIAbility的生命周期时返回的ID。 |
| callback | AsyncCallback&lt;void> | 是 | 回调方法。当取消监听应用内生命周期成功，err为undefined，否则为错误对象。 |

## offAbilityLifecycle

```TypeScript
offAbilityLifecycle(callbackId: int): Promise<void>
```

取消监听应用内UIAbility的生命周期。使用Promise异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackId | int | 是 | 通过  [ApplicationContext.on('abilityLifecycle')](arkts-applicationcontext-c.md#on)  接口注册监听应用内UIAbility的生命周期时返回的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## offApplicationStateChange

```TypeScript
offApplicationStateChange(callback?: ApplicationStateChangeCallback): void
```

取消对应用前后台状态变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ApplicationStateChangeCallback | 否 |  |

## offEnvironment

```TypeScript
offEnvironment(callbackId: int, callback: AsyncCallback<void>): void
```

取消对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackId | int | 是 | 通过[ApplicationContext.onEnvironment](arkts-applicationcontext-c.md#onEnvironment)接口注册监听系统环  境变化时返回的ID。 |
| callback | AsyncCallback&lt;void> | 是 | 回调方法。当取消对系统环境变化的监听成功，err为undefined，否则为错误对象。 |

## offEnvironment

```TypeScript
offEnvironment(callbackId: int): Promise<void>
```

取消对系统环境变化的监听。使用Promise异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackId | int | 是 | 通过[ApplicationContext.onEnvironment](arkts-applicationcontext-c.md#onEnvironment)接口注册监听系统环境  变化时返回的ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## offInteropAbilityLifecycle

```TypeScript
offInteropAbilityLifecycle(callback?: InteropAbilityLifecycleCallback): void
```

取消应用内不同ArkTS环境下UIAbility生命周期的监听。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | InteropAbilityLifecycleCallback | 否 |  |

## offSystemConfigurationUpdated

```TypeScript
offSystemConfigurationUpdated(callback?: systemConfiguration.UpdatedCallback): void
```

取消监听系统环境[Configuration]./../@ohos.app.ability.Configuration:Configuration的变化。仅支持主线程调用。 <p>**NOTE**: <br>It can be called only by the main thread. </p>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | systemConfiguration.UpdatedCallback | 否 |  |

## on('abilityLifecycle')

```TypeScript
on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback): number
```

注册监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'abilityLifecycle' | 是 | 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。 |
| callback | AbilityLifecycleCallback | 是 | UIAbility生命周期变化时触发的回调方法。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 返回此次注册的callbackID，该ID用于在  [ApplicationContext.off('abilityLifecycle')]ApplicationContext#off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback)  方法中取消注册对应的callback。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## on('environment')

```TypeScript
on(type: 'environment', callback: EnvironmentCallback): number
```

注册对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。 > **说明：** > > - 使用[onConfigurationUpdate]./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate也可以实现对系统环境变量的监听。相较 > 于Ability的[onConfigurationUpdate]./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate接口，当前接口的使用场景更 > 加灵活，不仅可以在应用组件中使用，还可以在页面中使用，但是支持订阅的环境变量与Ability的 > [onConfigurationUpdate]./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate接口存在差异，如不支持订阅direction > 、screenDensity、displayId，详见[Configuration]./../@ohos.app.ability.Configuration:Configuration中各个环境变量的说明。 > > - 当前接口在实际触发时存在一定限制。例如如果开发者通过[setLanguage](arkts-applicationcontext-c.md#setLanguage)接口设置应用的语言，即便系统语 > 言发生变化，系统也不再触发当前接口的[callback]./../@ohos.app.ability.EnvironmentCallback回调。详见 > [使用场景](docroot://application-models/subscribe-system-environment-variable-changes.md#使用场景)。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'environment' | 是 | 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。 |
| callback | EnvironmentCallback | 是 | 系统环境变化时触发的回调方法。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 返回此次注册的callbackID，该ID用于在  [ApplicationContext.off('environment')]ApplicationContext#off(type: 'environment', callbackId: number, callback: AsyncCallback)  方法中取消注册对应的callback。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |

## on('applicationStateChange')

```TypeScript
on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback): void
```

注册对当前应用进程状态变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'applicationStateChange' | 是 | 此类型表示当前应用进程状态变化，固定为'applicationStateChange'。 |
| callback | ApplicationStateChangeCallback | 是 | 当前应用进程状态切换时触发的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## onAbilityLifecycle

```TypeScript
onAbilityLifecycle(callback: AbilityLifecycleCallback): int
```

注册监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AbilityLifecycleCallback | 是 | UIAbility生命周期变化时触发的回调方法。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回此次注册的callbackID（每次注册该ID会自增+1，当超过监听上限数量2^63-1时，返回-1），该ID用于在ApplicationContext.offAbilityLifecycle方法中取消注册对应的callback。 |

## onApplicationStateChange

```TypeScript
onApplicationStateChange(callback: ApplicationStateChangeCallback): void
```

注册对当前应用前后台状态变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ApplicationStateChangeCallback | 是 | 应用前后台切换时触发的回调方法。 |

## onEnvironment

```TypeScript
onEnvironment(callback: EnvironmentCallback): int
```

注册对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | EnvironmentCallback | 是 | 系统环境变化时触发的回调方法。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回此次注册的callbackID（每次注册该ID会自增+1，当超过监听上限数量2^63-1时，返回-1），该ID用于在  [ApplicationContext.offEnvironment](arkts-applicationcontext-c.md#offEnvironment)方法中取消注册对应的callback。 |

## onInteropAbilityLifecycle

```TypeScript
onInteropAbilityLifecycle(callback: InteropAbilityLifecycleCallback): void
```

注册监听应用内不同ArkTS环境下的UIAbility生命周期。仅支持主线程调用。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | InteropAbilityLifecycleCallback | 是 | 不同ArkTS环境下UIAbility生命周期变化时触发的回调方法。 |

## onSystemConfigurationUpdated

```TypeScript
onSystemConfigurationUpdated(callback: systemConfiguration.UpdatedCallback): void
```

注册监听系统环境[Configuration]./../@ohos.app.ability.Configuration:Configuration的变化。使用callback异步回调。仅支持主线程调用。 > **说明：** > > 应用自定义的设置不影响回调函数的触发。例如：应用自定义设置了深浅色模式，当系统深浅色模式变化后，注册的回调函数依然会触发。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | systemConfiguration.UpdatedCallback | 是 | 系统环境变化时触发的回调方法。 |

## preloadUIExtensionAbility

```TypeScript
preloadUIExtensionAbility(want: Want): Promise<void>
```

Preload UIExtensionAbility.

**起始版本：** 12

**需要权限：** 

 ohos.permission.PRELOAD_UI_EXTENSION_ABILITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the want of target UIExtensionAbility. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## restartApp

```TypeScript
restartApp(want: Want): void
```

应用重启并拉起自身指定UIAbility。仅支持主线程调用，且待重启的应用需要处于获焦状态。 > **说明：** > > 通过该接口重启应用时，不会触发应用中Ability的onDestroy生命周期回调。 > > 在原子化服务调用本接口成功后的3秒内，再次调用本接口、 > [restartSelfAtomicService()]./../@ohos.app.ability.abilityManager:abilityManager.restartSelfAtomicService > 或[UIAbilityContext.restartApp()](arkts-uiabilitycontext-c.md#restartApp)接口中的任一接口，系统将返回错误码16000064。 > > 在应用调用本接口成功后的3秒内，若再次调用本接口或[UIAbilityContext.restartApp()](arkts-uiabilitycontext-c.md#restartApp)接口中的任 > 一接口，系统将返回错误码16000064。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information about the UIAbility to start. No verification is performed on the bundle  name passed in. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000063 | The target to restart does not belong to the current application or is not a  UIAbility. |
| 16000064 | Restart too frequently. Try again at least 3s later. |

## setColorMode

```TypeScript
setColorMode(colorMode: ConfigurationConstant.ColorMode): void
```

设置应用的深浅色模式。仅支持主线程调用。 > **说明：** > > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在 > [onWindowStageCreate()]./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate生命周期中通过 > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorMode | ConfigurationConstant.ColorMode | 是 | 深浅色模式，包括：深色模式、浅色模式、未设置颜色模式（默认）。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |

## setFont

```TypeScript
setFont(font: string): void
```

设置应用的字体类型。仅支持主线程调用。 > **说明：** > > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在 > [onWindowStageCreate()]./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate生命周期中通过 > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| font | string | 是 | 设置字体类型，字体可以通过  [UIContext.registerFont](docroot://reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont)方法进行注册使用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## setFontSizeScale

```TypeScript
setFontSizeScale(fontSizeScale: double): void
```

设置应用字体大小缩放比例。仅支持主线程调用。

**起始版本：** 13

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fontSizeScale | double | 是 | 表示字体缩放比例，取值为非负数。当应用字体  [跟随系统](docroot://quick-start/app-configuration-file.md#configuration标签)且该字段取值超过  [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration标签)取值时，实际生效值为  [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration标签)取值。 |

## setLanguage

```TypeScript
setLanguage(language: string): void
```

设置应用的语言。仅支持主线程调用。 > **说明：** > > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在 > [onWindowStageCreate()]./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate生命周期中通过 > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | 设置语言，当前支持的语言列表可以通过  [getSystemLanguages()]./../@ohos.i18n:i18n.System.getSystemLanguages获取。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000011 | The context does not exist. |

## setSupportedProcessCache

```TypeScript
setSupportedProcessCache(isSupported : boolean): void
```

设置当前应用进程是否支持进程资源的缓存，便于应用再次启动时复用缓存的进程资源。仅支持主线程调用。 该接口仅对单个进程实例生效，不同进程实例互不影响。应用进程实例销毁后，已设置的状态不保留，需要重新设置。 > **说明：** > > - 该接口仅表示应用自身是否为缓存后快速启动做好了准备，还需综合其他条件来判断最终是否为应用启用快速启动。 > > - 为了确保该接口在进程退出前生效，调用时机应尽量提前。建议在[AbilityStage]./../@ohos.app.ability.AbilityStage:AbilityStage的`onCreate() > `中调用该接口。 > > - 在同一进程多次调用该接口时，会以最后一次调用的结果为准。当存在多个AbilityStage时，为了确保结果符合预期，需要在各个AbilityStage中分别调用该接口并配置相同的取值。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isSupported | boolean | 是 | Whether process cache is supported. The value true means that  process cache is supported, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 801 | Capability not supported. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

