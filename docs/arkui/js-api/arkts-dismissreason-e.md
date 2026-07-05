# DismissReason

```TypeScript
declare enum DismissReason
```

关闭原因类型。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PRESS_BACK

```TypeScript
PRESS_BACK = 0
```

点击三键back、侧滑（左滑/右滑）、键盘ESC。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TOUCH_OUTSIDE

```TypeScript
TOUCH_OUTSIDE = 1
```

点击遮障层时。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CLOSE_BUTTON

```TypeScript
CLOSE_BUTTON = 2
```

点击关闭按钮。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SLIDE_DOWN

```TypeScript
SLIDE_DOWN = 3
```

下拉关闭。 **说明：** 该接口仅支持在[半模态转场]common中使用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SLIDE

```TypeScript
SLIDE = 4
```

滑动交互，不是向下滑动。 默认表示向右滑动，镜像操作后表示向左滑动。 不支持选择向左或向右滑动。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

