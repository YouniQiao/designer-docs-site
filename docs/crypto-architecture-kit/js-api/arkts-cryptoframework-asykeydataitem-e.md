# AsyKeyDataItem

```TypeScript
enum AsyKeyDataItem
```

表示非对称密钥数据项类型的枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_DSA_PRIVATE_SEED

```TypeScript
ML_DSA_PRIVATE_SEED = 0
```

ML-DSA私钥的私有种子。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_DSA_PRIVATE_RAW

```TypeScript
ML_DSA_PRIVATE_RAW = 1
```

ML-DSA私钥的原始私钥数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_DSA_PUBLIC_RAW

```TypeScript
ML_DSA_PUBLIC_RAW = 2
```

ML-DSA公钥的原始公钥数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_KEM_PRIVATE_SEED

```TypeScript
ML_KEM_PRIVATE_SEED = 3
```

ML-KEM私钥的私有种子。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_KEM_PRIVATE_RAW

```TypeScript
ML_KEM_PRIVATE_RAW = 4
```

ML-KEM私钥的原始私钥数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## ML_KEM_PUBLIC_RAW

```TypeScript
ML_KEM_PUBLIC_RAW = 5
```

ML-KEM公钥的原始公钥数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## EC_PRIVATE_K

```TypeScript
EC_PRIVATE_K = 6
```

表示椭圆曲线（EC）上的私钥标量k。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## EC_PRIVATE_04_X_Y_K

```TypeScript
EC_PRIVATE_04_X_Y_K = 7
```

表示椭圆曲线（EC）密钥的复合编码04||X||Y||K，其中04||X||Y为非压缩公钥点，K为私钥标量。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## EC_PUBLIC_X_Y

```TypeScript
EC_PUBLIC_X_Y = 8
```

表示椭圆曲线（EC）公钥的 X||Y格式编码数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## EC_PUBLIC_04_X_Y

```TypeScript
EC_PUBLIC_04_X_Y = 9
```

表示椭圆曲线（EC）公钥的 04||X||Y格式编码数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

## EC_PUBLIC_COMPRESS_X

```TypeScript
EC_PUBLIC_COMPRESS_X = 10
```

表示椭圆曲线（EC）公钥的 02||X 或 03||X格式编码数据。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Key.AsymKey

