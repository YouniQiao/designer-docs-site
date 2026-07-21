# Base64

Decodes a string or Uint8Array containing Base64 data into a newly allocated Uint8Array.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [Base64Helper](arkts-arkts-util-base64helper-c.md)

<!--Device-util-class Base64--><!--Device-util-class Base64-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **Base64** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [constructor](arkts-arkts-util-base64helper-c.md#constructor-1)

<!--Device-Base64-constructor()--><!--Device-Base64-constructor()-End-->

**System capability:** SystemCapability.Utils.Lang

<a id="decode"></a>
## decode

```TypeScript
decode(src: Uint8Array | string): Promise<Uint8Array>
```

Decodes the input content into a Uint8Array object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [decode](arkts-arkts-util-base64helper-c.md#decode-1)

<!--Device-Base64-decode(src: Uint8Array | string): Promise<Uint8Array>--><!--Device-Base64-decode(src: Uint8Array | string): Promise<Uint8Array>-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | Uint8Array object or string to decode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise used to return the Uint8Array object obtained. |

<a id="decodesync"></a>
## decodeSync

```TypeScript
decodeSync(src: Uint8Array | string): Uint8Array
```

Decodes the input content into a Uint8Array object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [decodeSync](arkts-arkts-util-base64helper-c.md#decodesync-1)

<!--Device-Base64-decodeSync(src: Uint8Array | string): Uint8Array--><!--Device-Base64-decodeSync(src: Uint8Array | string): Uint8Array-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | Uint8Array object or string to decode. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Uint8Array object obtained. |

<a id="encode"></a>
## encode

```TypeScript
encode(src: Uint8Array): Promise<Uint8Array>
```

Encodes the input content into a Uint8Array object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [encode](arkts-arkts-util-base64helper-c.md#encode-1)

<!--Device-Base64-encode(src: Uint8Array): Promise<Uint8Array>--><!--Device-Base64-encode(src: Uint8Array): Promise<Uint8Array>-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise used to return the Uint8Array object obtained. |

<a id="encodesync"></a>
## encodeSync

```TypeScript
encodeSync(src: Uint8Array): Uint8Array
```

Performs Base64 encoding on the input Uint8Array byte array and returns the encoded Uint8Array.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [encodeSync](arkts-arkts-util-base64helper-c.md#encodesync-1)

<!--Device-Base64-encodeSync(src: Uint8Array): Uint8Array--><!--Device-Base64-encodeSync(src: Uint8Array): Uint8Array-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Uint8Array object obtained. |

<a id="encodetostring"></a>
## encodeToString

```TypeScript
encodeToString(src: Uint8Array): Promise<string>
```

Encodes the input content into a string. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [encodeToString](arkts-arkts-util-base64helper-c.md#encodetostring-1)

<!--Device-Base64-encodeToString(src: Uint8Array): Promise<string>--><!--Device-Base64-encodeToString(src: Uint8Array): Promise<string>-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the string obtained. |

<a id="encodetostringsync"></a>
## encodeToStringSync

```TypeScript
encodeToStringSync(src: Uint8Array): string
```

Performs Base64 encoding on the input Uint8Array byte array and returns the encoded string.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [encodeToStringSync](arkts-arkts-util-base64helper-c.md#encodetostringsync-1)

<!--Device-Base64-encodeToStringSync(src: Uint8Array): string--><!--Device-Base64-encodeToStringSync(src: Uint8Array): string-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

