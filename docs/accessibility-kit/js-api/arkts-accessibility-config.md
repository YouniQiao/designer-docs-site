# @ohos.accessibility.config

The **accessibility.config** module provides APIs for configuring system accessibility features, including accessibility extension, high-contrast text, mouse buttons, and captions.

**Since:** 9

<!--Device-unnamed-declare namespace config--><!--Device-unnamed-declare namespace config-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableAbility](arkts-accessibility-config-disableability-f-sys.md#disableability-1) | Disables an accessibility extension ability. This API uses a promise to return the result. |
| [disableAbility](arkts-accessibility-config-disableability-f-sys.md#disableability-2) | Disables an accessibility extension ability. This API uses an asynchronous callback to return the result. |
| [enableAbility](arkts-accessibility-config-enableability-f-sys.md#enableability-1) | Enables an accessibility extension ability. This API uses a promise to return the result. |
| [enableAbility](arkts-accessibility-config-enableability-f-sys.md#enableability-2) | Enables an accessibility extension ability. This API uses an asynchronous callback to return the result. |
| [enableAbilityWithCallback](arkts-accessibility-config-enableabilitywithcallback-f-sys.md#enableabilitywithcallback-1) | Enables the auxiliary extension ability and specifies [ConnectCallback](ConnectCallback) to be invoked when the state of an auxiliary extension ability changes. This API uses a promise to return the result. |
| [getSeniorModeStateForApp](arkts-accessibility-config-getseniormodestateforapp-f-sys.md#getseniormodestateforapp-1) | Get the senior mode state for app. |
| [off](arkts-accessibility-config-off-f-sys.md#off-1) | Cancels a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-config-off-f-sys.md#off-2) | Cancels a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| [offSeniorModeStateChangeForApp](arkts-accessibility-config-offseniormodestatechangeforapp-f-sys.md#offseniormodestatechangeforapp-1) | Unregister the observer for application's senior mode state changes. |
| [on](arkts-accessibility-config-on-f-sys.md#on-1) | Adds a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| [on](arkts-accessibility-config-on-f-sys.md#on-2) | Adds a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| [onSeniorModeStateChangeForApp](arkts-accessibility-config-onseniormodestatechangeforapp-f-sys.md#onseniormodestatechangeforapp-1) | Register an observer for anyone application's senior mode state changes. |
| [setMagnificationState](arkts-accessibility-config-setmagnificationstate-f-sys.md#setmagnificationstate-1) | Sets the magnification state. Ensure that magnification is enabled before calling this API. |
| [setSeniorModeStateForApp](arkts-accessibility-config-setseniormodestateforapp-f-sys.md#setseniormodestateforapp-1) | Set the senior mode state for app. |
| [startBlinking](arkts-accessibility-config-startblinking-f-sys.md#startblinking-1) | Enable the flash or screen to blink for flash alert. |
| [stopBlinking](arkts-accessibility-config-stopblinking-f-sys.md#stopblinking-1) | Stop the flash or screen to blink for flash alert. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AppSeniorModeInfo](arkts-accessibility-config-appseniormodeinfo-i-sys.md) | Indicates the senior mode information of an application. |
| [Config](arkts-accessibility-config-config-i-sys.md) | Implements configuration, acquisition, and listening for properties. |
| [ConnectCallback](arkts-accessibility-config-connectcallback-i-sys.md) | Callback provided when the [enableAbilityWithCallback](arkts-accessibility-config-enableabilitywithcallback-f-sys.md#enableabilitywithcallback-1) API is called to enable an accessibility extension ability. This callback will be invoked when the connection to an auxiliary extension ability is disconnected. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BlinkResultCode](arkts-accessibility-config-blinkresultcode-e-sys.md) | Enumerates the result codes for blinking operations. |
| [BlinkingMode](arkts-accessibility-config-blinkingmode-e-sys.md) | Blinking Mode Enumeration |
| [BlinkingScenario](arkts-accessibility-config-blinkingscenario-e-sys.md) | Blinking Scenario Enumeration |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ClickResponseTime](arkts-accessibility-config-clickresponsetime-t-sys.md) | Defines the length of time for a click. |
| [DaltonizationColorFilter](arkts-accessibility-config-daltonizationcolorfilter-t-sys.md) | Enumerates the daltonization filters.The configuration of **DaltonizationColorFilter** takes effect only when [daltonizationState](daltonizationState) is set to **true**; the normal type is used when [daltonizationState](daltonizationState) is set to **false**. |
| [OnDisconnectCallback](arkts-accessibility-config-ondisconnectcallback-t-sys.md) | Describes the callback to be invoked when the connection to **AccessibilityExtensionAbility** is disconnected. |
| [RepeatClickInterval](arkts-accessibility-config-repeatclickinterval-t-sys.md) | Defines the interval between repeated clicks.The configuration of **RepeatClickInterval** takes effect when [ignoreRepeatClick](ignoreRepeatClick) is set to **true**; the normal type is used when [ignoreRepeatClick](ignoreRepeatClick) is set to **false**. |
<!--DelEnd-->

<!--Del-->
### Constants（系统接口）

| Name | Description |
| --- | --- |
| [audioBalance](arkts-accessibility-config-con-sys.md#audiobalance) | Audio balance for the left and right audio channels. The value ranges from -1.0 to 1.0.Default value: **0.0** |
| [audioMono](arkts-accessibility-config-con-sys.md#audiomono) | Whether to enable mono audio. The value **true** indicates that mono audio is enabled, and **false** indicates the opposite.Default value: **false** |
| [clickResponseTime](arkts-accessibility-config-con-sys.md#clickresponsetime) | Length of time required for a click. |
| [daltonizationState](arkts-accessibility-config-con-sys.md#daltonizationstate) | Whether to enable daltonization. It must be used with **daltonizationColorFilter**. The value **true** indicates that daltonization is enabled, and **false** indicates the opposite.Default value: **false** |
| [ignoreRepeatClick](arkts-accessibility-config-con-sys.md#ignorerepeatclick) | Whether to ignore repeated clicks. This parameter must be used together with **repeatClickInterval**. The value **true** indicates that the feature of ignoring repeated clicks is enabled, and **false** indicates the opposite.Default value: **false** |
| [repeatClickInterval](arkts-accessibility-config-con-sys.md#repeatclickinterval) | Interval between repeated clicks. |
| [screenMagnification](arkts-accessibility-config-con-sys.md#screenmagnification) | Indicates the configuration of screen magnification. |
| [shortkeyMultiTargets](arkts-accessibility-config-con-sys.md#shortkeymultitargets) | List of target applications for the accessibility shortcut keys. The value format is ['bundleName/abilityName']. |
<!--DelEnd-->

