# LineHeightStyle

```TypeScript
enum LineHeightStyle
```

行高缩放基数枚举。

**起始版本：** 21

**系统能力：** SystemCapability.Graphics.Drawing

## FONT_SIZE

```TypeScript
FONT_SIZE = 0
```

以字号大小作为缩放基数。最终行高为[TextStyle]text.TextStyle.fontSize * [TextStyle]text.TextStyle.heightScale。

**起始版本：** 21

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## FONT_HEIGHT

```TypeScript
FONT_HEIGHT = 1
```

以字形高度作为缩放基数。最终行高为塑形后字形高度 * [TextStyle]text.TextStyle.heightScale。

**起始版本：** 21

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

