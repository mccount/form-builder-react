import { generateID } from "./common";

export const FormControlNames = {
  STEPCONTAINER: "step-container",
  INPUTTEXTFIELD: "text-field",
  INPUTMULTILINE: "multiline-text-field",
  CHECKBOX: "checkbox",
  RADIOGROUP: "radio-group",
  SELECTDROPDOWN: "select-drop-down",
  DATEFIELD: "date-field",
  TIMEFIELD: "time-field",
  FILEUPLOAD: "file-upload",
  IMAGEUPLOAD: "image-upload",
  TOGGLE: "toggle",
  CHECKLIST: "checklist",
  SIGNATURE: "signature",
  MULTICHOICES: "multi-choices",
  SCANCODE: "scan-code",
  VERIFIEDID: "verified-id",
};

export const FormTextDataTypes = {
  TEXT: "text",
};

export const FormItemTypes = {
  CONTROL: "control",
  CONTAINER: "container",
};

export const AllWorkflowsSidebarDisplayTypes = {
  CREATETEMPLATE: "createTemplate",
  EDITTEMPLATE: "editTemplate",
  CREATERULE: "createRule",
  EDITRULE: "editRule",
};

export const AllWorkflowsPageView = {
  WORKFLOWRULES: "workflow-rules",
  WORKFLOWTEMPLATES: "workflow-templates",
};

export const WorkflowTemplatePublishStatus = {
  DRAFT: "draft",
  PUBLISHED: "published",
};

export const WorkflowRuleStatus = {
  ACTIVE: "active",
  NON_ACTIVE: "non-active",
};

export const FormContainerList = [
  {
    id: '',
    controlName: FormControlNames.STEPCONTAINER,
    displayText: "Workflow Step",
    itemType: FormItemTypes.CONTAINER,
    icon: "fa fa-building",
    heading: "Container Heading",
    subHeading: "Container SubHeading",
  },
];

export const FormControlList = [
  {
    id: '',
    controlName: FormControlNames.INPUTTEXTFIELD,
    displayText: "Text Field",
    placeholder: "Placeholder for Text Field",
    description: "Some Description about the field",
    labelName: "Text Field",
    itemType: FormItemTypes.CONTROL,
    dataType: FormTextDataTypes.TEXT,
    icon: "fas fa-text-height",
    required: false,
    category: "text-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.INPUTMULTILINE,
    displayText: "Notes",
    description: "Some Description about the field",
    placeholder: "Please write your notes here.",
    labelName: "Notes",
    rows: 4,
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-file",
    required: false,
    category: "text-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.RADIOGROUP,
    displayText: "Radio",
    description: "Some Description about the field",
    labelName: "Label for Radio",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-dot-circle",
    required: false,
    items: [
      {
        id: generateID(),
        value: "Button__-1",
        label: "Button 1",
      },
      {
        id: generateID(),
        value: "Button__-2",
        label: "Button 2",
      },
    ],
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.TOGGLE,
    displayText: "Toggle",
    description: "Some Description about the field",
    labelName: "Label for Toggle",
    itemType: FormItemTypes.CONTROL,
    icon: "fas fa-toggle-on",
    required: false,
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.CHECKLIST,
    displayText: "Checklist",
    description: "Some Description about the field",
    labelName: "Label for Checklist",
    itemType: FormItemTypes.CONTROL,
    icon: "fas fa-tasks",
    required: false,
    items: [
      {
        id: generateID(),
        value: "Check__-1",
        label: "Check 1",
      },
      {
        id: generateID(),
        value: "Check__-2",
        label: "Check 2",
      },
    ],
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.SELECTDROPDOWN,
    displayText: "Dropdown",
    description: "Some Description about the field",
    labelName: "Label for Dropdown",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-caret-square-down",
    required: false,
    items: [
      {
        id: generateID(),
        value: "Option__-1",
        label: "Option 1",
      },
      {
        id: generateID(),
        value: "Option__-2",
        label: "Option 2",
      },
    ],
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.CHECKBOX,
    displayText: "Checkbox",
    description: "Some Description about the field",
    labelName: "Label for Checkbox",
    placeholder: "Place Holder Text",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-check-square",
    required: false,
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.DATEFIELD,
    displayText: "Date Picker",
    description: "Some Description about the field",
    labelName: "Label for Date",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-calendar",
    required: false,
    category: "date-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.TIMEFIELD,
    displayText: "Time",
    description: "Some Description about the field",
    labelName: "Label for Time",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-clock",
    required: false,
    category: "date-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.SIGNATURE,
    displayText: "Signature",
    description: "Some Description about the field",
    labelName: "Label for Signature",
    itemType: FormItemTypes.CONTROL,
    icon: "fa fa-signature",
    required: false,
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.FILEUPLOAD,
    displayText: "Upload",
    description: "Some Description about the field",
    labelName: "Label for File Upload",
    itemType: FormItemTypes.CONTROL,
    icon: "fas fa-cloud-upload-alt",
    required: false,
    category: "media-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.IMAGEUPLOAD,
    displayText: "Image",
    description: "Some Description about the field",
    labelName: "Label for Image Upload",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-image",
    required: false,
    category: "media-elements",
    containerId: '',
  },
];
