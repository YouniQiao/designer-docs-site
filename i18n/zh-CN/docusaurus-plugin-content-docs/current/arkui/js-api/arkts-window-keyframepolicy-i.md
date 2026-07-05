# KeyFramePolicy

关键帧的策略配置。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## animationDuration

```TypeScript
animationDuration?: long
```

设置关键帧布局的动效切换时间，单位为毫秒，默认值为100。取值为0或正整数，浮点数向下取整。

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## animationDelay

```TypeScript
animationDelay?: long
```

设置关键帧布局切换动效延迟时间，单位为毫秒，默认值为100。取值为0或正整数，浮点数向下取整。

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## distance

```TypeScript
distance?: int
```

设置关键帧布局切换的拖拽距离间隔，单位为px，默认值为1000。取值为0或正整数，浮点数向下取整。设置为0时，忽略拖拽距离因素。与interval判断为或的关系：满足其一即开始布局切换。

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## enable

```TypeScript
enable: boolean
```

是否开启关键帧。true表示开启，false表示关闭。

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## interval

```TypeScript
interval?: long
```

设置关键帧布局切换的拖拽时间间隔，单位为毫秒，默认值为1000。取值为正整数，浮点数向下取整。与distance判断为或的关系：满足其一即开始布局切换。

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

