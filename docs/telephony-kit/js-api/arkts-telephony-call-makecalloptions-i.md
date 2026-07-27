# MakeCallOptions

Indicates the options of make call.

**Since:** 24

<!--Device-call-export interface MakeCallOptions--><!--Device-call-export interface MakeCallOptions-End-->

**System capability:** SystemCapability.Applications.Contacts

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## isCustomAccessibility

```TypeScript
isCustomAccessibility?: boolean
```

Whether the third-party app supports custom accessibility features.Default value: false.

**Type:** boolean

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MakeCallOptions-isCustomAccessibility?: boolean--><!--Device-MakeCallOptions-isCustomAccessibility?: boolean-End-->

**System capability:** SystemCapability.Applications.Contacts

## isHideDialScreen

```TypeScript
isHideDialScreen?: boolean
```

Whether to hide the dialer screen after call ends.Default value: false.

**Type:** boolean

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-MakeCallOptions-isHideDialScreen?: boolean--><!--Device-MakeCallOptions-isHideDialScreen?: boolean-End-->

**System capability:** SystemCapability.Applications.Contacts

