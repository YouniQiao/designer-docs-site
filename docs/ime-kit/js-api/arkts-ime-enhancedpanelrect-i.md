# EnhancedPanelRect

Indicates the size of the enhanced input method panel, including the custom avoid area and touch area.

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## fullScreenMode

```TypeScript
fullScreenMode?: boolean
```

Indicates whether to enable the full-screen mode. The default value is **false**.

- If the value is **true**, **landscapeRect** and **portraitRect** are optional.
- If the value is **false**, **landscapeRect** and **portraitRect** are mandatory.

**Type:** boolean

**Default:** false

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## landscapeAvoidY

```TypeScript
landscapeAvoidY?: number
```

Distance between the avoid line and the top of the panel in landscape mode, in px. The default value is **0**.

- Other system components in the application avoid the input method panel area below the avoid line.
- When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of
the screen height.

**Type:** number

**Default:** 0

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## landscapeInputRegion

```TypeScript
landscapeInputRegion?: Array<window.Rect>
```

Region where the panel receives input events in landscape mode.

- The array size is limited to [1, 4]. The default value is the panel size in landscape mode.
- The input hot zone is relative to the left vertex of the input method panel window.

**Type:** Array<window.Rect>

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## landscapeRect

```TypeScript
landscapeRect?: window.Rect
```

Size of the input method panel window in landscape mode.

- This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.

**Type:** window.Rect

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## portraitAvoidY

```TypeScript
portraitAvoidY?: number
```

Distance between the avoid line and the top of the panel in portrait mode, in px. The default value is **0**.

- Other system components in the application avoid the input method panel area below the avoid line.
- When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of
the screen height.

**Type:** number

**Default:** 0

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## portraitInputRegion

```TypeScript
portraitInputRegion?: Array<window.Rect>
```

Region where the panel receives input events in portrait mode.

- The array size is limited to [1, 4]. The default value is the panel size in portrait mode.
- The input hot zone is relative to the left vertex of the input method panel window.

**Type:** Array<window.Rect>

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## portraitRect

```TypeScript
portraitRect?: window.Rect
```

Size of the input method panel window in portrait mode.

- This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.

**Type:** window.Rect

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

