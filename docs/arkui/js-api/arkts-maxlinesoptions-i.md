# MaxLinesOptions

配置TextArea组件，文本超长时的显示效果。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflowMode

```TypeScript
overflowMode?: MaxLinesMode
```

`overflowMode`可配置[TextArea]text_area组件的非内联模式。当超出设置的`maxLines`最大行数时，会启用滚动效果。需同时配置 [textOverflow]TextAreaAttribute#textOverflow，且仅当`textOverflow`为None或Clip时，`MaxLinesMode`才能生效。默认情况下， `MaxLinesMode`的值为Clip，超出`maxLines`后文本会被截断。

**Type:** MaxLinesMode

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

