# WindowInfo (System API)

Describes the window information.

**Since:** 18

<!--Device-window-interface WindowInfo--><!--Device-window-interface WindowInfo-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## abilityName

```TypeScript
abilityName: string
```

abilityName of window

**Type:** string

**Since:** 18

<!--Device-WindowInfo-abilityName: string--><!--Device-WindowInfo-abilityName: string-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the application.

**Type:** string

**Since:** 18

<!--Device-WindowInfo-bundleName: string--><!--Device-WindowInfo-bundleName: string-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## isFocused

```TypeScript
isFocused?: boolean
```

Whether the window gains focus. **true** if the window gains focus, **false** otherwise. The return value is the same as that of the [isFocused()](arkts-arkui-window-window-i.md#isfocused-1) API.

**Type:** boolean

**Since:** 18

<!--Device-WindowInfo-isFocused?: boolean--><!--Device-WindowInfo-isFocused?: boolean-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## rect

```TypeScript
rect: Rect
```

Window size.

**Type:** Rect

**Since:** 18

<!--Device-WindowInfo-rect: Rect--><!--Device-WindowInfo-rect: Rect-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowId

```TypeScript
windowId: number
```

Window ID.

**Type:** number

**Since:** 18

<!--Device-WindowInfo-windowId: int--><!--Device-WindowInfo-windowId: int-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## windowStatusType

```TypeScript
windowStatusType: WindowStatusType
```

Window mode.

**Type:** WindowStatusType

**Since:** 18

<!--Device-WindowInfo-windowStatusType: WindowStatusType--><!--Device-WindowInfo-windowStatusType: WindowStatusType-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

