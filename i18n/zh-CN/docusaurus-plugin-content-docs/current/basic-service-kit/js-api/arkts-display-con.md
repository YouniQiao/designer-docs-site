# Constants

## FONT_SCALE

```TypeScript
const FONT_SCALE: string
```

Indicates the scaling factor of fonts, which is a float number.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## SCREEN_BRIGHTNESS_STATUS

```TypeScript
const SCREEN_BRIGHTNESS_STATUS: string
```

Indicates the screen brightness. The value ranges from 0 to 255.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## AUTO_SCREEN_BRIGHTNESS

```TypeScript
const AUTO_SCREEN_BRIGHTNESS: string
```

Specifies whether automatic screen brightness adjustment is enabled. <p>If the value is {@code 1}, automatic adjustment is enabled. If the value is {@code 0}, automatic adjustment is disabled.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## AUTO_SCREEN_BRIGHTNESS_MODE

```TypeScript
const AUTO_SCREEN_BRIGHTNESS_MODE: int
```

Indicates the value of {@code AUTO_SCREEN_BRIGHTNESS} when automatic screen brightness adjustment is used.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## MANUAL_SCREEN_BRIGHTNESS_MODE

```TypeScript
const MANUAL_SCREEN_BRIGHTNESS_MODE: int
```

Indicates the value of {@code AUTO_SCREEN_BRIGHTNESS} when manual screen brightness adjustment is used.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## SCREEN_OFF_TIMEOUT

```TypeScript
const SCREEN_OFF_TIMEOUT: string
```

Indicates the duration that the device waits before going to sleep after a period of inactivity, in milliseconds.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## DEFAULT_SCREEN_ROTATION

```TypeScript
const DEFAULT_SCREEN_ROTATION: string
```

Indicates the screen rotation when no other policy is available. <p>This constant is invalid when auto-rotation is enabled. When auto-rotation is disabled, the following values are available: <ul> <li>{@code 0} - The screen rotates 0 degrees. <li>{@code 1} - The screen rotates 90 degrees. <li>{@code 2} - The screen rotates 180 degrees. <li>{@code 3} - The screen rotates 270 degrees. </ul>

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## ANIMATOR_DURATION_SCALE

```TypeScript
const ANIMATOR_DURATION_SCALE: string
```

Indicates the scaling factor for the animation duration. <p>This affects the start delay and duration of all such animations. If the value is {@code 0}, the animation ends immediately. The default value is {@code 1}.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## TRANSITION_ANIMATION_SCALE

```TypeScript
const TRANSITION_ANIMATION_SCALE: string
```

Indicates the scaling factor for transition animations. If the value is {@code 0}, transition animations are disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## WINDOW_ANIMATION_SCALE

```TypeScript
const WINDOW_ANIMATION_SCALE: string
```

Indicates the scaling factor for normal window animations. If the value is {@code 0}, window animations are disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

## DISPLAY_INVERSION_STATUS

```TypeScript
const DISPLAY_INVERSION_STATUS: string
```

Specifies whether display color inversion is enabled. <p>If the value is {@code 1}, display color inversion is enabled. If the value is {@code 0}, display color inversion is disabled.

**起始版本：** 7

**废弃版本：** 21

**系统能力：** SystemCapability.Applications.Settings.Core

