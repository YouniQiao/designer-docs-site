# TextSpanType

```TypeScript
declare enum TextSpanType
```

[Span]span类型信息。 > **说明：** > > 菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找： >

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TEXT

```TypeScript
TEXT = 0
```

Span为文字类型。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## IMAGE

```TypeScript
IMAGE = 1
```

Span为图像类型。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## MIXED

```TypeScript
MIXED = 2
```

Span为图文混合类型。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 3
```

注册此类型菜单但未注册TEXT、IMAGE、MIXED菜单时，文字类型、图片类型、图文混合类型都会触发并显示此类型对应的菜单。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

