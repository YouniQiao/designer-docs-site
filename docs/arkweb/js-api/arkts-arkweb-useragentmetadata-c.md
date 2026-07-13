# UserAgentMetadata

Holds User-Agent metadata information and uses to generate User-Agent client hints.

**Since:** 24

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

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the value for the sec-ch-ua-bitness. |

## getBrandVersionList

```TypeScript
getBrandVersionList(): Array<UserAgentBrandVersion>
```

Returns the current list of UserAgentBrandVersion which are used to generate the User-Agent client hints
sec-ch-ua and sec-ch-ua-full-version-list.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;UserAgentBrandVersion&gt; | - Returns the current list of UserAgentBrandVersion. |

## getFormFactors

```TypeScript
getFormFactors(): Array<UserAgentFormFactor>
```

Gets the value for the sec-ch-ua-form-factors.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;UserAgentFormFactor&gt; | - Returns the form factors. |

## getFullVersion

```TypeScript
getFullVersion(): string
```

Gets the value for the sec-ch-ua-full-version.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

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

<p><strong>API Note</strong>:<br>
The default value is empty string which means the system default value will be used.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

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

<p><strong>API Note</strong>:<br>
The default value is an empty list which means the system default User-Agent metadata brands and versions will be
used to generate the User-Agent client hints.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brandVersionList | Array&lt;UserAgentBrandVersion&gt; | Yes | The brandVersionList is used to generate User-Agentclient hints sec-ch-ua-full-version-list. |

## setFormFactors

```TypeScript
setFormFactors(formFactors: Array<UserAgentFormFactor>): void
```

Sets User-Agent metadata form factors.

<p><strong>API Note</strong>:<br>
The default value is empty list which means the system default value will be used.
Form factor value should be one or more of DESKTOP, AUTOMOTIVE, MOBILE, TABLET, XR, EINK, WATCH.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formFactors | Array&lt;UserAgentFormFactor&gt; | Yes | The formFactors is used to generate User-Agent client hintssec-ch-ua-form-factors. |

## setFullVersion

```TypeScript
setFullVersion(fullVersion: string): void
```

Sets User-Agent metadata full version.

<p><strong>API Note</strong>:<br>
The default value is empty string which means the system default value will be used.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullVersion | string | Yes | The fullVersion is used to generate User-Agent client hintssec-ch-ua-full-version. |

## setMobile

```TypeScript
setMobile(isMobile: boolean): void
```

Sets User-Agent metadata mobile, default is true.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

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

<p><strong>API Note</strong>:<br>
The default value is empty string which means the system default value will be used.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

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

<p><strong>API Note</strong>:<br>
The default value is empty string which means the system default value will be used.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

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

<p><strong>API Note</strong>:<br>
The default value is empty string which means the system default value will be used.
</p>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| platformVersion | string | Yes | The platformVersion is used to generate User-Agent client hintssec-ch-ua-platform-version. |

## setWow64

```TypeScript
setWow64(isWow64: boolean): void
```

Sets User-Agent metadata wow64, default is false.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isWow64 | boolean | Yes | The wow64 is used to generate User-Agent client hints sec-ch-ua-wow64. |

