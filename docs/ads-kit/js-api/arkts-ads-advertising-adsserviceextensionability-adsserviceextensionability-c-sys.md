# AdsServiceExtensionAbility (System API)

Provides the capability of integrating advertising services with vendors.

**Since:** 11

<!--Device-unnamed-export default class AdsServiceExtensionAbility--><!--Device-unnamed-export default class AdsServiceExtensionAbility-End-->

**System capability:** SystemCapability.Advertising.Ads

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { RespCallback } from '@kit.AdsKit';
```

<a id="onloadad"></a>
## onLoadAd

```TypeScript
onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback)
```

Called when the media application starts to load an ad.The device vendor needs to implement the ad request service logic in this API and send the result to the media application through a call back.

**Since:** 11

<!--Device-AdsServiceExtensionAbility-onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback)--><!--Device-AdsServiceExtensionAbility-onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback)-End-->

**System capability:** SystemCapability.Advertising.Ads

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adParam | advertising.AdRequestParams | Yes | Ad request parameters. |
| adOptions | advertising.AdOptions | Yes | Ad configuration options. |
| respCallback | [RespCallback](arkts-ads-advertising-adsserviceextensionability-respcallback-i.md) | Yes | Ad request callback. |

**Example**

```TypeScript
import { AdsServiceExtensionAbility, advertising, RespCallback } from '@kit.AdsKit';

export default class AdsExtensionAbility extends AdsServiceExtensionAbility {
  onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback) {
    const respData: Map<string, Array<advertising.Advertisement>> = new Map();
    // Set the returned ad data.
    // ...
    respCallback(respData);
  }
}

```

<a id="onloadadwithmultislots"></a>
## onLoadAdWithMultiSlots

```TypeScript
onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions, 
    respCallback: RespCallback)
```

Called when the media application starts to load multiple ads.The device vendor needs to implement the ad request service logic in this API and send the result to the media application through a call back.

**Since:** 11

<!--Device-AdsServiceExtensionAbility-onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions, 
    respCallback: RespCallback)--><!--Device-AdsServiceExtensionAbility-onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions, 
    respCallback: RespCallback)-End-->

**System capability:** SystemCapability.Advertising.Ads

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adParams | advertising.AdRequestParams[] | Yes | Ad request parameters. |
| adOptions | advertising.AdOptions | Yes | Ad configuration options. |
| respCallback | [RespCallback](arkts-ads-advertising-adsserviceextensionability-respcallback-i.md) | Yes | Ad request callback. |

**Example**

```TypeScript
import { AdsServiceExtensionAbility, advertising, RespCallback } from '@kit.AdsKit';

export default class AdsExtensionAbility extends AdsServiceExtensionAbility {
  onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions,
    respCallback: RespCallback) {
    const respData: Map<string, Array<advertising.Advertisement>> = new Map();
    // Set the returned ad data.
    // ...
    respCallback(respData);
  }
}

```

