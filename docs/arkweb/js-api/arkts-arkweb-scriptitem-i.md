# ScriptItem

Defines the contents of the JavaScript to be injected.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## script

```TypeScript
script: string
```

Sets the JavaScript to be injected.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## scriptRules

```TypeScript
scriptRules: Array<string>
```

Sets the rules of the JavaScript.
1. To allow URLs from all sources, use the wildcard (*).
2. If exact match is required, specify the exact URL, for example, **https://www.example.com**.
3. For fuzzy match, you can use a wildcard (*) in the website URL, for example, **https://*.example.com**.
Websites such as "x,*.y.com" and "* foobar.com" are not allowed.
4. If the source is an IP address, follow rule 2.
5. For protocols other than HTTP/HTTPS (custom protocols), exact match and fuzzy match are not supported,
and the protocol must end with **://**, for example, **resource://**.
6. If one of the preceding rules is not met in **scriptRules**, the **scriptRules** does not take effect.

**Type:** Array<string>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## urlRegexRules

```TypeScript
urlRegexRules?: Array<UrlRegexRule>
```

Set the regular expression rule that allows execution of this JavaScript.

**Type:** Array<UrlRegexRule>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

