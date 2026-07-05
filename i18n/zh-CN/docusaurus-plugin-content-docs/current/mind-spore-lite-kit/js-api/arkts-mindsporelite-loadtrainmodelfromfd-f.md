# loadTrainModelFromFd

## loadTrainModelFromFd

```TypeScript
function loadTrainModelFromFd(
    model: int,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from file description

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | int | 是 | model file description |
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
| 1000012 | Failed to create native training model from file descriptor (fd). Possible  causes: 1. The model file or file descriptor (fd) is incorrect; 2. The training configuration is  incorrect. [staticonly] |

**示例：**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

let modelFile = '/path/to/xxx.ms';
let file = fileIo.openSync(modelFile, fileIo.OpenMode.READ_ONLY);
mindSporeLite.loadTrainModelFromFd(file.fd).then((mindSporeLiteModel: mindSporeLite.Model) => {
  console.info(`Succeeded in loading train model. Train mode: ${mindSporeLiteModel.trainMode}`);
}).catch((error: Error) => {
  console.error(`Failed to load train model from file descriptor. Model file: ${modelFile}, File descriptor: ${file.fd}, Error: ${error.message}`);
});

```

