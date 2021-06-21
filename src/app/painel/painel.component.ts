import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    public frases:Frase[] =FRASES
    public instrucao:string ="Traduza a frase:"
    public resposta:string =""
    public rodada:number = 0
    public rodadaFrase:Frase 
    public progresso:number = 0
    public tentativas:number = 3
   @Output() public finalizar: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit(): void {
    console.log('rodada frase ',this.frases)
  }

 public  atualizaResposta(event:Event):void{
   this.resposta = (<HTMLInputElement>event.target).value
   console.log( 'frase -> ', this.rodadaFrase.frasePt)
  }
 
  public verificarResposta():void{
   // console.log( 'Verificar resposta -> ', this.resposta)
  
    if(this.rodadaFrase.frasePt == this.resposta){
       
      if(this.rodada === this.frases.length -1){
      //  alert("parabens")
        this.finalizar.emit('vitoria')
      }
          //alterar pergunta da rodada
          this.rodada++
            ///atera a frase na tela 
            this.rodadaFrase = this.frases[this.rodada]
        //atualizado a barra de progresso
        this.progresso = this.progresso + (100/this.frases.length)
        
    
      
        //limpar imput texto
        this.resposta =''
    }else{
     
      this.tentativas--
      console.log(this.tentativas)
      if( this.tentativas === -1) {
        
       // alert("Fim de Jogo voce perdeu!")
        this.finalizar.emit( 'derrota')
      }
        ///atera a frase na tela 
        this.rodadaFrase = this.frases[this.rodada]
        //limpar imput texto
        this.resposta =''
    }

      
 
   

  }


}
