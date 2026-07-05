# display

Provides methods for setting the display effect, including the font size, screen brightness, screen rotation, animation factor, and display color.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## 导入模块

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## 汇总

### 常量

| 名称 | 描述 |
| --- | --- |
| [ANIMATOR_DURATION_SCALE](arkts-display-con.md#ANIMATOR_DURATION_SCALE) | Indicates the scaling factor for the animation duration. <p>This affects the start delay and duration of all such animations. If the value is {@code 0}, the animation ends immediately. The default value is {@code 1}. |
| [AUTO_SCREEN_BRIGHTNESS](arkts-display-con.md#AUTO_SCREEN_BRIGHTNESS) | Specifies whether automatic screen brightness adjustment is enabled. <p>If the value is {@code 1}, automatic adjustment is enabled. If the value is {@code 0}, automatic adjustment is disabled. |
| [AUTO_SCREEN_BRIGHTNESS_MODE](arkts-display-con.md#AUTO_SCREEN_BRIGHTNESS_MODE) | Indicates the value of {@code AUTO_SCREEN_BRIGHTNESS} when automatic screen brightness adjustment is used. |
| [DEFAULT_SCREEN_ROTATION](arkts-display-con.md#DEFAULT_SCREEN_ROTATION) | Indicates the screen rotation when no other policy is available. <p>This constant is invalid when auto-rotation is enabled. When auto-rotation is disabled, the following values are available: <ul> <li>{@code 0} - The screen rotates 0 degrees. <li>{@code 1} - The screen rotates 90 degrees. <li>{@code 2} - The screen rotates 180 degrees. <li>{@code 3} - The screen rotates 270 degrees. </ul> |
| [DISPLAY_INVERSION_STATUS](arkts-display-con.md#DISPLAY_INVERSION_STATUS) | Specifies whether display color inversion is enabled. <p>If the value is {@code 1}, display color inversion is enabled. If the value is {@code 0}, display color inversion is disabled. |
| [FONT_SCALE](arkts-display-con.md#FONT_SCALE) | Indicates the scaling factor of fonts, which is a float number. |
| [MANUAL_SCREEN_BRIGHTNESS_MODE](arkts-display-con.md#MANUAL_SCREEN_BRIGHTNESS_MODE) | Indicates the value of {@code AUTO_SCREEN_BRIGHTNESS} when manual screen brightness adjustment is used. |
| [SCREEN_BRIGHTNESS_STATUS](arkts-display-con.md#SCREEN_BRIGHTNESS_STATUS) | Indicates the screen brightness. The value ranges from 0 to 255. |
| [SCREEN_OFF_TIMEOUT](arkts-display-con.md#SCREEN_OFF_TIMEOUT) | Indicates the duration that the device waits before going to sleep after a period of inactivity, in milliseconds. |
| [TRANSITION_ANIMATION_SCALE](arkts-display-con.md#TRANSITION_ANIMATION_SCALE) | Indicates the scaling factor for transition animations. If the value is {@code 0}, transition animations are disabled. |
| [WINDOW_ANIMATION_SCALE](arkts-display-con.md#WINDOW_ANIMATION_SCALE) | Indicates the scaling factor for normal window animations. If the value is {@code 0}, window animations are disabled. |

