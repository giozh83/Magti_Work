import { Component,Output,EventEmitter,HostListener } from '@angular/core';
import { app_home_class } from './app_home/app_home.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'bakuriani';
 cxrili=[];
 
//  fun=new app_home_class

 ser_element=({saxeli:'dato',gvari:'zhorzholiani'})

//  @HostListener('document:keypress',['$event'])
//  handleKeyboardEvent(event:KeyboardEvent)
 
 indikatori='from komponent'
 cvladi=''
 cvladi1=2
 for_loop= ''
 data_catch=[]
//  tes=['giorgi','avto','iveri']
  dataa=[]
  minedata=[]

  sigrze=0
  parti=''
  seriuli=''
  zveli_parti=''
 J=0
 strart_stop=0
 cvladi_part=''
 cvladi_seriuli=''



 tp=''
worker1=''
worker2=''
worker3=''
part=''
new_part=''
seriuli_1=''
alld_part=''
location=''

baind_test=''
element=[{test_elementi: 'this.baind_test'}]

// chiled_click(){
//   window.alert('send from parrent')
//   this.chilled_click_emit.emit()
// }

constructor(){

  // document.querySelector('.col_1').addEventListener('click',function(){
  //   window.alert('clicked')
  // })



console.log(this.element[0]['test_elementi'])

  const api_url1 =`http://10.218.18.93:4200/main/`
  async function getISS2_con(){
           const response = await fetch(api_url1)
            let data = await response.json()                       
            // console.log(data[i]['ALD_PURT_NUMBER'],data[i]['LOCATION'],data[i]['PART_NUMBER'])  
          return data          
  }

  getISS2_con().then(val=>{this.dataa= val
  console.log(this.dataa)
  this.minedata=this.dataa
  
if (this.strart_stop===0) {
  
  for (let i = 0; i < this.dataa.length; i++) {
    document.querySelector('.mine_2').innerHTML+=`<option class="mine_1" value=${this.dataa[i]['ALD_PURT_NUMBER']}></option>`
    this.strart_stop=1
  }

  // if (this.strart_stop===1) {
  //   window.alert('ბაზა ჩამოტვირთულია')
  // }
}


  
  // window.alert('lkkkkk')
  })
}

  windoalert(){
    this.indikatori='app_home'
}



input_cvladi(){
  const api_url_p =`http://10.218.18.93:4200/damateba/`+this.cvladi
  async function getISS1(){
           const response = await fetch(api_url_p)
            let data_p = await response.json()                       
            // console.log(data[i]['ALD_PURT_NUMBER'],data[i]['LOCATION'],data[i]['PART_NUMBER'])  
          return data_p    
                
  }
    
  


  getISS1().then(val_p=>{
    console.log(this.dataa=val_p)
    this.sigrze=this.dataa.length;
   
     this.cvladi_part=this.dataa[0]['PART_NUMBER']
     this.new_part=this.dataa[0]['PART_NUMBER']
  
  })
  
  
}





