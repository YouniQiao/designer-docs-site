# WindowInfo

当前窗口的详细信息。

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## rect

```TypeScript
rect: Rect
```

窗口尺寸。

**Type:** Rect

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowStatusType

```TypeScript
windowStatusType: WindowStatusType
```

窗口模式枚举。

**Type:** WindowStatusType

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## abilityName

```TypeScript
abilityName: string
```

Ability的名称。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## globalRect

```TypeScript
globalRect?: Rect
```

窗口所在物理屏幕上的真实显示区域。若窗口显示时经过了缩放，获取到的是缩放后窗口在屏幕上的真实位置和大小。默认值：[0, 0, 0, 0]。

**Type:** Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## globalDisplayRect

```TypeScript
globalDisplayRect?: Rect
```

全局坐标系下的窗口尺寸。扩展屏场景下以主屏左上角为坐标原点，虚拟屏场景下以虚拟屏左上角为坐标原点。默认值：[0, 0, 0, 0]。

**Type:** Rect

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## bundleName

```TypeScript
bundleName: string
```

应用Bundle的名称。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## displayId

```TypeScript
displayId?: int
```

Indicates the ID of the display where the window is located.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## isFocused

```TypeScript
isFocused?: boolean
```

窗口是否获焦。true表示窗口获焦；false表示窗口未获焦。返回值与[isFocused()](arkts-window-window-i.md#isFocused)接口一致。

**Type:** boolean

**Since:** 14

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowId

```TypeScript
windowId: int
```

窗口ID。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

