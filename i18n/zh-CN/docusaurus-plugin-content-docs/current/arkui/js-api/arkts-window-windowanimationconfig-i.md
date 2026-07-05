# WindowAnimationConfig

窗口动画参数配置。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: long
```

动画播放的时长，单位毫秒（ms）。 默认值：0，最大值：3000。 根据动画曲线类型决定是否必填。

**类型：** long

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

## param

```TypeScript
param?: WindowAnimationCurveParam
```

动画曲线参数，根据动画曲线类型决定是否必填。

**类型：** WindowAnimationCurveParam

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

## curve

```TypeScript
curve: WindowAnimationCurve
```

动画曲线类型。

**类型：** WindowAnimationCurve

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

