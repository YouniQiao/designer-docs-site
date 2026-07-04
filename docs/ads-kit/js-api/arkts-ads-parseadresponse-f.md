# parseAdResponse

## Modules to Import

```TypeScript
import { advertising } from '@ohos.advertising';
```

## parseAdResponse

```TypeScript
function parseAdResponse(adResponse: string, listener: MultiSlotsAdLoadListener, 
    context: common.UIAbilityContext): void
```

Parses and processes the body of an ad response (this API is only open to some pre-installed system applications).

**Since:** 12

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adResponse | string | Yes | Ad response body. |
| listener | MultiSlotsAdLoadListener | Yes | Callback listener for ad requests. |
| context | common.UIAbilityContext | Yes | Context of the UIAbility. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid input parameter.Possible causes: 1. Mandatory parameters areleft unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../errorcode-ads.md#801-ad-request-failure) | Device not supported. |
| [21800001](../errorcode-ads.md#21800001-internal-system-error) | System internal error. |
| [21800005](../errorcode-ads.md#21800005-ad-data-parsing-failure) | Failed to parse the ad response. |

**Example**

For details about how to obtain the context, see [Acquisition of Context](../../application-models/application-context-stage.md#acquisition-of-context).

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

function parseAdResponse(adResponse: string, context: common.UIAbilityContext): void {
  // Listen for the ad parsing callback.
  const multiSlotsAdLoaderListener: advertising.MultiSlotsAdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Map<string, Array<advertising.Advertisement>>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading multiSlots ad');
      // Save the parsed ad content for display.
      const returnAds: advertising.Advertisement[] = [];
      ads.forEach((adsArray) => returnAds.push(...adsArray));
    }
  };
  // Call the API to parse the response body.
  advertising.parseAdResponse(adResponse, multiSlotsAdLoaderListener, context);
}

```

