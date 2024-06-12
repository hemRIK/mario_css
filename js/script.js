   const a = document.querySelector('.mario');
   const cano = document.querySelector('.pipe');
   const nuvem = document.querySelector('.nuvem')
   const audiomorreu = document.querySelector("#audiomorreu")
   const audiomoeda = document.querySelector("#moeda")
   var contador = document.querySelector('.contador')
   var pontos = false;
   var contarMaisUm =0 ;
   var incremendoDeVelocidade = 300;
   var contarcinco = 0;
   var velocidadeDoJogo = 1500;

   audiomorreu.style.display = 'none';// esconde o player de audio
   audiomoeda.style.display = 'none';

   cano.style.animation =  `movercano  ${velocidadeDoJogo}ms infinite linear`





   const b = () => // adicionar a função pular a classe mario 
   {

   a.classList.add('pular')

   setTimeout( ()=>{  a.classList.remove('pular')                  },500 )  // remover a função pular a classe mario +  delay





   }


      


   const loop = setInterval(()=>
   {
      
      
      const canoPosicao = cano.offsetLeft; // posição do cano
      const marioPosicao = +window.getComputedStyle(a).bottom.replace('px',''); // posição do mario com repalce por vazio  + convertendo em numero (+)
      const nuvemposicao = +window.getComputedStyle(nuvem).right.replace('px',''); // posição do nuvem com repalce por vazio  + convertendo em numero (+)



      if( canoPosicao <= 120 && canoPosicao>0 && marioPosicao<80)   // se posição do cano for = 120 e o mario nao estiver no ar (altura do pulo = 80)
      {
         cano.style.animation = 'none';          //  animação = 0
         cano.style.left = `${canoPosicao}px`;   // joga o cano na posição atual no loop 


         a.style.animation = 'none';             //  animação = 0
         a.style.bottom = `${marioPosicao}px`;   // joga o mario na posição atual no loop 

         nuvem.style.animation = 'none';          //  animação = 0
         nuvem.style.right = `${nuvemposicao}px`; // joga a nuvem na posição atual no loop 
         
         a.src = "img/game-over.png";     // troca a imagem do mario por imagem de game over 
         a.style.width = '75px';
         a.style.marginLeft ='50px';
         
         audiomorreu.play();

         clearInterval(loop);
         
      }

         if (canoPosicao< 0 &&pontos == false)    //contador
         { 




           //função contar 5 canos pulados e incremenda velocidade 
            contarcinco++;            //quantas vezes pulou
                        
               contador.innerHTML = contarMaisUm ; //numero de canos pulados na tela 
               
               contarMaisUm++; //soma um cano pulado
               if(contarMaisUm==6)
                  {
                  contarMaisUm = 0;
                  velocidadeDoJogo-=incremendoDeVelocidade;
                  cano.style.animation =  `movercano  ${velocidadeDoJogo}ms infinite linear`

               
                  }
               audiomoeda.playbackRate = 7; // tempo do audio do pulo
               audiomoeda.play();        // play audio
               
               pontos = true;  
               
         
               
            }

      
         if( canoPosicao> 0 && pontos == true)

         
         {

            pontos =  false


         }

   } ,10)



   document.addEventListener('keydown',b);  // listener que executa a função b ao ser presionada qualquer tecla
   document.addEventListener('touchend',b);