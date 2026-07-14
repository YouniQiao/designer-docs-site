# Base64Helper

Provides encoding and decoding for Base64 and Base64URL. The Base64 encoding table contains 64 characters, which are the uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and the special characters plus sign (+) and slash (/). During encoding, the original data is divided into groups of three bytes, and each group contains a 6-bit number. Then, the corresponding characters in the Base64 encoding table are used to represent these numbers. If the last group contains only one or two bytes, the equal sign (=) is used for padding. The Base64URL encoding table contains 64 characters, which are the uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and the special characters plus sign (+) and slash (/). The Base64URL encoding result does not contain equal signs (=).

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

A constructor used to create a **Base64Helper** instance.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## decode

```TypeScript
decode(src: Uint8Array | string, options?: Type): Promise<Uint8Array>
```

Decodes the input content into a Uint8Array object. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | Uint8Array object or string to decode. |
| options | Type | No | Decoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 decoding.<br>- **util.Type.MIME**: Base64 decoding. The input parameter **src** containscarriage return characters and newline characters.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL decoding.<br>- **util.Type.MIME_URL_SAFE**: Base64 URL decoding. The input parameter **src** contains carriage returncharacters and newline characters.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise used to return the Uint8Array object obtained. |

## decodeSync

```TypeScript
decodeSync(src: Uint8Array | string, options?: Type): Uint8Array
```

Decodes a string into a Uint8Array object. This API returns the result synchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | Uint8Array object or string to decode. |
| options | Type | No | Decoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 decoding.<br>- **util.Type.MIME**: Base64 decoding. The input parameter **src** containscarriage return characters and newline characters.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL decoding.<br>- **util.Type.MIME_URL_SAFE**: Base64 URL decoding. The input parameter **src** contains carriage returncharacters and newline characters.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Uint8Array object obtained. |

## encode

```TypeScript
encode(src: Uint8Array, options?: Type): Promise<Uint8Array>
```

Encodes the input content into a Uint8Array object. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |
| options | Type | No | Encoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 encoding.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL encoding.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise used to return the Uint8Array object obtained. |

## encodeSync

```TypeScript
encodeSync(src: Uint8Array, options?: Type): Uint8Array
```

Encodes the input content into a Uint8Array object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |
| options | Type | No | Encoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 encoding.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL encoding.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Uint8Array object obtained. |

## encodeToString

```TypeScript
encodeToString(src: Uint8Array, options?: Type): Promise<string>
```

Encodes the input content into a string. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |
| options | Type | No | Encoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 encoding. The return value does not contain carriage return characters or newlinecharacters.<br>- **util.Type.MIME**: Base64 encoding. Each line of the return value contains a maximum of 76characters and ends with '\r\n'.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL encoding. The return value doesnot contain carriage return characters or newline characters.<br>- **util.Type.MIME_URL_SAFE**: Base64URLencoding. Each line in the return value contains a maximum of 76 characters and ends with '\r\n'.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the string obtained. |

## encodeToStringSync

```TypeScript
encodeToStringSync(src: Uint8Array, options?: Type): string
```

Performs Base64 encoding on the input Uint8Array byte array and returns a string. This method supports multiple encoding formats, including standard Base64 encoding, MIME-compliant Base64 encoding (with line breaks), and URL- safe Base64 encoding.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | Uint8Array object to encode. |
| options | Type | No | Encoding format.<br>The following values are available:<br>- **util.Type.BASIC** (default): Base64 encoding. The return value does not contain carriage return characters or newlinecharacters.<br>- **util.Type.MIME**: Base64 encoding. If the return value exceeds 76 characters, a line breakis inserted every 76 characters, and each line ends with '\r\n'. If the return value is fewer than 76characters, an exception is thrown.<br>- **util.Type.BASIC_URL_SAFE**: Base64URL encoding. The return valuedoes not contain carriage return characters or newline characters.<br>- **util.Type.MIME_URL_SAFE**: Base64URL encoding. Each line in the return value contains a maximum of 76 characters and ends with '\r\n'.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