mine_data(){
  const api_url1 =`http://10.218.18.93:4200/main/`
  async function getISS2(){
           const response = await fetch(api_url1)
            let data = await response.json()                       
            // console.log(data[i]['ALD_PURT_NUMBER'],data[i]['LOCATION'],data[i]['PART_NUMBER'])  
          return data          
  }

  getISS2().then(val=>{this.dataa= val
  console.log(this.dataa)
  this.minedata=this.dataa
if (this.strart_stop===0) {
  for (let i = 0; i < this.dataa.length; i++) {
    document.querySelector('.mine_2').innerHTML+=`<option class="mine_1" value=${this.dataa[i]['ALD_PURT_NUMBER']}></option>`
    this.strart_stop=1
  }
}


  
  // window.alert('lkkkkk')
  })
}

  
fill_data_table(){

  // const api_url_p =`http://10.218.18.93:4200/damateba/`+this.cvladi
  // async function getISS4(){
  //          const response = await fetch(api_url_p)
  //           let data_p = await response.json()                       
  //           // console.log(data[i]['ALD_PURT_NUMBER'],data[i]['LOCATION'],data[i]['PART_NUMBER'])  
  //         return data_p    
                
  // }
    
  


  // getISS4().then(val_p=>{
  //   console.log(this.dataa=val_p)
  //   this.sigrze=this.dataa.length;
   
  //    this.cvladi_part=this.dataa[1]['PART_NUMBER']
  //    this.new_part=this.dataa[1]['PART_NUMBER']
  
  // })


  if (this.seriuli_1==='') {
    this.seriuli_1='no'
  }

  if (this.worker1==='') {
    this.worker1='no'
  }
  if (this.worker2==='') {
    this.worker2='no'
  }
  if (this.worker3==='') {
    this.worker3='no'
  }
  document.querySelector('.cxrili12').innerHTML=''

  document.querySelector('.cxrili12').innerHTML=`
       <tr class="row" >
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >TP</th>       
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >ძველი პარტი</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >ახალი პარტი</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >ინჟინერი</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >ინჟინერი</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >ინჟინერი</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >S/N</th>
          <th style="background-color: rgb(91, 140, 124); class="col container text-center" >მდებარეობა</th>
       </tr>
    
    `

  console.log(this.new_part)
  console.log(this.worker1)
  console.log(this.worker2)
  console.log(this.worker3)
  console.log(this.tp)
  console.log(this.seriuli_1)
  console.log(this.part)
  const api_url1 =`http://10.218.18.93:4200/new_data/`+this.tp+`/`+this.worker1+`/`+this.worker2+`/`+this.worker3+`/`+this.seriuli_1+`/`+this.new_part+`/`+this.part+'/'+this.location
  async function getISS3(){
            console.log(api_url1)
           const response = await fetch(api_url1)
            let data_find = await response.json()                       
            
          return data_find        
  }

  getISS3().then(val_find =>{
  
    // document.querySelector('.cxrili12').innerHTML=''
    for (let i = 0; i < val_find.length; i++) {
      document.querySelector('.cxrili12').innerHTML+=`
       <tr style="animation-duration: 4s;" onmouseenter="style=' background-color: red;'" onmouseleave="style='background-color: rgb(233, 242, 242);'"  class="row row1 .test_hq">
          <th class='col  col2 container text-center' ">${val_find[i]['TP']}</th>
          <th class="col  col2 container text-center" ">${val_find[i]['ALD_PURT_NUMBER']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['PART_NUMBER']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['Worker1']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['Worker2']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['Worker3']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['SERIAL_NUMBER']}</th>
          <th class='col  col2 container text-center' ">${val_find[i]['location']}</th>
       </tr>
            `
            
    }

  })

  


  
}




finde_tp_1(){
//  window.alert('girogi')
  const api_url1 =`http://10.218.18.93:4200/find_tp/`+this.tp
  async function getISS3(){
            console.log(api_url1)
           const response = await fetch(api_url1)
            let data_find = await response.json()                       
            
          return data_find        
  }

getISS3().then(tp_fiind=>{
  console.log(tp_fiind)
  this.cxrili=tp_fiind


    // console.log(this.name.ser_element.gvari)   
    // console.log(this.name.ser_element.saxeli)  
// console.log(this.tp_find)
document.querySelector('.cxrili12').innerHTML=''

document.querySelector('.cxrili12').innerHTML=`
     <tr  class="row " >
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >TP</th>       
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >ძველი პარტი</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >ახალი პარტი</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >ინჟინერი</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >ინჟინერი</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >ინჟინერი</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >S/N</th>
        <th style="background-color: rgb(91, 140, 124); class=" col1 container text-center" >მდებარეობა</th>
     </tr>
  
  `
// window.alert('ვეძებ ტპს')
for (let i = 0; i < tp_fiind.length; i++) {
  
  document.querySelector('.cxrili12').innerHTML+=`
     <tr style="animation-duration: 4s;" onmouseenter="style=' background-color: red;'" onmouseleave="style='background-color: rgb(233, 242, 242);'" class="col_${i} row row1 .test_hq "  >
        <th class='  col2 container text-center' ">${tp_fiind[i]['TP']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['ALD_PURT_NUMBER']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['PART_NUMBER']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['Worker1']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['Worker2']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['Worker3']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['SERIAL_NUMBER']}</th>
        <th class='  col2 container text-center' ">${tp_fiind[i]['location']}</th>
     </tr>
          `
  
}
  
})

}

print1(){


  // document.getElementById('hide').style.display='none'
  // window.print()
  console.log(this.ser_element.saxeli)
  
  
  
}



print(){


  document.getElementById('hide').style.display='none'
  document.getElementById('hide1').style.display='none'
  window.print()
  // console.log(this.ser_element.saxeli)
  
  
}
 
get_ip(){
  const api_url1 =`https://api.ipify.org?format=json`
  async function getISS3(){
            console.log(api_url1)
           const response = await fetch(api_url1)
            let data_find = await response.json()                       
            
          return data_find        
  }
 getISS3().then(ip=>{
  console.log(ip.ip)
  this.title=ip.ip

 
 })
 

 

}


from_p(){
  window.alert('parent cliked')
}
from_p2(){
  window.alert('parent cliked from secund button')
}


hash(input){
console.log(input.value)
}


}


