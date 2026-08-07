# apiAvailable

## apiAvailable

```TypeScript
function apiAvailable(version: string | number): boolean
```

Checks whether a specified API version is available on the current device.This API provides compatibility check across different OpenHarmony/Distribution OS versions.A suitable version check method is automatically selected based on the input format and supported API versions.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-deviceInfo-function apiAvailable(version: string | number): boolean--><!--Device-deviceInfo-function apiAvailable(version: string | number): boolean-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| version | string \| number | Yes | API version number to be verified. The value can be an integer or string format. - String format shall be in M.S.F (e.g., "26.0.0", "5.0.1"): - For API 26+ (version >= 26.0.0): Represents both OpenHarmony and Distribution OS API versions - For API 26- (version < 26.0.0): Represents Distribution OS API version - Number format (e.g., 13): Represents OpenHarmony SDK API version (API 26- only) |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Boolean value. The value **true** indicates that the current version number is later than the input parameter version number; **false** indicates that the current device's API version is lower than the input version number, or the input version number is in an invaild format, or the specified version does not exit. |

