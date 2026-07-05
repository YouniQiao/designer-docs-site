# BlankScreenDetectionEventInfo

Defines the event information when a blank screen is detected.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

## blankScreenDetails

```TypeScript
blankScreenDetails?: BlankScreenDetails
```

Details of the blank screen issue detected. For example, if a near-blank screen issue is detected, the details contain the number of points that match the blank screen issue. Otherwise, this attribute does not exist.

**Type:** BlankScreenDetails

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

## blankScreenReason

```TypeScript
blankScreenReason: DetectedBlankScreenReason
```

Reason for the blank screen issue, which depends on the detection method.

**Type:** DetectedBlankScreenReason

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

URL of the page when a blank screen is detected.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

