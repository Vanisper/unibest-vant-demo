import type { Rule } from '@form-create/vant'

/**
 * 表单配置选项
 * @link https://tdesign.tencent.com/vue-next/components/form?tab=api
 */
export const formOptions = {
  form: {
    labelAlign: 'left',
  },
}

// 表单规则配置
export const defaultFormRules: Rule[] = [
  // 基础信息区
  {
    type: 'input',
    field: 'name',
    title: '姓名',
    value: '张三',
    props: {
      placeholder: '请输入您的姓名',
      clearable: true,
    },
    validate: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
  },
  {
    type: 'stepper',
    field: 'age',
    title: '年龄',
    value: 25,
    props: {
      min: 1,
      max: 100,
      step: 1,
    },
  },
  {
    type: 'radio',
    field: 'gender',
    title: '性别',
    value: 'male',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
      { label: '其他', value: 'other' },
    ],
  },

  // 偏好设置区
  {
    type: 'checkbox',
    field: 'hobbies',
    title: '兴趣爱好',
    value: [],
    options: [
      { label: '阅读', value: 'reading' },
      { label: '旅行', value: 'travel' },
      { label: '运动', value: 'sports' },
      { label: '音乐', value: 'music' },
      { label: '摄影', value: 'photography' },
    ],
  },
  {
    type: 'select',
    field: 'city',
    title: '所在城市',
    value: 'beijing',
    options: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
      { label: '广州', value: 'guangzhou' },
      { label: '深圳', value: 'shenzhen' },
      { label: '杭州', value: 'hangzhou' },
    ],
    props: {
      placeholder: '请选择城市',
    },
  },
  {
    type: 'switch',
    field: 'notifications',
    title: '接收通知',
    value: true,
  },

  // 时间相关
  {
    type: 'datePicker',
    field: 'birthday',
    title: '出生日期',
    value: '',
    props: {
      placeholder: '请选择出生日期',
    },
  },
  {
    type: 'timePicker',
    field: 'reminderTime',
    title: '提醒时间',
    value: '',
    props: {
      placeholder: '请选择提醒时间',
    },
  },

  // 评价交互
  {
    type: 'rate',
    field: 'satisfaction',
    title: '满意度评分',
    value: 4,
    props: {
      count: 5,
      allowHalf: true,
    },
  },
  {
    type: 'slider',
    field: 'priceRange',
    title: '价格区间',
    value: 50,
    props: {
      min: 0,
      max: 100,
      step: 10,
    },
  },

  // 高级功能
  {
    type: 'cascader',
    field: 'region',
    title: '地区选择',
    value: '',
    options: [
      {
        text: '广东省',
        value: 'guangdong',
        children: [
          { text: '深圳市', value: 'shenzhen' },
          { text: '广州市', value: 'guangzhou' },
          { text: '东莞市', value: 'dongguan' },
        ],
      },
      {
        text: '浙江省',
        value: 'zhejiang',
        children: [
          { text: '杭州市', value: 'hangzhou' },
          { text: '宁波市', value: 'ningbo' },
          { text: '温州市', value: 'wenzhou' },
        ],
      },
    ],
    props: {
      placeholder: '请选择地区',
    },
  },

  // 文本域
  {
    type: 'input',
    field: 'description',
    title: '个人描述',
    value: '',
    props: {
      type: 'textarea',
      rows: 3,
      placeholder: '请输入个人描述',
      clearable: true,
      showWordLimit: true,
      maxlength: 200,
    },
  },
]
