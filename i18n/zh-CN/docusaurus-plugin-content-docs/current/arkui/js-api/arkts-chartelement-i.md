# ChartElement

The <chart> component displays line charts, gauge charts, and bar charts.

**继承实现关系：** ChartElement继承自：Element。

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## append

```TypeScript
append(params: {
    /**
     * Set the data subscript of the line chart to be updated.
     *
     *****/
    serial: number;
    /**
     * Set the new data.
     *
     *****/
    data: Array<number>;
  }): void
```

Data is dynamiconlyally added to an existing data sequence. The target sequence is specified based on serial, which is the subscript of the datasets array and starts from 0. datasets[index].data is not updated. Only line charts support this attribute. The value is incremented by 1 based on the horizontal coordinate and is related to the xAxis min/max setting.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | {
    /**
     * Set the data subscript of the line chart to be updated.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @famodelonly
     * @since 4 dynamiconly
     */
    serial: number;
    /**
     * Set the new data.
     *
     * @type { Array&lt;number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @famodelonly
     * @since 4 dynamiconly
     */
    data: Array&lt;number>;
  } | 是 |  |

