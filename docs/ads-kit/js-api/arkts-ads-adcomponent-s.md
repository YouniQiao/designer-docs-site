# AdComponent

This module provides the capability of displaying ads, covering native, roll, splash, and other ad styles.

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { AdComponent } from '@kit.AdsKit';
```

## build

```TypeScript
build(): void
```

A constructor used to create an **AdComponent** object.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Advertising.Ads

## adRenderer

```TypeScript
adRenderer?: () => void
```

Application self-rendered ad style. The application self-rendered ad style is a restricted capability. For details,
please consult
[Traffic Monetization Official Website Customer Support](https://developer.huawei.com/consumer/en/doc/monetize/support-0000001061434261).

**Type:** () => void

**Since:** 12

**Decorator:** @BuilderParam

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Advertising.Ads

## ads

```TypeScript
ads: advertising.Advertisement[]
```

Array of ad objects.

NOTE: For non-roll ad types, the component only displays the first data in the array.

**Type:** advertising.Advertisement[]

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Advertising.Ads

## displayOptions

```TypeScript
displayOptions: advertising.AdDisplayOptions
```

Ad display parameters.

**Type:** advertising.AdDisplayOptions

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Advertising.Ads

## interactionListener

```TypeScript
interactionListener: advertising.AdInteractionListener
```

Callback for ad status changes.

**Type:** advertising.AdInteractionListener

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Advertising.Ads

## rollPlayState

```TypeScript
rollPlayState?: number
```

Used to provide the playback status of roll ads externally. Set to 1 for playing and 2 for paused. The default
value is 2. Other values are invalid and do not change the previous playback status. The page where the roll ad is
located needs to be associated with the property through @State. For usage methods, refer to the
[sample code](https://developer.huawei.com/consumer/en/doc/harmonyos-guides/ads-publisher-service-roll#section4281165885118).

**Type:** number

**Since:** 15

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Advertising.Ads

