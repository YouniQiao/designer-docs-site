# WithThemeOptions

设置WithTheme作用域内组件缺省样式及深浅色模式。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colorMode

```TypeScript
colorMode?: ThemeColorMode
```

用于指定WithTheme作用域内组件配色深浅色模式。 默认值：ThemeColorMode.SYSTEM

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## theme

```TypeScript
theme?: CustomTheme
```

用于自定义WithTheme作用域内组件缺省配色。 默认值：undefined，缺省样式跟随系统[token默认样式](docroot://ui/theme_skinning.md#系统缺省token色值)。

**Type:** CustomTheme

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

