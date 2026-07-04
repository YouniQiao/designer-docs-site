# KeyboardInfo

Describes the information about the soft keyboard window.

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@ohos.window';
```

## animated

```TypeScript
animated?: boolean
```

Whether there is a show/hide animation. **true** if there is a show/hide animation, **false** otherwise.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Window.SessionManager

## beginRect

```TypeScript
beginRect: Rect
```

Position and size of the soft keyboard before the animation starts.

**Type:** Rect

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Window.SessionManager

## config

```TypeScript
config?: WindowAnimationConfig
```

Animation configuration.

**Type:** WindowAnimationConfig

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Window.SessionManager

## endRect

```TypeScript
endRect: Rect
```

Position and size of the soft keyboard after the animation ends.

**Type:** Rect

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Window.SessionManager

