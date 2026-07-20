# AdsBlockManager

This class is used to set adblock config.

**Since:** 12

<!--Device-webview-class AdsBlockManager--><!--Device-webview-class AdsBlockManager-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## addAdsBlockAllowedList

```TypeScript
static addAdsBlockAllowedList(domainSuffixes: Array<string>): void
```

Add items to Ads Block Allow list.By default, ads block is allowed for all pages unless they are added to the disallow list. The priority of allowlist is higher than the disallowlist. It is used to re-enable ads block on the page that matches disallow list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static addAdsBlockAllowedList(domainSuffixes: Array<string>): void--><!--Device-AdsBlockManager-static addAdsBlockAllowedList(domainSuffixes: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainSuffixes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | list of domain suffix, if web page url matches someone in the list,Ads Block will be allowed for the web page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## addAdsBlockDisallowedList

```TypeScript
static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void
```

Add items to Ads Block Disallow list.

<p><strong>API Note</strong>:<br>The domain name set by this API is not persistent; they need to be set again after the application is restarted.

The ad blocking feature matches website URLs based on the suffix. For example, if the disallowed list contains **'example.com'** or **'www.example.com'**, then ad blocking will be disabled for sites **https://www.example.com** and **https://m.example.com**.</p>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void--><!--Device-AdsBlockManager-static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainSuffixes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | list of domain suffix, if web page url matches someone in the list,Ads Block will be disallowed for the web page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## clearAdsBlockAllowedList

```TypeScript
static clearAdsBlockAllowedList(): void
```

clear Ads Block Allowed list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static clearAdsBlockAllowedList(): void--><!--Device-AdsBlockManager-static clearAdsBlockAllowedList(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## clearAdsBlockDisallowedList

```TypeScript
static clearAdsBlockDisallowedList(): void
```

clear Ads Block Disallowed list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static clearAdsBlockDisallowedList(): void--><!--Device-AdsBlockManager-static clearAdsBlockDisallowedList(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## removeAdsBlockAllowedList

```TypeScript
static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void
```

remove items from Ads Block Allowed list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void--><!--Device-AdsBlockManager-static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainSuffixes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | list of domain suffix needed be removed from allow list |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## removeAdsBlockDisallowedList

```TypeScript
static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void
```

remove items from Ads Block Disallowed list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void--><!--Device-AdsBlockManager-static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainSuffixes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | list of domain suffix needed be removed from disallow list |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## setAdsBlockRules

```TypeScript
static setAdsBlockRules(rulesFile: string, replace: boolean): void
```

set Ads Block ruleset file, containing easylist rules.

<p><strong>API Note</strong>:<br>The ad blocking rules set by this API will be persistently stored after successful internal parsing; you do not need to set them again after the application is restarted.</p>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdsBlockManager-static setAdsBlockRules(rulesFile: string, replace: boolean): void--><!--Device-AdsBlockManager-static setAdsBlockRules(rulesFile: string, replace: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rulesFile | string | Yes | absolute file path contains app customized ads block rules. |
| replace | boolean | Yes | (@code true)replace internal rules;(@code false) add to internal rules. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

