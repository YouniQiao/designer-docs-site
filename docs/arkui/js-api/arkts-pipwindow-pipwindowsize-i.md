# PiPWindowSize

画中画窗口大小。

**Since:** 15

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { PiPWindow } from '@kit.ArkUI';
```

## width

```TypeScript
width: int
```

窗口宽度，单位为px，该参数应为正整数，不大于屏幕宽度。

**Type:** int

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## scale

```TypeScript
scale: double
```

窗口缩放比，显示大小相对于width和height的缩放比，该参数为浮点数，取值范围大于0.0，小于等于1.0。等于1表示与width和height一样大。

**Type:** double

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## height

```TypeScript
height: int
```

窗口高度，单位为px，该参数应为正整数，不大于屏幕高度。

**Type:** int

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

