# WordBreak

Enumerates the word break types.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-text-enum WordBreak--><!--Device-text-enum WordBreak-End-->

**System capability:** SystemCapability.Graphics.Drawing

## NORMAL

```TypeScript
NORMAL = 0
```

Default mode that break words based on language-specific conventions.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-WordBreak-NORMAL = 0--><!--Device-WordBreak-NORMAL = 0-End-->

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_ALL

```TypeScript
BREAK_ALL = 1
```

Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.) This value is suitable for Asian text that contains some non-Asian text. For example, it can be used to break consecutive English characters.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-WordBreak-BREAK_ALL = 1--><!--Device-WordBreak-BREAK_ALL = 1-End-->

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_WORD

```TypeScript
BREAK_WORD = 2
```

Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace or other natural breakpoints to keep words intact. If no breakpoints are found, it breaks between any two characters. For CJK text, this behaves like **NORMAL**.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-WordBreak-BREAK_WORD = 2--><!--Device-WordBreak-BREAK_WORD = 2-End-->

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_HYPHEN

```TypeScript
BREAK_HYPHEN = 3
```

Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added, it behaves like  
**BREAK\_WORD**.

When using this word break strategy, you need to use the \_\_\_INLINE\_CODE\_DESC\_USD\_0\_\_\_ attribute in [TextStyle]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_to define the language environment, which affects the word break effect.

**Since:** 18

**ArkTS mode:** ArkTS-Dyn since version 18; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-WordBreak-BREAK_HYPHEN = 3--><!--Device-WordBreak-BREAK_HYPHEN = 3-End-->

**System capability:** SystemCapability.Graphics.Drawing

