# getSupportedCloudModel

## getSupportedCloudModel

```TypeScript
function getSupportedCloudModel(): Promise<Array<CloudModelInfo>>
```

Obtains the supported cloud embedding models.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;CloudModelInfo>> | The promise returned by the function. |

**示例：**

```TypeScript
textEmbedding.getSupportedCloudModel()
  .then((info: Array<intelligence.CloudModelInfo>) => {
    console.info("Succeeded in getting CloudModelInfo");
  });

```

