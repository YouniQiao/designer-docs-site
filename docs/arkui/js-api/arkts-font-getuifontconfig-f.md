# getUIFontConfig

## getUIFontConfig

```TypeScript
function getUIFontConfig(): UIFontConfig
```

获取系统字体配置文件的UI字体配置信息。 该接口仅支持获取配置文件内的信息以及当UI上下文不明确时可能返回undefined，如果想要获取全量的字体配置信息，推荐使用字体引擎的 [getSystemFontFullNamesByType](../../apis-arkgraphics2d/arkts-apis/arkts-text-getsystemfontfullnamesbytype-f.md#getSystemFontFullNamesByType-1)接口。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| UIFontConfig | Returns the ui font config |

