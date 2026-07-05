# BrightnessInfo

屏幕亮度信息。此类型中的信息均来自底层屏幕信息数据。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

## 导入模块

```TypeScript
import { display } from '@kit.ArkUI';
```

## maxHeadroom

```TypeScript
readonly maxHeadroom: double
```

当前最大亮度余量，该参数为大于0的浮点数。默认值为1.0。

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

## sdrNits

```TypeScript
readonly sdrNits: double
```

屏幕的亮度，该参数为大于0的浮点数。默认值为500.0。

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

## currentHeadroom

```TypeScript
readonly currentHeadroom: double
```

当前亮度动态余量，该参数为大于0的浮点数。默认值为1.0。

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

