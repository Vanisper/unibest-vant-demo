import type { Api, Rule } from '@form-create/vant'

// 表单配置选项
export const stepsFormOptions = {
  form: {
    labelAlign: 'left',
  },
  // 取消显示提交和重置按钮，由外部组件提供
  submitBtn: {
    show: false,
  },
  resetBtn: {
    show: false,
  },
}

export interface StepData<T extends Record<string, any> = Record<string, any>> {
  text: string
  desc: string
  api?: Api | null
  rules?: Rule[]
  data?: T
}

// 步骤信息配置
export const stepsData: StepData[] = [
  { text: '基本信息', desc: '填写个人基本信息' },
  { text: '详细信息', desc: '补充详细资料' },
  { text: '确认提交', desc: '检查并提交信息' },
]

// 第一步：基本信息表单规则
export const step1Rules: Rule[] = [
  {
    type: 'input',
    field: 'realName',
    title: '真实姓名',
    value: '',
    props: {
      placeholder: '请输入真实姓名',
      clearable: true,
    },
    validate: [
      { required: true, message: '请输入真实姓名', trigger: 'blur' },
    ],
  },
  {
    type: 'radio',
    field: 'gender',
    title: '性别',
    value: '',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ],
    validate: [
      { required: true, message: '请选择性别', trigger: 'blur' },
    ],
  },
  {
    type: 'datePicker',
    field: 'birthday',
    title: '出生日期',
    value: '',
    props: {
      placeholder: '请选择出生日期',
    },
    validate: [
      { required: true, message: '请选择出生日期', trigger: 'blur' },
    ],
  },
  {
    type: 'input',
    field: 'phone',
    title: '手机号码',
    value: '',
    props: {
      placeholder: '请输入手机号码',
      clearable: true,
    },
    validate: [
      { required: true, message: '请输入手机号码', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' },
    ],
  },
]

// 第二步：详细信息表单规则
export const step2Rules: Rule[] = [
  {
    type: 'select',
    field: 'education',
    title: '学历',
    value: '',
    options: [
      { text: '高中及以下', value: 'high_school' },
      { text: '大专', value: 'college' },
      { text: '本科', value: 'bachelor' },
      { text: '硕士', value: 'master' },
      { text: '博士', value: 'doctor' },
    ],
    props: {
      placeholder: '请选择学历',
    },
    validate: [
      { required: true, message: '请选择学历', trigger: 'blur' },
    ],
  },
  {
    type: 'cascader',
    field: 'address',
    title: '居住地址',
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
      placeholder: '请选择居住地址',
    },
    validate: [
      { required: true, message: '请选择居住地址', trigger: 'blur' },
    ],
  },
  {
    type: 'checkbox',
    field: 'skills',
    title: '技能特长',
    value: [],
    options: [
      { label: '前端开发', value: 'frontend' },
      { label: '后端开发', value: 'backend' },
      { label: '移动开发', value: 'mobile' },
      { label: '数据分析', value: 'data' },
      { label: '设计', value: 'design' },
    ],
    validate: [
      { required: true, message: '请至少选择一项技能', trigger: 'blur' },
    ],
  },
  {
    type: 'input',
    field: 'introduction',
    title: '个人简介',
    value: '',
    props: {
      type: 'textarea',
      rows: 4,
      placeholder: '请简单介绍一下自己',
      clearable: true,
      showWordLimit: true,
      maxlength: 200,
    },
  },
]
