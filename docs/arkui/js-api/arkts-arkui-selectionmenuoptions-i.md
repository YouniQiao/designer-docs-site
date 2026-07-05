# SelectionMenuOptions

Sets menu options.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menuType

```TypeScript
menuType?: MenuType
```

Type of the custom context menu on selection. Default value: **MenuType.SELECTION_MENU**

**Type:** MenuType

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onAppear

```TypeScript
onAppear?: MenuOnAppearCallback
```

Callback invoked when the custom context menu on selection appears.

**Type:** MenuOnAppearCallback

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDisappear

```TypeScript
onDisappear?: Callback<void>
```

Callback invoked when the custom context menu on selection disappears.

**Type:** Callback<void>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuHide

```TypeScript
onMenuHide?: MenuCallback
```

Callback invoked when the custom context menu on selection is hidden.

**Type:** MenuCallback

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuShow

```TypeScript
onMenuShow?: MenuCallback
```

Callback invoked when the custom context menu on selection is shown.

**Type:** MenuCallback

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## previewMenuOptions

```TypeScript
previewMenuOptions?: PreviewMenuOptions
```

Options of the preview menu. This parameter is valid only in **RichEditor**.

**Type:** PreviewMenuOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

