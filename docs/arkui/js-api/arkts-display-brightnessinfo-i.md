# BrightnessInfo

屏幕亮度信息。此类型中的信息均来自底层屏幕信息数据。

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## maxHeadroom

```TypeScript
readonly maxHeadroom: double
```

当前最大亮度余量，该参数为大于0的浮点数。默认值为1.0。

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## sdrNits

```TypeScript
readonly sdrNits: double
```

屏幕的亮度，该参数为大于0的浮点数。默认值为500.0。

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## currentHeadroom

```TypeScript
readonly currentHeadroom: double
```

当前亮度动态余量，该参数为大于0的浮点数。默认值为1.0。

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

