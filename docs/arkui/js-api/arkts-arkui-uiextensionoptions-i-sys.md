# UIExtensionOptions (System API)

This interface is used to set the options for UIExtensionComponentAttribute during construction

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## areaChangePlaceholder

```TypeScript
areaChangePlaceholder?: Record<string, ComponentContent>
```

Set Areachange placeholder.
If the Areachange placeholder ComponentContent is set, the placeholder node is displayed until
the UIExtensionComponent size change is complete.

**Type:** Record<string, ComponentContent>

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## dpiFollowStrategy

```TypeScript
dpiFollowStrategy?: DpiFollowStrategy
```

Set UIExtensionComponent Content Dpi Follow Strategy.

**Type:** DpiFollowStrategy

**Default:** DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## isTransferringCaller

```TypeScript
isTransferringCaller?: boolean
```

Set whether the current capability is used as a Caller.<br/>
If set to true, as a Caller, the current token of UIExtensionComponent is set to rootToken.

**Type:** boolean

**Default:** false

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## placeholder

```TypeScript
placeholder?: ComponentContent
```

Set placeholder.
If set placeholder ComponentContent, show placeholder node when connection is not established.

**Type:** ComponentContent

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## windowModeFollowStrategy

```TypeScript
windowModeFollowStrategy?: WindowModeFollowStrategy
```

Set UIExtensionComponent Content Window Mode Follow Strategy.

**Type:** WindowModeFollowStrategy

**Default:** WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

