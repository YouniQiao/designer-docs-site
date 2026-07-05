# WindowInfo

当前窗口的详细信息。

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## rect

```TypeScript
rect: Rect
```

窗口尺寸。

**类型：** Rect

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## windowStatusType

```TypeScript
windowStatusType: WindowStatusType
```

窗口模式枚举。

**类型：** WindowStatusType

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## abilityName

```TypeScript
abilityName: string
```

Ability的名称。

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## globalRect

```TypeScript
globalRect?: Rect
```

窗口所在物理屏幕上的真实显示区域。若窗口显示时经过了缩放，获取到的是缩放后窗口在屏幕上的真实位置和大小。默认值：[0, 0, 0, 0]。

**类型：** Rect

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

## globalDisplayRect

```TypeScript
globalDisplayRect?: Rect
```

全局坐标系下的窗口尺寸。扩展屏场景下以主屏左上角为坐标原点，虚拟屏场景下以虚拟屏左上角为坐标原点。默认值：[0, 0, 0, 0]。

**类型：** Rect

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

## bundleName

```TypeScript
bundleName: string
```

应用Bundle的名称。

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## displayId

```TypeScript
displayId?: int
```

Indicates the ID of the display where the window is located.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

## isFocused

```TypeScript
isFocused?: boolean
```

窗口是否获焦。true表示窗口获焦；false表示窗口未获焦。返回值与[isFocused()](arkts-window-window-i.md#isFocused)接口一致。

**类型：** boolean

**起始版本：** 14

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
windowId: int
```

窗口ID。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

