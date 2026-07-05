# AsyKeySpecType

```TypeScript
enum AsyKeySpecType
```

表示密钥参数类型的枚举。

**Since:** 10

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## COMMON_PARAMS_SPEC

```TypeScript
COMMON_PARAMS_SPEC = 0
```

表示公私钥中包含的公共参数。使用此类型的参数可以调用 [generateKeyPair]cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>) 随机生成密钥对。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## PRIVATE_KEY_SPEC

```TypeScript
PRIVATE_KEY_SPEC = 1
```

表示私钥中包含的参数。使用此类型的参数可以调用 [generatePriKey]cryptoFramework.AsyKeyGeneratorBySpec.generatePriKey(callback: AsyncCallback<PriKey>)生成 指定的私钥。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## PUBLIC_KEY_SPEC

```TypeScript
PUBLIC_KEY_SPEC = 2
```

表示公钥中包含的参数。使用此类型的参数可以调用 [generatePubKey]cryptoFramework.AsyKeyGeneratorBySpec.generatePubKey(callback: AsyncCallback<PubKey>)生成 指定的公钥。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## KEY_PAIR_SPEC

```TypeScript
KEY_PAIR_SPEC = 3
```

表示公私钥中包含的全量参数。使用此类型的参数可以调用 [generateKeyPair]cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>) 生成指定的密钥对。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

