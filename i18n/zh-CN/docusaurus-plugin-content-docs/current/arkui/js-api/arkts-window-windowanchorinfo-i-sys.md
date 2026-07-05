# WindowAnchorInfo

一级子窗与主窗保持相对位置的窗口锚点参数信息。

**起始版本：** 24

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## offsetX

```TypeScript
offsetX?: int
```

一级子窗锚点与主窗锚点位置的X轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## offsetY

```TypeScript
offsetY?: int
```

一级子窗锚点与主窗锚点位置的Y轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## anchorType

```TypeScript
anchorType: WindowAnchor
```

一级子窗与主窗保持相对位置不变时的窗口锚点枚举。

**类型：** WindowAnchor

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

