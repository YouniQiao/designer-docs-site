# UserAgentMetadata

Holds User-Agent metadata information and uses to generate User-Agent client hints.

**Since:** 24

<!--Device-webview-class UserAgentMetadata--><!--Device-webview-class UserAgentMetadata-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getArchitecture

```TypeScript
getArchitecture(): string
```

Gets the value for sec-ch-ua-architecture.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getArchitecture(): string--><!--Device-UserAgentMetadata-getArchitecture(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for sec-ch-ua-architecture. |

## getBitness

```TypeScript
getBitness(): string
```

Gets the value for the sec-ch-ua-bitness.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getBitness(): string--><!--Device-UserAgentMetadata-getBitness(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-bitness. |

## getBrandVersionList

```TypeScript
getBrandVersionList(): Array<UserAgentBrandVersion>
```

Returns the current list of UserAgentBrandVersion which are used to generate the User-Agent client hints sec-ch-ua and sec-ch-ua-full-version-list.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getBrandVersionList(): Array<UserAgentBrandVersion>--><!--Device-UserAgentMetadata-getBrandVersionList(): Array<UserAgentBrandVersion>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UserAgentBrandVersion> | - Returns the current list of UserAgentBrandVersion. |

## getFormFactors

```TypeScript
getFormFactors(): Array<UserAgentFormFactor>
```

Gets the value for the sec-ch-ua-form-factors.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getFormFactors(): Array<UserAgentFormFactor>--><!--Device-UserAgentMetadata-getFormFactors(): Array<UserAgentFormFactor>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UserAgentFormFactor> | - Returns the form factors. |

## getFullVersion

```TypeScript
getFullVersion(): string
```

Gets the value for the sec-ch-ua-full-version.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getFullVersion(): string--><!--Device-UserAgentMetadata-getFullVersion(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-full-version. |

## getMobile

```TypeScript
getMobile(): boolean
```

Gets the value for the sec-ch-ua-mobile.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getMobile(): boolean--><!--Device-UserAgentMetadata-getMobile(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns the value for the sec-ch-ua-mobile. |

## getModel

```TypeScript
getModel(): string
```

Gets the value for the sec-ch-ua-model.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getModel(): string--><!--Device-UserAgentMetadata-getModel(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-model. |

## getPlatform

```TypeScript
getPlatform(): string
```

Gets the value for the sec-ch-ua-platform.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getPlatform(): string--><!--Device-UserAgentMetadata-getPlatform(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-platform. |

## getPlatformVersion

```TypeScript
getPlatformVersion(): string
```

Gets the value for the sec-ch-ua-platform-version.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getPlatformVersion(): string--><!--Device-UserAgentMetadata-getPlatformVersion(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-platform-version. |

## getWow64

```TypeScript
getWow64(): boolean
```

Gets the value for the sec-ch-ua-wow64.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-getWow64(): boolean--><!--Device-UserAgentMetadata-getWow64(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns the value for the sec-ch-ua-wow64. |

## setArchitecture

```TypeScript
setArchitecture(arch: string): void
```

Sets User-Agent metadata architecture.

<p><strong>API Note</strong>:<br>The default value is empty string which means the system default value will be used.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setArchitecture(arch: string): void--><!--Device-UserAgentMetadata-setArchitecture(arch: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arch | string | Yes | The arch is used to generate User-Agent client hints sec-ch-ua-architecture. |

## setBitness

```TypeScript
setBitness(bitness: string): void
```

Sets User-Agent metadata bitness default is "".

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setBitness(bitness: string): void--><!--Device-UserAgentMetadata-setBitness(bitness: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bitness | string | Yes | The bitness is used to generate User-Agent client hints sec-ch-ua-bitness. |

## setBrandVersionList

```TypeScript
setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void
```

Sets User-Agent metadata brands and their versions.

<p><strong>API Note</strong>:<br>The default value is an empty list which means the system default User-Agent metadata brands and versions will be used to generate the User-Agent client hints.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void--><!--Device-UserAgentMetadata-setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brandVersionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UserAgentBrandVersion> | Yes | The brandVersionList is used to generate User-Agent client hints sec-ch-ua-full-version-list. |

## setFormFactors

```TypeScript
setFormFactors(formFactors: Array<UserAgentFormFactor>): void
```

Sets User-Agent metadata form factors.

<p><strong>API Note</strong>:<br>The default value is empty list which means the system default value will be used.Form factor value should be one or more of DESKTOP, AUTOMOTIVE, MOBILE, TABLET, XR, EINK, WATCH.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setFormFactors(formFactors: Array<UserAgentFormFactor>): void--><!--Device-UserAgentMetadata-setFormFactors(formFactors: Array<UserAgentFormFactor>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formFactors | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<UserAgentFormFactor> | Yes | The formFactors is used to generate User-Agent client hints sec-ch-ua-form-factors. |

## setFullVersion

```TypeScript
setFullVersion(fullVersion: string): void
```

Sets User-Agent metadata full version.

<p><strong>API Note</strong>:<br>The default value is empty string which means the system default value will be used.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setFullVersion(fullVersion: string): void--><!--Device-UserAgentMetadata-setFullVersion(fullVersion: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullVersion | string | Yes | The fullVersion is used to generate User-Agent client hints sec-ch-ua-full-version. |

## setMobile

```TypeScript
setMobile(isMobile: boolean): void
```

Sets User-Agent metadata mobile, default is true.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setMobile(isMobile: boolean): void--><!--Device-UserAgentMetadata-setMobile(isMobile: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMobile | boolean | Yes | The isMobile is used to generate User-Agent client hints sec-ch-ua-mobile. |

## setModel

```TypeScript
setModel(model: string): void
```

Sets User-Agent metadata model.

<p><strong>API Note</strong>:<br>The default value is empty string which means the system default value will be used.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setModel(model: string): void--><!--Device-UserAgentMetadata-setModel(model: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | string | Yes | The model is used to generate User-Agent client hints sec-ch-ua-model. |

## setPlatform

```TypeScript
setPlatform(platform: string): void
```

Sets User-Agent metadata platform.

<p><strong>API Note</strong>:<br>The default value is empty string which means the system default value will be used.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setPlatform(platform: string): void--><!--Device-UserAgentMetadata-setPlatform(platform: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| platform | string | Yes | The platform is used to generate User-Agent client hints sec-ch-ua-platform. |

## setPlatformVersion

```TypeScript
setPlatformVersion(platformVersion: string): void
```

Sets User-Agent metadata platform version.

<p><strong>API Note</strong>:<br>The default value is empty string which means the system default value will be used.</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setPlatformVersion(platformVersion: string): void--><!--Device-UserAgentMetadata-setPlatformVersion(platformVersion: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| platformVersion | string | Yes | The platformVersion is used to generate User-Agent client hints sec-ch-ua-platform-version. |

## setWow64

```TypeScript
setWow64(isWow64: boolean): void
```

Sets User-Agent metadata wow64, default is false.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-UserAgentMetadata-setWow64(isWow64: boolean): void--><!--Device-UserAgentMetadata-setWow64(isWow64: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isWow64 | boolean | Yes | The wow64 is used to generate User-Agent client hints sec-ch-ua-wow64. |

