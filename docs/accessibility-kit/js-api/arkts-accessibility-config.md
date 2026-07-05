# @ohos.accessibility.config

The **accessibility.config** module provides APIs for configuring system accessibility features, including accessibility extension, high-contrast text, mouse buttons, and captions.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[disableAbility](arkts-config-disableability-f-sys.md#disableAbility-1) | Disables an accessibility extension ability. This API uses a promise to return the result. |
| <!--DelRow-->[disableAbility](arkts-config-disableability-f-sys.md#disableAbility-2) | Disables an accessibility extension ability. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[enableAbility](arkts-config-enableability-f-sys.md#enableAbility-1) | Enables an accessibility extension ability. This API uses a promise to return the result. |
| <!--DelRow-->[enableAbility](arkts-config-enableability-f-sys.md#enableAbility-2) | Enables an accessibility extension ability. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[enableAbilityWithCallback](arkts-config-enableabilitywithcallback-f-sys.md#enableAbilityWithCallback-1) | Enables the auxiliary extension ability and specifies [ConnectCallback]{@link ConnectCallback} to be invoked when the state of an auxiliary extension ability changes. This API uses a promise to return the result. |
| <!--DelRow-->[getSeniorModeStateForApp](arkts-config-getseniormodestateforapp-f-sys.md#getSeniorModeStateForApp-1) | Get the senior mode state for app. |
| <!--DelRow-->[off](arkts-config-off-f-sys.md#off-1) | Cancels a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[off](arkts-config-off-f-sys.md#off-2) | Cancels a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[offEnabledAccessibilityExtensionListChange](arkts-config-offenabledaccessibilityextensionlistchange-f-sys.md#offEnabledAccessibilityExtensionListChange-1) | Unregister listener that watches for changes in the enabled status of accessibility extensions. |
| <!--DelRow-->[offInstalledAccessibilityListChange](arkts-config-offinstalledaccessibilitylistchange-f-sys.md#offInstalledAccessibilityListChange-1) | Unregister listener that watches for changes in the installed status of accessibility extensions. |
| <!--DelRow-->[offSeniorModeStateChangeForApp](arkts-config-offseniormodestatechangeforapp-f-sys.md#offSeniorModeStateChangeForApp-1) | Unregister the observer for application's senior mode state changes. |
| <!--DelRow-->[on](arkts-config-on-f-sys.md#on-1) | Adds a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[on](arkts-config-on-f-sys.md#on-2) | Adds a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[onEnabledAccessibilityExtensionListChange](arkts-config-onenabledaccessibilityextensionlistchange-f-sys.md#onEnabledAccessibilityExtensionListChange-1) | Register the listener that watches for changes in the enabled status of accessibility extensions. |
| <!--DelRow-->[onInstalledAccessibilityListChange](arkts-config-oninstalledaccessibilitylistchange-f-sys.md#onInstalledAccessibilityListChange-1) | Register the listener that watches for changes in the installed status of accessibility extensions. |
| <!--DelRow-->[onSeniorModeStateChangeForApp](arkts-config-onseniormodestatechangeforapp-f-sys.md#onSeniorModeStateChangeForApp-1) | Register an observer for anyone application's senior mode state changes. |
| <!--DelRow-->[setMagnificationState](arkts-config-setmagnificationstate-f-sys.md#setMagnificationState-1) | Sets the magnification state. Ensure that magnification is enabled before calling this API. |
| <!--DelRow-->[setSeniorModeStateForApp](arkts-config-setseniormodestateforapp-f-sys.md#setSeniorModeStateForApp-1) | Set the senior mode state for app. |
| <!--DelRow-->[startBlinking](arkts-config-startblinking-f-sys.md#startBlinking-1) | Enable the flash or screen to blink for flash alert. |
| <!--DelRow-->[stopBlinking](arkts-config-stopblinking-f-sys.md#stopBlinking-1) | Stop the flash or screen to blink for flash alert. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AppSeniorModeInfo](arkts-config-appseniormodeinfo-i-sys.md) | Indicates the senior mode information of an application. |
| <!--DelRow-->[Config](arkts-config-config-i-sys.md) | Implements configuration, acquisition, and listening for properties. |
| <!--DelRow-->[ConnectCallback](arkts-config-connectcallback-i-sys.md) | Callback provided when the [enableAbilityWithCallback]{@link config.enableAbilityWithCallback} API is called to enable an accessibility extension ability. This callback will be invoked when the connection to an auxiliary extension ability is disconnected. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[ClickResponseTime](arkts-config-clickresponsetime-t-sys.md) | Defines the length of time for a click. |
| <!--DelRow-->[DaltonizationColorFilter](arkts-config-daltonizationcolorfilter-t-sys.md) | Enumerates the daltonization filters. The configuration of **DaltonizationColorFilter** takes effect only when [daltonizationState]{@link daltonizationState} is set to **true**; the normal type is used when [daltonizationState]{@link daltonizationState} is set to **false**. |
| <!--DelRow-->[OnDisconnectCallback](arkts-config-ondisconnectcallback-t-sys.md) | Describes the callback to be invoked when the connection to **AccessibilityExtensionAbility** is disconnected. |
| <!--DelRow-->[RepeatClickInterval](arkts-config-repeatclickinterval-t-sys.md) | Defines the interval between repeated clicks. The configuration of **RepeatClickInterval** takes effect when [ignoreRepeatClick]{@link ignoreRepeatClick} is set to **true**; the normal type is used when [ignoreRepeatClick]{@link ignoreRepeatClick} is set to **false**. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[BlinkingMode](arkts-config-blinkingmode-e-sys.md) | Blinking Mode Enumeration |
| <!--DelRow-->[BlinkingScenario](arkts-config-blinkingscenario-e-sys.md) | Blinking Scenario Enumeration |
| <!--DelRow-->[BlinkResultCode](arkts-config-blinkresultcode-e-sys.md) | Enumerates the result codes for blinking operations. |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[audioBalance](arkts-config-con-sys.md#audioBalance) | Audio balance for the left and right audio channels. The value ranges from -1.0 to 1.0. Default value: **0.0 |
| <!--DelRow-->[audioMono](arkts-config-con-sys.md#audioMono) | Whether to enable mono audio. The value **true** indicates that mono audio is enabled, and **false** indicates the opposite. Default value: **false |
| <!--DelRow-->[clickResponseTime](arkts-config-con-sys.md#clickResponseTime) | Length of time required for a click. |
| <!--DelRow-->[daltonizationState](arkts-config-con-sys.md#daltonizationState) | Whether to enable daltonization. It must be used with **daltonizationColorFilter**. The value **true** indicates that daltonization is enabled, and **false** indicates the opposite. Default value: **false |
| <!--DelRow-->[ignoreRepeatClick](arkts-config-con-sys.md#ignoreRepeatClick) | Whether to ignore repeated clicks. This parameter must be used together with **repeatClickInterval**. The value **true** indicates that the feature of ignoring repeated clicks is enabled, and **false** indicates the opposite. Default value: **false |
| <!--DelRow-->[repeatClickInterval](arkts-config-con-sys.md#repeatClickInterval) | Interval between repeated clicks. |
| <!--DelRow-->[screenMagnification](arkts-config-con-sys.md#screenMagnification) | Indicates the configuration of screen magnification. |
| <!--DelRow-->[shortkeyMultiTargets](arkts-config-con-sys.md#shortkeyMultiTargets) | List of target applications for the accessibility shortcut keys. The value format is ['bundleName/abilityName']. |

