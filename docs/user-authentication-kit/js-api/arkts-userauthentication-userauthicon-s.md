# UserAuthIcon

**userAuthIcon** provides user identity authentication icons used on the application UI. With **userAuthIcon**, you can: 1. Easily integrate the facial authentication and fingerprint authentication icons into your applications. 2. Customize the color and size of the icons. The icon style cannot be changed. 3. Start the facial or fingerprint authentication pop-up component once the icon is tapped.

**Since:** 12

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## Modules to Import

```TypeScript
import { UserAuthIcon } from '@ohos.userIAM.userAuthIcon';
```

## authParam

```TypeScript
authParam: userAuth.AuthParam
```

User authentication parameters.

**Type:** userAuth.AuthParam

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## iconColor

```TypeScript
iconColor?: ResourceColor
```

Color of the icon. The default value is **$r('sys.color.ohos_id_color_activated')**.

**Type:** ResourceColor

**Default:** $r('sys.color.ohos_id_color_activated')

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## iconHeight

```TypeScript
iconHeight?: Dimension
```

Height of the icon. The aspect ratio is 1:1. The default value is **64fp**. Percentage strings are not supported.

**Type:** Dimension

**Default:** 64fp

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## onAuthResult

```TypeScript
onAuthResult: (result: userAuth.UserAuthResult) => void
```

Callback used to return the user authentication result.<br>The application must request the `ohos.permission.ACCESS_BIOMETRIC` permission. Otherwise, it will only display the icon and cannot start the identity authentication components.

**Type:** (result: userAuth.UserAuthResult) => void

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## onIconClick

```TypeScript
onIconClick?: () => void
```

Callback to be invoked when the icon is tapped.

**Type:** () => void

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## widgetParam

```TypeScript
widgetParam: userAuth.WidgetParam
```

Parameters on the user authentication page.

**Type:** userAuth.WidgetParam

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

