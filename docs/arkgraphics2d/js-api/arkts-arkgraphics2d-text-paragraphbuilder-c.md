# ParagraphBuilder

Implements a paragraph builder.

**Since:** 12

<!--Device-text-class ParagraphBuilder--><!--Device-text-class ParagraphBuilder-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## addPlaceholder

```TypeScript
addPlaceholder(placeholderSpan: PlaceholderSpan): void
```

Inserts a placeholder into the paragraph being built.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-addPlaceholder(placeholderSpan: PlaceholderSpan): void--><!--Device-ParagraphBuilder-addPlaceholder(placeholderSpan: PlaceholderSpan): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| placeholderSpan | [PlaceholderSpan](arkts-arkgraphics2d-text-placeholderspan-i.md) | Yes | Placeholder span, which describes the size, alignment, baseline type, and baseline offset of the placeholder. |

**Example**

```TypeScript
import { drawing } from '@kit.ArkGraphics2D'
import { text } from '@kit.ArkGraphics2D'
import { common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc() {
  let myParagraphStyle: text.ParagraphStyle = {
    align: text.TextAlign.END,
  };
  let myPlaceholderSpan: text.PlaceholderSpan = {
    width: 100,
    height: 100,
    align: text.PlaceholderAlignment.ABOVE_BASELINE,
    baseline: text.TextBaseline.ALPHABETIC,
    baselineOffset: 100
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.addPlaceholder(myPlaceholderSpan);
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## addSymbol

```TypeScript
addSymbol(symbolId: number): void
```

Inserts a symbol into the paragraph being built.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-addSymbol(symbolId: int): void--><!--Device-ParagraphBuilder-addSymbol(symbolId: int): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbolId | number | Yes | Symbol code to insert. The value is a hexadecimal number in the range 0xF0000-0xF0C97.For details about the configurable symbol codes (unicode values in the list view), see [HarmonyOS Symbol](https://developer.huawei.com/consumer/en/design/harmonyos-symbol/). |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color: { alpha: 255, red: 255, green: 0, blue: 0 },
    fontSize: 33,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle: myTextStyle,
    align: text.TextAlign.END,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.addSymbol(0xF0000);
  let paragraph = paragraphBuilder.build();
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## addText

```TypeScript
addText(text: string): void
```

Inserts a text string into the paragraph being built.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-addText(text: string): void--><!--Device-ParagraphBuilder-addText(text: string): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Exact text string inserted into the paragraph. If an invalid Unicode character is provided, it is displayed as ?. |

**Example**

```TypeScript
import { drawing } from '@kit.ArkGraphics2D'
import { text } from '@kit.ArkGraphics2D'
import { common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color: { alpha: 255, red: 255, green: 0, blue: 0 },
    fontSize: 33,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle: myTextStyle,
    align: text.TextAlign.END,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.addText("123666");
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## build

```TypeScript
build(): Paragraph
```

Creates a paragraph object that can be used for subsequent layout and rendering.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-build(): Paragraph--><!--Device-ParagraphBuilder-build(): Paragraph-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [Paragraph](../../apis-arkui/arkts-apis/arkts-arkui-paragraph-t.md) | **Paragraph** object that can be used for subsequent rendering. |

**Example**

```TypeScript
import { drawing, text, common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color : {alpha: 255, red: 255, green: 0, blue: 0},
    fontSize : 20,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle : myTextStyle,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.addText("123456789");
  let paragraph = paragraphBuilder.build();
  paragraph.layoutSync(200);
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## buildLineTypeset

```TypeScript
buildLineTypeset(): LineTypeset
```

Builds a line typesetter.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-buildLineTypeset(): LineTypeset--><!--Device-ParagraphBuilder-buildLineTypeset(): LineTypeset-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [LineTypeset](arkts-arkgraphics2d-text-linetypeset-c.md) | **LineTypeset** object that can be used for subsequent rendering. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function test() {
  let myParagraphStyle: text.ParagraphStyle = {
    align: text.TextAlign.JUSTIFY,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.addText("123456789");
  let lineTypeset = paragraphBuilder.buildLineTypeset();
}

@Entry
@Component
struct Index {
  fun: Function = test;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## constructor

```TypeScript
constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection)
```

A constructor used to create a **ParagraphBuilder** object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection)--><!--Device-ParagraphBuilder-constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection)-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| paragraphStyle | [ParagraphStyle](arkts-arkgraphics2d-text-paragraphstyle-i.md) | Yes | Paragraph style. |
| fontCollection | [FontCollection](arkts-arkgraphics2d-text-fontcollection-c.md) | Yes | Font collection. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color: { alpha: 255, red: 255, green: 0, blue: 0 },
    fontSize: 33,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle: myTextStyle,
    align: text.TextAlign.END,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## popStyle

```TypeScript
popStyle(): void
```

Restores the previous text style.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-popStyle(): void--><!--Device-ParagraphBuilder-popStyle(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Example**

```TypeScript
import { drawing } from '@kit.ArkGraphics2D'
import { text } from '@kit.ArkGraphics2D'
import { common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color: { alpha: 255, red: 255, green: 0, blue: 0 },
    fontSize: 33,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle: myTextStyle,
    align: text.TextAlign.END,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.pushStyle(myTextStyle);
  paragraphBuilder.popStyle();
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## pushStyle

```TypeScript
pushStyle(textStyle: TextStyle): void
```

Applies a new style to the current text blob.
> **NOTE**  
>  
> When you update the style of the current text blob, all text added afterward will use this new style.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphBuilder-pushStyle(textStyle: TextStyle): void--><!--Device-ParagraphBuilder-pushStyle(textStyle: TextStyle): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textStyle | [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md) | Yes | Text style, which describes various visual attributes of text, such as font,font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),and text shadow. |

**Example**

```TypeScript
import { drawing } from '@kit.ArkGraphics2D'
import { text } from '@kit.ArkGraphics2D'
import { common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc() {
  let myTextStyle: text.TextStyle = {
    color: { alpha: 255, red: 255, green: 0, blue: 0 },
    fontSize: 33,
  };
  let myParagraphStyle: text.ParagraphStyle = {
    textStyle: myTextStyle,
    align: text.TextAlign.CENTER,
  };
  let fontCollection = new text.FontCollection();
  let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
  paragraphBuilder.pushStyle(myTextStyle);
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

