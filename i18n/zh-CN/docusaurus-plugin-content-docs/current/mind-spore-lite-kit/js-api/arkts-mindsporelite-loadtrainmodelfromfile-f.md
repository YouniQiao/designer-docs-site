# loadTrainModelFromFile

## loadTrainModelFromFile

```TypeScript
function loadTrainModelFromFile(
    model: string,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from file

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | string | 是 | model file path |
| trainCfg | TrainCfg | 否 |  |
| context | Context | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Model> | the promise of the built model |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000008 | Invalid model path in training. Possible causes: 1. The model path is null; 2.  The model path does not exist. [staticonly] |
| 1000009 | Failed to create native training model from path. Possible causes: 1. The model  file is incorrect; 2. The training configuration is incorrect. [staticonly] |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadTrainModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load train model from file. Model file: ${modelFile}, Error: ${error.message}`);
});

```

