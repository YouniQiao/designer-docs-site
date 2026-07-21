# showAd

## Modules to Import

```TypeScript
import { advertising } from '@kit.AdsKit';
```

<a id="showad"></a>
## showAd

```TypeScript
function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void
```

Shows a full-screen ad.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-advertising-function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void--><!--Device-advertising-function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void-End-->

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ad | [Advertisement](arkts-ads-advertisement-advertisement-i.md) | Yes | Ad object. |
| options | [AdDisplayOptions](arkts-ads-advertising-addisplayoptions-i.md) | Yes | Ad display parameters. |
| context | common.UIAbilityContext | No | Context of the UIAbility. If this parameter is not set, the value is obtained from @ohos.app.ability.common.<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid input parameter. Possible causes: 1. Mandatory parameters are left unspecified. |
| [21800001](../errorcode-ads.md#21800001-internal-system-error) | System internal error. |
| [21800004](../errorcode-ads.md#21800004-ad-display-failure) | Failed to display the ad. |

**Example**

For details about how to obtain the context, see [Acquisition of Context](../../application-models/application-context-stage.md#acquisition-of-context).

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';

function showAd(ad: advertising.Advertisement, context?: common.UIAbilityContext): void {
  // Ad display parameters. You can set the parameters based on the project requirements.
  const adDisplayOptions: advertising.AdDisplayOptions = {};
  // Show the ad.
  advertising.showAd(ad, adDisplayOptions, context);
}

```

