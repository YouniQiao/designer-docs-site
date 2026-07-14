# UrlRegexRule

Defines the regular expression rule.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## rule

```TypeScript
rule: string
```

Full URL regular expression.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## secondLevelDomain

```TypeScript
secondLevelDomain: string
```

Exact match of the second-level domain. For example, the second-level domain of https://www.example.com is example.com, and the second-level domain of https://www.example.com.cn is example.com.cn. If the URL is an IP address, the full IP is matched against the secondLevelDomain.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

