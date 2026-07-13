# SheetInfo

Defines the option content in the dialog box. You can configure the text, icon, and callback for each option.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: VoidCallback
```

Callback when the sheet is selected.

**Type:** VoidCallback

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: string | Resource
```

Sheet icon. By default, no icon is displayed.

The string type can be used to load local images and, more frequently, online images. The value can be a relative
path to a local image, for example, **Image("common/test.jpg")**.

**Type:** string | Resource

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: string | Resource
```

Sheet text.

If the text is too long to display, a scrollbar is displayed.

**Type:** string | Resource

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

