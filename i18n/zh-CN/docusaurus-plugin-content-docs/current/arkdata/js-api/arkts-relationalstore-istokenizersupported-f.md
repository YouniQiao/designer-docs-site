# isTokenizerSupported

## isTokenizerSupported

```TypeScript
function isTokenizerSupported(tokenizer: Tokenizer): boolean
```

Checks whether the specified tokenizer is supported. This API returns the result synchronously. This API returns **true** if the specified tokenizer is supported; returns **false** otherwise.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenizer | Tokenizer | 是 | Tokenizer to check. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the specified tokenizer is supported; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
let customType = relationalStore.Tokenizer.CUSTOM_TOKENIZER;
let customTypeSupported = relationalStore.isTokenizerSupported(customType);
console.info("custom tokenizer supported on current platform: " + customTypeSupported);

```

