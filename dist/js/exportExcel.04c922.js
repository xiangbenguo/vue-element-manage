(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{588:function(e,a,l){},686:function(e,a,l){"use strict";var t=l(588);l.n(t).a},769:function(e,a,l){"use strict";l.r(a);var t={components:{ExportExcel:l(610).a},data:function(){return{fileName:"",tableData:[{name:"张三",age:21,gender:"男",mobilePhone:"15999999991",email:"",graduationDate:"2005/07/01",isMarry:"否"},{name:"赵六",age:20,gender:"男",mobilePhone:"",email:"1235@qq.com",graduationDate:"2011/08/10",isMarry:"是"},{name:"李四",age:30,gender:"",mobilePhone:"15999999939",email:"1236@qq.com",graduationDate:"1997/06/05",isMarry:"否"},{name:"王五",age:28,gender:"男",mobilePhone:"15999999996",email:"12387777777777777777777777@qq.com",graduationDate:"1998/06/05",isMarry:"是"}],excelHeader:["姓名","年龄","性别","电话","电子邮箱","毕业时间","婚否"],filterFiled:["name","age","gender","mobilePhone","email","graduationDate","isMarry"]}}},r=(l(686),l(79)),n=Object(r.a)(t,function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"请输入要导出的文件的名称，默认为“数据”。"},model:{value:e.fileName,callback:function(a){e.fileName=a},expression:"fileName"}}),e._v(" "),l("export-excel",{attrs:{"file-name":e.fileName,header:e.excelHeader,"filter-filed":e.filterFiled,data:e.tableData,"auto-width":!0}},[e._v("导出excel")]),e._v(" "),l("el-table",{attrs:{border:"","highlight-current-row":"",data:e.tableData}},[l("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"age",label:"年龄"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"性别"}}),e._v(" "),l("el-table-column",{attrs:{prop:"mobilePhone",label:"手机号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"email",label:"电子邮箱"}}),e._v(" "),l("el-table-column",{attrs:{prop:"graduationDate",label:"毕业时间"}}),e._v(" "),l("el-table-column",{attrs:{prop:"isMarry",label:"婚否"}})],1)],1)},[],!1,null,"d547512c",null);n.options.__file="ExportExcel.vue";a.default=n.exports}}]);