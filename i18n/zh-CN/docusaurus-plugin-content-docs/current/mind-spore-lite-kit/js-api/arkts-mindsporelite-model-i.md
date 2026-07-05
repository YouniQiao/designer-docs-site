# Model

Provides manages model function. Including get inputs, predict ,resize.

**起始版本：** 10

**系统能力：** SystemCapability.AI.MindSporeLite

## 导入模块

```TypeScript
import { mindSporeLite } from '@kit.MindSporeLiteKit';
```

## exportModel

```TypeScript
exportModel(
      modelFile: string,
      quantizationType?: QuantizationType,
      exportInferenceOnly?: boolean,
      outputTensorName?: string[]): boolean
```

Export train model to file

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| modelFile | string | 是 | model file path. |
| quantizationType | QuantizationType | 否 |  |
| exportInferenceOnly | boolean | 否 |  |
| outputTensorName | string[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - the boolean result if the operation is successful |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
let newPath = '/newpath/to';
let exportPath = newPath + "/new_model.ms";
mindSporeLite.loadTrainModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  mindSporeLiteModel.trainMode = true;
  console.info(`Succeeded in setting train mode. Model file: ${modelFile}`);
  
  let ret = mindSporeLiteModel.exportModel(exportPath, mindSporeLite.QuantizationType.NO_QUANT, true);
  if (ret === false) {
    console.error(`Failed to export model. Source: ${modelFile}, Target: ${exportPath}, Quantization type: NO_QUANT, Inference only: true`);
  } else {
    console.info(`Succeeded in exporting model. Source: ${modelFile}, Target: ${exportPath}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load train model. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## exportWeightsCollaborateWithMicro

```TypeScript
exportWeightsCollaborateWithMicro(
      weightFile: string,
      isInference?: boolean,
      enableFp16?: boolean,
      changeableWeightsName?: string[]): boolean
```

Export model's weights, which can be used in micro only. Only valid for Lite Train

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| weightFile | string | 是 | weight file path |
| isInference | boolean | 否 |  |
| enableFp16 | boolean | 否 |  |
| changeableWeightsName | string[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | the boolean result if the operation is successful |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
let microWeight = '/path/to/xxx.bin';
mindSporeLite.loadTrainModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let ret = mindSporeLiteModel.exportWeightsCollaborateWithMicro(microWeight);
  if (ret === false) {
    console.error(`Failed to export weights for micro. Model file: ${modelFile}, Target weight file: ${microWeight}`);
  } else {
    console.info(`Succeeded in exporting weights for micro. Model file: ${modelFile}, Target weight file: ${microWeight}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load train model. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## getInputs

```TypeScript
getInputs(): MSTensor[]
```

Get model input tensors.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MSTensor[] | the MSTensor array of the inputs. |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}, Total inputs: ${modelInputs.length}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load model. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## getWeights

```TypeScript
getWeights(): MSTensor[]
```

Obtain all weights of the model

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MSTensor[] | the weight tensors of the model |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let modelFile = 'xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(modelFile)
  .then((modelBuffer: Uint8Array) => {
    mindSporeLite.loadTrainModelFromBuffer(modelBuffer.buffer.slice(0))
      .then((mindSporeLiteModel: mindSporeLite.Model) => {
        mindSporeLiteModel.trainMode = true;
        console.info(`Succeeded in setting train mode. Model file: ${modelFile}`);
        
        const weights = mindSporeLiteModel.getWeights();
        if (weights == null || weights.length === 0) {
          console.error(`Failed to get model weights. Model file: ${modelFile}, Weights count: ${weights ? weights.length : 0}`);
        } else {
          console.info(`Succeeded in getting model weights. Model file: ${modelFile}, Weights count: ${weights.length}`);
          for (let i = 0; i < Math.min(3, weights.length); i++) {
            console.info(`Weight[${i}]: name=${weights[i].name}, shape=[${weights[i].shape.join(', ')}], dtype=${weights[i].dtype}, dataSize=${weights[i].dataSize}`);
          }
        }
      })
      .catch((error: Error) => {
        console.error(`Failed to load train model from buffer. Model file: ${modelFile}, Buffer size: ${modelBuffer.byteLength}, Error: ${error.message}`);
      });
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read model file from resources. File name: ${modelFile}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## predict

```TypeScript
predict(inputs: MSTensor[], callback: Callback<MSTensor[]>): void
```

Infer model

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputs | MSTensor[] | 是 | indicates the MSTensor array of the inputs. |
| callback | Callback&lt;MSTensor[]> | 是 | the callback of MSTensor array. |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

// 预处理后的模型输入数据文件名
let inputName = 'input_data.bin';
let modelFile: string = '/path/to/xxx.ms';
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
      console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: ${modelInputs ? modelInputs.length : 0}`);
      return;
    }

    modelInputs[0].setData(inputBuffer);
    console.info(`Succeeded in setting input data. Input tensor: ${modelInputs[0].name}`);
    
    mindSporeLiteModel.predict(modelInputs, (mindSporeLiteTensor: mindSporeLite.MSTensor[]) => {
      if (mindSporeLiteTensor == null || mindSporeLiteTensor.length === 0) {
        console.error(`Failed to get prediction output. Model file: ${modelFile}, Output count: ${mindSporeLiteTensor ? mindSporeLiteTensor.length : 0}`);
      } else {
        let output = new Float32Array(mindSporeLiteTensor[0].getData());
        console.info(`Succeeded in prediction. Output length: ${output.length}`);
        for (let i = 0; i < Math.min(5, output.length); i++) {
          console.info(`Output[${i}]: ${output[i].toString()}`);
        }
      }
    })
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read input data. File name: ${inputName}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## predict

```TypeScript
predict(inputs: MSTensor[]): Promise<MSTensor[]>
```

Infer model

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputs | MSTensor[] | 是 | indicates the MSTensor array of the inputs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MSTensor[]> | the promise returned by the function. |

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
      console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: ${modelInputs ? modelInputs.length : 0}`);
      return;
    }
    
    modelInputs[0].setData(inputBuffer);
    console.info(`Succeeded in setting input data. Input tensor: ${modelInputs[0].name}`);
    
    mindSporeLiteModel.predict(modelInputs).then((mindSporeLiteTensor: mindSporeLite.MSTensor[]) => {
      if (mindSporeLiteTensor == null || mindSporeLiteTensor.length === 0) {
        console.error(`Failed to get prediction output. Model file: ${modelFile}, Output count: ${mindSporeLiteTensor ? mindSporeLiteTensor.length : 0}`);
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

## resize

```TypeScript
resize(inputs: MSTensor[], dims: Array<Array<int>>): boolean
```

resize model input

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputs | MSTensor[] | 是 | indicates the MSTensor array of the inputs. |
| dims | Array&lt;Array&lt;int>> | 是 | indicates the target new shape array |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | the boolean result if the resize operation is successful |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  let originalShape = modelInputs[0].shape;
  console.info(`Original input shape: [${originalShape.join(', ')}]`);
  
  let newDim = [[1, 32, 32, 1]];
  let ret = mindSporeLiteModel.resize(modelInputs, newDim);
  
  if (ret === false) {
    console.error(`Failed to resize model inputs. Model file: ${modelFile}, Original shape: [${originalShape.join(', ')}], Target shape: [${newDim[0].join(', ')}]`);
  } else {
    console.info(`Succeeded in resizing model inputs. Model file: ${modelFile}, Original shape: [${originalShape.join(', ')}], New shape: [${modelInputs[0].shape.join(', ')}]`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load model. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## runStep

```TypeScript
runStep(inputs: MSTensor[]): boolean
```

Train model by step

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputs | MSTensor[] | 是 | indicates the MSTensor array of the inputs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | the boolean result if the runStep operation is successful |

**示例：**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadTrainModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  mindSporeLiteModel.trainMode = true;
  console.info(`Succeeded in setting train mode. Model file: ${modelFile}, Train mode: ${mindSporeLiteModel.trainMode}`);
  
  const modelInputs = mindSporeLiteModel.getInputs();
  if (modelInputs == null || modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: ${modelInputs ? modelInputs.length : 0}`);
    return;
  }
  
  let ret = mindSporeLiteModel.runStep(modelInputs);
  if (ret === false) {
    console.error(`Failed to run training step. Model file: ${modelFile}, Input count: ${modelInputs.length}`);
  } else {
    console.info(`Succeeded in running training step. Model file: ${modelFile}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load train model. Model file: ${modelFile}, Error: ${error.message}`);
});

```

## setupVirtualBatch

```TypeScript
setupVirtualBatch(virtualBatchMultiplier: int, lr: double, momentum: double): boolean
```

Setup training with virtual batches

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| virtualBatchMultiplier | int | 是 | virtual batch multiplier, use any number &lt; 1 to disable |
| lr | double | 是 | learning rate to use for virtual batch, -1 for internal configuration |
| momentum | double | 是 | batch norm momentum to use for virtual batch, -1 for internal configuration |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | the boolean result if the operation is successful |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let modelFile = 'xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(modelFile)
  .then((modelBuffer: Uint8Array) => {
    mindSporeLite.loadTrainModelFromBuffer(modelBuffer.buffer.slice(0))
      .then((mindSporeLiteModel: mindSporeLite.Model) => {
        mindSporeLiteModel.trainMode = true;
        console.info(`Succeeded in setting train mode. Model file: ${modelFile}`);
        
        let virtualBatchMultiplier = 2;
        let lr = -1;
        let momentum = -1;
        
        let ret = mindSporeLiteModel.setupVirtualBatch(virtualBatchMultiplier, lr, momentum);
        if (ret === false) {
          console.error(`Failed to setup virtual batch. Model file: ${modelFile}, Virtual batch multiplier: ${virtualBatchMultiplier}, Learning rate: ${lr}, Momentum: ${momentum}`);
        } else {
          console.info(`Succeeded in setting up virtual batch. Model file: ${modelFile}, Virtual batch multiplier: ${virtualBatchMultiplier}`);
        }
      })
      .catch((error: Error) => {
        console.error(`Failed to load train model from buffer. Model file: ${modelFile}, Buffer size: ${modelBuffer.byteLength}, Error: ${error.message}`);
      });
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read model file from resources. File name: ${modelFile}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## updateWeights

```TypeScript
updateWeights(weights: MSTensor[]): boolean
```

Update weights of the model

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| weights | MSTensor[] | 是 | indicates the MSTensor array of the inputs |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | the boolean result if updating weights operation is successful |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let modelFile = 'xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(modelFile)
  .then((modelBuffer: Uint8Array) => {
    mindSporeLite.loadTrainModelFromBuffer(modelBuffer.buffer.slice(0))
      .then((mindSporeLiteModel: mindSporeLite.Model) => {
        mindSporeLiteModel.trainMode = true;
        console.info(`Succeeded in setting train mode. Model file: ${modelFile}`);
        
        const weights = mindSporeLiteModel.getWeights();
        if (weights == null || weights.length === 0) {
          console.error(`Failed to get model weights. Model file: ${modelFile}, Weights count: ${weights ? weights.length : 0}`);
          return;
        }
        
        let ret = mindSporeLiteModel.updateWeights(weights);
        if (ret === false) {
          console.error(`Failed to update model weights. Model file: ${modelFile}, Weights count: ${weights.length}`);
        } else {
          console.info(`Succeeded in updating model weights. Model file: ${modelFile}, Weights count: ${weights.length}`);
        }
      })
      .catch((error: Error) => {
        console.error(`Failed to load train model from buffer. Model file: ${modelFile}, Buffer size: ${modelBuffer.byteLength}, Error: ${error.message}`);
      });
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read model file from resources. File name: ${modelFile}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

## learningRate

```TypeScript
learningRate?: double
```

The learning rate of the training model

**类型：** double

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

## trainMode

```TypeScript
trainMode?: boolean
```

The running mode of the model

**类型：** boolean

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

