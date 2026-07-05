# EnhancedPanelRect

Indicates the size of the enhanced input method panel, including the custom avoid area and touch area.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## landscapeInputRegion

```TypeScript
landscapeInputRegion?: Array<window.Rect>
```

Region where the panel receives input events in landscape mode. - The array size is limited to [1, 4]. The default value is the panel size in landscape mode. - The input hot zone is relative to the left vertex of the input method panel window.

**类型：** Array<window.Rect>

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## landscapeRect

```TypeScript
landscapeRect?: window.Rect
```

Size of the input method panel window in landscape mode. - This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.

**类型：** window.Rect

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## fullScreenMode

```TypeScript
fullScreenMode?: boolean
```

Indicates whether to enable the full-screen mode. The default value is **false**. - If the value is **true**, **landscapeRect** and **portraitRect** are optional. - If the value is **false**, **landscapeRect** and **portraitRect** are mandatory.

**类型：** boolean

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## portraitInputRegion

```TypeScript
portraitInputRegion?: Array<window.Rect>
```

Region where the panel receives input events in portrait mode. - The array size is limited to [1, 4]. The default value is the panel size in portrait mode. - The input hot zone is relative to the left vertex of the input method panel window.

**类型：** Array<window.Rect>

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## portraitAvoidY

```TypeScript
portraitAvoidY?: int
```

Distance between the avoid line and the top of the panel in portrait mode, in px. The default value is **0**. - Other system components in the application avoid the input method panel area below the avoid line. - When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of the screen height.

**类型：** int

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## landscapeAvoidY

```TypeScript
landscapeAvoidY?: int
```

Distance between the avoid line and the top of the panel in landscape mode, in px. The default value is **0**. - Other system components in the application avoid the input method panel area below the avoid line. - When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of the screen height.

**类型：** int

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## portraitRect

```TypeScript
portraitRect?: window.Rect
```

Size of the input method panel window in portrait mode. - This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.

**类型：** window.Rect

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

