# @ohos.app.ability.abilityManager

AbilityManager模块提供获取、新增、修改Ability相关信息和运行状态信息的能力。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[acquireShareData](arkts-abilitymanager-acquiresharedata-f-sys.md#acquireShareData-1) | 系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的 [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}回调并返回分享数据。使用 callback异步回调。 |
| <!--DelRow-->[acquireShareData](arkts-abilitymanager-acquiresharedata-f-sys.md#acquireShareData-2) | 系统弹框通过该接口发起原子化服务分享，调用到目标UIAbility的onShare，返回分享数据。使用callback异步回调。 |
| <!--DelRow-->[acquireShareData](arkts-abilitymanager-acquiresharedata-f-sys.md#acquireShareData-3) | 系统弹框通过该接口发起原子化服务分享，触发目标UIAbility的 [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}回调并返回分享数据。使用 Promise异步回调。 |
| <!--DelRow-->[acquireShareData](arkts-abilitymanager-acquiresharedata-f-sys.md#acquireShareData-4) | 系统弹框通过该接口发起原子化服务分享，调用到目标UIAbility的onShare，返回分享数据。使用Promise异步回调。 |
| <!--DelRow-->[clearPreloadedUIExtensionAbilities](arkts-abilitymanager-clearpreloadeduiextensionabilities-f-sys.md#clearPreloadedUIExtensionAbilities-1) | 清除当前进程中所有已经预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例。使用Promise异步回调。 |
| <!--DelRow-->[clearPreloadedUIExtensionAbility](arkts-abilitymanager-clearpreloadeduiextensionability-f-sys.md#clearPreloadedUIExtensionAbility-1) | 清除指定的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例。使用Promise异步回调。 |
| [getAbilityRunningInfos](arkts-abilitymanager-getabilityrunninginfos-f.md#getAbilityRunningInfos-1) | 获取UIAbility运行时的相关信息。使用Promise异步回调。 > **说明：** > > 如果应用申请了ohos.permission.GET_RUNNING_INFO权限，可以获取所有应用UIAbility的运行信息，否则只能获取当前应用UIAbility的运行信息。 |
| <!--DelRow-->[getAbilityRunningInfos](arkts-abilitymanager-getabilityrunninginfos-f-sys.md#getAbilityRunningInfos-1) | 获取UIAbility运行相关信息。使用callback异步回调。 |
| <!--DelRow-->[getExtensionRunningInfos](arkts-abilitymanager-getextensionrunninginfos-f-sys.md#getExtensionRunningInfos-1) | 获取关于运行扩展能力的信息。使用Promise异步回调。 |
| <!--DelRow-->[getExtensionRunningInfos](arkts-abilitymanager-getextensionrunninginfos-f-sys.md#getExtensionRunningInfos-2) | 获取关于运行扩展能力的信息。使用callback异步回调。 |
| <!--DelRow-->[getForegroundUIAbilities](arkts-abilitymanager-getforegrounduiabilities-f-sys.md#getForegroundUIAbilities-1) | 获取前台正在运行的应用Ability的信息。使用callback异步回调。 |
| <!--DelRow-->[getForegroundUIAbilities](arkts-abilitymanager-getforegrounduiabilities-f-sys.md#getForegroundUIAbilities-2) | 获取前台正在运行的应用Ability的信息。使用Promise异步回调。 |
| <!--DelRow-->[getTopAbility](arkts-abilitymanager-gettopability-f-sys.md#getTopAbility-1) | 获取窗口焦点所在的Ability。使用Promise异步回调。 |
| <!--DelRow-->[getTopAbility](arkts-abilitymanager-gettopability-f-sys.md#getTopAbility-2) | 获取窗口焦点所在的Ability。使用callback异步回调。 |
| <!--DelRow-->[isEmbeddedOpenAllowed](arkts-abilitymanager-isembeddedopenallowed-f-sys.md#isEmbeddedOpenAllowed-1) | 判断是否允许嵌入式拉起[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}。使用Promise异步回调。 |
| [isEmbeddedUIExtensionSupported](arkts-abilitymanager-isembeddeduiextensionsupported-f.md#isEmbeddedUIExtensionSupported-1) | 开发者通过调用该接口判断[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)是否可以在当前设备上使用。 |
| <!--DelRow-->[notifyDebugAssertResult](arkts-abilitymanager-notifydebugassertresult-f-sys.md#notifyDebugAssertResult-1) | 将断言调试结果通知应用程序。使用Promise异步回调。 |
| <!--DelRow-->[notifySaveAsResult](arkts-abilitymanager-notifysaveasresult-f-sys.md#notifySaveAsResult-1) | 该接口仅供[DLP]{@link @ohos.dlpPermission:dlpPermission}（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用 另存为结果。使用callback异步回调。 > **说明：** > > 从API version 10开始支持，从API version 24开始废弃。 |
| <!--DelRow-->[notifySaveAsResult](arkts-abilitymanager-notifysaveasresult-f-sys.md#notifySaveAsResult-2) | 该接口仅供[DLP]{@link @ohos.dlpPermission:dlpPermission}（Data Loss Prevention, 数据丢失防护）管理应用使用，其他应用禁止使用，DLP管理应用通过该接口通知沙箱应用 另存为结果。使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-abilitymanager-off-f-sys.md#off-1) | 取消注册Ability启动和退出的观测器。 |
| <!--DelRow-->[offAbilityForegroundState](arkts-abilitymanager-offabilityforegroundstate-f-sys.md#offAbilityForegroundState-1) | 取消注册Ability启动和退出的观测器。 |
| <!--DelRow-->[offPreloadedUIExtensionAbilityDestroyed](arkts-abilitymanager-offpreloadeduiextensionabilitydestroyed-f-sys.md#offPreloadedUIExtensionAbilityDestroyed-1) | 注销当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的销毁监听。 |
| <!--DelRow-->[offPreloadedUIExtensionAbilityLoaded](arkts-abilitymanager-offpreloadeduiextensionabilityloaded-f-sys.md#offPreloadedUIExtensionAbilityLoaded-1) | 注销当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的加载监听。 |
| <!--DelRow-->[on](arkts-abilitymanager-on-f-sys.md#on-1) | 注册Ability的启动和退出的观测器。 |
| <!--DelRow-->[onAbilityForegroundState](arkts-abilitymanager-onabilityforegroundstate-f-sys.md#onAbilityForegroundState-1) | 注册Ability的启动和退出的观测器。 |
| <!--DelRow-->[onPreloadedUIExtensionAbilityDestroyed](arkts-abilitymanager-onpreloadeduiextensionabilitydestroyed-f-sys.md#onPreloadedUIExtensionAbilityDestroyed-1) | 监听当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的销毁事件。 |
| <!--DelRow-->[onPreloadedUIExtensionAbilityLoaded](arkts-abilitymanager-onpreloadeduiextensionabilityloaded-f-sys.md#onPreloadedUIExtensionAbilityLoaded-1) | 监听当前进程中预加载的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}实例的加载事件。 |
| <!--DelRow-->[preloadUIExtensionAbility](arkts-abilitymanager-preloaduiextensionability-f-sys.md#preloadUIExtensionAbility-1) | 预加载指定的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}并返回预加载UIExtensionAbility实例 的ID。使用Promise异步回调。 |
| <!--DelRow-->[queryAtomicServiceStartupRule](arkts-abilitymanager-queryatomicservicestartuprule-f-sys.md#queryAtomicServiceStartupRule-1) | 查询嵌入式拉起[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}的规则。使用Promise异步回调。 该接口仅在Phone和Tablet设备中可正常调用，在其他设备中返回801错误码。 |
| [restartSelfAtomicService](arkts-abilitymanager-restartselfatomicservice-f.md#restartSelfAtomicService-1) | 重启当前原子化服务。 > **说明：** > > - 当前仅支持以独立窗口方式拉起原子化服务。 > > - 在调用本接口成功后的3秒内，再次调用本接口、 > [ApplicationContext.restartApp()]{@link ./application/ApplicationContext:ApplicationContext.restartApp}或 > [UIAbilityContext.restartApp()]{@link ./application/UIAbilityContext:UIAbilityContext.restartApp}接口中的任一接口，系统将返回错误码1 > 6000064。 |
| <!--DelRow-->[setResidentProcessEnabled](arkts-abilitymanager-setresidentprocessenabled-f-sys.md#setResidentProcessEnabled-1) | 常驻进程支持按需启停。 |
| <!--DelRow-->[updateConfiguration](arkts-abilitymanager-updateconfiguration-f-sys.md#updateConfiguration-1) | 通过传入修改的配置项来更新配置。使用callback异步回调。 |
| <!--DelRow-->[updateConfiguration](arkts-abilitymanager-updateconfiguration-f-sys.md#updateConfiguration-2) | 通过修改配置来更新配置。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AtomicServiceStartupRule](arkts-abilitymanager-atomicservicestartuprule-i-sys.md) | 嵌入式拉起原子化服务的规则。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[AbilityForegroundStateObserver](arkts-abilitymanager-abilityforegroundstateobserver-t-sys.md) | AbilityForegroundStateObserver二级模块。 |
| <!--DelRow-->[AbilityForegroundStateObserver](arkts-abilitymanager-abilityforegroundstateobserver-t-sys.md) | AbilityForegroundStateObserver二级模块。 |
| [AbilityRunningInfo](arkts-abilitymanager-abilityrunninginfo-t.md) | AbilityRunningInfo二级模块。 |
| [AbilityStateData](arkts-abilitymanager-abilitystatedata-t.md) | AbilityStateData二级模块。 |
| [AbilityStateData](arkts-abilitymanager-abilitystatedata-t.md) | AbilityStateData二级模块。 |
| <!--DelRow-->[ExtensionRunningInfo](arkts-abilitymanager-extensionrunninginfo-t-sys.md) | ExtensionRunningInfo二级模块。 |
| <!--DelRow-->[PreloadedUIExtensionAbilityDestroyedFn](arkts-abilitymanager-preloadeduiextensionabilitydestroyedfn-t-sys.md) | 预加载[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}被销毁时的回调函数类型。 |
| <!--DelRow-->[PreloadedUIExtensionAbilityLoadedFn](arkts-abilitymanager-preloadeduiextensionabilityloadedfn-t-sys.md) | 预加载[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}被加载时的回调函数类型。 |

### Enums

| Name | Description |
| --- | --- |
| [AbilityState](arkts-abilitymanager-abilitystate-e.md) | Ability的状态，该类型为枚举，可配合[AbilityRunningInfo]{@link ./application/AbilityRunningInfo:AbilityRunningInfo}返回Ability的状态。 |
| <!--DelRow-->[UserStatus](arkts-abilitymanager-userstatus-e-sys.md) | 用户操作的断言调试结果，该类型为枚举。 |

