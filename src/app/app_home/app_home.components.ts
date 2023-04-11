import { Component,Input,EventEmitter,Output, ViewChild, ElementRef } from "@angular/core";
import{AppComponent} from '../app.component'
// import "~bootstrap/dist/css/bootstrap.css";

@Component({
selector: 'app_home',
templateUrl:'./app_home.components.html',
styleUrls:['./app_home.components.css']
})

export class app_home_class{

    
    name= new AppComponent
    nummber=6

    element=''

     worker = new Worker('dsad')

amindi=[]
    // @ViewChild('element') element:ElementRef
//  @Input('sr') ser_element=''
//  @Input() tp_find=[]
//  @Output() baind_revers =new EventEmitter()
 
//  @Input() click_from_parent=new EventEmitter()

//  @Output() out_test= new EventEmitter();
//  @Output() out_test1= new EventEmitter();
//  @HostListener('document.test_1()')

// @Input() element_app:string

 
constructor(){    


}

// element_1(){
// console.log(this.element.nativeElement.value)
// }


worker_click(){
    window.alert('clicked')
    this.worker.onmessage=function(e){
        window.alert(e)
    }
}

call_parent(){
    window.alert('send sms to parent')
    // this.out_test.emit()
}

 

click_test(){    
    window.alert('send sms from  second button')
    // this.out_test1.emit()

}

// click_emit_2(){
//     window.alert('clicked from parrent')
//     this.click_from_parent.emit()
// }
call_amindi(){

    const api_url1 =`https://api.openweathermap.org/data/2.5/weather?q=${this.amindi}&appid=f08f1352da0d5c1678488841a27cd635`
  async function getISS3(){
            // console.log(api_url1)
           const response = await fetch(api_url1)
            let data_find = await response.json()                       
            
          return data_find        
  }
 getISS3().then(getamindi=>{
    console.log(getamindi)
    console.log(getamindi.name)
    console.log(getamindi.weather[0].description)
    
  console.log(getamindi.clouds.all)
  console.log(getamindi.main.humidity)
  console.log(getamindi.main.temp)
//   this.title=ip.ip

 
 })
}

}