# FontMetrics

描述字形大小和布局的属性信息，同一种字体中的字符属性大致相同。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## strikethroughPosition

```TypeScript
strikethroughPosition?: double
```

文本基线到底部删除线的垂直距离，通常为负值。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## leading

```TypeScript
leading: double
```

行间距，从上一行文字descent到下一行文字ascent之间的距离，浮点数。

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## bottom

```TypeScript
bottom: double
```

基线到文字最低处之间的最大距离，浮点数。

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## flags

```TypeScript
flags?: FontMetricsFlags
```

表明哪些字体度量标志有效。

**类型：** FontMetricsFlags

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

```TypeScript
flags?: int
```

Font measurement flags that are valid.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

## underlinePosition

```TypeScript
underlinePosition?: double
```

文本基线到下划线顶部的垂直距离，通常是正数。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## xMin

```TypeScript
xMin?: double
```

字体中任意字形边界框最左边沿到原点的水平距离，这个值往往小于零，意味着字形在水平方向上的最小边界。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## strikethroughThickness

```TypeScript
strikethroughThickness?: double
```

文本删除线的厚度，即贯穿文本字符的水平线的宽度。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## descent

```TypeScript
descent: double
```

基线到文字最低处之间的距离，浮点数。

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## ascent

```TypeScript
ascent: double
```

文字最高处到基线之间的距离，浮点数。

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## avgCharWidth

```TypeScript
avgCharWidth?: double
```

平均字符宽度。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## top

```TypeScript
top: double
```

文字最高处到基线之间的最大距离，浮点数。

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## xHeight

```TypeScript
xHeight?: double
```

小写字母x的高度，通常为负值。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## underlineThickness

```TypeScript
underlineThickness?: double
```

下划线的厚度。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## maxCharWidth

```TypeScript
maxCharWidth?: double
```

最大字符宽度。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## capHeight

```TypeScript
capHeight?: double
```

大写字母的高度，通常为负值。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

## xMax

```TypeScript
xMax?: double
```

字体中任意字形边界框最右边沿到原点的水平距离，此值多为正数，指示了字形在水平方向上的最大延伸范围。

**类型：** double

**起始版本：** 12

**原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Graphics.Drawing

