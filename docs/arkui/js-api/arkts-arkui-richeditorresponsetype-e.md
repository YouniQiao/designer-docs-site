# RichEditorResponseType

Response type of the menu.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RIGHT_CLICK

```TypeScript
RIGHT_CLICK = 0
```

The menu is displayed when the component is right-clicked.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LONG_PRESS

```TypeScript
LONG_PRESS = 1
```

The menu is displayed when the component is long-pressed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SELECT

```TypeScript
SELECT = 2
```

The menu is displayed when the component is selected.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 3
```

If this menu is registered, but **RIGHT_CLICK**, **LONG_PRESS**, and **SELECT** menus are not registered, the menu
will be displayed when the right mouse button is clicked, the menu is long-pressed, or the menu is selected using
the mouse.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

