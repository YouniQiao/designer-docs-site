# @ohos.ability.featureAbility

FeatureAbility模块提供与用户进行交互的Ability的能力，包括启动新的Ability、停止Ability、获取dataAbilityHelper对象、获取当前Ability对应的窗口，连接断连Service等。

**起始版本：** 6

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## 导入模块

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [acquireDataAbilityHelper](arkts-featureability-acquiredataabilityhelper-f.md#acquireDataAbilityHelper-1) | 获取dataAbilityHelper对象。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > > 跨应用访问dataAbility，对端应用需配置关联启动。 |
| [connectAbility](arkts-featureability-connectability-f.md#connectAbility-1) | 将当前Ability与指定的ServiceAbility进行连接。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > > 跨应用连接serviceAbility，对端应用需配置关联启动。 |
| [disconnectAbility](arkts-featureability-disconnectability-f.md#disconnectAbility-1) | 断开与指定ServiceAbility的连接。使用callback异步回调。 |
| [disconnectAbility](arkts-featureability-disconnectability-f.md#disconnectAbility-2) | 断开与指定ServiceAbility的连接。使用Promise异步回调。 |
| [getContext](arkts-featureability-getcontext-f.md#getContext-1) | 获取应用上下文。 |
| [getWant](arkts-featureability-getwant-f.md#getWant-1) | 获取要拉起的Ability对应的Want。使用callback异步回调。 |
| [getWant](arkts-featureability-getwant-f.md#getWant-2) | 获取要拉起的Ability对应的Want。使用Promise异步回调。 |
| [getWindow](arkts-featureability-getwindow-f.md#getWindow-1) | 获取当前Ability对应的窗口。使用callback异步回调。 |
| [getWindow](arkts-featureability-getwindow-f.md#getWindow-2) | 获取当前Ability对应的窗口。使用Promise异步回调。 |
| [hasWindowFocus](arkts-featureability-haswindowfocus-f.md#hasWindowFocus-1) | 检查Ability的主窗口是否具有窗口焦点。使用callback异步回调。 |
| [hasWindowFocus](arkts-featureability-haswindowfocus-f.md#hasWindowFocus-2) | 检查Ability的主窗口是否具有窗口焦点。使用Promise异步回调。 |
| [startAbility](arkts-featureability-startability-f.md#startAbility-1) | 启动新的Ability。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [startAbility](arkts-featureability-startability-f.md#startAbility-2) | 启动新的Ability。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [startAbilityForResult](arkts-featureability-startabilityforresult-f.md#startAbilityForResult-1) | 启动一个Ability。使用callback异步回调。启动Ability后，存在如下几种情况： - 正常情况下可通过调用 [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)} 接口使之终止并且返回结果给调用方。 - 异常情况下比如杀死Ability会返回异常信息给调用方, 异常信息中resultCode为-1。 - 如果被启动的Ability模式是单实例模式, 不同应用多次调用该接口启动这个Ability，当这个Ability调用 [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)} 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [startAbilityForResult](arkts-featureability-startabilityforresult-f.md#startAbilityForResult-2) | 启动一个Ability。使用Promise异步回调。启动Ability后，存在如下几种情况： - 正常情况下可通过调用 [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)} 接口使之终止并且返回结果给调用方。 - 异常情况下比如杀死Ability会返回异常信息给调用方, 异常信息中resultCode为-1。 - 如果被启动的Ability模式是单实例模式, 不同应用多次调用该接口启动这个Ability，当这个Ability调用 [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)} 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [terminateSelf](arkts-featureability-terminateself-f.md#terminateSelf-1) | 停止当前的Ability。使用callback异步回调。 |
| [terminateSelf](arkts-featureability-terminateself-f.md#terminateSelf-2) | 停止当前的Ability。使用Promise异步回调。 |
| [terminateSelfWithResult](arkts-featureability-terminateselfwithresult-f.md#terminateSelfWithResult-1) | 停止当前的Ability。使用callback异步回调。如果该Ability是通过调用 [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)} 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用 [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)} 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。 |
| [terminateSelfWithResult](arkts-featureability-terminateselfwithresult-f.md#terminateSelfWithResult-2) | 停止当前的Ability。使用Promise异步回调。如果该Ability是通过调用 [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)} 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用 [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)} 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AppVersionInfo](arkts-featureability-appversioninfo-t.md) | 应用版本信息。 |
| [Context](arkts-featureability-context-t.md) | Context模块。 |
| [ProcessInfo](arkts-featureability-processinfo-t.md) | 进程信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AbilityStartSetting](arkts-featureability-abilitystartsetting-e.md) | 表示当前Ability对应的窗口属性，abilityStartSetting属性是一个定义为[key: string]: any的对象，key对应设定类型为：AbilityStartSetting枚举类型，value对应设定类型为 ：AbilityWindowConfiguration枚举类型。 使用时通过featureAbility.AbilityStartSetting获取。 |
| [AbilityWindowConfiguration](arkts-featureability-abilitywindowconfiguration-e.md) | 表示当前Ability对应的窗口配置项，使用时通过featureAbility.AbilityWindowConfiguration获取。 |
| [DataAbilityOperationType](arkts-featureability-dataabilityoperationtype-e.md) | 表示数据的操作类型。DataAbility批量操作数据时可以通过该枚举值指定操作类型。 |
| [ErrorCode](arkts-featureability-errorcode-e.md) | 定义启动Ability时返回的错误码。 |

