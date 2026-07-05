# WordBreak

```TypeScript
enum WordBreak
```

断词策略枚举。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## NORMAL

```TypeScript
NORMAL = 0
```

默认的换行规则。依据各自语言的规则，允许在字间发生换行。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_ALL

```TypeScript
BREAK_ALL = 1
```

对于Non-CJK（非中文，日文，韩文）文本允许在任意字符内发生换行。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字符断行。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_WORD

```TypeScript
BREAK_WORD = 2
```

对于Non-CJK的文本可在任意2个字符间断行，一行文本中有断行破发点（如空白符）时，优先按破发点换行，保障单词优先完整显示。若整一行文本均无断行破发点时，则在任意2个字符间断行。对于CJK与NORMAL效果一致。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## BREAK_HYPHEN

```TypeScript
BREAK_HYPHEN = 3
```

每行末尾单词尝试通过连字符“-”进行断行，若无法添加连字符“-”，则跟`BREAK_WORD`保持一致。 使用此断词策略时，需与[TextStyle]text.TextStyle中`locale`属性配合使用，通过locale定义语言环境共同作用影响断词效果。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

