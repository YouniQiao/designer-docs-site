# ThreatType

```TypeScript
declare enum ThreatType
```

Enum type supplied to {@link threatType} for the website's threat type.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_ILLEGAL

```TypeScript
THREAT_ILLEGAL = 0
```

非法网站。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_FRAUD

```TypeScript
THREAT_FRAUD = 1
```

欺诈网站。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_RISK

```TypeScript
THREAT_RISK = 2
```

存在安全风险的网站。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_WARNING

```TypeScript
THREAT_WARNING = 3
```

涉嫌包含不健康内容的网站。 ArkWeb 不会拦截此类网站，应用程序可以自行处理。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_NONE

```TypeScript
THREAT_NONE = 4
```

安全检查通过，未发现任何风险。

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## THREAT_UNPROCESSED

```TypeScript
THREAT_UNPROCESSED = 5
```

未进行安全检查。

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

