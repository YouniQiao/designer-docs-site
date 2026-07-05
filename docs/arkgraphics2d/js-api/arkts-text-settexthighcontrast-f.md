# setTextHighContrast

## setTextHighContrast

```TypeScript
function setTextHighContrast(action : TextHighContrast): void
```

用于设置文字渲染高对比度模式。 该接口设置后整个进程都会生效，进程内所有页面共用相同模式。 可调用此接口设置，也可通过系统设置界面中**高对比度文字配置开关**进行开启/关闭。使用此接口设置开启/关闭文字渲染高对比度配置的优先级高于系统开关设置。 该接口针对应用的文字自绘制场景不生效。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| action | TextHighContrast | Yes | 文字渲染高对比度模式。 |

**Example**

```TypeScript
text.setTextHighContrast(text.TextHighContrast.TEXT_APP_DISABLE_HIGH_CONTRAST)

```

