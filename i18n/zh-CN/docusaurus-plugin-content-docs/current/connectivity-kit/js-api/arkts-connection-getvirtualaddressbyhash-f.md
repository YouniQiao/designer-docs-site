# getVirtualAddressByHash

## getVirtualAddressByHash

```TypeScript
function getVirtualAddressByHash(algorithmType: HashAlgorithmType, hashValue: string): string
```

Obtain the virtual address of the corresponding device based on the hash value of the real address.

**起始版本：** 24

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algorithmType | HashAlgorithmType | 是 | Indicate the hash algorithm type. |
| hashValue | string | 是 | Indicate the hash value of the device MAC address. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the virtual mac address. For example, "11:22:33:AA:BB:FF". |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900003 | Bluetooth disabled. |
| 2900015 | Parameter format mismatch with specification. |
| 2900016 | Device unpaired. |
| 2900099 | Internal system error. For example, IPC error.  Detailed error messages can be used to assist in locating the problem. |

**示例：**

```TypeScript
// 若查询的真实地址为11:22:33:44:55:AA,
// 对应的64位哈希值为 d2204cb9b6d3d3962cc90fa54130efb4c10b57deb2e1aafd255596e0d4fd6789,
// 当HashAlgorithmType为HASH_ALGORITHM_SHA256时取后32位哈希值
let hashValue: string = "c10b57deb2e1aafd255596e0d4fd6789";
try {
  let addr: string = connection.getVirtualAddressByHash(connection.HashAlgorithmType.HASH_ALGORITHM_SHA256, hashValue);
} catch (err) {
  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

