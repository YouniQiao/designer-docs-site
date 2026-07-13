# Environment

For details about how to use environment parameters, see
[Environment: Device Environment Query](../../../../ui/state-management/arkts-environment.md).

###### Built-in Environment Variables

| key | Type | Description |
| -------------------- | --------------- | ------------------------------------------------------------ |
| accessibilityEnabled | string | Whether to enable accessibility. If there is no value of **accessibilityEnabled** in the environment variables, the default value passed through APIs such as **envProp** and **envProps** is added to AppStorage.|
| colorMode | [ColorMode](@link #ColorMode) | Color mode. The options are as follows:<br>- **ColorMode.LIGHT**: light mode.<br>- **ColorMode.DARK**: dark mode.|
| fontScale | number | Font scale. |
| fontWeightScale | number | Font weight ratio. |
| layoutDirection | [LayoutDirection](@link LayoutDirection) | Layout direction. The options are as follows:<br>- **LayoutDirection.LTR**: from left to right.<br>- **LayoutDirection.RTL**: from right to left.<br>- **Auto**: follows the system settings.|
| languageCode | string | Current system language, which is in lowercase letters, for example, **zh**.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

