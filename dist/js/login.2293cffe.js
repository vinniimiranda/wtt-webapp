(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{9336:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"container mx-auto mt-5"},[a("b-card",{staticClass:"mx-auto w-75"},[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"center"},[t._v("Cadastro")])])],1),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.cadastrar()}}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Nome","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Digite seu nome"},model:{value:t.form.nome,callback:function(e){t.$set(t.form,"nome",e)},expression:"form.nome"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"E-mail","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"email",required:"",placeholder:"Digite seu e-mail"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input-group-3",label:"Senha: ","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"password",required:"",placeholder:"Digite sua senha"},model:{value:t.form.senha,callback:function(e){t.$set(t.form,"senha",e)},expression:"form.senha"}})],1),a("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"success"}},[t._v("Enviar")])],1)],1)],1)},o=[],r=(a("0dcc"),{data:function(){return{form:{nome:"",email:"",senha:""}}},methods:{cadastrar:function(){var t=this;this.$store.dispatch("cadastrar",this.form).then(function(e){201==e.status&&(t.$toasted.show("Usuário ".concat(e.data.nome," criado com sucesso com sucesso"),{className:"bg-success"}).goAway(3e3),t.$store.dispatch("login",t.form).then(function(e){200==e.status&&t.$router.push("/")}))}).catch(function(e){401===e.status&&t.$toasted.show("Erro ao criar usuário ".concat(t.form.nome),{className:"bg-danger"}).goAway(3e3)})}}}),n=r,i=a("2877"),u=Object(i["a"])(n,s,o,!1,null,null,null);e["default"]=u.exports},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"container mx-auto mt-5"},[a("b-card",{staticClass:"mx-auto w-75"},[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"center"},[t._v("Login")])])],1),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("b-form-group",{attrs:{id:"input-group-1",label:"E-mail","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Digite seu e-mail"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Senha: ","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Digite sua senha"},model:{value:t.form.senha,callback:function(e){t.$set(t.form,"senha",e)},expression:"form.senha"}})],1),a("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"success"}},[t._v("Enviar")])],1)],1)],1)},o=[],r=(a("0dcc"),{data:function(){return{form:{email:"",senha:""}}},methods:{login:function(){var t=this;this.$store.dispatch("login",this.form).then(function(e){200===e.status&&(t.$toasted.show("Bem-vindo ao sistema ".concat(e.data.user.nome),{className:"bg-success"}).goAway(3e3),setTimeout(function(){return t.$router.push("/")},2e3))}).catch(function(e){t.$toasted.show("".concat(e.data.erro),{className:"bg-danger"}).goAway(3e3)})}}}),n=r,i=a("2877"),u=Object(i["a"])(n,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=login.2293cffe.js.map