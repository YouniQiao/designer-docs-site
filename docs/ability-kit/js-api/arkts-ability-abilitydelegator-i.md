# AbilityDelegator

The **AbilityDelegator** module can listen for and manage the lifecycle changes of [UIAbility](arkts-app-ability-uiability.md) through [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instances. For example, you can obtain the current state of a UIAbility (for example, whether the UIAbility has been created or is in the foreground), obtain the UIAbility that currently has the focus, wait for the UIAbility to enter a lifecycle node (for example, the **onForeground** state), start a specified UIAbility, and set the timeout mechanism.You can obtain **AbilityDelegator** by calling [getAbilityDelegator](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-getabilitydelegator-f.md#getabilitydelegator-1).

> **NOTE**  
>  
> The APIs of this module can be used only in [JsUnit](../../../../application-test/unittest-guidelines.md).

**Since:** 9

<!--Device-unnamed-export interface AbilityDelegator--><!--Device-unnamed-export interface AbilityDelegator-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## addAbilityMonitor

```TypeScript
addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void
```

Adds an **AbilityMonitor** instance. This API uses an asynchronous callback to return the result. Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the **AbilityMonitor** instance is added, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityMonitor failed. |

## addAbilityMonitor

```TypeScript
addAbilityMonitor(monitor: AbilityMonitor): Promise<void>
```

Adds an **AbilityMonitor** instance. This API uses a promise to return the result. Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityMonitor(monitor: AbilityMonitor): Promise<void>--><!--Device-AbilityDelegator-addAbilityMonitor(monitor: AbilityMonitor): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityMonitor failed. |

## addAbilityMonitorSync

```TypeScript
addAbilityMonitorSync(monitor: AbilityMonitor): void
```

Adds an **AbilityMonitor** instance. This API returns the result synchronously. Multi-thread concurrent calls are not supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityMonitorSync(monitor: AbilityMonitor): void--><!--Device-AbilityDelegator-addAbilityMonitorSync(monitor: AbilityMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityMonitorSync failed. |

## addAbilityStageMonitor

```TypeScript
addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void
```

Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-addAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the **AbilityStageMonitor** instance is added, **err** is undefined. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityStageMonitor failed. |

## addAbilityStageMonitor

```TypeScript
addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>
```

Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>--><!--Device-AbilityDelegator-addAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityStageMonitor failed. |

## addAbilityStageMonitorSync

```TypeScript
addAbilityStageMonitorSync(monitor: AbilityStageMonitor): void
```

Adds an **AbilityStageMonitor** instance to monitor the lifecycle state changes of an ability stage. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-addAbilityStageMonitorSync(monitor: AbilityStageMonitor): void--><!--Device-AbilityDelegator-addAbilityStageMonitorSync(monitor: AbilityStageMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddAbilityStageMonitorSync failed. |

## addInteropAbilityMonitorSync

```TypeScript
addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void
```

Add an InteropAbilityMonitor object for monitoring the lifecycle state changes of the specified ability in this process.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AbilityDelegator-addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void--><!--Device-AbilityDelegator-addInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [InteropAbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-interopabilitymonitor-t.md) | Yes | InteropAbilityMonitor object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling AddInteropAbilityMonitorSync failed. |

## doAbilityBackground

```TypeScript
doAbilityBackground(ability: UIAbility, callback: AsyncCallback<void>): void
```

Schedules the lifecycle state of an ability to **Background**. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-doAbilityBackground(ability: UIAbility, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-doAbilityBackground(ability: UIAbility, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [UIAbility](arkts-ability-app-ability-uiability-uiability-c.md) | Yes | Target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the ability lifecycle state is changed to **Background**, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling DoAbilityBackground failed. |

## doAbilityBackground

```TypeScript
doAbilityBackground(ability: UIAbility): Promise<void>
```

Schedules the lifecycle state of an ability to **Background**. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-doAbilityBackground(ability: UIAbility): Promise<void>--><!--Device-AbilityDelegator-doAbilityBackground(ability: UIAbility): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [UIAbility](arkts-ability-app-ability-uiability-uiability-c.md) | Yes | Target ability. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling DoAbilityBackground failed. |

## doAbilityForeground

```TypeScript
doAbilityForeground(ability: UIAbility, callback: AsyncCallback<void>): void
```

Schedules the lifecycle state of an ability to **Foreground**. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-doAbilityForeground(ability: UIAbility, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-doAbilityForeground(ability: UIAbility, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [UIAbility](arkts-ability-app-ability-uiability-uiability-c.md) | Yes | Target ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the ability lifecycle state is changed to **Foreground**, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling DoAbilityForeground failed. |

## doAbilityForeground

```TypeScript
doAbilityForeground(ability: UIAbility): Promise<void>
```

Schedules the lifecycle state of an ability to **Foreground**. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-doAbilityForeground(ability: UIAbility): Promise<void>--><!--Device-AbilityDelegator-doAbilityForeground(ability: UIAbility): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [UIAbility](arkts-ability-app-ability-uiability-uiability-c.md) | Yes | Target ability. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling DoAbilityForeground failed. |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void
```

Executes a shell command. This API uses an asynchronous callback to return the result.Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,hidumper, wukong, pkill, ps, and pidof.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void--><!--Device-AbilityDelegator-executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cmd | string | Yes | Shell command string. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<ShellCmdResult> | Yes | Callback used to return the result. If the shell command is executed, **err** is **undefined** and **data** is the execution result obtained. Otherwise, **err** is an error object. |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, timeoutSecs: number, callback: AsyncCallback<ShellCmdResult>): void
```

Executes a shell command with the timeout period specified. This API uses an asynchronous callback to return the result.Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,hidumper, wukong, pkill, ps, and pidof.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-executeShellCommand(cmd: string, timeoutSecs: long, callback: AsyncCallback<ShellCmdResult>): void--><!--Device-AbilityDelegator-executeShellCommand(cmd: string, timeoutSecs: long, callback: AsyncCallback<ShellCmdResult>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cmd | string | Yes | Shell command string. |
| timeoutSecs | number | Yes | Command timeout period, in seconds. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<ShellCmdResult> | Yes | Callback used to return the result. If the shell command is executed, **err** is **undefined** and **data** is the execution result obtained. Otherwise, **err** is an error object. |

## executeShellCommand

```TypeScript
executeShellCommand(cmd: string, timeoutSecs?: number): Promise<ShellCmdResult>
```

Executes a shell command with the timeout period specified. This API uses a promise to return the result.Only the following shell commands are supported: aa, bm, cp, mkdir, rm, uinput, hilog, ppwd, echo, uitest, acm,hidumper, wukong, pkill, ps, and pidof.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-executeShellCommand(cmd: string, timeoutSecs?: long): Promise<ShellCmdResult>--><!--Device-AbilityDelegator-executeShellCommand(cmd: string, timeoutSecs?: long): Promise<ShellCmdResult>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cmd | string | Yes | Shell command string. |
| timeoutSecs | number | No | Command timeout period, in seconds. The default value is **0**, indicating that the timeout period is not set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ShellCmdResult> | Promise used to return a [ShellCmdResult](arkts-ability-shellcmdresult-shellcmdresult-i.md) object. |

## finishTest

```TypeScript
finishTest(msg: string, code: number, callback: AsyncCallback<void>): void
```

Finishes the test and prints log information to the unit test console. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-finishTest(msg: string, code: long, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-finishTest(msg: string, code: long, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Log string. |
| code | number | Yes | Log code. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the test finishes and the log information is printed to the unit test console, **err** is undefined. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling FinishTest failed. |

## finishTest

```TypeScript
finishTest(msg: string, code: number): Promise<void>
```

Finishes the test and prints log information to the unit test console. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-finishTest(msg: string, code: long): Promise<void>--><!--Device-AbilityDelegator-finishTest(msg: string, code: long): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Log string. |
| code | number | Yes | Log code. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling FinishTest failed. |

## getAbilityState

```TypeScript
getAbilityState(ability: UIAbility): number
```

Obtains the lifecycle state of an ability.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-getAbilityState(ability: UIAbility): int--><!--Device-AbilityDelegator-getAbilityState(ability: UIAbility): int-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [UIAbility](arkts-ability-app-ability-uiability-uiability-c.md) | Yes | Target ability. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Lifecycle state of the ability, For details about the state values, see [AbilityLifecycleState](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitylifecyclestate-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |

## getAppContext

```TypeScript
getAppContext(): Context
```

Obtains the application context.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-getAppContext(): Context--><!--Device-AbilityDelegator-getAppContext(): Context-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | [Context](arkts-ability-context-context-depr-i.md). |

## getCurrentTopAbility

```TypeScript
getCurrentTopAbility(callback: AsyncCallback<UIAbility>): void
```

Obtains the top ability of this application. This API uses an asynchronous callback to return the result. It cannot be called in the worker thread.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-getCurrentTopAbility(callback: AsyncCallback<UIAbility>): void--><!--Device-AbilityDelegator-getCurrentTopAbility(callback: AsyncCallback<UIAbility>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<UIAbility> | Yes | Callback used to return the result. If the top ability is obtained,**err** is **undefined** and **data** is the **Ability** instance obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling GetCurrentTopAbility failed. |

## getCurrentTopAbility

```TypeScript
getCurrentTopAbility(): Promise<UIAbility>
```

Obtains the top ability of this application. This API uses a promise to return the result. It cannot be called in the worker thread.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-getCurrentTopAbility(): Promise<UIAbility>--><!--Device-AbilityDelegator-getCurrentTopAbility(): Promise<UIAbility>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<UIAbility> | Promise used to return the top ability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling GetCurrentTopAbility failed. |

## print

```TypeScript
print(msg: string, callback: AsyncCallback<void>): void
```

Prints log information to the unit test console. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-print(msg: string, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-print(msg: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Log string. The value contains a maximum of 10,000 characters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the log information is printed to the unit test console, **err** is **undefined**. Otherwise, **err** is an error object. |

## print

```TypeScript
print(msg: string): Promise<void>
```

Prints log information to the unit test console. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-print(msg: string): Promise<void>--><!--Device-AbilityDelegator-print(msg: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Log string. The value contains a maximum of 10,000 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## printSync

```TypeScript
printSync(msg: string): void
```

Prints log information to the unit test console.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-printSync(msg: string): void--><!--Device-AbilityDelegator-printSync(msg: string): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | Log string. The value contains a maximum of 10,000 characters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |

## removeAbilityMonitor

```TypeScript
removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void
```

Removes an **AbilityMonitor** instance. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the **AbilityMonitor** instance is removed, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityMonitor failed. |

## removeAbilityMonitor

```TypeScript
removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>
```

Removes an **AbilityMonitor** instance. This API uses a promise to return the result. Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>--><!--Device-AbilityDelegator-removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityMonitor failed. |

## removeAbilityMonitorSync

```TypeScript
removeAbilityMonitorSync(monitor: AbilityMonitor): void
```

Removes an **AbilityMonitor** instance. This API returns the result synchronously. Multi-thread concurrent calls are not supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityMonitorSync(monitor: AbilityMonitor): void--><!--Device-AbilityDelegator-removeAbilityMonitorSync(monitor: AbilityMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityMonitorSync failed. |

## removeAbilityStageMonitor

```TypeScript
removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void
```

Removes an **AbilityStageMonitor** instance from the application memory. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-removeAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the **AbilityStageMonitor** instance is removed, **err** is undefined. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityStageMonitor failed. |

## removeAbilityStageMonitor

```TypeScript
removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>
```

Removes an **AbilityStageMonitor** instance from the application memory. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>--><!--Device-AbilityDelegator-removeAbilityStageMonitor(monitor: AbilityStageMonitor): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityStageMonitor failed. |

## removeAbilityStageMonitorSync

```TypeScript
removeAbilityStageMonitorSync(monitor: AbilityStageMonitor): void
```

Removes an **AbilityStageMonitor** instance from the application memory. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-removeAbilityStageMonitorSync(monitor: AbilityStageMonitor): void--><!--Device-AbilityDelegator-removeAbilityStageMonitorSync(monitor: AbilityStageMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveAbilityStageMonitorSync failed. |

## removeInteropAbilityMonitorSync

```TypeScript
removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void
```

Remove a specified InteropAbilityMonitor object from the application memory.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AbilityDelegator-removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void--><!--Device-AbilityDelegator-removeInteropAbilityMonitorSync(monitor: InteropAbilityMonitor): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [InteropAbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-interopabilitymonitor-t.md) | Yes | InteropAbilityMonitor object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling RemoveInteropAbilityMonitorSync failed. |

## setMockList

```TypeScript
setMockList(mockList: Record<string, string>): void
```

Sets a list of mock data.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-setMockList(mockList: Record<string, string>): void--><!--Device-AbilityDelegator-setMockList(mockList: Record<string, string>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mockList | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, string> | Yes | Key-value object of the mock, where **key** is the target path to be replaced and **value** is the path of the mock implementation to be used for the replacement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

Starts an ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-startAbility(want: Want, callback: AsyncCallback<void>): void--><!--Device-AbilityDelegator-startAbility(want: Want, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | **Want** parameter for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the ability is started, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-startAbility(want: Want): Promise<void>--><!--Device-AbilityDelegator-startAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | **Want** parameter for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000001](../errorcode-ability.md#16000001-ability-name-does-not-exist) | The specified ability does not exist. |
| [16000002](../errorcode-ability.md#16000002-incorrect-ability-type) | Incorrect ability type. |
| [16000004](../errorcode-ability.md#16000004-visibility-verification-failure) | Cannot start an invisible component. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000008](../errorcode-ability.md#16000008-crowdtesting-application-expires) | The crowdtesting application expires. |
| [16000009](../errorcode-ability.md#16000009-ability-start-or-stop-failure-in-wukong-mode) | An ability cannot be started or stopped in Wukong mode. |
| [16000010](../errorcode-ability.md#16000010-continuation-flag-is-forbidden) | The call with the continuation and prepare continuation flag is forbidden. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000053](../errorcode-ability.md#16000053-ability-is-not-on-top-of-ui) | The ability is not on the top of the UI. |
| [16000055](../errorcode-ability.md#16000055-installationfree-timeout) | Installation-free timed out. |
| [16200001](../errorcode-ability.md#16200001-caller-released) | The caller has been released. |
| [16000012](../errorcode-ability.md#16000012-application-under-control) | The application is controlled.<br>**Applicable version:** 10 and later |
| [16000013](../errorcode-ability.md#16000013-application-controlled-by-edm) | The application is controlled by EDM.<br>**Applicable version:** 10 and later |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<UIAbility>): void
```

Waits for the **Ability** instance that matches the **AbilityMonitor** instance to reach the **onCreate** lifecycle state and returns the **Ability** instance. This API uses an asynchronous callback to return the result. Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<UIAbility>): void--><!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<UIAbility>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<UIAbility> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the **Ability** instance obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityMonitor failed. |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, timeout: number, callback: AsyncCallback<UIAbility>): void
```

Waits a period of time for the **Ability** instance that matches the **AbilityMonitor** instance to reach the **onCreate** lifecycle state and returns the **Ability** instance. This API uses an asynchronous callback to return the result. Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, timeout: long, callback: AsyncCallback<UIAbility>): void--><!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, timeout: long, callback: AsyncCallback<UIAbility>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |
| timeout | number | Yes | Maximum waiting time, in milliseconds. The default value is 5000 ms. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<UIAbility> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityMonitor failed. |

## waitAbilityMonitor

```TypeScript
waitAbilityMonitor(monitor: AbilityMonitor, timeout?: number): Promise<UIAbility>
```

Waits a period of time for the **Ability** instance that matches the **AbilityMonitor** instance to reach the **onCreate** lifecycle state and returns the **Ability** instance. This API uses a promise to return the result.Multi-thread concurrent calls are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, timeout?: long): Promise<UIAbility>--><!--Device-AbilityDelegator-waitAbilityMonitor(monitor: AbilityMonitor, timeout?: long): Promise<UIAbility>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityMonitor](../../apis-test-kit/arkts-apis/arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Yes | [AbilityMonitor](arkts-ability-abilitymonitor-i.md) instance. |
| timeout | number | No | Maximum waiting time, in milliseconds. The default value is 5000 ms. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<UIAbility> | Promise used to return the **Ability** instance obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void
```

Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void--><!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, callback: AsyncCallback<AbilityStage>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AbilityStage> | Yes | Callback used to return the result. If the operation is successful,**err** is undefined and data is the [AbilityStage](arkts-ability-app-ability-abilitystage-abilitystage-c.md)instance obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityStageMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: number, callback: AsyncCallback<AbilityStage>): void
```

Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance within the specified timeout period. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: long, callback: AsyncCallback<AbilityStage>): void--><!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout: long, callback: AsyncCallback<AbilityStage>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |
| timeout | number | Yes | Maximum waiting time, in milliseconds. The default value is 5000 ms. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AbilityStage> | Yes | Callback used to return the result. If the operation is successful,**err** is undefined and data is the [AbilityStage](arkts-ability-app-ability-abilitystage-abilitystage-c.md)instance obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityStageMonitor failed. |

## waitAbilityStageMonitor

```TypeScript
waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: number): Promise<AbilityStage>
```

Returns an **AbilityStage** instance that matches the conditions set in an **AbilityStageMonitor** instance. You can specify the timeout period. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: long): Promise<AbilityStage>--><!--Device-AbilityDelegator-waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout?: long): Promise<AbilityStage>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitor | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) | Yes | [AbilityStageMonitor](arkts-ability-abilitystagemonitor-i.md) instance. |
| timeout | number | No | Maximum waiting time, in milliseconds. The default value is 5000 ms. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AbilityStage> | Promise used to return the [AbilityStage](arkts-ability-app-ability-abilitystage-abilitystage-c.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [16000100](../errorcode-ability.md#16000100-failed-to-call-abilitymonitor-apis-to-listen-for-ability-lifecycle-changes) | Calling WaitAbilityStageMonitor failed. |

