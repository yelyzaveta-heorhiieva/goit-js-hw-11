import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),t=a.elements.email,l=a.elements.message,o="feedback-form-state",s=localStorage.getItem(o);s&&(l.value=JSON.parse(s).message,t.value=JSON.parse(s).email,e.email=t.value,e.message=l.value);a.addEventListener("input",m=>{e.email=t.value.trim(),e.message=l.value.trim(),localStorage.setItem(o,JSON.stringify(e))});a.addEventListener("submit",m=>{m.preventDefault(),t.value&&l.value?(console.log(e),localStorage.removeItem(o),a.reset()):alert("Fill please all fields")});
//# sourceMappingURL=2-form.js.map
