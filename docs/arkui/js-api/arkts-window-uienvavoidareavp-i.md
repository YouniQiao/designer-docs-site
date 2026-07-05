# UIEnvAvoidAreaVP

以vp为单位表示的窗口避让区域信息，在进行[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时需关注。

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## visible

```TypeScript
visible: boolean
```

无实际意义，暂不支持使用。

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## topRect

```TypeScript
topRect: RectInVP
```

中心位于窗口的两条对角线的顶部的矩形区，单位为vp。

**Type:** RectInVP

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## leftRect

```TypeScript
leftRect: RectInVP
```

中心位于窗口的两条对角线的左侧的矩形区，单位为vp。

**Type:** RectInVP

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## rightRect

```TypeScript
rightRect: RectInVP
```

中心位于窗口的两条对角线的右侧的矩形区，单位为vp。

**Type:** RectInVP

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

## bottomRect

```TypeScript
bottomRect: RectInVP
```

中心位于窗口的两条对角线的底部的矩形区，单位为vp。

**Type:** RectInVP

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

