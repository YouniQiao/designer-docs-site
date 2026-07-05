# showAd

## showAd

```TypeScript
function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void
```

展示全屏广告。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ad | Advertisement | Yes | 广告对象。 |
| options | AdDisplayOptions | Yes | 广告展示参数。 |
| context | common.UIAbilityContext | No | UIAbility的上下文环境，不设置从api:  [@ohos.app.ability.common](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/  js-apis-app-ability-common)中获取。 [since 11 - 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified. |
| 21800001 | System internal error. |
| 21800004 | Failed to display the ad. |

**Example**

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

