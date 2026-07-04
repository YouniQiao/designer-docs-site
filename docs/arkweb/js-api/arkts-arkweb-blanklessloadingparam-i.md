# BlanklessLoadingParam

Defines the blankless loading parameter. Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## callback

```TypeScript
callback?: Callback<BlanklessFrameInterpolationInfo>
```

Callback for the blankless frame interpolation, which is used to return the blankless frame interpolation information. Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** Callback<BlanklessFrameInterpolationInfo>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## duration

```TypeScript
duration?: number
```

Duration of the frame interpolation. The valid range is the union of {0} and [200, 2000]. Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned. The value must be an integer. <br>Unit: ms.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## enable

```TypeScript
enable: boolean
```

Whether to enable frame interpolation. The value true indicates to enable frame interpolation, and false indicates the opposite. Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## expirationTime

```TypeScript
expirationTime?: number
```

Expiration time of the historical frame, in ms (UTC time). T indicates the current UTC time. If the expiration time is 30 days, the value is 2592000000 ms. The value range is the union of (T, T + 2592000000] and {0}. 0 indicates that the expiration time is not specified and the default expiration time (7 days) is used. Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

