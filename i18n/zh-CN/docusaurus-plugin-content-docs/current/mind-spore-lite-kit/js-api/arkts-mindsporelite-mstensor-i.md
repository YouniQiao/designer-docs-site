# MSTensor

Provides MSTensor definition

**起始版本：** 10

**系统能力：** SystemCapability.AI.MindSporeLite

## 导入模块

```TypeScript
import { mindSporeLite } from '@kit.MindSporeLiteKit';
```

## getData

```TypeScript
getData(): ArrayBuffer
```

Get MSTensor data

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArrayBuffer | the data of tensor |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

// 预处理后的模型输入数据文件名
let inputName = 'input_data.bin';
let modelFile = '/path/to/xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(inputName)
  .then(async (buffer: Uint8Array) => {
    let inputBuffer = buffer.buffer;
    console.info(`Succeeded in reading input data. File name: ${inputName}, Buffer size: ${inputBuffer.byteLength}`);
    
    let mindSporeLiteModel: mindSporeLite.Model = await mindSporeLite.loadModelFromFile(modelFile);
    console.info(`Succeeded in loading model. Model file: ${modelFile}`);
    
    let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
    if (modelInputs == null || modelInputs.length === 0) {
      console.error(`Failed to get model inputs. Model file: ${modelFile}`);
      return;
    }
    
    modelInputs[0].setData(inputBuffer);
    console.info(`Succeeded in setting input data. Input tensor: ${modelInputs[0].name}`);
    
    mindSporeLiteModel.predict(modelInputs).then((mindSporeLiteTensor: mindSporeLite.MSTensor[]) => {
      if (mindSporeLiteTensor == null || mindSporeLiteTensor.length === 0) {
        console.error(`Failed to get prediction output. Model file: ${modelFile}`);
      } else {
        let output = new Float32Array(mindSporeLiteTensor[0].getData());
        console.info(`Succeeded in prediction. Output length: ${output.length}`);
        for (let i = 0; i < Math.min(5, output.length); i++) {
          console.info(`Output[${i}]: ${output[i].toString()}`);
        }
      }
    }).catch((error: Error) => {
      console.error(`Failed to execute prediction. Model file: ${modelFile}, Error: ${error.message}`);
    });
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read input data. File name: ${inputName}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## setData

```TypeScript
setData(inputArray: ArrayBuffer): void
```

Set MSTensor data

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputArray | ArrayBuffer | 是 | indicates the buffer of tensor |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000013 | Failed to set MSTensor data. Possible causes: 1. The input array buffer size  is incorrect. [staticonly] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

// 预处理后的模型输入数据文件名
let inputName = 'input_data.bin';
let modelFile = '/path/to/xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(inputName)
  .then(async (buffer: Uint8Array) => {
    let inputBuffer = buffer.buffer;
    console.info(`Succeeded in reading input data. File name: ${inputName}, Buffer size: ${inputBuffer.byteLength}`);
    
    let mindSporeLiteModel: mindSporeLite.Model = await mindSporeLite.loadModelFromFile(modelFile);
    console.info(`Succeeded in loading model. Model file: ${modelFile}`);
    
    let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
    if (modelInputs == null || modelInputs.length === 0) {
      console.error(`Failed to get model inputs. Model file: ${modelFile}`);
      return;
    }
    
    modelInputs[0].setData(inputBuffer);
    console.info(`Succeeded in setting input data. Input tensor: ${modelInputs[0].name}, Buffer size: ${inputBuffer.byteLength}`);
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read input data. File name: ${inputName}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## shape

```TypeScript
shape: int[]
```

The shape of the tensor.

**类型：** int[]

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## format

```TypeScript
format: Format
```

The format of the tensor.

**类型：** Format

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## name

```TypeScript
name: string
```

The name of the tensor.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## dtype

```TypeScript
dtype: DataType
```

The data type of the tensor.

**类型：** DataType

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## dataSize

```TypeScript
dataSize: int
```

The data size of the tensor, the unit is byte.

**类型：** int

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## elementNum

```TypeScript
elementNum: int
```

The number of elements in the tensor.

**类型：** int

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

