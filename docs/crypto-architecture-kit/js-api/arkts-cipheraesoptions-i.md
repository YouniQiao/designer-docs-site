# CipherAesOptions

调用cipher aes方法时，传入的参数。

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## Modules to Import

```TypeScript
import { CipherAesOptions,CipherResponse,CipherRsaOptions } from '@kit.CryptoArchitectureKit';
```

## fail

```TypeScript
fail: (data: string, code: number) => void
```

接口调用失败的回调函数。

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## success

```TypeScript
success: (data: CipherResponse) => void
```

接口调用成功的回调函数。

**Type:** (data: CipherResponse) => void

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## ivLen

```TypeScript
ivLen?: string
```

AES加解密的初始向量字节长度，当前为预留字段，默认值16，仅支持16。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## ivOffset

```TypeScript
ivOffset?: string
```

AES加解密的初始向量偏移，默认值0，仅支持0。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## action

```TypeScript
action: string
```

加解密操作类型，可选项有： 1. encrypt 加密； 2. decrypt 解密。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## text

```TypeScript
text: string
```

待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## complete

```TypeScript
complete: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## transformation

```TypeScript
transformation?: string
```

AES算法的加密模式和填充项，默认AES/CBC/PKCS5Padding。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## iv

```TypeScript
iv?: string
```

AES加解密的初始向量，经过base64编码后的字符串，默认值为key值。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

## key

```TypeScript
key: string
```

加密或解密使用到的密钥，经过 base64 编码后生成的字符串。

**Type:** string

**Since:** 3

**Deprecated since:** 11

**Substitute:** ohos.security.cryptoFramework.Cipher

**System capability:** SystemCapability.Security.Cipher

