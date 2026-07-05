# WordBreak

```TypeScript
declare enum WordBreak
```

Enum of word break

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## NORMAL

```TypeScript
NORMAL = 0
```

By default, CJK text can be wrapped between any 2 characters, and non-CJK text can only be wrapped in spaces.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## BREAK_ALL

```TypeScript
BREAK_ALL = 1
```

Non-CJK text be wrapped at any character

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## BREAK_WORD

```TypeScript
BREAK_WORD = 2
```

Non-CJK text can be wrapped at any character and if a complete word can be preserved in space breaks, the word must be kept on the line.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HYPHENATION

```TypeScript
HYPHENATION = 3
```

For supported languages, line breaks can be performed by syllables.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

