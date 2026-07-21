# AdComponent

This module provides the capability of displaying ads, covering native, roll, splash, and other ad styles.

**Since:** 11

**Decorator:** @Component

<!--Device-unnamed-declare struct AdComponent--><!--Device-unnamed-declare struct AdComponent-End-->

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { AdComponent } from '@kit.AdsKit';
```

<a id="build"></a>
## build

```TypeScript
build(): void
```

A constructor used to create an **AdComponent** object.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdComponent-build(): void--><!--Device-AdComponent-build(): void-End-->

**System capability:** SystemCapability.Advertising.Ads

## adRenderer

```TypeScript
adRenderer?: () => void
```

Application self-rendered ad style. The application self-rendered ad style is a restricted capability. For details,please consult [Traffic Monetization Official Website Customer Support](https://developer.huawei.com/consumer/en/doc/monetize/support-0000001061434261).

**Type:** () =&gt; void

**Since:** 12

**Decorator:** @BuilderParam

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AdComponent-adRenderer?: () => void--><!--Device-AdComponent-adRenderer?: () => void-End-->

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

<!--Device-AdComponent-ads: advertising.Advertisement[]--><!--Device-AdComponent-ads: advertising.Advertisement[]-End-->

**System capability:** SystemCapability.Advertising.Ads

## displayOptions

```TypeScript
displayOptions: advertising.AdDisplayOptions
```

Ad display parameters.

**Type:** advertising.AdDisplayOptions

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdComponent-displayOptions: advertising.AdDisplayOptions--><!--Device-AdComponent-displayOptions: advertising.AdDisplayOptions-End-->

**System capability:** SystemCapability.Advertising.Ads

## interactionListener

```TypeScript
interactionListener: advertising.AdInteractionListener
```

Callback for ad status changes.

**Type:** advertising.AdInteractionListener

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdComponent-interactionListener: advertising.AdInteractionListener--><!--Device-AdComponent-interactionListener: advertising.AdInteractionListener-End-->

**System capability:** SystemCapability.Advertising.Ads

## rollPlayState

```TypeScript
rollPlayState?: number
```

Used to provide the playback status of roll ads externally. Set to 1 for playing and 2 for paused. The default value is 2. Other values are invalid and do not change the previous playback status. The page where the roll ad is located needs to be associated with the property through @State. For usage methods, refer to the [sample code](https://developer.huawei.com/consumer/en/doc/harmonyos-guides/ads-publisher-service-roll#section4281165885118).

**Type:** number

**Since:** 15

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AdComponent-rollPlayState?: number--><!--Device-AdComponent-rollPlayState?: number-End-->

**System capability:** SystemCapability.Advertising.Ads

