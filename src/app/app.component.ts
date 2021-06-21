import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  public title:string = 'quiz'
  public jogoStatus:boolean = true
  public msg:string =""
  public alertColor:string = "alert-success"
  public encerramento:string = ""

  public finalizar(tipo:string):void{
    console.log(tipo)
    this.encerramento =tipo
    if(tipo ==='derrota'){
      this.msg = "Voce perdeu o Jogo"
      this.alertColor="alert-danger"
      this.jogoStatus =false
    }else{
      this.msg = "Parabens!!"
      this.alertColor="alert-success"
      this.jogoStatus =false
    }
  }

  public reiniciar():void{

    this.encerramento = ""
    this.jogoStatus = true

  }


}
