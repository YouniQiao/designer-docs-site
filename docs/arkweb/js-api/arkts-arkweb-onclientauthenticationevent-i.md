# OnClientAuthenticationEvent

Defines the triggered callback when needs ssl client certificate from the user.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## handler

```TypeScript
handler : ClientAuthenticationHandler
```

Notifies the user of the operation behavior of the web component.

**Type:** ClientAuthenticationHandler

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## host

```TypeScript
host : string
```

The hostname of the requesting certificate server.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## issuers

```TypeScript
issuers : Array<string>
```

Certificates that match the private key are acceptable to the issuer.

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## keyTypes

```TypeScript
keyTypes : Array<string>
```

Acceptable asymmetric key types.

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## port

```TypeScript
port : number
```

The port number of the request certificate server.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

