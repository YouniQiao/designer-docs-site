# SystemBarProperties

状态栏<!--Del-->、三键导航栏的<!--DelEnd-->属性。

**Since:** 6

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## isNavigationBarLightIcon

```TypeScript
isNavigationBarLightIcon?: boolean
```

三键导航栏图标是否为高亮状态。true表示高亮；false表示不高亮。默认值：false。 <!--RP13--><!--RP13End-->

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## statusBarColor

```TypeScript
statusBarColor?: string
```

状态栏背景颜色。作为入参时格式为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'； 作为返回值时格式固定为ARGB颜色，如'#FF00FF00'，默认值为系统配置的颜色。

**Type:** string

**Since:** 6

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## isStatusBarLightIcon

```TypeScript
isStatusBarLightIcon?: boolean
```

状态栏图标是否为高亮状态。true表示高亮；false表示不高亮。默认值：false。

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## enableNavigationBarAnimation

```TypeScript
enableNavigationBarAnimation?: boolean
```

是否启用三键导航栏属性变化时的动画效果。true表示启用；false表示不启用。默认值：false。 <!--RP13--><!--RP13End-->

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## navigationBarContentColor

```TypeScript
navigationBarContentColor?: string
```

三键导航栏文字颜色。当设置此属性后，`isNavigationBarLightIcon`属性设置无效。默认值：`'#E5FFFFFF'`。 <!--RP13--><!--RP13End-->

**Type:** string

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## enableStatusBarAnimation

```TypeScript
enableStatusBarAnimation?: boolean
```

是否启用状态栏属性变化时的动画效果。true表示启用；false表示不启用。默认值：false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## navigationBarColor

```TypeScript
navigationBarColor?: string
```

三键导航栏背景颜色。作为入参时格式为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'； 作为返回值时格式固定为ARGB颜色，如'#FF00FF00'，默认值为系统配置的颜色。 <!--RP13--><!--RP13End-->

**Type:** string

**Since:** 6

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## statusBarContentColor

```TypeScript
statusBarContentColor?: string
```

状态栏文字颜色。当设置此属性后，`isStatusBarLightIcon`属性设置无效。默认值：`'#E5FFFFFF'`。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

